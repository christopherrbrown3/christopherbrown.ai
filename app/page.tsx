import MobileMenu from "./mobile-menu";

const contactHref =
  "mailto:hello@christopherbrown.io?subject=Let%27s%20talk%20about%20my%20business&body=Hi%20Chris%2C%0A%0AThe%20part%20of%20my%20business%20I%27d%20like%20to%20make%20easier%20is%3A%0A%0A";

const services = [
  {
    icon: "connect",
    title: "Keep new business from slipping away",
    copy: "Stay on top of calls, quote requests, booking inquiries, and follow-ups.",
  },
  {
    icon: "build",
    title: "Keep the day organized",
    copy: "Make jobs, appointments, properties, projects, and schedule changes easier to manage.",
  },
  {
    icon: "automate",
    title: "Cut down on paperwork",
    copy: "Spend less time copying details, updating spreadsheets, and doing the same task twice.",
  },
  {
    icon: "support",
    title: "Make things easier for customers",
    copy: "Give people a clear way to request work, get updates, and know what happens next.",
  },
];

const portfolio = [
  {
    name: "BeerMe",
    tagline: "Good friends. Clear tabs.",
    description:
      "A friendly way to remember whose turn it is for beers, coffee, tacos, or a favor—without making friendship feel like accounting.",
    image: "/portfolio/beerme.png",
    alt: "BeerMe invitation card beside a friendly beer mug app icon.",
    href: "https://beerme.christopherbrown.ai",
  },
  {
    name: "HomeTeam",
    tagline: "Tasks. Together. Done right.",
    description:
      "A shared home organizer that keeps chores, routines, and responsibilities clear, so everyone knows what needs doing and who is handling it.",
    image: "/portfolio/hometeam.png",
    alt: "HomeTeam invitation card showing a simple household checklist.",
    href: "https://hometeam.christopherbrown.ai",
  },
];

const workdayItems = [
  ["New request", "Replied to"],
  ["Next job", "Scheduled"],
  ["Customer", "Updated"],
  ["Invoice", "Sent"],
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
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a className="header-cta" href={contactHref}>Email Chris</a>
          </nav>
          <MobileMenu contactHref={contactHref} />
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="hero-note"><span aria-hidden="true" /> For service business owners</p>
              <h1>Less busywork. More time for the work that pays.</h1>
              <p className="hero-lede">I create simple business tools that help you stay on top of leads, schedules, customers, and follow-up.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={contactHref}>Tell me what&apos;s slowing you down <span aria-hidden="true">→</span></a>
                <a className="text-link" href="#services">See how I can help <span aria-hidden="true">↓</span></a>
              </div>
              <p className="hero-audience">For home services, contractors, real estate, property management, creative businesses, and other owner-run companies.</p>
            </div>

            <div className="workday-graphic" role="img" aria-label="A smoother workday with new requests answered, jobs scheduled, customers updated, and invoices sent">
              <div className="workday-top">
                <strong>A smoother workday</strong>
                <span>Today</span>
              </div>
              <div className="workday-list">
                {workdayItems.map(([label, status]) => (
                  <div className="workday-row" key={label}>
                    <i aria-hidden="true">✓</i>
                    <strong>{label}</strong>
                    <span>{status}</span>
                  </div>
                ))}
              </div>
              <p>Fewer loose ends. More time for the work.</p>
            </div>
          </div>
        </section>

        <section className="industry-band" aria-label="Businesses I work with">
          <div className="container industry-layout">
            <p>Built for people who work in the real world.</p>
            <div>
              <span>Electric &amp; HVAC</span>
              <span>Plumbing</span>
              <span>Contracting &amp; painting</span>
              <span>Real estate</span>
              <span>Property management</span>
              <span>Artists &amp; performers</span>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container services-heading">
            <h2>Where your day can get easier.</h2>
            <p>You don&apos;t need to know what kind of software you need. Start with what takes too long, gets missed, or keeps you at the desk.</p>
          </div>
          <div className="container services-list">
            {services.map((service) => (
              <article key={service.title}>
                <span className={`service-mark service-mark--${service.icon}`} aria-hidden="true"><i /></span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="container work-heading">
            <div>
              <p className="section-label">Recent work</p>
              <h2>A few things I&apos;ve made.</h2>
            </div>
            <p>Simple products designed around real people and everyday routines.</p>
          </div>
          <div className="container portfolio-grid">
            {portfolio.map((project) => (
              <a className="portfolio-card" href={project.href} target="_blank" rel="noreferrer" key={project.name} aria-label={`Visit ${project.name} (opens in a new tab)`}>
                <div className="portfolio-image">
                  {/* Static project artwork is already web-sized; a plain image also keeps the exported site host-independent. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.alt} width="1200" height="630" loading="lazy" decoding="async" />
                </div>
                <div className="portfolio-copy">
                  <div>
                    <h3>{project.name}</h3>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <p className="portfolio-tagline">{project.tagline}</p>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-layout">
            <div>
              <p className="section-label inverse-label">About me</p>
              <h2>You know your business. I help make it run more smoothly.</h2>
            </div>
            <div className="about-copy">
              <h3>Hi, I&apos;m Chris.</h3>
              <p>I&apos;ve spent more than a decade helping organizations solve problems and keep important work running smoothly. I bring that experience directly to small business owners, with clear communication and personal support.</p>
              <p>You don&apos;t need technical language or a detailed plan. Start with the part of your day that feels harder than it should.</p>
              <ul className="trust-list">
                <li><strong>Plain language.</strong><span>No technical pitch or runaround.</span></li>
                <li><strong>Start small.</strong><span>Fix the most painful problem first.</span></li>
                <li><strong>Work directly with me.</strong><span>One person from the first conversation onward.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="contact-kicker">Have a headache worth fixing?</p>
              <h2>What&apos;s taking too much of your time?</h2>
            </div>
            <div className="contact-copy">
              <p>No tech terms needed. Tell me what keeps getting missed, repeated, or stuck. A short email is all it takes to start.</p>
              <a className="button button-dark" href={contactHref}>Email Chris <span aria-hidden="true">→</span></a>
              <a className="email-address" href="mailto:hello@christopherbrown.io">hello@christopherbrown.io</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div>
            <a className="wordmark footer-mark" href="#top">christopherbrown<span>.ai</span></a>
            <p>Practical help for service businesses.</p>
          </div>
          <div className="footer-contact">
            <a href="mailto:hello@christopherbrown.io">hello@christopherbrown.io</a>
            <span>Washington, DC · Northern Virginia · Maryland</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {currentYear} christopherbrown.ai</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
