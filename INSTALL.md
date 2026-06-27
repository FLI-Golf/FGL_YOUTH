# FGL_YOUTH Install Guide

This guide gets the FGL Youth Development starter app running with GitHub Codespaces, Railway, Netlify, SvelteKit, and PocketBase.

## 1. Create the GitHub repo

Create a new GitHub repository named:

```txt
FGL_YOUTH
```

Suggested repo description:

```txt
FGL Youth Development and FLIHub starter platform built with SvelteKit, PocketBase, Railway, and Netlify for youth disc golf programs, player profiles, badges, certifications, statistics, and curriculum tracking.
```

## 2. Upload this starter project

From your computer, unzip this project folder and push it to GitHub:

```bash
git init
git add .
git commit -m "Initial FGL_YOUTH starter"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/FGL_YOUTH.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## 3. Open in GitHub Codespaces

1. Go to the `FGL_YOUTH` repo on GitHub.
2. Click **Code**.
3. Click **Codespaces**.
4. Click **Create codespace on main**.

Codespaces will install the frontend dependencies automatically.

## 4. Run PocketBase locally

Inside the Codespace terminal, run:

```bash
docker compose up --build
```

PocketBase will run at:

```txt
http://localhost:8090
```

Open the forwarded port in Codespaces and create your first PocketBase admin account.

## 5. Run the SvelteKit frontend locally

Open a second terminal in Codespaces:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

The frontend uses this variable to connect to PocketBase locally:

```txt
PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
```

SvelteKit will run at:

```txt
http://localhost:5173
```

## 6. Create the first PocketBase collections

In the PocketBase admin panel, create these starting collections:

### organizations

Fields:

- name: text, required
- organizationType: select, options: school, boys_girls_club, recreation, community, youth_org
- city: text
- state: text
- status: select, options: pending, active, inactive

### participants

Fields:

- firstName: text, required
- lastName: text, required
- division: select, options: fli_trap, junior_stadium, stadium
- organization: relation to organizations, required
- graduationYear: number
- active: bool

### seasons

Fields:

- name: text, required
- organization: relation to organizations, required
- startDate: date
- endDate: date
- status: select, options: planning, active, completed, archived

### badges

Fields:

- name: text, required
- category: select, options: participation, skill, leadership, innovation
- level: number
- description: editor

### participant_badges

Fields:

- participant: relation to participants, required
- badge: relation to badges, required
- awardedAt: date
- awardedBy: relation to users
- notes: editor

### certifications

Fields:

- name: text, required
- category: select, options: rules, safety, statistician, course_design, mentor, program_assistant
- expiresAfterMonths: number
- description: editor

### participant_certifications

Fields:

- participant: relation to participants, required
- certification: relation to certifications, required
- issuedAt: date
- expiresAt: date
- status: select, options: active, expired, revoked

## 7. Export PocketBase migrations

After creating collections in the UI, export migrations so they live in the repo:

```bash
docker compose exec pocketbase pocketbase migrate collections --dir=/pb/pb_data --migrationsDir=/pb/pb_migrations
```

Then commit them:

```bash
git add backend/pb_migrations
git commit -m "Add PocketBase schema migrations"
git push
```

## 8. Deploy PocketBase backend to Railway

1. Go to Railway.
2. Create a new project.
3. Choose **Deploy from GitHub repo**.
4. Select `FGL_YOUTH`.
5. Railway should detect the root `Dockerfile`.
6. Deploy the service.

Railway provides the `PORT` environment variable automatically. The Dockerfile is already set to bind PocketBase to `0.0.0.0:${PORT}`.

After deploy, open the Railway app URL and create your production PocketBase admin account.

Important: add a persistent Railway volume mounted at:

```txt
/pb/pb_data
```

Without a persistent volume, PocketBase data can be lost during redeploys.

## 9. Deploy the frontend to Netlify

1. Go to Netlify.
2. Add new site from Git.
3. Choose GitHub and select `FGL_YOUTH`.
4. Use these build settings:

```txt
Base directory: frontend
Build command: npm run build
Publish directory: frontend/build
```

5. Add this Netlify environment variable:

```txt
PUBLIC_POCKETBASE_URL=https://YOUR-RAILWAY-POCKETBASE-URL
```

6. Deploy the site.

## 10. Local development workflow

Start PocketBase:

```bash
docker compose up
```

Start frontend:

```bash
cd frontend
npm run dev
```

Commit changes:

```bash
git add .
git commit -m "Describe your change"
git push
```

Railway redeploys the backend from GitHub. Netlify redeploys the frontend from GitHub.

## 11. Recommended next build order

1. Authentication
2. Organization dashboard
3. Participant profiles
4. Parent links
5. Program Director dashboard
6. Season setup
7. Attendance tracking
8. Badge awards
9. Certification tracking
10. Statistics entry
11. Curriculum week pages
12. Reports and exports

## 12. OOP-style coding pattern

Keep Svelte files focused on display. Put business logic in TypeScript classes:

```txt
frontend/src/lib/models
frontend/src/lib/services
frontend/src/lib/stores
```

Example:

```txt
Participant model = data shape and helper methods
ParticipantService = PocketBase database operations
Svelte page = UI only
```

That keeps the app easier to understand as FLIHub grows.
