<script lang="ts">
  let { children } = $props();

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Player Registration', href: '/register/player' },
    { label: 'Program Registration', href: '/register/program' },
    { label: 'Coach Registration', href: '/register/coach' }
  ];
</script>

<main>
  {@render children()}
</main>

<footer class="site-footer" aria-label="Site footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <img src="/fliGolf_rwb-01.png" alt="FGL Youth logo" />
      <div class="footer-brand-copy">
        <strong>FGL Youth Development</strong>
        <p>Youth disc golf tools for programs, registration, and player growth.</p>
      </div>
    </div>

    <nav class="footer-nav" aria-label="Footer links">
      {#each footerLinks as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </nav>

    <p class="footer-note">Built for clubs, schools, families, and staff who want a cleaner registration flow.</p>
  </div>
</footer>

<style>
  main {
    min-height: calc(100vh - 1px);
  }

  .site-footer {
    border-top: 1px solid rgba(148, 163, 184, 0.14);
    background: rgba(2, 6, 23, 0.88);
    backdrop-filter: blur(18px);
    color: #cbd5e1;
  }

  .footer-inner {
    max-width: 1160px;
    margin: 0 auto;
    padding: 1.1rem 1.5rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 0.92rem;
  }

  .footer-brand,
  .footer-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .footer-brand img {
    width: 72px;
    height: auto;
    display: block;
  }

  .footer-brand-copy {
    display: grid;
    gap: 0.15rem;
  }

  .footer-brand strong {
    display: block;
    color: #f8fafc;
    font-size: 0.98rem;
  }

  .footer-brand p,
  .footer-note {
    margin: 0;
    line-height: 1.4;
    font-size: 0.9rem;
  }

  .footer-nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .footer-nav a {
    display: inline-flex;
    align-items: center;
    color: #e2e8f0;
    text-decoration: none;
    font-weight: 700;
    padding: 0.45rem 0.75rem;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.12);
    border: 1px solid rgba(148, 163, 184, 0.16);
  }

  .footer-nav a:hover {
    color: #f8fafc;
    background: rgba(148, 163, 184, 0.18);
  }

  .footer-note {
    max-width: 28rem;
    text-align: right;
  }

  @media (max-width: 860px) {
    .footer-inner {
      justify-content: center;
      text-align: center;
    }

    .footer-brand {
      justify-content: center;
      flex-direction: column;
      gap: 0.75rem;
    }

    .footer-note {
      text-align: center;
    }

    .footer-nav {
      justify-content: center;
    }
  }
</style>
