"use client";

import { useState } from "react";

type Lang = "en" | "ar";

const partners = ["UNDP", "UNICEF", "UNFPA", "WFP", "IOM", "USAID", "GIZ", "OXFAM", "CARE"];

const content = {
  en: {
    language: "العربية",
    nav: ["Who we are", "Our work", "Reintegration", "Contact"],
    org: "Hope Organization for Development & Improvement",
    badge: "Woman-led Iraqi NGO · Established 2008",
    heroTitle: "Locally led solutions for a peaceful, resilient Iraq.",
    heroText:
      "HOPE connects humanitarian response, recovery, peacebuilding and sustainable development—working with communities and institutions to turn local priorities into lasting results.",
    heroPrimary: "Explore our work",
    heroSecondary: "Partner with HOPE",
    registrations: "Registered with the Federal NGO Directorate and the Kurdistan Region",
    imageCaption: "Capacity development and partnership building across Iraq",
    imageLabel: "Field experience",
    facts: [
      ["2008", "Working with communities since"],
      ["8", "Governorates with operational experience"],
      ["16+", "Integrated areas of intervention"],
      ["2", "Active organizational registrations"],
    ],
    partnerLabel: "Donors and strategic partners across HOPE’s experience",
    aboutKicker: "Who we are",
    aboutTitle: "An Iraqi organization built around dignity, participation and local ownership.",
    aboutText:
      "Headquartered in Mosul, HOPE supports vulnerable, conflict-affected and underserved communities through community-centred, rights-based, conflict-sensitive and inclusive programming. We work with local authorities, civil society, UN agencies, academia, the private sector, women, youth and community leaders.",
    visionLabel: "Our vision",
    vision:
      "A peaceful, inclusive, resilient and sustainable Iraq where every person can live with dignity, equality, justice and access to opportunity.",
    programmesKicker: "Integrated programme portfolio",
    programmesTitle: "From immediate needs to stronger systems.",
    programmesText:
      "HOPE works across the humanitarian–development–peace nexus, combining technical expertise with locally led delivery.",
    programmes: [
      ["01", "Peacebuilding & social cohesion", "Dialogue, reconciliation, community stabilization and inclusive local participation."],
      ["02", "Protection & access to justice", "Legal aid, civil documentation, referral pathways and protection-sensitive services."],
      ["03", "Livelihoods & economic recovery", "Market-oriented skills, employability, entrepreneurship and private-sector engagement."],
      ["04", "Women & youth leadership", "Leadership, civic engagement, WPS, mentoring and meaningful participation."],
      ["05", "Climate resilience", "Locally driven adaptation, sustainable agriculture and environmentally responsible recovery."],
      ["06", "Education & institutional capacity", "Learning, vocational training, systems strengthening and organizational development."],
    ],
    evidenceKicker: "HOPE in action",
    evidenceTitle: "Experience grounded in Iraqi communities.",
    gallery: [
      ["/community-recovery.jpg", "Early recovery", "Community recovery and humanitarian response in conflict-affected areas."],
      ["/women-leadership.jpg", "Women’s leadership", "Safe, inclusive spaces for women’s participation and institutional engagement."],
      ["/peacebuilding-dialogue.jpg", "Peacebuilding", "Dialogue with community, religious and local leadership structures."],
    ],
    reintegrationKicker: "Strategic programming area",
    reintegrationTitle: "Reintegration and stabilization—connected from national systems to local recovery.",
    reintegrationText:
      "HOPE’s proposed model links national capacity development in Baghdad with locally led implementation in Anbar, Kirkuk, Salah al-Din and Ninewa. This creates one coherent pathway for institutions, communities, returnees and vulnerable host populations.",
    nationalLabel: "National level",
    nationalPlace: "Baghdad",
    nationalText:
      "Strengthen national coordination, institutional capacity and shared standards for sustainable reintegration programming.",
    nationalItems: [
      "Government, civil-society and partner capacity building",
      "Policy dialogue and inter-governorate coordination",
      "Harmonized referral pathways and programme standards",
      "Evidence, learning and replication across Iraq",
    ],
    localLabel: "Local level",
    localPlaces: ["Anbar", "Kirkuk", "Salah al-Din", "Ninewa"],
    localText:
      "Translate national direction into conflict-sensitive, community-owned support tailored to each governorate.",
    localItems: [
      "Local authority and civil-society capacity building",
      "Returnee and host-community engagement",
      "Social cohesion, dialogue and conflict mitigation",
      "Protection, legal aid and civil documentation",
      "Livelihoods, employability and private-sector links",
      "Women and youth leadership in recovery",
    ],
    pathwayLabel: "Integrated delivery pathway",
    pathway: [
      ["01", "Assess & engage", "Context, conflict and stakeholder analysis"],
      ["02", "Strengthen systems", "National and local capacity development"],
      ["03", "Support people", "Protection, livelihoods and referrals"],
      ["04", "Build trust", "Dialogue and community-led initiatives"],
      ["05", "Learn & scale", "Evidence, adaptation and replication"],
    ],
    nationalPhoto: "National-level capacity building and coordination",
    localPhoto: "Locally delivered institutional and community capacity development",
    contactKicker: "Work with us",
    contactTitle: "Build the next programme with HOPE.",
    contactText:
      "HOPE welcomes partnerships with UN agencies, donors, international NGOs, government institutions, academia and responsible private-sector actors.",
    contactButton: "Contact our grants team",
    hq: "Headquarters",
    hqValue: "Al Noor, Mosul, Ninewa",
    office: "Sub-office",
    officeValue: "Tikrit, Salah al-Din",
    rights: "© 2026 HOPE. Private website review version.",
  },
  ar: {
    language: "English",
    nav: ["من نحن", "مجالات العمل", "إعادة الإدماج", "تواصل"],
    org: "منظمة الرجاء للتنمية والتطوير",
    badge: "منظمة عراقية تقودها امرأة · تأسست عام 2008",
    heroTitle: "حلول يقودها المجتمع من أجل عراقٍ آمن وقادر على الصمود.",
    heroText:
      "تربط HOPE بين الاستجابة الإنسانية والتعافي وبناء السلام والتنمية المستدامة، وتعمل مع المجتمعات والمؤسسات لتحويل الأولويات المحلية إلى نتائج دائمة.",
    heroPrimary: "استكشف عملنا",
    heroSecondary: "كن شريكاً لـ HOPE",
    registrations: "مسجلة لدى دائرة المنظمات غير الحكومية الاتحادية وإقليم كردستان",
    imageCaption: "بناء القدرات وتطوير الشراكات في أنحاء العراق",
    imageLabel: "خبرة ميدانية",
    facts: [
      ["2008", "نعمل مع المجتمعات منذ"],
      ["8", "محافظات ذات خبرة تشغيلية"],
      ["+16", "مجال تدخل مترابط"],
      ["2", "تسجيلات تنظيمية فعّالة"],
    ],
    partnerLabel: "مانحون وشركاء استراتيجيون ضمن خبرة HOPE",
    aboutKicker: "من نحن",
    aboutTitle: "منظمة عراقية تقوم على الكرامة والمشاركة والملكية المحلية.",
    aboutText:
      "من مقرها في الموصل، تدعم HOPE المجتمعات الهشة والمتأثرة بالنزاع والمحرومة من الخدمات عبر برامج مجتمعية قائمة على الحقوق ومراعية للنزاع وشاملة للجميع. ونعمل مع السلطات المحلية والمجتمع المدني ووكالات الأمم المتحدة والجامعات والقطاع الخاص والنساء والشباب وقادة المجتمع.",
    visionLabel: "رؤيتنا",
    vision:
      "عراق آمن وشامل وقادر على الصمود ومستدام، يعيش فيه الجميع بكرامة ومساواة وعدالة ويتمتعون بفرص متكافئة.",
    programmesKicker: "محفظة برامج متكاملة",
    programmesTitle: "من الاحتياجات العاجلة إلى أنظمة أقوى.",
    programmesText:
      "تعمل HOPE ضمن ترابط العمل الإنساني والتنمية والسلام، وتجمع بين الخبرة الفنية والتنفيذ بقيادة محلية.",
    programmes: [
      ["01", "بناء السلام والتماسك الاجتماعي", "الحوار والمصالحة والاستقرار المجتمعي والمشاركة المحلية الشاملة."],
      ["02", "الحماية والوصول إلى العدالة", "المساعدة القانونية والوثائق المدنية ومسارات الإحالة والخدمات المراعية للحماية."],
      ["03", "سبل العيش والتعافي الاقتصادي", "مهارات مرتبطة بالسوق والتوظيف وريادة الأعمال والتعاون مع القطاع الخاص."],
      ["04", "قيادة النساء والشباب", "القيادة والمشاركة المدنية وأجندة المرأة والسلام والأمن والإرشاد والمشاركة الفاعلة."],
      ["05", "القدرة على مواجهة التغير المناخي", "التكيف المحلي والزراعة المستدامة والتعافي المسؤول بيئياً."],
      ["06", "التعليم والقدرات المؤسسية", "التعلم والتدريب المهني وتعزيز الأنظمة والتطوير المؤسسي."],
    ],
    evidenceKicker: "HOPE في الميدان",
    evidenceTitle: "خبرة متجذرة في المجتمعات العراقية.",
    gallery: [
      ["/community-recovery.jpg", "التعافي المبكر", "التعافي المجتمعي والاستجابة الإنسانية في المناطق المتأثرة بالنزاع."],
      ["/women-leadership.jpg", "قيادة النساء", "مساحات آمنة وشاملة لمشاركة النساء والتواصل المؤسسي."],
      ["/peacebuilding-dialogue.jpg", "بناء السلام", "الحوار مع القيادات المجتمعية والدينية والمحلية."],
    ],
    reintegrationKicker: "مجال برامجي استراتيجي",
    reintegrationTitle: "إعادة الإدماج والاستقرار—من الأنظمة الوطنية إلى التعافي المحلي.",
    reintegrationText:
      "يربط نموذج HOPE المقترح بناء القدرات الوطنية في بغداد بالتنفيذ المحلي في الأنبار وكركوك وصلاح الدين ونينوى، ليشكل مساراً واحداً متكاملاً يخدم المؤسسات والمجتمعات والعائدين والمجتمعات المضيفة الهشة.",
    nationalLabel: "المستوى الوطني",
    nationalPlace: "بغداد",
    nationalText:
      "تعزيز التنسيق الوطني والقدرات المؤسسية والمعايير المشتركة لبرامج إعادة إدماج مستدامة.",
    nationalItems: [
      "بناء قدرات الحكومة والمجتمع المدني والشركاء",
      "حوار السياسات والتنسيق بين المحافظات",
      "توحيد مسارات الإحالة والمعايير البرامجية",
      "إنتاج الأدلة والتعلم وتوسيع النموذج في العراق",
    ],
    localLabel: "المستوى المحلي",
    localPlaces: ["الأنبار", "كركوك", "صلاح الدين", "نينوى"],
    localText:
      "تحويل التوجه الوطني إلى دعم محلي يراعي النزاع ويقوده المجتمع وفق خصوصية كل محافظة.",
    localItems: [
      "بناء قدرات السلطات المحلية والمجتمع المدني",
      "إشراك العائدين والمجتمعات المضيفة",
      "التماسك الاجتماعي والحوار والحد من النزاعات",
      "الحماية والمساعدة القانونية والوثائق المدنية",
      "سبل العيش والتوظيف والربط بالقطاع الخاص",
      "قيادة النساء والشباب في التعافي",
    ],
    pathwayLabel: "مسار تنفيذ متكامل",
    pathway: [
      ["01", "التقييم والمشاركة", "تحليل السياق والنزاع وأصحاب المصلحة"],
      ["02", "تعزيز الأنظمة", "بناء القدرات على المستويين الوطني والمحلي"],
      ["03", "دعم الأفراد", "الحماية وسبل العيش والإحالات"],
      ["04", "بناء الثقة", "الحوار والمبادرات التي يقودها المجتمع"],
      ["05", "التعلم والتوسّع", "الأدلة والتكيف وتكرار النموذج"],
    ],
    nationalPhoto: "بناء القدرات والتنسيق على المستوى الوطني",
    localPhoto: "تطوير القدرات المؤسسية والمجتمعية بقيادة محلية",
    contactKicker: "اعمل معنا",
    contactTitle: "ابنِ البرنامج القادم مع HOPE.",
    contactText:
      "ترحب HOPE بالشراكات مع وكالات الأمم المتحدة والمانحين والمنظمات الدولية والمؤسسات الحكومية والجامعات والقطاع الخاص المسؤول.",
    contactButton: "تواصل مع فريق المنح",
    hq: "المقر الرئيسي",
    hqValue: "حي النور، الموصل، نينوى",
    office: "المكتب الفرعي",
    officeValue: "تكريت، صلاح الدين",
    rights: "© 2026 HOPE. نسخة موقع خاصة للمراجعة.",
  },
};

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-9" />
    </svg>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const isAr = lang === "ar";

  return (
    <main dir={isAr ? "rtl" : "ltr"} className={isAr ? "lang-ar" : "lang-en"}>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="HOPE home">
          <img src="/hope-logo.jpg" alt="HOPE official logo" />
          <span>
            <strong>HOPE</strong>
            <small>{t.org}</small>
          </span>
        </a>

        <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a>
          <a href="#programmes" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a>
          <a href="#reintegration" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav[3]}</a>
        </nav>

        <div className="header-actions">
          <button
            className="language-button"
            onClick={() => setLang(isAr ? "en" : "ar")}
            aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
          >
            {t.language}
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span />{t.badge}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-text">{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programmes">{t.heroPrimary}<Arrow /></a>
            <a className="button button-secondary" href="#contact">{t.heroSecondary}</a>
          </div>
          <p className="registration-note"><Check />{t.registrations}</p>
        </div>

        <figure className="hero-media">
          <img src="/national-capacity-building.jpg" alt={t.imageCaption} />
          <figcaption>
            <span>{t.imageLabel}</span>
            <strong>{t.imageCaption}</strong>
          </figcaption>
          <div className="hero-stamp"><img src="/hope-logo.jpg" alt="" /></div>
        </figure>

        <div className="fact-strip">
          {t.facts.map(([number, label]) => (
            <div key={label}><strong>{number}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <div className="partner-strip" aria-label={t.partnerLabel}>
        <p>{t.partnerLabel}</p>
        <div>{partners.map((partner) => <span key={partner}>{partner}</span>)}</div>
      </div>

      <section className="institutional-section" id="about">
        <div className="about-grid">
          <div className="section-heading">
            <p className="section-kicker">{t.aboutKicker}</p>
            <h2>{t.aboutTitle}</h2>
          </div>
          <div className="about-copy">
            <p>{t.aboutText}</p>
            <blockquote><span>{t.visionLabel}</span>{t.vision}</blockquote>
          </div>
        </div>

        <div className="programmes-block" id="programmes">
          <div className="programmes-intro">
            <p className="section-kicker">{t.programmesKicker}</p>
            <h2>{t.programmesTitle}</h2>
            <p>{t.programmesText}</p>
          </div>
          <div className="programme-grid">
            {t.programmes.map(([number, title, text]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>

        <div className="evidence-block">
          <div className="evidence-heading">
            <p className="section-kicker">{t.evidenceKicker}</p>
            <h2>{t.evidenceTitle}</h2>
          </div>
          <div className="photo-grid">
            {t.gallery.map(([src, title, text]) => (
              <figure key={src}>
                <img src={src} alt={text} />
                <figcaption><span>{title}</span><p>{text}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="reintegration-section" id="reintegration">
        <div className="reintegration-intro">
          <p className="section-kicker light">{t.reintegrationKicker}</p>
          <h2>{t.reintegrationTitle}</h2>
          <p>{t.reintegrationText}</p>
        </div>

        <div className="levels-diagram">
          <article className="level-card national-level">
            <div className="level-heading"><span>{t.nationalLabel}</span><strong>{t.nationalPlace}</strong></div>
            <p>{t.nationalText}</p>
            <ul>{t.nationalItems.map((item) => <li key={item}><Check />{item}</li>)}</ul>
          </article>

          <div className="connection" aria-hidden="true"><span /></div>

          <article className="level-card local-level">
            <div className="level-heading">
              <span>{t.localLabel}</span>
              <div className="place-pills">{t.localPlaces.map((place) => <strong key={place}>{place}</strong>)}</div>
            </div>
            <p>{t.localText}</p>
            <ul>{t.localItems.map((item) => <li key={item}><Check />{item}</li>)}</ul>
          </article>
        </div>

        <div className="capacity-photos">
          <figure>
            <img src="/national-capacity-building.jpg" alt={t.nationalPhoto} />
            <figcaption><span>01</span>{t.nationalPhoto}</figcaption>
          </figure>
          <figure>
            <img src="/local-capacity-building.jpg" alt={t.localPhoto} />
            <figcaption><span>02</span>{t.localPhoto}</figcaption>
          </figure>
        </div>

        <div className="pathway-block">
          <p>{t.pathwayLabel}</p>
          <div className="pathway-grid">
            {t.pathway.map(([number, title, text]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>

        <div className="contact-panel" id="contact">
          <div>
            <p className="section-kicker">{t.contactKicker}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a className="button button-primary" href="mailto:grantfocalpoint@gmail.com">{t.contactButton}<Arrow /></a>
          </div>
          <dl>
            <div><dt>{t.hq}</dt><dd>{t.hqValue}</dd></div>
            <div><dt>{t.office}</dt><dd>{t.officeValue}</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:grantfocalpoint@gmail.com">grantfocalpoint@gmail.com</a></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+9647769266006">+964 776 926 6006</a></dd></div>
          </dl>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/hope-logo.jpg" alt="HOPE logo" />
          <span><strong>HOPE</strong><small>{t.org}</small></span>
        </div>
        <div className="footer-meta">
          <a href="https://hope-raja.org" target="_blank" rel="noreferrer">www.hope-raja.org</a>
          <span>{t.rights}</span>
        </div>
      </footer>
    </main>
  );
}
