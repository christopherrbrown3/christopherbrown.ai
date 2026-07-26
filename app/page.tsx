const services = [
  {
    mark: "{ }",
    title: "Custom software",
    copy: "Web applications, internal tools, and customer portals built around your business.",
  },
  {
    mark: "↔",
    title: "Software integration",
    copy: "Connect the software you already use so information moves where it needs to go.",
  },
  {
    mark: "↻",
    title: "Workflow automation",
    copy: "Reduce repetitive administrative work, duplicate entry, and manual handoffs.",
  },
  {
    mark: "+",
    title: "Hosting and support",
    copy: "Reliable hosting, maintenance, monitoring, and improvements after launch.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="christopherbrown.ai home">
            christopherbrown<span>.ai</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#preview">Private preview</a>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Navigation menu"><span>Menu</span><i aria-hidden="true" /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#preview">Private preview</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="preview-status"><span aria-hidden="true" /> Private preview</p>
              <h1>Software built for your business.</h1>
              <p className="hero-lede">Practical custom software, integrations, and support for small businesses across Washington, DC, Northern Virginia, and Maryland.</p>
              <a className="text-link" href="#services">View services <span aria-hidden="true">↓</span></a>
            </div>

            <div className="brand-graphic" aria-label="Custom software, integrations, and support">
              <div className="graphic-top">
                <span>Local software company</span>
                <span>DMV</span>
              </div>
              <div className="graphic-words">
                <span>BUILD</span>
                <span>CONNECT</span>
                <span>SUPPORT</span>
              </div>
              <div className="graphic-line" aria-hidden="true"><i /><i /><i /></div>
              <p>Practical tools for small businesses.</p>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container services-heading">
            <h2>What we do.</h2>
            <p>Clear, dependable software without unnecessary complexity.</p>
          </div>
          <div className="container services-list">
            {services.map((service) => (
              <article key={service.title}>
                <span className="service-mark" aria-hidden="true">{service.mark}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="credibility-section" aria-label="Why christopherbrown.ai">
          <div className="container credibility-grid">
            <article><h2>Local.</h2><p>Based in Northern Virginia and focused on businesses across the DMV.</p></article>
            <article><h2>Direct.</h2><p>You work with the person responsible for building and supporting the software.</p></article>
            <article><h2>Practical.</h2><p>Technology is selected because it solves the problem—not because it is fashionable.</p></article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-layout">
            <div>
              <p className="section-label">About christopherbrown.ai</p>
              <h2>Professional software. Personal service.</h2>
            </div>
            <div className="about-copy">
              <p>christopherbrown.ai is a local software company that builds practical tools for small businesses.</p>
              <p>Founded by Christopher Brown, the company brings more than a decade of experience helping organizations operate reliable software and cloud systems.</p>
            </div>
          </div>
        </section>

        <section className="preview-section" id="preview">
          <div className="container preview-layout">
            <p className="preview-status inverse"><span aria-hidden="true" /> Private preview</p>
            <h2>Currently working with a small number of businesses.</h2>
            <div>
              <p>We are refining our services and early solutions before opening more broadly.</p>
              <span>Contact options will be added soon.</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div>
            <a className="wordmark footer-mark" href="#top">christopherbrown<span>.ai</span></a>
            <p>Software built for small businesses.</p>
          </div>
          <p>Washington, DC · Northern Virginia · Maryland</p>
        </div>
        <div className="container footer-bottom">
          <span>© {currentYear} christopherbrown.ai</span>
          <div><span>Privacy — coming soon</span><span>Terms — coming soon</span></div>
        </div>
      </footer>
    </>
  );
}
