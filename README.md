# AG Codelab — Sitio Web Institucional

## Stack
- **Angular 17** con componentes standalone
- **SCSS** con variables CSS globales
- **Tipografía:** Syne (títulos) + DM Sans (cuerpo)
- **Diseño:** Responsive, mobile-first

## Estructura de carpetas

```
src/
  app/
    components/
      header/         → Navbar sticky, menú mobile
      hero/           → Sección principal con visual de 3 productos
      problems/       → Problemas que AG Codelab resuelve
      solutions/      → 3 tarjetas de soluciones
      ag-sender/      → Detalle de AG Sender (fondo teal oscuro)
      automation/     → Detalle automatizaciones + ejemplos de flujos
      custom-dev/     → Desarrollo a medida (fondo púrpura)
      use-cases/      → Casos por industria
      process/        → Proceso de trabajo 6 pasos
      technologies/   → Stack tecnológico + confianza
      contact/        → Formulario de contacto + WhatsApp
      footer/         → Footer completo
    app.component.ts  → Componente raíz
    app.component.html
    app.component.scss
  styles.scss         → Variables globales, clases utilitarias
  index.html          → Meta tags SEO
```

## Instrucciones para ejecutar

```bash
# 1. Descomprimir el ZIP en tu carpeta de proyectos
unzip ag-codelab-project.zip
cd ag-codelab

# 2. Instalar dependencias
npm install

# 3. Ejecutar servidor de desarrollo
ng serve

# 4. Abrir en el navegador
# http://localhost:4200
```

## Configuraciones que debés actualizar

Buscar en el código los siguientes placeholders:

| Placeholder | Archivo | Qué reemplazar |
|---|---|---|
| `595981234567` | contact.component.ts, footer.component.ts, app.component.ts | Tu número real de WhatsApp (sin +, sin espacios) |
| `hola@agcodelab.com` | contact.component.html, footer.component.html | Tu email real |
| `onSubmit()` en contact.component.ts | contact/contact.component.ts | Conectar con tu API de backend |

## Cómo conectar el formulario de contacto

En `contact.component.ts`, el método `onSubmit()` tiene un `setTimeout` simulado.
Reemplazarlo con una llamada real:

```typescript
async onSubmit() {
  this.loading = true;
  try {
    await fetch('https://tu-api.com/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.form)
    });
    this.submitted = true;
  } catch (e) {
    // manejar error
  } finally {
    this.loading = false;
  }
}
```

## Paleta de colores (variables CSS)

| Variable | Color | Uso |
|---|---|---|
| `--navy` | `#04192D` | Fondo principal |
| `--navy-mid` | `#042C53` | Hero, navbar, proceso |
| `--blue` | `#1A6FBF` | CTAs primarios |
| `--blue-light` | `#378ADD` | Hover, accents |
| `--teal` | `#1D9E75` | WhatsApp, éxito, AG Sender |
| `--purple` | `#534AB7` | Sistemas a medida |

## Recomendaciones para evolucionar el sitio

1. **Blog / Novedades** — Generar confianza y SEO con casos reales
2. **Página de casos de éxito** — Testimonios con logo de empresa cliente
3. **Demo interactiva de AG Sender** — Video o capturas del panel
4. **Chat en vivo** — Integrar Crisp, Intercom o similar
5. **Google Analytics / Pixel de Meta** — Para seguimiento de conversiones
6. **Formulario conectado** — Backend en NestJS o servicio como Formspree
7. **Dominio + SSL** — Deploy en Vercel, Netlify o servidor propio con Nginx
