import Link from "next/link";

const aiModules = [
  {
    title: "Precios",
    text: "Analiza precios registrados, materiales, especificaciones, proveedores, cantidades, transporte, condiciones y fechas.",
  },
  {
    title: "Cotizaciones",
    text: "Ayuda a comparar alternativas considerando precio, transporte, calidad, cantidades, forma de pago y entrega.",
  },
  {
    title: "APU",
    text: "Analiza materiales, mano de obra, equipos, herramientas, rendimientos, desperdicios y costos directos.",
  },
  {
    title: "Presupuesto y costos",
    text: "Relaciona lo presupuestado con lo ejecutado y proyectado para detectar desviaciones y situaciones que requieren atención.",
  },
  {
    title: "Revisión de cortes",
    text: "Contrasta cantidades, precios, acumulados y evidencias para señalar posibles inconsistencias.",
  },
  {
    title: "Bitácora",
    text: "Resume novedades, problemas, retrasos, actividades y evidencias registradas durante la ejecución.",
  },
  {
    title: "Planificación",
    text: "Ayuda a identificar retrasos, prioridades y diferencias entre el avance previsto y el real.",
  },
  {
    title: "Análisis empresarial",
    text: "Relaciona obras, costos, cortes, presupuestos, avances, tiempos y riesgos para obtener una visión global.",
  },
];

export default function InteligenciaPage() {
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
            <p className="eyebrow">Inteligencia para construcción</p>

            <h1>
              IA que analiza la obra,
              <br />
              <span>sin tomar el control.</span>
            </h1>

            <p className="hero-copy">
              La inteligencia utiliza la información disponible en la
              plataforma para encontrar patrones, advertir posibles
              problemas, resumir información y proponer acciones.
            </p>

            <div className="hero-actions">
              <Link href="/plataforma" className="button primary">
                Ver la plataforma
              </Link>

              <Link href="/borrador/ingeniero-independiente" className="button secondary">
                Ver experiencia
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
                      <small>Alertas</small>
                      <strong>—</strong>
                    </div>

                    <div className="mock-card">
                      <small>Desviaciones</small>
                      <strong>—</strong>
                    </div>

                    <div className="mock-card">
                      <small>Riesgos</small>
                      <strong>—</strong>
                    </div>
                  </div>

                  <div className="mock-table">
                    <div className="mock-row">
                      <span>Análisis</span>
                      <span>Nivel</span>
                      <span>Estado</span>
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

        <section className="section dark">
          <div className="section-heading">
            <p className="eyebrow">Una inteligencia central</p>

            <h2>
              Una sola inteligencia con diferentes capacidades especializadas.
            </h2>

            <p>
              La plataforma puede utilizar distintos módulos de análisis sin
              convertir cada función en una herramienta aislada. La
              información y el contexto permanecen conectados.
            </p>
          </div>

          <div className="feature-grid">
            {aiModules.slice(0, 6).map((module, index) => (
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

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Más capacidades</p>

            <h2>
              El análisis puede crecer junto con la información de la empresa.
            </h2>
          </div>

          <div className="feature-grid">
            {aiModules.slice(6).map((module, index) => (
              <article className="feature" key={module.title}>
                <span className="feature-number">
                  {String(index + 7).padStart(2, "0")}
                </span>

                <h3>{module.title}</h3>

                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark">
          <div className="section-heading">
            <p className="eyebrow">Control humano</p>

            <h2>
              La IA propone. El sistema calcula. La persona autorizada decide.
            </h2>

            <p>
              La inteligencia no sustituye el motor de negocio ni las
              autorizaciones. Los datos oficiales y las acciones críticas
              permanecen bajo controles definidos por la plataforma.
            </p>
          </div>

          <div className="ai-grid">
            <div className="ai-list">
              <div className="ai-item">
                <strong>Motor de negocio</strong>
                <span>
                  Realiza cálculos oficiales y aplica reglas determinísticas.
                </span>
              </div>

              <div className="ai-item">
                <strong>Inteligencia</strong>
                <span>
                  Interpreta información, encuentra relaciones y genera
                  recomendaciones.
                </span>
              </div>

              <div className="ai-item">
                <strong>Permisos</strong>
                <span>
                  El backend verifica que cada acción esté permitida para el
                  usuario y contexto.
                </span>
              </div>

              <div className="ai-item">
                <strong>Auditoría</strong>
                <span>
                  Las acciones importantes deben quedar registradas y ser
                  trazables.
                </span>
              </div>
            </div>

            <div className="ai-console">
              <div className="ai-console-top">
                <strong>Resultado de análisis</strong>
                <span className="ai-status">Revisión</span>
              </div>

              <div className="ai-message">
                Se detecta una situación que merece revisión a partir de la
                información disponible.
              </div>

              <div className="ai-insight">
                La plataforma presenta la evidencia y la explicación. No
                realiza automáticamente una aprobación o modificación crítica.
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <p className="eyebrow">Experiencia</p>

          <h2>
            Mira cómo puede verse la información de una obra desde la
            perspectiva de un ingeniero independiente.
          </h2>

          <p>
            Esta experiencia sirve para visualizar el producto antes de
            conectar datos reales.
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