import EmailLink from "./email-link";
import MobileMenu from "./mobile-menu";

const serviceGroups = [
  {
    title: "Win more local work",
    services: [
      {
        title: "A website that gets calls",
        copy: "A clear, mobile-friendly site that makes it easy for people to choose you and get in touch.",
      },
      {
        title: "Local search & SEO",
        copy: "Help nearby customers find your business when they search for the work you do.",
      },
      {
        title: "Better quote requests",
        copy: "Collect the right job details and photos before you call someone back.",
      },
    ],
  },
  {
    title: "Keep work organized",
    services: [
      {
        title: "Scheduling & booking",
        copy: "Keep appointments, job times, and team availability together in one place.",
      },
      {
        title: "Customers & follow-up",
        copy: "Keep customer details, notes, and next steps together in one place.",
      },
      {
        title: "Estimates & approvals",
        copy: "Send professional estimates and give customers a simple way to say yes.",
      },
    ],
  },
  {
    title: "Save time every week",
    services: [
      {
        title: "Custom domain & business email",
        copy: "I can set up your domain and business email, then handle the settings for you.",
      },
      {
        title: "Connect the tools you use",
        copy: "Connect your website, calendar, email, and accounting tools so you only enter information once.",
      },
      {
        title: "Reminders & updates",
        copy: "Send appointment reminders, job updates, and follow-ups without having to remember each one.",
      },
    ],
  },
];

const portfolio = [
  {
    name: "BeerMe",
    tagline: "Good friends. Clear tabs.",
    description:
      "BeerMe keeps track of whose turn it is for beers, coffee, tacos, or a favor, without turning friendship into accounting.",
    image: "/portfolio/beerme-hero.png",
    alt: "BeerMe app showing a friendly shared tab between friends.",
    href: "https://beerme.christopherbrown.ai",
  },
  {
    name: "HomeTeam",
    tagline: "Tasks. Together. Done right.",
    description:
      "HomeTeam gives everyone in a household one place to see what needs doing and who is taking care of it.",
    image: "/portfolio/hometeam-hero.png",
    alt: "HomeTeam app showing household tasks, assignees, and daily progress.",
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
            <a href="#pricing">Pricing</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <EmailLink className="header-cta">Email Chris</EmailLink>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="hero-note"><span aria-hidden="true" /> For local business owners across DC, Maryland &amp; Northern Virginia</p>
              <h1>Less busywork. More time for the work that pays.</h1>
              <p className="hero-lede">I build websites and practical business tools that help you bring in customers, stay on top of the work, and spend less time on paperwork.</p>
              <div className="hero-actions">
                <EmailLink className="button button-primary">Tell me what&apos;s slowing you down <span aria-hidden="true">→</span></EmailLink>
                <a className="text-link" href="#services">See how I can help <span aria-hidden="true">↓</span></a>
              </div>
              <p className="hero-audience">I work with contractors, home service companies, real estate and property managers, artists, performers, and other owner-run businesses.</p>
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
            <p>Some of the businesses I work with.</p>
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
            <div>
              <p className="section-label">Ways I can help</p>
              <h2>Useful tools for the work you do every day.</h2>
              <p className="services-intro">Tell me what&apos;s taking too much time. We&apos;ll start there.</p>
            </div>
          </div>
          <div className="container service-groups">
            {serviceGroups.map((group, groupIndex) => (
              <section className="service-group" key={group.title}>
                <div className="service-group-heading">
                  <span aria-hidden="true">0{groupIndex + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="service-items">
                  {group.services.map((service) => (
                    <article key={service.title}>
                      <h4>{service.title}</h4>
                      <p>{service.copy}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="container pricing-layout">
            <div className="pricing-intro">
              <p className="pricing-badge"><span aria-hidden="true">✓</span> Free estimates</p>
              <h2>Start with one project. Add support if you need it.</h2>
              <p>Tell me what you need, and I&apos;ll send a free estimate with the work and price spelled out. Hire me for one project, then decide if you want help with hosting or updates afterward.</p>
              <EmailLink className="button button-primary">Get a free estimate <span aria-hidden="true">→</span></EmailLink>
            </div>
            <div className="pricing-options">
              <article>
                <h3>One-time project</h3>
                <p>Hire me for one job, such as a new website or a better way to handle requests and scheduling.</p>
              </article>
              <article>
                <h3>Hosting and maintenance</h3>
                <p>I can handle hosting and routine updates after launch.</p>
              </article>
              <article>
                <h3>Ongoing support</h3>
                <p>I can stay available for questions and updates after the project is done.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="container work-heading">
            <div>
              <p className="section-label">Recent work</p>
              <h2>A few things I&apos;ve made.</h2>
              <p className="work-intro">Products I&apos;ve built to solve everyday problems.</p>
            </div>
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
              <p>For more than a decade, I&apos;ve helped organizations fix problems and keep day-to-day work on track. Now I bring that experience directly to small business owners. You work with me from the first conversation through the finished project.</p>
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
              <p>Tell me about the problem in your own words. A short email is enough to get started.</p>
              <EmailLink className="button button-dark">Email Chris <span aria-hidden="true">→</span></EmailLink>
              <span className="email-note">Opens your email app</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div>
            <a className="wordmark footer-mark" href="#top">christopherbrown<span>.ai</span></a>
            <p>Practical help for local businesses.</p>
          </div>
          <div className="footer-contact">
            <EmailLink>Email Chris</EmailLink>
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
