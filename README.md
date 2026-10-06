# Plataforma de Obras

Base de aplicación para una plataforma multiempresa de gestión de construcción con IA.

## Principios
- La aplicación inicia sin datos de negocio ficticios.
- Identidad personal separada de organizaciones y membresías.
- Permisos por organización y alcance por obra.
- La IA analiza y recomienda; el motor de negocio calcula y la base de datos conserva los datos oficiales.
- Las aprobaciones y cambios críticos deben ser auditables.

## Stack
Next.js + TypeScript, Supabase/PostgreSQL/Auth/Storage, OpenAI y Resend.

## Arranque local
1. `npm install`
2. Copia `.env.example` a `.env.local`.
3. Completa Supabase y OpenAI cuando estén configurados.
4. `npm run dev`

## Estado de esta versión
La interfaz y los flujos base están reconstruidos sin datos ficticios. La autenticación, persistencia, RLS, invitaciones, workflows, almacenamiento, correo y herramientas de IA deben conectarse a las credenciales/infraestructura de producción antes de usar datos reales.

## Flujo recomendado para GitHub

```powershell
npm install
npm run dev
```

Para guardar esta versión en Git:

```powershell
git init
git add .
git commit -m "Rediseño público de Plataforma de Obras"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

No subas `.env.local`, claves de Supabase, claves de OpenAI ni otras credenciales. El repositorio incluye `.gitignore` para excluirlas.
