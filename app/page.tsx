const outcomes = [
  {
    title: "Keep information moving",
    copy: "Connect forms, email, files, schedules, and customer records so your team stops copying the same details from place to place.",
    includes: ["Software integration", "Workflow automation", "Internal tools"],
  },
  {
    title: "Give customers a clearer experience",
    copy: "Create a simple way for customers to submit information, receive updates, access documents, and understand what happens next.",
    includes: ["Customer portals", "Scheduling and dispatch", "Status updates"],
  },
  {
    title: "See the business more clearly",
    copy: "Bring estimates, work in progress, invoices, and important operating information together without rebuilding reports by hand.",
    includes: ["Estimates and invoicing", "Dashboards and reporting", "Ongoing support"],
  },
];

const opportunities = [
  {
    title: "A new request arrives",
    today: "Someone copies details from an email or form into a spreadsheet, sends a message, creates a folder, and hopes the handoff is clear.",
    improved: "One submission creates the customer record, organizes the documents, alerts the right person, and schedules the follow-up.",
  },
  {
    title: "A job needs to be scheduled",
    today: "Calls, texts, calendars, and handwritten notes all contain part of the plan.",
    improved: "The team sees one schedule, conflicts are easier to spot, and customers receive useful updates without another phone call.",
  },
  {
    title: "The owner needs an answer",
    today: "Information lives across several systems, so understanding the week means combining spreadsheets.",
    improved: "A focused view shows the few numbers and open items that actually need attention.",
  },
];

const steps = [
  ["Understand the work", "We learn how the process works today, where time is being lost, and what is creating frustration."],
  ["Find the smallest useful change", "We improve the current workflow or connect existing tools before recommending new software."],
  ["Build around the real process", "We deliver in manageable stages and test the workflows that matter to the people doing the work."],
  ["Stay after launch", "We help put the software into use, make improvements, and remain available when support is needed."],
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
            <a href="#services">What we improve</a>
            <a href="#approach">How we work</a>
            <a href="#about">About</a>
            <a href="#preview">Private preview</a>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Navigation menu"><span>Menu</span><i aria-hidden="true" /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">What we improve</a>
              <a href="#approach">How we work</a>
              <a href="#about">About</a>
              <a href="#preview">Private preview</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-masthead">
            <div>
              <p className="preview-status"><span aria-hidden="true" /> Currently in private preview</p>
              <h1>Software that fits the way your business works.</h1>
            </div>
            <aside className="hero-principle">
              <p>Technology should fit the business—not force the business to change.</p>
              <div className="mini-flow" aria-label="A simple connected workflow">
                <span>Request</span><i aria-hidden="true" />
                <span>Record</span><i aria-hidden="true" />
                <span>Follow-up</span>
              </div>
            </aside>
          </div>
          <div className="container hero-bottom">
            <p className="hero-lede">We help local businesses eliminate repetitive work, connect the software they already use, and spend more time serving customers.</p>
            <div className="hero-actions">
              <a className="primary-link" href="#services">See what could improve <span aria-hidden="true">↓</span></a>
              <p>Washington, DC · Northern Virginia · Maryland</p>
            </div>
          </div>
        </section>

        <section className="statement-section">
          <div className="container statement-layout">
            <p className="section-label">The real problem</p>
            <h2>Your business probably has enough software. It may just need to work together.</h2>
            <div className="statement-copy">
              <p>Information arrives through a web form, gets copied into a spreadsheet, emailed to another person, entered into a second system, and saved again somewhere else.</p>
              <p>Those small manual steps add up. We improve the process—sometimes by connecting the tools you already use, sometimes by replacing an awkward workflow, and sometimes by building something new.</p>
            </div>
          </div>

          <div className="container handoff" aria-label="Example disconnected workflow">
            <span>Customer request</span><i aria-hidden="true">→</i>
            <span>Spreadsheet</span><i aria-hidden="true">→</i>
            <span>Team inbox</span><i aria-hidden="true">→</i>
            <span>Shared folder</span><i aria-hidden="true">→</i>
            <span>Follow-up</span>
          </div>
        </section>

        <section className="outcomes-section" id="services">
          <div className="container outcomes-intro">
            <p className="section-label">What we improve</p>
            <h2>Start with the outcome, not the technology.</h2>
            <p>You should not need to understand a technology stack to buy useful software. The conversation starts with the work that is slow, fragile, or harder than it should be.</p>
          </div>

          <div className="container outcome-list">
            {outcomes.map((outcome, index) => (
              <article key={outcome.title}>
                <span className="outcome-marker" aria-hidden="true">{index + 1}</span>
                <div>
                  <h3>{outcome.title}</h3>
                  <p>{outcome.copy}</p>
                </div>
                <ul aria-label={`Services included in ${outcome.title}`}>
                  {outcome.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="integration-section">
          <div className="container integration-layout">
            <div className="integration-copy">
              <p className="section-label light">One practical example</p>
              <h2>Turn a request into a process your team can see.</h2>
              <p>A useful integration does not need to feel technical. It simply moves the right information to the right place and makes the next step obvious.</p>
              <blockquote>Improve the process first. Connect what already works. Build something new only when it earns its place.</blockquote>
            </div>

            <div className="process-map" aria-label="Example connected customer request workflow">
              <div className="map-start">
                <span>New customer request</span>
                <p>One clear starting point</p>
              </div>
              <div className="map-branch">
                <div><span aria-hidden="true">A</span><p><b>Record created</b>Customer details stay together</p></div>
                <div><span aria-hidden="true">B</span><p><b>Files organized</b>Documents land in the right place</p></div>
                <div><span aria-hidden="true">C</span><p><b>Team notified</b>The next owner is clear</p></div>
              </div>
              <div className="map-end"><span aria-hidden="true" /><p><b>Follow-up scheduled</b>Status visible in one place</p></div>
            </div>
          </div>
        </section>

        <section className="opportunities-section">
          <div className="container opportunities-heading">
            <p className="section-label">Example opportunities</p>
            <h2>Small improvements can change the whole day.</h2>
            <p>These are examples of common workflows, not claims about completed client projects.</p>
          </div>

          <div className="container opportunity-list">
            {opportunities.map((opportunity) => (
              <article key={opportunity.title}>
                <h3>{opportunity.title}</h3>
                <div>
                  <span>What happens today</span>
                  <p>{opportunity.today}</p>
                </div>
                <div className="improved-state">
                  <span>What could happen instead</span>
                  <p>{opportunity.improved}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="container approach-layout">
            <div className="approach-intro">
              <p className="section-label">How we work</p>
              <h2>A small project should still feel well run.</h2>
              <p>One painful problem solved well is more valuable than a large project that never feels finished.</p>
            </div>
            <ol className="approach-list">
              {steps.map(([title, copy], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-layout">
            <div className="about-lede">
              <p className="section-label light">A personal working relationship</p>
              <h2>Built by Christopher, close to the work.</h2>
              <p>christopherbrown.ai was founded by Christopher Brown, a Northern Virginia technology leader with more than a decade of experience helping organizations operate reliable software and cloud systems.</p>
            </div>
            <div className="about-principles">
              <article><h3>You work with the person building it.</h3><p>No layers of salespeople, account managers, or anonymous support queues.</p></article>
              <article><h3>The software adapts to the business.</h3><p>The goal is to make the process your team relies on simpler and more dependable.</p></article>
              <article><h3>Practical choices last longer.</h3><p>Technology is selected because it solves the problem—not because it is fashionable.</p></article>
              <article><h3>Support keeps its context.</h3><p>When you need help, you are speaking with someone who understands why the system works the way it does.</p></article>
            </div>
          </div>
        </section>

        <section className="preview-section" id="preview">
          <div className="container preview-layout">
            <div>
              <p className="preview-status inverse"><span aria-hidden="true" /> Private preview</p>
              <h2>Building carefully, with a small number of businesses.</h2>
            </div>
            <div>
              <p>We are refining our services, delivery process, and early solutions before opening more broadly.</p>
              <p>The site will expand with project details, practical examples, and additional ways to get in touch.</p>
              <span className="contact-note">Contact options will be added soon.</span>
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
          <p>Serving Washington, DC,<br />Northern Virginia, and Maryland.</p>
        </div>
        <div className="container footer-bottom">
          <span>© {currentYear} christopherbrown.ai</span>
          <div><span>Privacy — coming soon</span><span>Terms — coming soon</span></div>
        </div>
      </footer>
    </>
  );
}
