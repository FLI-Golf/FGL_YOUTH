<script lang="ts">
  import { registerUser, type RegistrationRole } from '$lib/services/RegistrationService';

  const accountRole: RegistrationRole = 'coach';

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

    const firstName = String(formData.get('firstName') ?? '').trim();
    const lastName = String(formData.get('lastName') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const name = [firstName, lastName].filter(Boolean).join(' ');

    submitting = true;

    try {
      await registerUser({
        role: accountRole,
        name,
        email,
        password,
        passwordConfirm,
        registrationData: {
          firstName,
          lastName,
          coachType: String(formData.get('coachType') ?? ''),
          phone: String(formData.get('phone') ?? ''),
          organization: String(formData.get('organization') ?? ''),
          certificationStatus: String(formData.get('certificationStatus') ?? ''),
          notes: String(formData.get('notes') ?? '')
        }
      });

      form.reset();
      feedback = 'Coach registration submitted successfully.';
      feedbackTone = 'success';
    } catch (error) {
      feedback = error instanceof Error ? error.message : 'Unable to submit coach registration.';
      feedbackTone = 'error';
    } finally {
      submitting = false;
    }
  }
</script>

<svelte:head>
  <title>Coach Registration | FGL_YOUTH</title>
  <meta name="description" content="Register a coach, director, or volunteer." />
</svelte:head>

<section class="page">
  <div class="header-card">
    <div class="header-top">
      <div class="header-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="presentation" focusable="false">
          <path d="M12 2 1 7v2h22V7L12 2Zm-7 9h3v9H5v-9Zm5 0h4v9h-4v-9Zm6 0h3v9h-3v-9ZM2 22h20v-2H2v2Z" />
        </svg>
      </div>
      <div>
        <p class="eyebrow">Registration</p>
        <h1>Coach Registration</h1>
      </div>
    </div>
    <p class="role-pill">Account role: Coach</p>
    <p class="lede">
      Add coaches, directors, and volunteers so your staff roster stays organized.
    </p>
  </div>

  <form class="form-card" on:submit={handleSubmit}>
    <div class="form-grid">
      <label>
        <span>First name</span>
        <input type="text" name="firstName" autocomplete="given-name" required />
      </label>
      <label>
        <span>Last name</span>
        <input type="text" name="lastName" autocomplete="family-name" required />
      </label>
      <label class="full-width">
        <span>Coach type</span>
        <select name="coachType" required>
          <option value="">Select one</option>
          <option>Coach</option>
          <option>Program director</option>
          <option>Volunteer</option>
          <option>Assistant coach</option>
        </select>
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" autocomplete="email" required />
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
        <span>Phone</span>
        <input type="tel" name="phone" autocomplete="tel" />
      </label>
      <label>
        <span>Organization</span>
        <input type="text" name="organization" required />
      </label>
      <label>
        <span>Certification status</span>
        <select name="certificationStatus">
          <option value="">Select one</option>
          <option>Current</option>
          <option>Pending</option>
          <option>Not required</option>
        </select>
      </label>
      <label class="full-width">
        <span>Notes</span>
        <textarea name="notes" rows="4" placeholder="Availability, experience, or other staff details"></textarea>
      </label>
    </div>

    {#if feedback}
      <p class={`feedback ${feedbackTone}`}>{feedback}</p>
    {/if}

    <div class="actions">
      <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit coach registration'}</button>
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
    background: linear-gradient(135deg, #f59e0b, #f97316);
    box-shadow: 0 12px 24px rgba(245, 158, 11, 0.22);
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
    color: #f59e0b;
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
    background: rgba(245, 158, 11, 0.14);
    border: 1px solid rgba(245, 158, 11, 0.22);
    color: #fde68a;
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