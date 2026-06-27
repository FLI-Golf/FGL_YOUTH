<script lang="ts">
  import { onMount } from 'svelte';
  import { pb } from '$lib/pb';

  const navLinks = [
    { label: 'Programs', href: '#programs', icon: 'M4 20V8l8-4 8 4v12H4Zm4-2h8v-6H8v6Z' },
    { label: 'Registration', href: '#registration', icon: 'M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z' },
    { label: 'Features', href: '#features', icon: 'M4 4h16v3H4V4Zm0 6h10v3H4v-3Zm0 6h16v3H4v-3Z' }
  ];

  const registrationLinks = [
    {
      title: 'Player Registration',
      description: 'Create a participant profile and join a youth program.',
      href: '/register/player',
      accent: 'red',
      color: '#f97316',
      icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8v-2a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v2h14Z'
    },
    {
      title: 'Program Registration',
      description: 'Set up a new club, season, or community program.',
      href: '/register/program',
      accent: 'blue',
      color: '#38bdf8',
      icon: 'M4 20V8l8-4 8 4v12H4Zm4-2h8v-6H8v6Zm2-8h4V8h-4v2Z'
    },
    {
      title: 'Coach Registration',
      description: 'Add a coach, director, or volunteer to your staff.',
      href: '/register/coach',
      accent: 'gold',
      color: '#f59e0b',
      icon: 'M12 2 1 7v2h22V7L12 2Zm-7 9h3v9H5v-9Zm5 0h4v9h-4v-9Zm6 0h3v9h-3v-9ZM2 22h20v-2H2v2Z'
    }
  ];

  const statCards = [
    {
      value: '10+',
      label: 'core modules',
      color: '#f97316',
      icon: 'M4 19h16v2H2V3h2v16Zm3-2V8h3v9H7Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z'
    },
    {
      value: '3',
      label: 'registration paths',
      color: '#38bdf8',
      icon: 'M6 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
    },
    {
      value: '1',
      label: 'clean dashboard flow',
      color: '#f59e0b',
      icon: 'M5 3h14a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z'
    }
  ];

  const modules = [
    {
      title: 'Organizations',
      description: 'Keep clubs, schools, and community partners organized.',
      color: '#f97316',
      icon: 'M4 20V8l8-4 8 4v12H4Zm4-2h8v-6H8v6Zm2-8h4V8h-4v2Z'
    },
    {
      title: 'Participants',
      description: 'Track player profiles, status, and progress across programs.',
      color: '#22c55e',
      icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8v-2a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v2h14Z'
    },
    {
      title: 'Parents',
      description: 'Stay connected with guardians and family communication.',
      color: '#ec4899',
      icon: 'M16 11a4 4 0 1 0-3.5-5.94A4 4 0 0 0 16 11ZM8 12a3 3 0 1 0-2.6-4.5A3 3 0 0 0 8 12Zm8 1c-2.42 0-4.5 1.34-5.5 3.28A6 6 0 0 1 16 17h6v-1a3 3 0 0 0-3-3h-1ZM8 14c-2.76 0-5 1.79-5 4v1h6.5a6 6 0 0 1 2.1-3.62A5.5 5.5 0 0 0 8 14Z'
    },
    {
      title: 'Program Directors',
      description: 'Manage staff roles, scheduling, and day-to-day operations.',
      color: '#38bdf8',
      icon: 'M12 2 1 7v2h22V7L12 2Zm-7 9h3v9H5v-9Zm5 0h4v9h-4v-9Zm6 0h3v9h-3v-9ZM2 22h20v-2H2v2Z'
    },
    {
      title: 'Seasons',
      description: 'Plan session windows, dates, and recurring program cycles.',
      color: '#f59e0b',
      icon: 'M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z'
    },
    {
      title: 'Teams',
      description: 'Group players, coaches, and practice assignments together.',
      color: '#a855f7',
      icon: 'M6 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 10a4 4 0 0 0-4 4v4h4v-4h1.5a6.5 6.5 0 0 1 2.5.5V10H4Zm20 4a4 4 0 0 0-4-4h-4.5v4.5a6.5 6.5 0 0 1 2.5-.5H19v4h5v-4Z'
    },
    {
      title: 'Badges',
      description: 'Celebrate milestones, skills, and achievements visibly.',
      color: '#14b8a6',
      icon: 'M12 2 8 4v5a4 4 0 0 0 8 0V4l-4-2Zm0 12-2.5 1.5.8 2.9L12 17l1.7 1.4.8-2.9L12 14Zm-6 8 6-3 6 3-1.2-6.7A6 6 0 0 1 6 16.3L6 22Z'
    },
    {
      title: 'Certifications',
      description: 'Record completed certifications and coach qualifications.',
      color: '#eab308',
      icon: 'M6 2h9l5 5v15H6V2Zm9 1.5V8h4.5L15 3.5ZM9 12h7v2H9v-2Zm0 4h7v2H9v-2Z'
    },
    {
      title: 'Statistics',
      description: 'Monitor attendance, progress, and program performance.',
      color: '#ef4444',
      icon: 'M4 19h16v2H2V3h2v16Zm3-2V8h3v9H7Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z'
    },
    {
      title: 'Curriculum',
      description: 'Organize lessons, drills, and development paths.',
      color: '#60a5fa',
      icon: 'M5 3h14a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Zm2 4v2h10V7H7Zm0 4v2h10v-2H7Zm0 4v2h6v-2H7Z'
    }
  ];

  let isAuthenticated = pb.authStore.isValid;

  onMount(() => {
    const unsubscribe = pb.authStore.onChange(() => {
      isAuthenticated = pb.authStore.isValid;
    }, true);

    return () => unsubscribe();
  });
</script>

<svelte:head>
  <title>FGL_YOUTH</title>
  <meta name="description" content="FGL Youth Development and FLIHub starter app" />
</svelte:head>

<div class="page-shell">
  <div class="ambient-icons" aria-hidden="true">
    <svg class="ambient-icon ambient-icon-1" viewBox="0 0 24 24" focusable="false">
      <path d={modules[0].icon} />
    </svg>
    <svg class="ambient-icon ambient-icon-2" viewBox="0 0 24 24" focusable="false">
      <path d={modules[2].icon} />
    </svg>
    <svg class="ambient-icon ambient-icon-3" viewBox="0 0 24 24" focusable="false">
      <path d={modules[5].icon} />
    </svg>
    <svg class="ambient-icon ambient-icon-4" viewBox="0 0 24 24" focusable="false">
      <path d={registrationLinks[1].icon} />
    </svg>
  </div>

  <header class="topbar">
    <a class="brand" href="/" aria-label="FGL Youth home">
      <img class="brand-logo" src="/fliGolf_rwb-01.png" alt="FGL Youth logo" />
    </a>

    <nav class="nav" aria-label="Primary">
      {#each navLinks as link}
        <a href={link.href}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d={link.icon} />
          </svg>
          <span>{link.label}</span>
        </a>
      {/each}
    </nav>

    <a class="topbar-cta" href="#registration">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2v20m-8-8h16" />
      </svg>
      <span>Register Now</span>
    </a>
  </header>

  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">FGL Youth Development</p>
      <h1>EVERY KID CAN FLI</h1>
      <p>
        A modern youth disc golf platform for programs, registrations, participant profiles,
        badges, certifications, statistics, curriculum tracking, and day-to-day administration.
      </p>

      <div class="hero-actions">
        <a class="primary-action" href="#registration">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 5v14m-7-7h14" />
          </svg>
          <span>Start Registration</span>
        </a>
        <a class="secondary-action" href="#programs">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M4 12h10m-4-4 4 4-4 4M4 5h16v14H4z" />
          </svg>
          <span>Explore Features</span>
        </a>
      </div>

    </div>

    <aside class="hero-panel" aria-label="Registration preview">
      <div class="hero-card hero-card-primary">
        <div class="hero-card-watermark" aria-hidden="true" style={`--watermark-color: ${registrationLinks[0].color};`}>
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d={registrationLinks[0].icon} />
          </svg>
        </div>
        <span class="registration-badge hero-badge">Open now</span>
        <div class="registration-icon hero-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="presentation" focusable="false">
            <path d="M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z" />
          </svg>
        </div>
        <h3>Season registration</h3>
        <p>Make enrollment simple for players, families, and staff.</p>
      </div>
      <div class="hero-card hero-card-secondary">
        <div class="hero-card-watermark hero-card-watermark-secondary" aria-hidden="true" style={`--watermark-color: ${statCards[1].color};`}>
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d={statCards[1].icon} />
          </svg>
        </div>
        <span class="registration-badge hero-badge">Built to grow</span>
        <div class="registration-icon hero-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="presentation" focusable="false">
            <path d="M4 19h16v2H2V3h2v16Zm3-2V8h3v9H7Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z" />
          </svg>
        </div>
        <h3>Modern program stack</h3>
        <p>Track participants, teams, certifications, and progress in one place.</p>
      </div>
    </aside>
  </section>

  <section class="section-heading" id="registration">
    <p class="eyebrow">Registration</p>
    <h2>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z" />
      </svg>
      <span>Fast links for the most common signups.</span>
    </h2>
  </section>

  <section class="registration-grid">
    {#each registrationLinks as item}
      <a class={`registration-card ${item.accent}`} href={item.href} style={`--card-color: ${item.color};`}>
        <div class="registration-card-watermark" aria-hidden="true" style={`--watermark-color: ${item.color};`}>
          <svg viewBox="0 0 24 24" role="presentation" focusable="false">
            <path d={item.icon} />
          </svg>
        </div>
        <span class="registration-badge">Open link</span>
        <div class="registration-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="presentation" focusable="false">
            <path d={item.icon} />
          </svg>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </a>
    {/each}
  </section>

  {#if isAuthenticated}
    <section class="section-heading" id="programs">
      <p class="eyebrow">Features</p>
      <h2>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 4h16v3H4V4Zm0 6h10v3H4v-3Zm0 6h16v3H4v-3Z" />
        </svg>
        <span>Everything the landing page should point people toward.</span>
      </h2>
    </section>

    <section class="grid" id="features">
      {#each modules as module}
        <article class="card" style={`--card-color: ${module.color};`}>
          <div class="card-watermark" aria-hidden="true" style={`--watermark-color: ${module.color};`}>
            <svg viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d={module.icon} />
            </svg>
          </div>
          <div class="card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d={module.icon} />
            </svg>
          </div>
          <h2>{module.title}</h2>
          <p>{module.description}</p>
        </article>
      {/each}
    </section>
  {:else}
    <section class="section-heading" id="programs">
      <p class="eyebrow">Features</p>
      <h2>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M7 2v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-2V2h-2v2H9V2H7Zm12 7H5v10h14V9Z" />
        </svg>
        <span>Sign in to view the internal feature modules.</span>
      </h2>
    </section>
  {/if}
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background:
      radial-gradient(circle at top left, rgba(185, 28, 28, 0.22), transparent 24%),
      radial-gradient(circle at top right, rgba(30, 64, 175, 0.2), transparent 28%),
      linear-gradient(180deg, #050816 0%, #0f172a 40%, #020617 100%);
    color: #e2e8f0;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  .page-shell {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
  }

  .ambient-icons {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .ambient-icon {
    position: absolute;
    width: clamp(10rem, 20vw, 18rem);
    height: auto;
    fill: none;
    stroke: rgba(248, 250, 252, 0.15);
    stroke-width: 1.25;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: blur(0.2px);
    opacity: 0.35;
    transform-origin: center;
    mix-blend-mode: screen;
  }

  .ambient-icon-1 {
    top: 8rem;
    left: -2rem;
    color: #f97316;
    transform: rotate(-14deg);
  }

  .ambient-icon-2 {
    top: 12rem;
    right: 4rem;
    color: #38bdf8;
    width: clamp(8rem, 16vw, 14rem);
    transform: rotate(18deg);
  }

  .ambient-icon-3 {
    bottom: 10rem;
    left: 18%;
    color: #a855f7;
    width: clamp(9rem, 18vw, 15rem);
    transform: rotate(10deg);
  }

  .ambient-icon-4 {
    bottom: 7rem;
    right: -1.5rem;
    color: #f59e0b;
    width: clamp(10rem, 19vw, 16rem);
    transform: rotate(-18deg);
  }

  .page-shell > :not(.ambient-icons) {
    position: relative;
    z-index: 1;
  }

  .page-shell::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.55), transparent 90%);
  }

  .topbar {
    max-width: 1160px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(2, 6, 23, 0.72);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }

  .brand-logo {
    width: 120px;
    height: auto;
    display: block;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    flex-wrap: wrap;
  }

  .nav a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: #cbd5e1;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
  }

  .nav a svg,
  .topbar-cta svg,
  .primary-action svg,
  .secondary-action svg,
  .hero-card-kicker svg,
  .section-heading h2 svg,
  .registration-icon svg,
  .metric-icon svg {
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex: 0 0 auto;
  }

  .nav a:hover {
    color: #f8fafc;
  }

  .topbar-cta,
  .primary-action,
  .secondary-action,
  .registration-card {
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      background 160ms ease,
      box-shadow 160ms ease;
  }

  .topbar-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.8rem 1rem;
    border-radius: 999px;
    text-decoration: none;
    color: #f8fafc;
    font-weight: 700;
    background: linear-gradient(135deg, #b91c1c, #1d4ed8);
    box-shadow: 0 12px 24px rgba(30, 64, 175, 0.28);
    white-space: nowrap;
  }

  .topbar-cta:hover,
  .primary-action:hover,
  .secondary-action:hover,
  .registration-card:hover {
    transform: translateY(-2px);
  }

  .hero {
    max-width: 1160px;
    margin: 0 auto;
    padding: 4.5rem 1.5rem 2.5rem;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.9fr);
    gap: 2rem;
    align-items: center;
  }

  .hero-copy {
    max-width: 760px;
  }

  .hero-copy .eyebrow {
    margin-bottom: 0.5rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #f87171;
    font-weight: 700;
  }

  h1 {
    font-size: clamp(3rem, 8vw, 6rem);
    line-height: 0.95;
    margin: 0.5rem 0 1rem;
    color: #f8fafc;
  }

  .hero p:last-child {
    max-width: 720px;
    color: #cbd5e1;
    font-size: 1.15rem;
    line-height: 1.7;
  }

  .hero-actions {
    display: flex;
    gap: 0.85rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .primary-action,
  .secondary-action {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    text-decoration: none;
    border-radius: 999px;
    padding: 0.9rem 1.2rem;
    font-weight: 700;
  }

  .primary-action {
    color: #f8fafc;
    background: linear-gradient(135deg, #b91c1c, #dc2626);
    box-shadow: 0 14px 30px rgba(185, 28, 28, 0.25);
  }

  .secondary-action {
    color: #e2e8f0;
    border: 1px solid rgba(148, 163, 184, 0.24);
    background: rgba(15, 23, 42, 0.58);
  }

  .registration-icon {
    width: 2.3rem;
    height: 2.3rem;
    display: grid;
    place-items: center;
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(148, 163, 184, 0.14);
    margin-bottom: 0.75rem;
  }

  .registration-icon svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  .hero-panel {
    display: grid;
    gap: 1rem;
  }

  .hero-card {
    display: block;
    position: relative;
    overflow: hidden;
    padding: 1.35rem;
    border-radius: 1.4rem;
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.96));
    border: 1px solid rgba(148, 163, 184, 0.16);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.26);
  }

  .hero-badge {
    margin-bottom: 1rem;
  }

  .hero-icon {
    width: 2.3rem;
    height: 2.3rem;
    margin-bottom: 1rem;
  }

  .hero-card h3 {
    color: #f8fafc;
    font-size: 1.2rem;
    line-height: 1.15;
    margin: 0 0 0.5rem;
  }

  .hero-card p {
    margin: 0;
    color: #cbd5e1;
    line-height: 1.55;
  }

  .hero-card-primary {
    border-top: 4px solid #b91c1c;
  }

  .hero-card-secondary {
    border-top: 4px solid #1d4ed8;
  }

  .section-heading {
    max-width: 1160px;
    margin: 0 auto;
    padding: 1rem 1.5rem 0.5rem;
  }

  .section-heading h2 {
    margin: 0.4rem 0 0;
    color: #f8fafc;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    flex-wrap: wrap;
  }

  .section-heading h2 svg {
    width: 1.2rem;
    height: 1.2rem;
    color: #f87171;
  }

  .hero-actions .secondary-action svg {
    color: #93c5fd;
  }

  .hero-actions .primary-action svg,
  .topbar-cta svg {
    color: #f8fafc;
  }

  .registration-card {
    position: relative;
    overflow: hidden;
  }

  .registration-card::after {
    content: '';
    position: absolute;
    inset: auto -20% -35% auto;
    width: 10rem;
    height: 10rem;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 65%);
    pointer-events: none;
  }

  .registration-grid {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0.5rem 1.5rem 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .registration-card {
    display: block;
    text-decoration: none;
    padding: 1.35rem;
    border-radius: 1.4rem;
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.96));
    border: 1px solid rgba(148, 163, 184, 0.16);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.26);
    color: #f8fafc;
    position: relative;
    overflow: hidden;
  }

  .registration-card.red {
    border-top: 4px solid #f97316;
  }

  .registration-card.blue {
    border-top: 4px solid #38bdf8;
  }

  .registration-card.gold {
    border-top: 4px solid #f59e0b;
  }

  .registration-badge {
    display: inline-flex;
    margin-bottom: 1rem;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    color: #e2e8f0;
    background: rgba(148, 163, 184, 0.12);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .registration-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    position: relative;
    z-index: 1;
  }

  .registration-card p {
    margin: 0;
    color: #cbd5e1;
    line-height: 1.55;
    position: relative;
    z-index: 1;
  }

  .grid {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0.75rem 1.5rem 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .card {
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.94));
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-top: 4px solid var(--card-color, #b91c1c);
    border-radius: 1.25rem;
    padding: 1.25rem;
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(8px);
    position: relative;
    overflow: hidden;
  }

  .card-icon {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    border-radius: 0.9rem;
    background: linear-gradient(135deg, var(--card-color, #b91c1c), #1d4ed8);
    color: white;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  .card-watermark,
  .registration-card-watermark,
  .hero-card-watermark {
    position: absolute;
    inset: auto -1.25rem -1.4rem auto;
    width: 9rem;
    height: 9rem;
    display: grid;
    place-items: center;
    pointer-events: none;
    opacity: 0.15;
    transform: rotate(-12deg);
    filter: blur(0.25px);
    z-index: 0;
  }

  .card-watermark svg,
  .registration-card-watermark svg,
  .hero-card-watermark svg {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: var(--watermark-color, #f8fafc);
    stroke-width: 1.3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .hero-card > :not(.hero-card-watermark),
  .registration-card > :not(.registration-card-watermark),
  .card > :not(.card-watermark) {
    position: relative;
    z-index: 1;
  }

  .registration-card-watermark {
    inset: auto -1.15rem -1.3rem auto;
    width: 10rem;
    height: 10rem;
    opacity: 0.14;
  }

  .hero-card-watermark {
    inset: -0.8rem -0.6rem auto auto;
    width: 11rem;
    height: 11rem;
    opacity: 0.14;
    transform: rotate(12deg);
  }

  .hero-card-watermark-secondary {
    inset: auto -0.8rem -0.6rem auto;
    transform: rotate(-10deg);
  }

  .card-icon svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .card h2 {
    margin: 0 0 0.5rem;
    font-size: 1.05rem;
    color: #f8fafc;
  }

  .card p {
    margin: 0;
    color: #cbd5e1;
    line-height: 1.5;
  }

  @media (max-width: 860px) {
    .topbar {
      flex-wrap: wrap;
      justify-content: center;
    }

    .nav {
      justify-content: center;
    }

    .hero {
      grid-template-columns: 1fr;
      padding-top: 3rem;
    }

    .hero-metrics {
      grid-template-columns: 1fr;
    }
  }
</style>
