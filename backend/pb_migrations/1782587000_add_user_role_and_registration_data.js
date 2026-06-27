/// <reference path="../pb_data/types.d.ts" />

migrate((app) => {
  const users = app.findCollectionByNameOrId("users");

  users.fields.add(
    new SelectField({
      name: "role",
      required: true,
      values: ["player", "program_director", "coach"],
    }),
    new TextField({
      name: "registrationData",
      required: false,
    }),
  );

  app.save(users);
}, (app) => {
  const users = app.findCollectionByNameOrId("users");

  users.fields.removeByName("role");
  users.fields.removeByName("registrationData");

  app.save(users);
});
