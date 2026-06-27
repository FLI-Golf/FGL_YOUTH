/// <reference path="../pb_data/types.d.ts" />

migrate((app) => {
  const users = app.findCollectionByNameOrId("users");

  const organizations = new Collection({
    name: "organizations",
    type: "base",
  });
  organizations.fields.add(
    new TextField({ name: "name", required: true }),
    new SelectField({
      name: "organizationType",
      values: ["school", "boys_girls_club", "recreation", "community", "youth_org"],
    }),
    new TextField({ name: "city" }),
    new TextField({ name: "state" }),
    new SelectField({
      name: "status",
      values: ["pending", "active", "inactive"],
    }),
  );
  app.save(organizations);

  const participants = new Collection({
    name: "participants",
    type: "base",
  });
  participants.fields.add(
    new TextField({ name: "firstName", required: true }),
    new TextField({ name: "lastName", required: true }),
    new SelectField({
      name: "division",
      values: ["fli_trap", "junior_stadium", "stadium"],
    }),
    new RelationField({
      name: "organization",
      collectionId: organizations.id,
      required: true,
      maxSelect: 1,
    }),
    new NumberField({ name: "graduationYear" }),
    new BoolField({ name: "active" }),
  );
  app.save(participants);

  const seasons = new Collection({
    name: "seasons",
    type: "base",
  });
  seasons.fields.add(
    new TextField({ name: "name", required: true }),
    new RelationField({
      name: "organization",
      collectionId: organizations.id,
      required: true,
      maxSelect: 1,
    }),
    new DateField({ name: "startDate" }),
    new DateField({ name: "endDate" }),
    new SelectField({
      name: "status",
      values: ["planning", "active", "completed", "archived"],
    }),
  );
  app.save(seasons);

  const badges = new Collection({
    name: "badges",
    type: "base",
  });
  badges.fields.add(
    new TextField({ name: "name", required: true }),
    new SelectField({
      name: "category",
      values: ["participation", "skill", "leadership", "innovation"],
    }),
    new NumberField({ name: "level" }),
    new EditorField({ name: "description" }),
  );
  app.save(badges);

  const participantBadges = new Collection({
    name: "participant_badges",
    type: "base",
  });
  participantBadges.fields.add(
    new RelationField({
      name: "participant",
      collectionId: participants.id,
      required: true,
      maxSelect: 1,
    }),
    new RelationField({
      name: "badge",
      collectionId: badges.id,
      required: true,
      maxSelect: 1,
    }),
    new DateField({ name: "awardedAt" }),
    new RelationField({
      name: "awardedBy",
      collectionId: users.id,
      maxSelect: 1,
    }),
    new EditorField({ name: "notes" }),
  );
  app.save(participantBadges);

  const certifications = new Collection({
    name: "certifications",
    type: "base",
  });
  certifications.fields.add(
    new TextField({ name: "name", required: true }),
    new SelectField({
      name: "category",
      values: ["rules", "safety", "statistician", "course_design", "mentor", "program_assistant"],
    }),
    new NumberField({ name: "expiresAfterMonths" }),
    new EditorField({ name: "description" }),
  );
  app.save(certifications);

  const participantCertifications = new Collection({
    name: "participant_certifications",
    type: "base",
  });
  participantCertifications.fields.add(
    new RelationField({
      name: "participant",
      collectionId: participants.id,
      required: true,
      maxSelect: 1,
    }),
    new RelationField({
      name: "certification",
      collectionId: certifications.id,
      required: true,
      maxSelect: 1,
    }),
    new DateField({ name: "issuedAt" }),
    new DateField({ name: "expiresAt" }),
    new SelectField({
      name: "status",
      values: ["active", "expired", "revoked"],
    }),
  );
  app.save(participantCertifications);
}, (app) => {
  const names = [
    "participant_certifications",
    "certifications",
    "participant_badges",
    "badges",
    "seasons",
    "participants",
    "organizations",
  ];

  for (const name of names) {
    try {
      const collection = app.findCollectionByNameOrId(name);
      app.delete(collection);
    } catch (_) {
      // Collection may already be missing; ignore for idempotent rollback.
    }
  }
});
