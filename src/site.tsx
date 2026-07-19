import { portrait } from "./photo";

export type PageKey = "home" | "hcc" | "beyond" | "career" | "technology" | "sources";

const nav = [
  ["home", "/", "Home"],
  ["hcc", "/academics-hcc", "Academics HCC"],
  ["beyond", "/academics-beyond-hcc", "Beyond HCC"],
  ["career", "/future-career", "Future Career"],
  ["technology", "/emerging-technology", "Emerging Technology"],
  ["sources", "/works-cited", "Works Cited"],
] as const;

const courses = [
  [
    "Year I — First Semester",
    "CGS 1000 — Introduction to Computers and Technology",
    "ENC 1101 — English Composition I",
    "MGF 1130 — Mathematical Thinking",
    "Natural Science General Education Core",
  ],
  [
    "Year I — Second Semester",
    "COP 1000 — Programming Logic",
    "CGS 2820 — Web Authoring HTML",
    "CTS 1305 — Introduction to Networking",
    "AMH 2010, AMH 2020, or POS 2041",
  ],
  [
    "Year I — Third Semester",
    "COP 2830 — Scripting for the Web",
    "CNT 1401 — Introduction to Network Security",
  ],
  [
    "Year II — First Semester",
    "CET 1600 — Cisco Network Fundamentals",
    "CIS 2359C — Information Assurance Network Systems",
    "COP 2836 — Database-Driven Web Programming: Server",
    "CTS 1106 — Introduction to Linux",
  ],
  [
    "Year II — Second Semester",
    "CET 1610 — Cisco Router Technology",
    "CIS 2352C — Information Assurance Local Systems",
    "CIS 2353 — Security Management and Penetration Testing",
    "Humanities General Education Core",
  ],
  [
    "Year II — Third Semester",
    "CGS 2091 — Information Technology: Ethical and Legal Issues",
    "CIS 2598 — Cybersecurity Capstone",
  ],
];

const sources = [
  [
    "Hillsborough College",
    "Cybersecurity AS",
    "https://www.hcfl.edu/academics/subjects/information-technology/cybersecurity",
  ],
  [
    "University of South Florida",
    "Bachelor of Science in Cybersecurity",
    "https://www.usf.edu/ai-cybersecurity-computing/academics/undergraduate/bscys.aspx",
  ],
  [
    "University of West Florida",
    "Bachelor’s Degree in Cybersecurity",
    "https://uwf.edu/programs/hmcse/cybersecurity-bs/",
  ],
  [
    "St. Petersburg College",
    "Cybersecurity B.A.S. Degree",
    "https://www.spcollege.edu/future-students/degrees-training/technology/cybersecurity/cybersecurity-bas-degree",
  ],
  [
    "ReliaQuest",
    "What Does It Take to Become a SOC Analyst?",
    "https://reliaquest.com/blog/become-a-soc-analyst/",
  ],
  [
    "Raymond James",
    "Information Technology: Information Security",
    "https://www.raymondjames.com/careers/students-and-recent-grads/information-technology",
  ],
  [
    "United States Air Force",
    "Cyber Systems Operations Specialist",
    "https://www.airforce.com/careers/intelligence/cyber-systems-operations",
  ],
  [
    "U.S. Bureau of Labor Statistics",
    "Information Security Analysts",
    "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm",
  ],
  ["IBM", "What Is Agentic AI?", "https://www.ibm.com/think/topics/agentic-ai"],
  [
    "Cybersecurity and Infrastructure Security Agency",
    "Roadmap for AI",
    "https://www.cisa.gov/resources-tools/resources/roadmap-ai",
  ],
];

function Shell({
  active,
  children,
}: {
  active: PageKey;
  children: React.ReactNode;
}) {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-mark">AG</span>
          <span>
            Andres Giron<small>Cybersecurity Path</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          {nav.map(([key, href, label]) => (
            <a key={key} className={active === key ? "active" : ""} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>
      {children}
      <footer>
        <span>Andres Giron · Cybersecurity Student</span>
        <a href="/works-cited">Research sources</a>
      </footer>
    </>
  );
}

function Intro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="signal" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main id="content">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Education · Security · Service</p>
          <h1>
            My Path Into <em>Cybersecurity</em>
          </h1>
          <p>
            Hi there. My name is Andres Giron. I’m currently attending
            Hillsborough Community College (HCC) and pursuing an associate’s
            degree in cybersecurity. I selected the field of cybersecurity due
            to the fact that nearly all areas of our lives today are affected by
            technology, and businesses require people to train and secure their
            systems, networks, and information. On this website, you’ll find my
            current educational coursework, three potential paths for continued
            education post-HCC, the jobs that I’ve considered, and one emerging
            technology that may impact some of my future work.
          </p>
          <a className="button" href="/academics-hcc">
            Explore my academic path <span>→</span>
          </a>
        </div>
        <figure className="portrait">
          <img src={portrait} alt="Andres Giron" />
          <figcaption>
            <strong>Andres Giron</strong>
            <span>Cybersecurity Student · Tampa, Florida</span>
          </figcaption>
        </figure>
      </section>
      <section className="goal">
        <span>01</span>
        <div>
          <h2>My Short-Term Goal</h2>
          <p>
            My short-term objective is to develop a solid foundation in
            networking, operating systems, programming, and information
            assurance. Upon completion of my two-year associate degree at HCC, I
            intend to continue the development of my education and hands-on
            training in order to qualify myself for a professional position in
            the field of cybersecurity.
          </p>
        </div>
      </section>
    </main>
  );
}

function Hcc() {
  return (
    <main id="content">
      <Intro
        eyebrow="Academics HCC"
        title="Building My Foundation"
        text="This program will be a focused 60-credit degree that combines technical training and the knowledge needed to protect today’s technologies."
      />
      <section className="feature-grid">
        <div className="feature-photo">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85"
            alt="Student working on technology coursework"
          />
          <span>Hillsborough College · Cybersecurity A.S.</span>
        </div>
        <article className="panel">
          <p className="label">Chosen major</p>
          <h2>Cybersecurity</h2>
          <p className="label">Degree</p>
          <h3>Associate in Science · 60 Credit Hours</h3>
          <p>
            The Cybersecurity A.S. program at Hillsborough College is structured
            to provide students with a basic understanding of how to defend
            computer systems and networks. The program is constructed by
            combining general education coursework with technical coursework in
            the areas of network architecture, Linux, programming languages,
            information assurance, penetration testing, and security management.
            Through these classes, I hope to gain an understanding of how
            systems function, where vulnerabilities exist, and how to utilize
            various security policies and technical controls to mitigate risks.
          </p>
        </article>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Degree plan</p>
          <h2>Required Coursework</h2>
        </div>
        <div className="course-grid">
          {courses.map(([term, ...items]) => (
            <article className="course-card" key={term}>
              <h3>{term}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="callout">
        <h2>Why This Program Fits My Objectives</h2>
        <p>
          This degree provides me with a foundational basis in cybersecurity.
          Classes in the areas of network architecture, Linux, Cisco technology,
          and information assurance provide me with a hands-on understanding of
          many concepts utilized in security operations and system
          administration. The capstone project at the end of the program will
          provide me with an opportunity to integrate everything I have learned
          prior to entering the job market or proceeding into a four-year degree
          program.
        </p>
      </section>
    </main>
  );
}

function Beyond() {
  const programs = [
    {
      n: "01",
      school: "University of South Florida",
      title: "Bachelor of Science in Cybersecurity",
      text: "The Cybersecurity B.S. at USF develops students’ skills in programming, databases, networks, statistical analysis, risk assessment, ethics, and security policy. In addition to core topics, students can also take electives in the fields of cryptography, cyber forensics, and cloud computing. Additionally, access to laboratory facilities and internship opportunities, as well as being located near the large tech community of Tampa Bay, make this an ideal choice for obtaining a combination of formal education and practical experience locally.",
      info: "The Cybersecurity B.S. is part of the Bellini College of Artificial Intelligence, Cybersecurity & Computing at USF. If I were to stay in the Tampa Bay area while pursuing my four-year degree, I would be able to continue growing my local professional network while also acquiring a bachelor’s degree.",
    },
    {
      n: "02",
      school: "University of West Florida",
      title: "Bachelor of Science in Cybersecurity",
      text: "The Cybersecurity B.S. at UWF provides students with the necessary knowledge base to protect information systems and to assume responsibility for managing security requirements. The program allows for specializations in data security, national security, and security management. Specialization in each area would enable me to choose coursework that best aligns with the specific type of cybersecurity work that I ultimately desire to perform.",
      info: "UWF is widely regarded for its cybersecurity programs, and it affords a direct route from an associate’s degree to a bachelor’s degree in the field of cybersecurity. UWF offers multiple specializations for students to hone their skills beyond those developed through their associate degree.",
    },
    {
      n: "03",
      school: "St. Petersburg College",
      title: "Bachelor of Applied Science in Cybersecurity",
      text: "SPC’s Cybersecurity B.A.S. provides students with a solid foundation built upon previous technical education and is designed to provide protection to computers, networks, software, data, and all types of information resources. SPC’s applied degree is designed for students who are looking to enhance their practical cybersecurity knowledge and prepare themselves for entry-level workforce positions.",
      info: "The degree is an online program. Therefore, continuing in your job may be easier while pursuing your degree. In addition, SPC was designated as a National Center of Academic Excellence in Cyber Defense (CAE-CD).",
    },
  ];
  return (
    <main id="content">
      <Intro
        eyebrow="Academics Beyond HCC"
        title="Three Paths Forward"
        text="After completing my two-year degree at HCC, I can pursue additional education through a four-year program that extends my technical education and enhances my job prospects. As part of furthering my education, I researched several four-year programs within Florida that align with my educational background in cybersecurity."
      />
      <figure className="wide-photo">
        <img
          src="https://www.usf.edu/ai-cybersecurity-computing/news/images/2025/101525-jm-cyberbay-01-banner.jpg"
          alt="USF students collaborating during a cybersecurity competition"
        />
        <figcaption>
          Cybersecurity education provides students with classroom knowledge
          combined with teamwork and hands-on training challenges.
        </figcaption>
      </figure>
      <section className="program-list">
        {programs.map((p) => (
          <article className="program" key={p.n}>
            <div className="program-number">{p.n}</div>
            <div>
              <p className="label">{p.school}</p>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
              <div className="info">
                <strong>Relevant information</strong>
                <p>{p.info}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function Career() {
  const jobs = [
    {
      company: "ReliaQuest",
      title: "Security Operations Center Analyst",
      text: "In this position, as a SOC analyst, I would monitor various alerts, network traffic, and security logs to identify possible suspicious activity. I would investigate potential threats, determine if the activity identified was abnormal or malicious, document what occurred, and assist in containing or remediating the incident. This position will require strong analytical thinking, problem-solving, being a team player, and being able to remain composed when dealing with security-related incidents.",
      info: "ReliaQuest is a cybersecurity company located in Tampa. ReliaQuest has a concentration in security operations. ReliaQuest’s connection to the Tampa technology industry and concentration in security operations make it a great place to start and develop a local cybersecurity career.",
    },
    {
      company: "Raymond James",
      title: "Information Security Analyst",
      text: "As a Raymond James information security analyst, I would support protecting financial systems and the sensitive information they hold. There could be many job functions, such as threat monitoring, security event investigations, identification of potential weaknesses within systems, providing assistance with implementing and maintaining security measures, documentation of identified risks, and assisting the organization to enhance its overall security posture. Due to working in a financial service environment, there will be an added responsibility to adhere to strict guidelines of confidentiality and regulation compliance.",
      info: "Raymond James has an information security track offered by way of its technology development program for majors including computer science, information assurance/information systems management (cybersecurity), and information technology. A second opportunity near Tampa would be the St. Petersburg office of Raymond James.",
    },
    {
      company: "United States Air Force",
      title: "Cyber Systems Operations Specialist",
      text: "A United States Air Force Cyber Systems Operations Specialist installs, operates, and maintains all types of computers and servers. The cyber specialist also performs maintenance on the defensive protection systems used to defend against unwanted attacks on networks. They also perform troubleshooting duties to determine why a network was down and ensure that critical systems are up and running at all times. This job allows you to get hands-on experience in technical aspects of cybersecurity while earning your education as a member of the Air Force and receiving structured training.",
      info: "This job function is open for hire through Active Duty service in the U.S. Air Force, Air National Guard, and Air Force Reserve. All technical training is done at Keesler Air Force Base. As a result, the job provides valuable real-world experience that can apply to civilian IT and cybersecurity positions.",
    },
  ];
  return (
    <main id="content">
      <Intro
        eyebrow="Future Career"
        title="Where Cybersecurity Can Take Me"
        text="Cybersecurity provides opportunities in private industries, banking and finance, government, and the military."
      />
      <section className="career-hero">
        <div>
          <p className="stat">29%</p>
          <h2>Projected job growth</h2>
          <p>
            Information security analyst employment is projected to grow 29%
            from 2024 through 2034. As of May 2024, the national median annual
            wage for an information security analyst was $124,910; however,
            actual pay can vary based on experience, location, education level,
            and employer.
          </p>
        </div>
        <img
          src="https://www.airforce.com/content/dam/airforce/en/images/total-force-2023/tf-individual-careers/new-abu-to-ocp/airforce-cyber-systems-operations-d.jpg"
          alt="Air Force Cyber Systems Operations specialists at work"
        />
      </section>
      <section className="job-grid">
        {jobs.map((job, i) => (
          <article className="job-card" key={job.company}>
            <span>0{i + 1}</span>
            <p className="label">{job.company}</p>
            <h2>{job.title}</h2>
            <h3>What I would do</h3>
            <p>{job.text}</p>
            <h3>Relevant information</h3>
            <p>{job.info}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

function Technology() {
  return (
    <main id="content">
      <Intro
        eyebrow="Emerging Technology"
        title="Agentic AI in Cybersecurity"
        text="Artificial intelligence (AI) is changing how security teams detect threats, investigate incidents, and respond to incidents."
      />
      <section className="tech-layout">
        <aside className="agent-map" aria-label="Agentic AI security workflow">
          <div className="core">
            AI
            <br />
            Orchestrator
          </div>
          <div className="agent a1">Detect</div>
          <div className="agent a2">Investigate</div>
          <div className="agent a3">Respond</div>
          <div className="agent a4">Report</div>
        </aside>
        <div className="tech-copy">
          <article>
            <h2>What Is the Technology?</h2>
            <p>
              Agentic artificial intelligence (AI) is an area of research
              focused on developing AI agents that can take in data from various
              sources, analyze the information, make decisions based upon the
              analysis, and perform a defined task with little human
              interaction. Within cybersecurity, there exist several different
              specialty AI agents that work together to identify possible
              security threats, follow up on security alert triggers, identify
              suspicious activity, and then either recommend or initiate
              responses.
            </p>
          </article>
          <article>
            <h2>How Is It Used?</h2>
            <p>
              Agentic AI can assist security teams in reviewing huge volumes of
              system and network data in a much shorter period than humans alone
              could review. It can aid in prioritizing security-related alerts,
              connecting multiple related security incidents, creating
              investigation plans, automating repeatable processes, and reacting
              to specific threats. However, human analysts are still required to
              assess key decisions made by AI, validate the evidence behind
              those decisions, deal with abnormal scenarios, and ensure that no
              unauthorized automated action occurs.
            </p>
          </article>
          <article>
            <h2>How Will I Use It?</h2>
            <p>
              As a security monitoring and incident response tool, I may utilize
              agentic AI. It may allow me to decrease the amount of time spent
              sorting through routine alerts and allow me to spend additional
              time examining high-risk events, verifying my findings,
              communicating with fellow team members, and making educated
              decisions. Additionally, I will need to have an understanding of
              what limitations exist regarding AI use, protect the data being
              utilized by AI agents, and maintain human oversight over AI
              agents.
            </p>
          </article>
          <article>
            <h2>How Does It Fit Into My Education and Career Path?</h2>
            <p>
              My classes at Hillsborough Community College in networking, Linux,
              programming, information assurance/security operations can help me
              develop an understanding of the systems that security automation
              AI agents monitor. Attending a four-year college or university to
              receive a bachelor’s degree will allow me to gain further
              education in cybersecurity, risk, and emerging technologies. Given
              my desire to pursue a career at organizations such as ReliaQuest
              that have increased integration of human analysts with AI-assisted
              detection/response capabilities, my interest in agentic AI is
              particularly relevant.
            </p>
          </article>
          <article>
            <h2>Why This Matters to Me</h2>
            <p>
              I am interested in agentic AI because I believe it ties together
              cybersecurity with one of the most rapidly evolving fields within
              computer science. I am excited about learning how agentic AI can
              increase the speed at which organizations respond to cyberattacks.
              In order to effectively use agentic AI tools, I need to understand
              both the advantages and disadvantages so that I can be prepared to
              evolve with the ever-changing landscape of cybersecurity jobs and
              threats.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

function Sources() {
  return (
    <main id="content">
      <Intro
        eyebrow="Works Cited"
        title="Research & References"
        text="The sources below support the academic, career, and emerging-technology information presented throughout this website."
      />
      <section className="source-list">
        {sources.map(([org, title, url], i) => (
          <article key={url}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="label">{org}</p>
              <h2>{title}</h2>
              <a href={url} target="_blank" rel="noreferrer">
                View source ↗
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export function SitePage({ page }: { page: PageKey }) {
  const content =
    page === "home" ? (
      <Home />
    ) : page === "hcc" ? (
      <Hcc />
    ) : page === "beyond" ? (
      <Beyond />
    ) : page === "career" ? (
      <Career />
    ) : page === "technology" ? (
      <Technology />
    ) : (
      <Sources />
    );
  return <Shell active={page}>{content}</Shell>;
}
