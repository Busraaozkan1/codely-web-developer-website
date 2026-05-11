"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("tr");

  const content = useMemo(
    () =>
      lang === "tr"
        ? {
            nav: {
              services: "Hizmetler",
              projects: "Projeler",
              contact: "İletişim",
            },
            heroChip: "Hedefi büyük markalar için premium web çözümleri",
            heroTitle: (
              <>
                Markanızı <span className="hero-emphasis">etkileyici</span> tasarım ve hızlı kodla dijitalde{" "}
                <span className="hero-accent">öne çıkarın</span>.
              </>
            ),
            heroSubtitle:
              "Kurumsal tanıtım sitelerinden özel iş akışlarına kadar; strateji, tasarım, geliştirme ve yayın süreçlerini tek bir profesyonel hatta yönetiyoruz.",
            heroPrimary: "Projeleri İnceleyin",
            heroSecondary: "İletişime Geçin",
            stats: ["Ölçeklenebilir mimari", "Yüksek performans odaklı", "Uzun vadeli bakım yaklaşımı"],
            pulseTitle: "Yayına giden süreçte teknik kalite güvencesi",
            pulseRows: [
              ["Core Web Vitals ve hız optimizasyonu", "Öncelikli"],
              ["SEO uyumlu teknik kurgu", "Standart"],
              ["Sürdürülebilir kod mimarisi", "Dahil"],
            ],
            servicesKicker: "Hizmetler",
            servicesTitle: "Büyüme hedefi olan markalar için premium dijital üretim.",
            services: [
              ["Web Tasarım", "Marka kimliğini net anlatan, güven veren ve dikkat çeken arayüzler."],
              ["Next.js Geliştirme", "SEO dostu, hızlı, ölçeklenebilir ve modern mimariyle güçlü altyapı."],
              ["MVC Tabanlı Kurumsal Çözümler", "Kurumsal operasyonlara uygun, düzenli ve sürdürülebilir yapı."],
              ["UI/UX İyileştirme", "Kullanıcı yolculuğunu sadeleştiren dönüşüm odaklı deneyim kurgusu."],
              ["Teknik SEO", "Arama motorlarında görünürlük için kod ve içerik katmanında optimizasyon."],
              ["Bakım ve Gelişim", "Yayından sonra performans takibi, güncelleme ve yeni özellik planlaması."],
            ],
            projectsKicker: "Deneyim",
            projectsTitle: "Gerçek projelerde uygulanan teknoloji ve sonuç odaklı yaklaşım.",
            projectCta: "Siteyi ziyaret edin",
            projects: [
              {
                name: "Toros Solar",
                url: "https://torossolar.com",
                summary:
                  "Next.js tabanlı, hızlı açılan ve SEO odaklı kurumsal yapı. Bileşen temelli mimari sayesinde içerik güncellemeleri ve yeni sayfa genişletmeleri kontrollü şekilde yönetiliyor.",
                details: [
                  "Next.js App Router mimarisi",
                  "Sunucu tarafı render ile güçlü indekslenebilirlik",
                  "Hız ve teknik SEO odaklı yayın altyapısı",
                ],
              },
              {
                name: "Tuna Civata",
                url: "https://tunacivata.com",
                summary:
                  "MVC tabanlı kurumsal web çözümü. Ürün ve içerik yönetimini düzenli katmanlara ayırarak bakım maliyetini düşüren, uzun vadede stabil çalışacak şekilde tasarlanmış bir yapı.",
                details: [
                  "MVC katmanlı mimari",
                  "Kurumsal ürün içerik yönetimine uygun yapı",
                  "Sürdürülebilir ve genişletilebilir kod organizasyonu",
                ],
              },
            ],
            workflowKicker: "Süreç",
            workflowTitle: "Fikirden yayına net, ölçülebilir ve profesyonel sistem.",
            workflow: [
              [
                "01",
                "Stratejik Keşif ve Planlama",
                "İş hedefleri, hedef kitle, rekabet ve teknik gereksinimler analiz edilerek net bir yol haritası oluşturulur.",
              ],
              [
                "02",
                "Deneyim ve Görsel Tasarım",
                "Marka diliyle uyumlu, premium görsel yön ve kullanıcı akışlarını güçlendiren UX/UI tasarım sistemi hazırlanır.",
              ],
              [
                "03",
                "Mühendislik ve Uygulama",
                "Frontend ve backend katmanları performans, güvenlik ve sürdürülebilirlik odaklı modern standartlarla geliştirilir.",
              ],
              [
                "04",
                "Yayın, Optimizasyon ve Takip",
                "Canlıya alım sonrası hız, teknik SEO ve kullanıcı davranışları izlenir; sistem sürekli iyileştirilir.",
              ],
            ],
            contactKicker: "İletişim",
            contactTitle: "Projenizi birlikte net ve güçlü bir şekilde hayata geçirelim.",
            contactCopy:
              "İletişim için yandaki kanalları kullanabilirsiniz. Talebinizi inceledikten sonra en kısa sürede tarafınıza dönüş sağlanacaktır.",
            contactHighlights: ["Ortalama dönüş süresi: 24 saat", "Çalışma modeli: Uzaktan / Hibrit", "Proje başlangıcı: Net kapsam ve takvim"],
            contactSideKicker: "İletişim kanalları",
            contactSideTitle: "Hızlı ulaşım bilgileri",
            contactLinkedIn: "LinkedIn",
            contactMail: "Mail",
            footerTitle: "Codely",
            footerText:
              "Premium dijital ürün geliştirme, modern web mimarisi ve yüksek performans odaklı kurumsal çözümler.",
            footerTagline: "Kurumsal web siteleri, performans odaklı frontend ve sürdürülebilir backend mimarileri.",
            quickAccess: "Hızlı Erişim",
            rights: "© 2026 Codely. Tüm hakları saklıdır.",
          }
        : {
            nav: {
              services: "Services",
              projects: "Projects",
              contact: "Contact",
            },
            heroChip: "Premium web solutions for ambitious brands",
            heroTitle: (
              <>
                Elevate your brand with <span className="hero-emphasis">striking</span> design and fast code to{" "}
                <span className="hero-accent">stand out</span> digitally.
              </>
            ),
            heroSubtitle:
              "From corporate websites to custom workflows, we manage strategy, design, development, and launch in one professional pipeline.",
            heroPrimary: "Explore Projects",
            heroSecondary: "Get in Touch",
            stats: ["Scalable architecture", "Performance-first approach", "Long-term maintenance mindset"],
            pulseTitle: "Technical quality assurance from build to launch",
            pulseRows: [
              ["Core Web Vitals and speed optimization", "Priority"],
              ["SEO-ready technical foundation", "Standard"],
              ["Sustainable code architecture", "Included"],
            ],
            servicesKicker: "Services",
            servicesTitle: "Premium digital production for growth-focused brands.",
            services: [
              ["Web Design", "Trust-building interfaces that clearly communicate your brand."],
              ["Next.js Development", "Fast, SEO-friendly, scalable infrastructure with modern architecture."],
              ["MVC-Based Enterprise Solutions", "Organized and sustainable systems for business operations."],
              ["UI/UX Optimization", "Conversion-focused experiences with cleaner user journeys."],
              ["Technical SEO", "Code and content layer optimization for stronger search visibility."],
              ["Maintenance & Growth", "Post-launch monitoring, updates, and feature planning."],
            ],
            projectsKicker: "Experience",
            projectsTitle: "Technology-driven delivery with measurable project impact.",
            projectCta: "Visit Website",
            projects: [
              {
                name: "Toros Solar",
                url: "https://torossolar.com",
                summary:
                  "A fast and SEO-focused corporate platform built with Next.js. The component-driven architecture keeps content updates and page expansion controlled and scalable.",
                details: [
                  "Next.js App Router architecture",
                  "Server-side rendering for stronger indexability",
                  "Performance and technical SEO focused publishing setup",
                ],
              },
              {
                name: "Tuna Civata",
                url: "https://tunacivata.com",
                summary:
                  "An MVC-based corporate web solution designed for long-term stability. The layered architecture improves maintainability and keeps product/content operations structured.",
                details: [
                  "MVC layered architecture",
                  "Built for enterprise product content workflows",
                  "Sustainable and extensible code organization",
                ],
              },
            ],
            workflowKicker: "Process",
            workflowTitle: "A clear, measurable, and professional path from idea to launch.",
            workflow: [
              [
                "01",
                "Strategic Discovery & Planning",
                "Business goals, target audience, competition, and technical requirements are analyzed to create a clear roadmap.",
              ],
              [
                "02",
                "Experience & Visual Design",
                "A premium UX/UI system is created to align with brand language and strengthen user flows.",
              ],
              [
                "03",
                "Engineering & Implementation",
                "Frontend and backend layers are built with modern standards focused on performance, security, and sustainability.",
              ],
              [
                "04",
                "Launch, Optimization & Tracking",
                "After go-live, speed, technical SEO, and user behavior are monitored for continuous improvement.",
              ],
            ],
            contactKicker: "Contact",
            contactTitle: "Let us bring your project to life with clarity and impact.",
            contactCopy:
              "You can use the channels on the side for contact. After reviewing your request, we will get back to you as soon as possible.",
            contactHighlights: ["Average response time: 24 hours", "Working model: Remote / Hybrid", "Project kickoff: Clear scope and timeline"],
            contactSideKicker: "Contact channels",
            contactSideTitle: "Quick access",
            contactLinkedIn: "LinkedIn",
            contactMail: "Mail",
            footerTitle: "Codely",
            footerText: "Premium digital product development, modern web architecture, and high-performance enterprise solutions.",
            footerTagline: "Corporate websites, performance-focused frontend, and sustainable backend architectures.",
            quickAccess: "Quick Access",
            rights: "© 2026 Codely. All rights reserved.",
          },
    [lang],
  );

  return (
    <div className="landing-shell">
      <header className="container py-4 position-relative z-2">
        <nav className="glass-card nav-glass d-flex align-items-center justify-content-between px-3 px-md-4 py-3">
          <a href="#" className="brand-link d-flex align-items-center gap-3">
            <div className="logo-badge">CD</div>
            <div>
              <p className="mb-0 fw-semibold text-white brand-name">Codely</p>
              <small className="text-white-50">Digital Engineering</small>
            </div>
          </a>
          <div className="d-flex align-items-center gap-2 gap-md-3">
            <div className="lang-switch" role="group" aria-label="Language switch">
              <button
                className={`lang-btn ${lang === "tr" ? "active" : ""}`}
                onClick={() => setLang("tr")}
                type="button"
              >
                TR
              </button>
              <button
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
                type="button"
              >
                EN
              </button>
            </div>
            <div className="d-none d-md-flex align-items-center gap-3">
              <a className="nav-link-fx" href="#services">
                {content.nav.services}
              </a>
              <a className="nav-link-fx" href="#projects">
                {content.nav.projects}
              </a>
              <a className="nav-link-fx" href="#contact">
                {content.nav.contact}
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container position-relative z-2 pb-5">
        <section className="row align-items-center gy-5 hero-section surface-flow-top">
          <div className="col-lg-7">
            <div className="hero-chip mb-4">{content.heroChip}</div>
            <h1 className="hero-title mb-4">{content.heroTitle}</h1>
            <p className="hero-subtitle mb-4">{content.heroSubtitle}</p>
            <div className="hero-actions d-flex flex-wrap gap-3 mb-3">
              <a className="btn hero-btn-primary" href="#projects">
                {content.heroPrimary}
              </a>
              <a className="btn hero-btn-secondary" href="#contact">
                {content.heroSecondary}
              </a>
            </div>
            <div className="d-flex flex-wrap gap-2 stat-pills">
              {content.stats.map((stat) => (
                <span key={stat} className="pill">
                  {stat}
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="glass-card feature-panel p-4 p-md-5">
              <h3 className="text-white mb-3">{content.pulseTitle}</h3>
              <div className="d-grid gap-3">
                {content.pulseRows.map(([title, value]) => (
                  <div key={title} className="pulse-row">
                    <span>{title}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-5 surface-flow-mid">
          <div className="section-head mb-4">
            <p className="section-kicker">{content.servicesKicker}</p>
            <h2 className="section-title">{content.servicesTitle}</h2>
          </div>
          <div className="row g-4">
            {content.services.map(([title, text]) => (
              <div key={title} className="col-sm-6 col-xl-4">
                <article className="glass-card service-card h-100 p-4">
                  <h3>{title}</h3>
                  <p className="mb-0">{text}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-5 surface-flow-middeep">
          <div className="section-head mb-4">
            <p className="section-kicker">{content.projectsKicker}</p>
            <h2 className="section-title">{content.projectsTitle}</h2>
          </div>
          <div className="row g-4">
            {content.projects.map((project) => (
              <div key={project.name} className="col-md-6">
                <article className="project-card glass-card p-4 h-100">
                  <h3>{project.name}</h3>
                  <p className="project-result">{project.summary}</p>
                  <ul className="project-list mb-3">
                    {project.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {content.projectCta}
                  </a>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="py-5 surface-flow-bottom">
          <div className="glass-card p-4 p-md-5 workflow-wrap">
            <div className="section-head mb-4">
              <p className="section-kicker">{content.workflowKicker}</p>
              <h2 className="section-title">{content.workflowTitle}</h2>
            </div>
            <div className="row g-3">
              {content.workflow.map(([step, title, copy]) => (
                <div className="col-md-6" key={step}>
                  <div className="workflow-step h-100">
                    <span>{step}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-5 surface-flow-bottom">
          <div className="glass-card contact-panel contact-unified p-4 p-md-5">
            <div className="row g-4 align-items-start">
              <div className="col-lg-7">
                <p className="section-kicker">{content.contactKicker}</p>
                <h2 className="section-title mb-3">{content.contactTitle}</h2>
                <p className="contact-copy mb-4">{content.contactCopy}</p>
                <div className="contact-meta d-grid gap-2">
                  {content.contactHighlights.map((item) => (
                    <p key={item} className="contact-meta-item mb-0">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="col-lg-5">
                <aside className="contact-side-card h-100">
                  <p className="contact-side-kicker mb-2">{content.contactSideKicker}</p>
                  <h3 className="contact-side-title">{content.contactSideTitle}</h3>
                  <div className="contact-channel-list mb-0">
                    <a
                      href="https://linkedin.com/in/busranurozkan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn hero-btn-secondary contact-channel-btn"
                    >
                      {content.contactLinkedIn}
                    </a>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=busraozkan.dev@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn hero-btn-primary contact-channel-btn"
                    >
                      {content.contactMail}
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container pb-5 position-relative z-2">
        <div className="glass-card premium-footer px-4 py-4 px-md-5 py-md-4">
          <div className="row g-4 align-items-start footer-main-row">
            <div className="col-lg-8">
              <h3 className="footer-title mb-2">{content.footerTitle}</h3>
              <p className="mb-2 text-white-50 footer-copy">{content.footerText}</p>
              <p className="footer-note mb-0">{content.footerTagline}</p>
            </div>
            <div className="col-lg-4">
              <p className="footer-col-title">{content.quickAccess}</p>
              <div className="footer-links footer-links-grid">
                <a href="#services">{content.nav.services}</a>
                <a href="#projects">{content.nav.projects}</a>
                <a href="#contact">{content.nav.contact}</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-4 pt-3 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-2">
            <p className="mb-0">{content.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
