# Contexto de implementacion

## Proyecto
Prototipo frontend del panel interno de AgentHub para validacion visual y funcional previa a integracion backend.

## Objetivo del entregable
Construir una referencia funcional de alta fidelidad que permita al equipo de producto y backend validar:
- Estructura de informacion.
- Comportamientos interactivos.
- Jerarquia visual y estados de sistema.

## Alcance
- Una SPA simulada en un index con secciones intercambiables por navegacion lateral.
- UI responsive para desktop y mobile.
- Modo claro/oscuro global.
- Modales, dropdowns, colapsables y badges de estado.
- Datos hardcodeados coherentes con el dominio AgentHub.

## Fuera de alcance
- Integracion con API.
- Persistencia de datos de negocio.
- Autenticacion y permisos reales.
- CRUD real en base de datos.

## Convenciones de UI
- Sidebar como eje de navegacion principal.
- Topbar para contexto de vista y acciones globales.
- Tarjetas y tablas como bloques de lectura rapida.
- Reutilizacion de patrones para minimizar friccion cognitiva.

## Convenciones de codigo
- HTML semantico con atributos ARIA en acciones iconicas.
- Tailwind por CDN para utilidades base.
- CSS propio para identidad visual, fondo y microinteracciones.
- JS vanilla para estado de UI y eventos globales.

## Checklist funcional rapido
1. Sidebar cambia la seccion activa sin recargar pagina.
2. Toggle de tema aplica clase dark en html.
3. Dropdown abre/cierra por fila y cierra al click externo.
4. Modales abren contenido correcto por contexto.
5. Modal cierra con x, cerrar, backdrop y Escape.
6. Skills en agentes se expanden y colapsan suavemente.
7. Errores pueden marcarse como resueltos visualmente.