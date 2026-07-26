const services = [
  {
    number: "01",
    title: "Custom business software",
    description: "Simple tools built around the way your business actually works.",
    examples: ["Internal tools", "Web applications", "Mobile-friendly systems", "Custom business workflows"],
  },
  {
    number: "02",
    title: "Software integration",
    description: "Connect the software you already use so information moves where it needs to go.",
    examples: ["Forms to customer systems", "Email to ticketing", "Files to workflows", "Accounting data to reports"],
  },
  {
    number: "03",
    title: "Workflow automation",
    description: "Remove repetitive steps, duplicate entry, manual handoffs, and avoidable administrative work.",
    examples: ["Route requests", "Create records", "Send status updates", "Generate follow-up tasks"],
  },
  {
    number: "04",
    title: "Customer portals",
    description: "Give customers a simple place to submit information, view updates, access documents, or communicate with your business.",
  },
  {
    number: "05",
    title: "Scheduling and dispatch",
    description: "Improve how appointments, jobs, assignments, and customer updates are coordinated.",
  },
  {
    number: "06",
    title: "Estimates and invoicing",
    description: "Simplify the path from a new request to an estimate, completed work, and an invoice.",
  },
  {
    number: "07",
    title: "Dashboards and reporting",
    description: "Bring important information together so owners and teams can see what is happening without searching across multiple systems.",
  },
  {
    number: "08",
    title: "Ongoing hosting and support",
    description: "We can host, maintain, monitor, and improve the software after launch, so you do not need an internal technology team.",
  },
];

const examples = [
  {
    title: "New customer requests",
    before: "Requests arrive through email, phone calls, and web forms. Someone manually copies the information into a spreadsheet.",
    after: "New requests are collected in one place, routed to the right person, and tracked automatically.",
  },
  {
    title: "Estimates",
    before: "Staff recreate similar estimates repeatedly and search through old documents for pricing.",
    after: "A guided estimate process uses consistent information and produces a professional document faster.",
  },
  {
    title: "Scheduling",
    before: "Appointments are coordinated through calls, texts, calendars, and handwritten notes.",
    after: "The team sees one schedule, customers receive updates, and conflicts are easier to identify.",
  },
  {
    title: "Customer updates",
    before: "Customers call repeatedly to ask about the status of a job or request.",
    after: "Customers receive automatic updates or can view the latest status through a simple portal.",
  },
  {
    title: "Documents and photos",
    before: "Files are stored in email, personal folders, shared drives, and text-message threads.",
    after: "Documents and photos are organized automatically around the correct customer, request, or job.",
  },
  {
    title: "Reporting",
    before: "The owner spends hours combining spreadsheets before understanding what happened that week.",
    after: "A dashboard presents the most important information in one place.",
  },
];

const steps = [
  ["01", "Understand the work", "We start by learning how the process works today, where time is being lost, and what is creating frustration."],
  ["02", "Find the smallest useful solution", "We look first at improving the current workflow or connecting existing tools. We only recommend new software when it is the right answer."],
  ["03", "Build and test", "We create the solution in manageable stages, validate the important workflows, and keep the focus on the original business problem."],
  ["04", "Launch and support", "We help put the software into use, make improvements, and remain available when help is needed."],
];

const reasons = [
  ["You work directly with the person building it", "No layers of salespeople, account managers, or anonymous support queues."],
  ["Local and accessible", "Based in Northern Virginia and focused on businesses across the DMV."],
  ["Built around your business", "The goal is not to force your team into a generic process. It is to make the process you rely on simpler and more reliable."],
  ["Practical, not trendy", "Technology is selected because it solves the problem—not because it is fashionable."],
  ["Designed for long-term use", "Solutions are built with maintainability, security, backups, testing, and reliable operation in mind."],
  ["Support from someone who understands the system", "When you need help, you are not explaining the software to someone who has never seen it."],
];

function Workflow({ items }: { items: string[] }) {
  return (
    <ol className="workflow-list">
      {items.map((item, index) => (
        <li key={item}>
          <span className="workflow-index">{String(index + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

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
            <a href="#process">How it works</a>
            <a href="#why-us">Why us</a>
            <a href="#preview">Private preview</a>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span>Menu</span><i aria-hidden="true" /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">Services</a>
              <a href="#process">How it works</a>
              <a href="#why-us">Why us</a>
              <a href="#preview">Private preview</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-noise" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Private preview</div>
              <h1>Software built<br />for <em>your</em> business.</h1>
              <p className="hero-lede">We help local businesses eliminate repetitive work, connect the software they already use, and spend more time serving customers.</p>
              <p className="location-line"><span aria-hidden="true">⌖</span> Serving Washington, DC, Northern Virginia, and Maryland</p>
            </div>
            <div className="hero-visual" aria-label="Illustration of connected business tools">
              <div className="visual-grid" aria-hidden="true" />
              <div className="app-card form-card">
                <div className="app-card-head"><span className="mini-icon">F</span><strong>New request</strong></div>
                <span className="field short" /><span className="field" /><span className="button-line" />
              </div>
              <div className="connector connector-a" aria-hidden="true"><span /></div>
              <div className="app-card record-card">
                <div className="app-card-head"><span className="mini-icon">C</span><strong>Customer record</strong></div>
                <div className="person-row"><span className="avatar">CB</span><span><b>Request received</b><small>Everything in one place</small></span></div>
              </div>
              <div className="connector connector-b" aria-hidden="true"><span /></div>
              <div className="app-card calendar-card">
                <div className="app-card-head"><span className="mini-icon clay">D</span><strong>Follow-up</strong></div>
                <div className="date-row"><b>18</b><span>Scheduled<br /><small>Team notified</small></span></div>
              </div>
              <div className="status-pill"><span /> Information moves. Your team doesn’t have to.</div>
            </div>
          </div>
          <div className="hero-footer container">
            <span>Built for the work behind local business</span>
            <div aria-hidden="true" />
          </div>
        </section>

        <section className="section problem-section">
          <div className="container split-heading">
            <div>
              <p className="kicker">The problem</p>
              <h2>Your business should not have to work around its software.</h2>
            </div>
            <div className="body-copy">
              <p>Most businesses already have plenty of software: email, web forms, spreadsheets, shared folders, accounting software, scheduling tools, and customer systems.</p>
              <p>The problem is often that those systems do not work together. Information arrives through a form, gets copied into a spreadsheet, emailed to someone else, entered again, and saved somewhere new. Those small manual steps add up—and create room for mistakes.</p>
              <p className="accent-copy">We improve the process: sometimes by connecting what you already use, sometimes by replacing an awkward workflow, and sometimes by building something new.</p>
            </div>
          </div>
          <div className="container tool-strip" aria-label="Common business tools">
            {["Email", "Web forms", "Spreadsheets", "Shared files", "Scheduling", "Accounting"].map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container section-heading">
            <p className="kicker">What we build</p>
            <h2>Practical software for<br />everyday business problems.</h2>
            <p>Clear, dependable tools that remove friction from the work your team does every day.</p>
          </div>
          <div className="container services-grid">
            {services.map((service) => (
              <article className={`service-card ${service.examples ? "service-card-large" : ""}`} key={service.title}>
                <span className="card-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.examples && <ul>{service.examples.map((example) => <li key={example}>{example}</li>)}</ul>}
              </article>
            ))}
          </div>
        </section>

        <section className="section integration-section">
          <div className="container integration-grid">
            <div className="integration-copy">
              <p className="kicker light">Software integration</p>
              <h2>Make the tools you already have work together.</h2>
              <p className="integration-lede">You may not need another piece of software. You may simply need the software you already own to communicate.</p>
              <div className="smallest-solution">
                <p>We look for the smallest practical solution first.</p>
                <ol>
                  <li><b>01</b> Improve the existing process.</li>
                  <li><b>02</b> Connect the current systems.</li>
                  <li><b>03</b> Build new software only when needed.</li>
                </ol>
              </div>
            </div>
            <div className="workflow-panel">
              <div className="workflow-tabs"><span>Example workflow</span><span>01 / 02</span></div>
              <Workflow items={["Website form", "Customer record created", "Documents organized", "Team notified", "Follow-up scheduled", "Status visible in one place"]} />
              <div className="workflow-alt">
                <b>Another common flow</b>
                <p>Email request → work item → attachment stored → assigned → customer confirmed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section examples-section">
          <div className="container section-heading centered">
            <p className="kicker">Example opportunities</p>
            <h2>What could be improved?</h2>
            <p>These are common patterns, not claims about completed client projects. Your best starting point may be surprisingly small.</p>
          </div>
          <div className="container examples-grid">
            {examples.map((example, index) => (
              <article className="example-card" key={example.title}>
                <div className="example-top"><span>{String(index + 1).padStart(2, "0")}</span><h3>{example.title}</h3></div>
                <div className="state before"><span>Today</span><p>{example.before}</p></div>
                <div className="state after"><span>Improved</span><p>{example.after}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container section-heading">
            <p className="kicker">How we work</p>
            <h2>A simpler way to<br />build software.</h2>
          </div>
          <div className="container process-list">
            {steps.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <blockquote className="container principle">
            <span>Our principle</span>
            <p>“One painful problem solved well is more valuable than a large project that never feels finished.”</p>
          </blockquote>
        </section>

        <section className="section why-section" id="why-us">
          <div className="container why-grid">
            <div className="why-intro">
              <p className="kicker">Why christopherbrown.ai</p>
              <h2>Professional software.<br /><em>Personal service.</em></h2>
              <p>Professional engineering paired with the accessibility of a local, personal business relationship.</p>
              <div className="founder-note">
                <span>Based in Northern Virginia</span>
                <p>Founded by a Northern Virginia technology leader with more than a decade of experience helping organizations operate reliable software and cloud systems.</p>
              </div>
            </div>
            <div className="reasons-grid">
              {reasons.map(([title, copy], index) => (
                <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="preview-section" id="preview">
          <div className="preview-orbit orbit-one" aria-hidden="true" />
          <div className="preview-orbit orbit-two" aria-hidden="true" />
          <div className="container preview-inner">
            <p className="kicker light">A thoughtful beginning</p>
            <h2>Currently in<br /><em>private preview.</em></h2>
            <p>We are currently working with a small number of businesses while refining our services, delivery process, and early solutions.</p>
            <p>The website will expand over time with examples, project details, and additional ways to get in touch.</p>
            <span className="coming-soon">Contact options will be added soon.</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <div><a className="wordmark footer-mark" href="#top">christopherbrown<span>.ai</span></a><p>Software built for small businesses.</p></div>
          <p>Serving Washington, DC,<br />Northern Virginia, and Maryland.</p>
        </div>
        <div className="container footer-bottom">
          <span>© {currentYear} christopherbrown.ai</span>
          <div><span>Privacy <small>Coming soon</small></span><span>Terms <small>Coming soon</small></span></div>
        </div>
      </footer>
    </>
  );
}
