import Link from "next/link";

const modules = [
  {
    number: "01",
    title: "Obras",
    text: "Toda la información de cada proyecto organizada alrededor de la obra.",
  },
  {
    number: "02",
    title: "Presupuesto y APU",
    text: "Presupuestos, actividades, cantidades, recursos, rendimientos y costos relacionados.",
  },
  {
    number: "03",
    title: "Ejecución",
    text: "Bitácoras, avances, materiales, novedades, evidencias y seguimiento.",
  },
  {
    number: "04",
    title: "Cortes",
    text: "Cortes trazables con cantidades, precios, descuentos, impuestos, estados y aprobaciones.",
  },
  {
    number: "05",
    title: "Documentos",
    text: "Actas, informes, cortes y relaciones generados desde la información de la obra.",
  },
  {
    number: "06",
    title: "Análisis",
    text: "Costos, desviaciones, avances, riesgos e información histórica para tomar decisiones.",
  },
];

export default function Home() {
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

          <Link
            href="/borrador/ingeniero-independiente"
            className="header-action"
          >
            Ver experiencia
          </Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">Construcción · gestión · inteligencia</p>

            <h1>
              La obra completa,
              <br />
              <span>en un solo lugar.</span>
            </h1>

            <p className="hero-copy">
              Plataforma de Obras conecta la información técnica,
              administrativa y financiera de cada proyecto para que la gestión
              deje de depender de archivos separados, mensajes y procesos
              repetidos.
            </p>

            <div className="hero-actions">
              <Link href="/plataforma" className="button primary">
                Conocer la plataforma
              </Link>

              <Link href="/inteligencia" className="button secondary">
                Ver inteligencia
              </Link>
            </div>

            <p className="hero-note">
              La plataforma se adapta a la empresa y no la empresa a la
              plataforma.
            </p>
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
                      <span>Concepto</span>
                      <span>Cantidad</span>
                      <span>Estado</span>
                    </div>

                    <div className="mock-row">
                      <span>Información de la obra</span>
                      <span>—</span>
                      <span>—</span>
                    </div>

                    <div className="mock-row">
                      <span>Presupuesto y APU</span>
                      <span>—</span>
                      <span>—</span>
                    </div>

                    <div className="mock-row">
                      <span>Avance y corte</span>
                      <span>—</span>
                      <span>—</span>
                    </div>

                    <div className="mock-row">
                      <span>Evidencia</span>
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
            <p className="eyebrow">Una obra, una fuente de información</p>

            <h2>
              La información deja de estar repartida entre archivos, mensajes
              y procesos independientes.
            </h2>

            <p>
              La plataforma conecta la información de la obra para que los
              datos registrados una vez puedan utilizarse en presupuesto,
              ejecución, cortes, documentos y análisis.
            </p>
          </div>

          <div className="feature-grid">
            {modules.map((module) => (
              <article className="feature" key={module.number}>
                <span className="feature-number">{module.number}</span>

                <h3>{module.title}</h3>

                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark">
          <div className="section-heading">
            <p className="eyebrow">Inteligencia aplicada</p>

            <h2>
              IA para entender lo que ocurre en la obra.
            </h2>

            <p>
              La inteligencia analiza la información disponible, encuentra
              patrones, advierte posibles problemas y propone acciones. Los
              cálculos oficiales y las decisiones críticas permanecen bajo
              control de la plataforma y de las personas autorizadas.
            </p>
          </div>

          <div className="ai-grid">
            <div className="ai-list">
              <div className="ai-item">
                <strong>Precios y cotizaciones</strong>
                <span>
                  Compara información de precios, proveedores, condiciones y
                  registros históricos.
                </span>
              </div>

              <div className="ai-item">
                <strong>APU</strong>
                <span>
                  Ayuda a revisar materiales, mano de obra, equipos,
                  rendimientos y desperdicios.
                </span>
              </div>

              <div className="ai-item">
                <strong>Presupuesto y costos</strong>
                <span>
                  Detecta desviaciones entre lo presupuestado, ejecutado y
                  proyectado.
                </span>
              </div>

              <div className="ai-item">
                <strong>Revisión de cortes</strong>
                <span>
                  Contrasta cantidades, precios, acumulados y evidencias para
                  señalar situaciones que requieren revisión.
                </span>
              </div>

              <div className="ai-item">
                <strong>Bitácora y planificación</strong>
                <span>
                  Resume novedades, identifica retrasos y ayuda a priorizar
                  actividades.
                </span>
              </div>

              <div className="ai-item">
                <strong>Análisis empresarial</strong>
                <span>
                  Relaciona obras, costos, avances, cortes, tiempos y
                  comportamiento histórico.
                </span>
              </div>
            </div>

            <div className="ai-console">
              <div className="ai-console-top">
                <strong>Asistente de obra</strong>
                <span className="ai-status">Análisis</span>
              </div>

              <div className="ai-message">
                La inteligencia puede cruzar información de presupuesto,
                ejecución, bitácora y cortes para encontrar situaciones que
                merecen atención.
              </div>

              <div className="ai-insight">
                Una alerta de IA no modifica automáticamente la información
                oficial. Señala la situación, explica por qué merece revisión
                y deja la decisión a la persona autorizada.
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Un flujo conectado</p>

            <h2>
              Desde la planificación hasta el análisis de la obra.
            </h2>
          </div>

          <div className="process">
            <article className="process-step">
              <b>01</b>

              <h3>Planificar</h3>

              <p>
                Se define la obra, contrato, presupuesto, actividades y
                estructura de costos.
              </p>
            </article>

            <article className="process-step">
              <b>02</b>

              <h3>Ejecutar</h3>

              <p>
                Se registran avances, cantidades, materiales, novedades y
                evidencias.
              </p>
            </article>

            <article className="process-step">
              <b>03</b>

              <h3>Revisar</h3>

              <p>
                Los cortes y documentos recorren el flujo configurado y
                conservan su historial.
              </p>
            </article>

            <article className="process-step">
              <b>04</b>

              <h3>Analizar</h3>

              <p>
                La información acumulada permite observar costos, avances,
                desviaciones y riesgos.
              </p>
            </article>
          </div>
        </section>

        <section className="final-cta">
          <p className="eyebrow">Antes de crear una cuenta</p>

          <h2>
            Conoce cómo está pensada la plataforma para trabajar con tu forma
            de hacer obra.
          </h2>

          <p>
            Explora los módulos, el flujo de información y la inteligencia
            antes de comenzar.
          </p>

          <div className="hero-actions">
            <Link href="/como-funciona" className="button primary">
              Cómo funciona
            </Link>

            <Link
              href="/borrador/ingeniero-independiente"
              className="button secondary"
            >
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