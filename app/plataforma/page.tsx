import Link from "next/link";

const modules = [
  {
    title: "Obras",
    text: "Cada proyecto concentra su información general, contrato, presupuesto, ejecución, documentos, evidencias, cortes y análisis.",
  },
  {
    title: "Presupuesto y APU",
    text: "Relaciona capítulos, actividades, cantidades, recursos, rendimientos, desperdicios y costos para mantener una estructura económica conectada.",
  },
  {
    title: "Ejecución",
    text: "Registra bitácoras, avances, materiales, equipos, novedades, retrasos y evidencias directamente relacionados con la obra.",
  },
  {
    title: "Cortes",
    text: "Controla cantidades, precios, valores, descuentos, impuestos, observaciones, evidencias y el flujo de revisión y aprobación.",
  },
  {
    title: "Documentos",
    text: "Genera actas, informes, cortes, cuentas de cobro y relaciones a partir de la información oficial de la obra.",
  },
  {
    title: "Costos y análisis",
    text: "Permite comparar presupuesto, ejecución y proyecciones para identificar desviaciones, riesgos y comportamiento histórico.",
  },
];

export default function PlataformaPage() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand">
            <img src="/public-logo.svg" alt="Plataforma de Obras" />
            <span>
              <span className="brand-name">Plataforma de Obras</span>
              <span className="brand-sub">Gestión integral</span>
            </span>
          </Link>

          <nav className="nav">
            <Link href="/plataforma">Plataforma</Link>
            <Link href="/como-funciona">Cómo funciona</Link>
            <Link href="/inteligencia">Inteligencia</Link>
          </nav>

          <Link href="/borrador/ingeniero-independiente" className="header-action">
            Ver experiencia
          </Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">La plataforma</p>

            <h1>
              Todo lo que ocurre en una obra,
              <br />
              <span>conectado.</span>
            </h1>

            <p className="hero-copy">
              Plataforma de Obras integra la información técnica,
              administrativa y financiera de cada proyecto en un mismo
              sistema. La información registrada una vez puede alimentar
              diferentes procesos sin repetir el trabajo.
            </p>

            <div className="hero-actions">
              <Link href="/como-funciona" className="button primary">
                Cómo funciona
              </Link>
              <Link href="/inteligencia" className="button secondary">
                Conocer la inteligencia
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="mock-window">
              <div className="mock-top">
                <span className="mock-dot" />
                <span className="mock-dot" />
                <span className="mock-dot" />
              </div>

              <div className="mock-body">
                <aside className="mock-sidebar">
                  <div className="mock-line" />
                  <div className="mock-line short" />
                  <div className="mock-line" />
                  <div className="mock-line short" />
                  <div className="mock-line" />
                </aside>

                <div className="mock-main">
                  <div className="mock-title" />

                  <div className="mock-cards">
                    <div className="mock-card">
                      <small>Presupuesto</small>
                      <strong>—</strong>
                    </div>

                    <div className="mock-card">
                      <small>Avance</small>
                      <strong>—</strong>
                    </div>

                    <div className="mock-card">
                      <small>Cortes</small>
                      <strong>—</strong>
                    </div>
                  </div>

                  <div className="mock-table">
                    <div className="mock-row">
                      <span>Información</span>
                      <span>Estado</span>
                      <span>Valor</span>
                    </div>
                    <div className="mock-row">
                      <span>Presupuesto</span>
                      <span>—</span>
                      <span>—</span>
                    </div>
                    <div className="mock-row">
                      <span>Ejecución</span>
                      <span>—</span>
                      <span>—</span>
                    </div>
                    <div className="mock-row">
                      <span>Cortes</span>
                      <span>—</span>
                      <span>—</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Módulos principales</p>

            <h2>
              Una estructura diseñada alrededor de la obra, no alrededor de
              archivos aislados.
            </h2>

            <p>
              Cada módulo trabaja con información relacionada. Esto permite
              conservar trazabilidad y evitar que la misma información tenga
              que ser digitada varias veces.
            </p>
          </div>

          <div className="feature-grid">
            {modules.map((module, index) => (
              <article className="feature" key={module.title}>
                <span className="feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{module.title}</h3>

                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark">
          <div className="section-heading">
            <p className="eyebrow">Principio de diseño</p>

            <h2>
              La plataforma se adapta a la empresa y no la empresa a la
              plataforma.
            </h2>

            <p>
              Las organizaciones pueden configurar sus procesos, roles,
              permisos y rutas de aprobación de acuerdo con la forma en que
              realmente trabajan.
            </p>
          </div>

          <div className="ai-grid">
            <div className="ai-list">
              <div className="ai-item">
                <strong>Roles configurables</strong>
                <span>
                  Cada organización puede definir responsabilidades y
                  permisos según sus procesos.
                </span>
              </div>

              <div className="ai-item">
                <strong>Flujos de aprobación</strong>
                <span>
                  Cada obra puede utilizar una ruta de aprobación configurada
                  para sus necesidades.
                </span>
              </div>

              <div className="ai-item">
                <strong>Información conectada</strong>
                <span>
                  Presupuesto, ejecución, cortes y documentos utilizan una
                  misma fuente de información.
                </span>
              </div>

              <div className="ai-item">
                <strong>Historial</strong>
                <span>
                  Los procesos importantes conservan trazabilidad y registro
                  de sus cambios.
                </span>
              </div>
            </div>

            <div className="ai-console">
              <div className="ai-console-top">
                <strong>Arquitectura de la plataforma</strong>
                <span className="ai-status">Control</span>
              </div>

              <div className="ai-message">
                Los cálculos oficiales pertenecen al motor de negocio. La
                inteligencia analiza la información y propone acciones.
              </div>

              <div className="ai-insight">
                Las acciones críticas requieren autorización. La IA no
                aprueba cortes, modifica permisos críticos ni elimina
                información por su cuenta.
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <p className="eyebrow">Siguiente paso</p>

          <h2>
            Conoce cómo se mueve la información desde que nace una obra hasta
            que se analiza.
          </h2>

          <p>
            La plataforma está pensada para que cada proceso tenga contexto,
            trazabilidad y continuidad.
          </p>

          <div className="hero-actions">
            <Link href="/como-funciona" className="button primary">
              Cómo funciona
            </Link>

            <Link href="/borrador/ingeniero-independiente" className="button secondary">
              Ver un caso
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>Plataforma de Obras</span>
          <span>Gestión integral para construcción</span>
        </div>
      </footer>
    </>
  );
}