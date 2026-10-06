import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Crear o recibir acceso",
    text: "La experiencia comienza según el tipo de usuario. Una persona puede trabajar de forma independiente o pertenecer a una organización mediante una invitación.",
  },
  {
    number: "02",
    title: "Configurar la organización",
    text: "Cuando existe una empresa, sus responsables pueden definir roles, permisos y la forma en que se gestionan las obras.",
  },
  {
    number: "03",
    title: "Crear la obra",
    text: "Se registra la información general, cliente, responsables, contrato, presupuesto, actividades y estructura inicial del proyecto.",
  },
  {
    number: "04",
    title: "Ejecutar",
    text: "La información de campo se registra mediante bitácoras, avances, cantidades, materiales, novedades y evidencias.",
  },
  {
    number: "05",
    title: "Revisar cortes",
    text: "Los cortes recorren el flujo configurado, mantienen estados e historial y requieren las autorizaciones correspondientes.",
  },
  {
    number: "06",
    title: "Generar documentos",
    text: "La información estructurada puede utilizarse para producir documentos oficiales como actas, informes y cortes.",
  },
  {
    number: "07",
    title: "Analizar",
    text: "La información acumulada permite analizar costos, avances, desviaciones, tiempos, riesgos y comportamiento histórico.",
  },
];

export default function ComoFuncionaPage() {
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
            <p className="eyebrow">Cómo funciona</p>

            <h1>
              La información sigue
              <br />
              <span>el proceso de la obra.</span>
            </h1>

            <p className="hero-copy">
              La plataforma conecta planificación, ejecución, revisión,
              documentación y análisis. El objetivo es que cada dato tenga
              contexto y pueda reutilizarse durante todo el proyecto.
            </p>

            <div className="hero-actions">
              <Link href="/plataforma" className="button primary">
                Ver módulos
              </Link>

              <Link href="/inteligencia" className="button secondary">
                Ver inteligencia
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
                </aside>

                <div className="mock-main">
                  <div className="mock-title" />

                  <div className="mock-table">
                    <div className="mock-row">
                      <span>Proceso</span>
                      <span>Estado</span>
                      <span>Historial</span>
                    </div>
                    <div className="mock-row">
                      <span>Planificación</span>
                      <span>—</span>
                      <span>—</span>
                    </div>
                    <div className="mock-row">
                      <span>Ejecución</span>
                      <span>—</span>
                      <span>—</span>
                    </div>
                    <div className="mock-row">
                      <span>Revisión</span>
                      <span>—</span>
                      <span>—</span>
                    </div>
                    <div className="mock-row">
                      <span>Documentación</span>
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
            <p className="eyebrow">Flujo de trabajo</p>

            <h2>
              Desde el primer dato hasta la decisión final.
            </h2>

            <p>
              La plataforma no obliga a que todas las empresas trabajen
              exactamente igual. El flujo puede configurarse de acuerdo con
              las responsabilidades y aprobaciones de cada organización.
            </p>
          </div>

          <div className="process">
            {steps.slice(0, 4).map((step) => (
              <article className="process-step" key={step.number}>
                <b>{step.number}</b>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Continuidad</p>

            <h2>
              Lo que ocurre después de la ejecución también queda conectado.
            </h2>
          </div>

          <div className="feature-grid">
            {steps.slice(4).map((step) => (
              <article className="feature" key={step.number}>
                <span className="feature-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark">
          <div className="section-heading">
            <p className="eyebrow">Trazabilidad</p>

            <h2>
              Los procesos importantes no desaparecen cuando cambian de
              estado.
            </h2>

            <p>
              Los cortes, documentos y otros registros importantes conservan
              su historial. Después de una aprobación o cierre, las
              modificaciones críticas deben realizarse mediante mecanismos
              controlados.
            </p>
          </div>

          <div className="ai-grid">
            <div className="ai-list">
              <div className="ai-item">
                <strong>Borrador</strong>
                <span>La información puede prepararse antes de enviarse.</span>
              </div>

              <div className="ai-item">
                <strong>Revisión</strong>
                <span>
                  El responsable autorizado puede revisar y devolver
                  información cuando sea necesario.
                </span>
              </div>

              <div className="ai-item">
                <strong>Aprobación</strong>
                <span>
                  La aprobación queda registrada y no debe ser modificada
                  silenciosamente.
                </span>
              </div>

              <div className="ai-item">
                <strong>Cierre</strong>
                <span>
                  El registro conserva su resultado y puede relacionarse con
                  documentos y pagos.
                </span>
              </div>
            </div>

            <div className="ai-console">
              <div className="ai-console-top">
                <strong>Ejemplo de flujo</strong>
                <span className="ai-status">Trazable</span>
              </div>

              <div className="ai-message">
                DRAFT → SUBMITTED → IN_REVIEW → RETURNED → CORRECTED →
                APPROVED → CLOSED
              </div>

              <div className="ai-insight">
                Las rutas pueden configurarse por obra. El flujo no depende de
                una jerarquía única e inamovible.
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <p className="eyebrow">Experiencia</p>

          <h2>
            Ahora podemos mostrar cómo se vería una obra gestionada dentro de
            la plataforma.
          </h2>

          <p>
            El siguiente espacio es una experiencia conceptual basada en el
            flujo de un ingeniero independiente.
          </p>

          <div className="hero-actions">
            <Link
              href="/borrador/ingeniero-independiente"
              className="button primary"
            >
              Ver experiencia
            </Link>

            <Link href="/" className="button secondary">
              Volver al inicio
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