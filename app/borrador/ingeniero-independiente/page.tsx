import Link from "next/link";

const navigation = [
  "Resumen",
  "Obras",
  "Presupuesto",
  "APU",
  "Bitácora",
  "Cortes",
  "Documentos",
  "Análisis",
];

const workSections = [
  {
    title: "Información general",
    text: "Datos principales de la obra, responsables, cliente y contrato.",
  },
  {
    title: "Presupuesto",
    text: "Capítulos, actividades, cantidades, unidades y valores.",
  },
  {
    title: "Ejecución",
    text: "Avances, bitácoras, materiales, novedades y evidencias.",
  },
  {
    title: "Cortes",
    text: "Preparación, envío, revisión, aprobación y cierre.",
  },
];

export default function IngenieroIndependientePage() {
  return (
    <main className="app-preview">
      <aside className="app-sidebar">
        <Link href="/" className="app-brand">
          <img src="/public-logo.svg" alt="Plataforma de Obras" />
          <span>
            <strong>Plataforma de Obras</strong>
            <small>Experiencia de producto</small>
          </span>
        </Link>

        <div className="app-profile">
          <span className="profile-label">Perfil</span>
          <strong>Ingeniero independiente</strong>
          <span>Experiencia conceptual</span>
        </div>

        <nav className="app-nav">
          {navigation.map((item, index) => (
            <div
              className={`app-nav-item ${index === 0 ? "active" : ""}`}
              key={item}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </nav>

        <Link href="/" className="app-back">
          ← Sitio público
        </Link>
      </aside>

      <section className="app-content">
        <header className="app-topbar">
          <div>
            <span className="app-kicker">Vista de trabajo</span>
            <h1>Resumen</h1>
          </div>

          <div className="app-top-actions">
            <span className="demo-status">Experiencia</span>
            <Link href="/plataforma" className="button secondary">
              Plataforma
            </Link>
          </div>
        </header>

        <div className="app-work-header">
          <div>
            <span className="app-kicker">Obra</span>
            <h2>Información de la obra</h2>
            <p>
              Esta pantalla muestra cómo se organiza la información dentro de
              una obra. Los datos reales se incorporarán cuando exista una
              cuenta conectada.
            </p>
          </div>

          <div className="app-placeholder">
            <span>Estado</span>
            <strong>—</strong>
          </div>
        </div>

        <div className="app-stats">
          <article>
            <span>Presupuesto</span>
            <strong>—</strong>
            <small>Información pendiente</small>
          </article>

          <article>
            <span>Avance</span>
            <strong>—</strong>
            <small>Información pendiente</small>
          </article>

          <article>
            <span>Cortes</span>
            <strong>—</strong>
            <small>Información pendiente</small>
          </article>

          <article>
            <span>Documentos</span>
            <strong>—</strong>
            <small>Información pendiente</small>
          </article>
        </div>

        <section className="app-section">
          <div className="app-section-title">
            <div>
              <span className="app-kicker">Estructura</span>
              <h3>La obra concentra sus procesos</h3>
            </div>

            <span className="app-muted">Sin datos reales</span>
          </div>

          <div className="app-work-grid">
            {workSections.map((section, index) => (
              <article key={section.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h4>{section.title}</h4>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="app-section">
          <div className="app-section-title">
            <div>
              <span className="app-kicker">Actividad</span>
              <h3>Información reciente</h3>
            </div>
          </div>

          <div className="app-table">
            <div className="app-table-row header">
              <span>Fecha</span>
              <span>Actividad</span>
              <span>Estado</span>
              <span>Responsable</span>
            </div>

            <div className="app-table-row">
              <span>—</span>
              <span>No hay registros cargados</span>
              <span>—</span>
              <span>—</span>
            </div>

            <div className="app-table-row">
              <span>—</span>
              <span>Los datos aparecerán cuando exista una obra</span>
              <span>—</span>
              <span>—</span>
            </div>
          </div>
        </section>

        <section className="app-ai">
          <div>
            <span className="app-kicker">Inteligencia</span>
            <h3>Asistente de obra</h3>
            <p>
              Cuando exista información disponible, la inteligencia podrá
              analizar presupuesto, ejecución, bitácoras y cortes para
              identificar situaciones que merezcan atención.
            </p>
          </div>

          <div className="app-ai-box">
            <span>Análisis disponible</span>
            <strong>—</strong>
            <small>
              Todavía no existen datos suficientes para generar un análisis.
            </small>
          </div>
        </section>
      </section>
    </main>
  );
}