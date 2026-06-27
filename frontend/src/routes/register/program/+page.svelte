<script lang="ts">
  import { registerUser, type RegistrationRole } from '$lib/services/RegistrationService';

  const accountRole: RegistrationRole = 'program_director';

  let submitting = false;
  let feedback = '';
  let feedbackTone: 'success' | 'error' | '' = '';

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const password = String(formData.get('password') ?? '');
    const passwordConfirm = String(formData.get('passwordConfirm') ?? '');

    feedback = '';
    feedbackTone = '';

    if (password !== passwordConfirm) {
      feedback = 'Passwords do not match.';
      feedbackTone = 'error';
      return;
    }

    const programName = String(formData.get('programName') ?? '').trim();
    const email = String(formData.get('contactEmail') ?? '').trim();

    submitting = true;

    try {
      await registerUser({
        role: accountRole,
        name: programName,
        email,
        password,
        passwordConfirm,
        registrationData: {
          programName,
          organizationType: String(formData.get('organizationType') ?? ''),
          seasonStart: String(formData.get('seasonStart') ?? ''),
          seasonEnd: String(formData.get('seasonEnd') ?? ''),
          contactName: String(formData.get('contactName') ?? ''),
          contactPhone: String(formData.get('contactPhone') ?? ''),
          participantCount: String(formData.get('participantCount') ?? ''),
          goals: String(formData.get('goals') ?? '')
        }
      });

      form.reset();
      feedback = 'Program registration submitted successfully.';
      feedbackTone = 'success';
    } catch (error) {
      feedback = error instanceof Error ? error.message : 'Unable to submit program registration.';
      feedbackTone = 'error';
    } finally {
      submitting = false;
    }
  }
</script>

<svelte:head>
  <title>Program Registration | FGL_YOUTH</title>
  <meta name="description" content="Register a new youth disc golf program." />
</svelte:head>

<section class="page">
  <div class="header-card">
    <div class="header-top">
      <div class="header-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="presentation" focusable="false">
          <path d="M4 20V8l8-4 8 4v12H4Zm4-2h8v-6H8v6Zm2-8h4V8h-4v2Z" />
        </svg>
      </div>
      <div>
        <p class="eyebrow">Registration</p>
        <h1>Program Registration</h1>
      </div>
    </div>
    <p class="role-pill">Account role: Program director</p>
    <p class="lede">
      Set up the organization, season details, and logistics for a club or school program.
    </p>
  </div>

  <form class="form-card" on:submit={handleSubmit}>
    <div class="form-grid">
      <label class="full-width">
        <span>Program name</span>
        <input type="text" name="programName" required />
      </label>
      <label>
        <span>Organization type</span>
        <select name="organizationType" required>
          <option value="">Select one</option>
          <option>Club</option>
          <option>School</option>
          <option>Community center</option>
          <option>Park district</option>
        </select>
      </label>
      <label>
        <span>Season start</span>
        <input type="date" name="seasonStart" required />
      </label>
      <label>
        <span>Season end</span>
        <input type="date" name="seasonEnd" required />
      </label>
      <label>
        <span>Primary contact</span>
        <input type="text" name="contactName" autocomplete="name" required />
      </label>
      <label>
        <span>Contact email</span>
        <input type="email" name="contactEmail" autocomplete="email" required />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" autocomplete="new-password" minlength="8" required />
      </label>
      <label>
        <span>Confirm password</span>
        <input type="password" name="passwordConfirm" autocomplete="new-password" minlength="8" required />
      </label>
      <label>
        <span>Contact phone</span>
        <input type="tel" name="contactPhone" autocomplete="tel" />
      </label>
      <label>
        <span>Expected participants</span>
        <input type="number" name="participantCount" min="0" step="1" />
      </label>
      <label class="full-width">
        <span>Program goals</span>
        <textarea name="goals" rows="4" placeholder="Describe age groups, days, locations, or training goals"></textarea>
      </label>
    </div>

    {#if feedback}
      <p class={`feedback ${feedbackTone}`}>{feedback}</p>
    {/if}

    <div class="actions">
      <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit program registration'}</button>
      <a class="back" href="/">Back to home</a>
    </div>
  </form>
</section>

<style>
  :global(body) {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(180deg, #050816 0%, #0f172a 100%);
    color: #f8fafc;
  }

  .page {
    max-width: 920px;
    margin: 0 auto;
    padding: 5rem 1.5rem 4rem;
  }

  .header-card,
  .form-card {
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.96));
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 1.4rem;
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.26);
  }

  .header-card {
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .header-top {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .header-icon {
    width: 3rem;
    height: 3rem;
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    border-radius: 0.9rem;
    background: linear-gradient(135deg, #38bdf8, #1d4ed8);
    box-shadow: 0 12px 24px rgba(56, 189, 248, 0.22);
    color: #fff;
  }

  .header-icon svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.9;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .form-card {
    padding: 1.5rem;
  }

  .eyebrow {
    margin: 0 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #93c5fd;
    font-weight: 700;
    font-size: 0.8rem;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.5rem, 6vw, 4.25rem);
    line-height: 0.95;
  }

  .lede {
    margin: 0.85rem 0 0;
    color: #cbd5e1;
    line-height: 1.7;
    max-width: 44rem;
  }

  .role-pill {
    display: inline-flex;
    margin: 0.9rem 0 0;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.14);
    border: 1px solid rgba(56, 189, 248, 0.22);
    color: #bae6fd;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  label {
    display: grid;
    gap: 0.45rem;
  }

  label span {
    font-size: 0.9rem;
    font-weight: 700;
    color: #e2e8f0;
  }

  input,
  select,
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 0.9rem;
    background: rgba(15, 23, 42, 0.75);
    color: #f8fafc;
    padding: 0.9rem 1rem;
    font: inherit;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: 2px solid #38bdf8;
    outline-offset: 2px;
  }

  .full-width {
    grid-column: 1 / -1;
  }

  .actions {
    margin-top: 1.25rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    align-items: center;
  }

  .feedback {
    margin: 1rem 0 0;
    padding: 0.85rem 1rem;
    border-radius: 0.9rem;
    border: 1px solid rgba(148, 163, 184, 0.16);
    background: rgba(15, 23, 42, 0.58);
    color: #cbd5e1;
  }

  .feedback.success {
    border-color: rgba(34, 197, 94, 0.28);
    background: rgba(22, 101, 52, 0.22);
    color: #bbf7d0;
  }

  .feedback.error {
    border-color: rgba(239, 68, 68, 0.28);
    background: rgba(127, 29, 29, 0.22);
    color: #fecaca;
  }

  button,
  .back {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 1.15rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 700;
    border: 0;
    cursor: pointer;
  }

  button {
    color: #f8fafc;
    background: linear-gradient(135deg, #b91c1c, #1d4ed8);
    box-shadow: 0 14px 30px rgba(185, 28, 28, 0.25);
  }

  button:disabled {
    opacity: 0.7;
    cursor: progress;
  }

  .back {
    color: #e2e8f0;
    border: 1px solid rgba(148, 163, 184, 0.18);
    background: rgba(15, 23, 42, 0.58);
  }

  @media (max-width: 720px) {
    .header-top {
      flex-direction: column;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }
  }
</style>