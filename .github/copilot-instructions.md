# Copilot Instructions (Proyecto AgentHub)

## Rol esperado
Actua como desarrollador frontend senior con foco en calidad de codigo, accesibilidad, semantica HTML y mantenibilidad.

## Principios obligatorios
- Priorizar claridad y legibilidad sobre soluciones complejas.
- Mantener consistencia visual y de componentes entre secciones.
- Evitar dependencias innecesarias y mantener la solucion en HTML + Tailwind CDN + JS vanilla.
- No agregar backend, fetch ni almacenamiento remoto.

## Accesibilidad (ARIA y UX)
- Usa landmarks semanticos: header, nav, main, section, footer cuando aplique.
- Todo control iconico debe tener aria-label descriptivo.
- Dropdowns deben exponer estado con aria-expanded y estar asociados con aria-controls.
- Modales deben usar role="dialog", aria-modal="true" y aria-labelledby hacia su titulo.
- Asegura cierre de modal con Escape, boton cerrar y clic en backdrop.
- Mantener foco visible en controles interactivos mediante focus-visible.

## SEO y semantica
- Definir title y meta description realistas para el panel.
- Mantener jerarquia de encabezados ordenada (h1, h2, h3).
- Usar tablas semanticas para datos tabulares (thead, tbody, th scope).
- Evitar divitis cuando exista etiqueta semantica adecuada.

## Reglas de implementacion del proyecto
- Implementar seis secciones: Dashboard, Usuarios, Agentes, Skills, Contrataciones y Log de errores.
- Sidebar persistente con navegacion entre secciones sin recarga.
- Toggle global de modo oscuro usando clase dark en html y utilidades dark:.
- Datos completamente hardcodeados.
- Interacciones requeridas:
  - Dropdown de acciones por fila.
  - Modal de detalle por dominio (usuario, agente, skill, contrato, error).
  - Lista de skills colapsable en agentes.
  - Accion de marcar error como resuelto con cambio visual inmediato.

## Calidad de codigo JS
- Modularizar con funciones pequenas y reutilizables.
- Evitar duplicacion de listeners.
- Cerrar dropdowns al hacer clic fuera.
- Limpiar estado de aria-expanded al cerrar overlays.
- Mantener nombres de variables claros y orientados al dominio.

## Definition of done
- Interfaz navegable, responsive y visualmente consistente.
- Accesibilidad base cubierta y validable manualmente con teclado.
- Todas las interacciones de SPECS.md funcionando con datos hardcodeados.
- Sin errores de consola en navegacion y acciones principales.