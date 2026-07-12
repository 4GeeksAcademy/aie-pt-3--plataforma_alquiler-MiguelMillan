# Especificación Técnica de Producto (SPECS.md)
## Proyecto: Panel de Administración Interno - AgentHub

---

## 1. Descripción del Producto
**AgentHub** es una plataforma SaaS B2B que permite a las empresas alquilar agentes de Inteligencia Artificial especializados. Estos agentes son asistentes virtuales preconfigurados a los que se les pueden asignar "skills" (habilidades técnicas como navegación web, lectura de documentos, API REST o gestión de calendarios) para ejecutar tareas de negocio automatizadas.

El **Panel de Administración Interno** es la herramienta web que utiliza el equipo de operaciones y soporte de AgentHub para supervisar la salud de la plataforma, gestionar los clientes (usuarios), controlar el catálogo de agentes y skills, auditar los contratos de alquiler y diagnosticar fallos del sistema a través de logs de errores.

---

## 2. Stack Tecnológico y Restricciones
* **Arquitectura:** Single-Page Application (SPA) simulada en un único archivo `index.html` o vistas estáticas enlazadas, completamente del lado del cliente (*frontend-only*).
* **Lenguajes:** HTML5, CSS3 (vía Tailwind), JavaScript Vanilla (ES6+).
* **Frameworks/Librerías:** **Ninguno**. Prohibido el uso de React, Vue, Angular, Alpine.js o HTMX.
* **Estilos:** Tailwind CSS integrado exclusivamente mediante **CDN oficial**.
* **Interactividad:** Manipulación directa del DOM mediante JavaScript nativo para gestionar estados (modales, dropdowns, menús colapsables y modo oscuro).
* **Persistencia y Datos:** Datos 100% *hardcodeados* en memoria/scripts. El estado del modo oscuro se persistirá opcionalmente en `localStorage`. Sin conexiones a API ni bases de datos.

---

## 3. Especificaciones Detalladas por Sección

### 3.1. Dashboard (Vista General)
* **SPEC-01 (Tarjetas de Métricas):** Una cuadrícula (grid) responsive que se adapta automáticamente de 1 columna (móvil) a 2 columnas (tablet) y 4 columnas (desktop) (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`). Contiene 4 tarjetas para: Ingresos Totales, Pérdida por Descuentos, Agentes Activos y Agentes Fallando.
* **SPEC-02 (Estilos de Métricas):** Cada tarjeta debe incluir un fondo contenedor (`bg-white` / `dark:bg-gray-800`), bordes suavizados (`rounded-xl`), una sombra sutil (`shadow-sm`), un icono SVG representativo, una etiqueta descriptiva grisácea y un valor numérico destacado. La tarjeta de "Agentes Fallando" usará colores de acento rojizos (`text-red-500`) cuando el valor sea mayor a 0.
* **SPEC-03 (Marcador de Posición del Gráfico):** Debajo de las tarjetas, un contenedor de ancho completo (`w-full`) con una altura fija mínima (`h-64` o `h-80`), bordes discontinuos (`border-2 border-dashed border-gray-300 dark:border-gray-700`), fondo gris claro atenuado y un texto centrado vertical y horizontalmente que indique: *"Marcador de posición: Gráfico de Actividad Semanal"*.

### 3.2. Gestión de Usuarios
* **SPEC-04 (Tabla de Usuarios):** Un contenedor con scroll horizontal permitido (`overflow-x-auto`) que renderiza una tabla con las columnas: Nombre, Email, Plan (Básico, Profesional, Enterprise) y Estado (Activo, Suspendido). Las filas alternarán sutilmente de color para mejorar la lectura.
* **SPEC-05 (Dropdown de Acciones `⋮`):** La última columna de cada fila contendrá un botón con tres puntos verticales (`⋮`). Al hacer clic, se debe desplegar de forma absoluta un menú flotante sobrepuesto con las opciones "Ver detalle" y "Eliminar".
* **SPEC-06 (Modal de Detalle de Usuario):** Al pulsar "Ver detalle", se activará un componente modal (`fixed inset-0`) con un fondo oscuro semitransparente (backdrop). Mostrará toda la información extendida del usuario (ID de cliente, fecha de registro, pasarela de pago). Debe cerrarse al hacer clic en un botón "X", un botón "Cerrar" o directamente sobre el fondo/backdrop.

### 3.3. Gestión de Agentes
* **SPEC-07 (Listado y Estados):** Tabla o grid de agentes que detalla: Nombre del Agente, Propietario (Empresa/Cliente) y Estado Actual. El Estado se representará mediante un Badge visual: Verde (Activo), Gris (Inactivo) y Rojo parpadeante o sólido (Fallando).
* **SPEC-08 (Skills Colapsables):** Cada fila de agente incluirá un botón "Ver Skills (+)". Al hacer clic, se expandirá un panel inferior interno mediante una transición suave de CSS (`transition-all duration-300` controlando el `max-height` o la opacidad), revelando las habilidades que ese agente tiene equipadas en forma de etiquetas individuales pequeñas (tags).
* **SPEC-09 (Modal de Prompt de Sistema):** El dropdown de acciones de esta sección incluye la opción "Configurar". Al hacer clic, se abrirá un modal que contendrá un elemento `<textarea>` bloqueado (readonly) que muestra el "System Prompt" (las instrucciones base de IA) con el que fue inicializado ese agente.

### 3.4. Catálogo de Skills (Habilidades)
* **SPEC-10 (Sección Educativa/Contextual):** En la parte superior de la vista, se incluirá un banner o caja informativa (`bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 p-4 rounded-lg`) que explique textualmente qué es una "Skill" en AgentHub (módulos de código que extienden las capacidades operativas de los agentes de IA).
* **SPEC-11 (Métricas de Adopción):** El listado de Skills mostrará el Nombre, Descripción breve y un contador entero destacado de cuántos agentes tienen esa habilidad activa en tiempo real (ej. *"Habilitada en 24 agentes"*).
* **SPEC-12 (Acciones de Catálogo):** Cada skill contará con su respectivo botón `⋮` con acciones para "Ver detalle" (abre modal con los parámetros técnicos de la skill en formato JSON hardcodeado) y "Eliminar" (con un alert o confirmación lógica).

### 3.5. Contrataciones de Agentes (Facturación/Contratos)
* **SPEC-13 (Historial Contractual):** Interfaz de tabla estructurada cronológicamente que documenta los alquileres. Columnas obligatorias: Cliente, Agente Alquilado, Skills Contratadas (lista condensada), Fechas del Contrato (Inicio y Fin) e Importe Total Pagado.
* **SPEC-14 (Dropdown de Operaciones):** Botón selector de acciones por cada contrato para acceder a los recibos de auditoría ("Ver detalle").
* **SPEC-15 (Modal de Desglose Financiero):** El modal de detalle de esta sección debe estructurarse como una factura/recibo. Debe listar de forma desglosada cada una de las skills contratadas junto a su precio unitario mensual simulado, calculando visualmente la sumatoria final que coincida con el "Importe Total Pagado" de la fila.

### 3.6. Log de Errores
* **SPEC-16 (Estructura de Auditoría):** Listado compacto tipo consola o tabla de logs que incluye de forma estricta: Timestamp (ISO u hora local completa), Nombre del Agente afectado, Tipo de Error (ej: `API_TIMEOUT`, `AUTH_FAILURE`, `RATE_LIMIT`) y una Descripción Corta.
* **SPEC-17 (Severidad por Código de Colores):** Los tipos de errores se categorizarán mediante Badges de Tailwind utilizando clases condicionales: Rojo intenso (`bg-red-100 text-red-800`) para errores críticos de sistema, y Amarillo/Naranja (`bg-amber-100 text-amber-800`) para advertencias o fallos menores.
* **SPEC-18 (Acción de Resolución e Inspección):** El dropdown de acciones permitirá "Ver detalle" (abre un modal ancho con un contenedor `<pre class="bg-gray-900 text-green-400">` simulando un Stack Trace de error completo) y "Marcar como resuelto" (lo cual modificará visualmente la opacidad de la fila o añadirá un tachado simulando el cambio de estado).

---

## 4. Inventario de Componentes Reutilizables
Para garantizar la consistencia visual y de desarrollo, se identifican y unifican los siguientes componentes atómicos de UI:

1.  **Sidebar (Navegación Lateral Persistente):** Anclado a la izquierda (`fixed` o `sticky`), visible a pantalla completa en desktop, colapsable en móvil. Contiene el logotipo de AgentHub y los 6 enlaces de navegación con estados `:hover` y activos bien definidos.
2.  **Toggle de Modo Oscuro:** Ubicado en la barra superior (Navbar). Un botón con iconos intercambiables (Sol ☀️ / Luna 🌙) que añade o remueve la clase `dark` a la etiqueta raíz `<html>`.
3.  **Tarjeta de Métrica (Dashboard Card):** Caja contenedora con layouts consistentes de padding (`p-6`), bordes y sombras para presentación de KPI numéricos.
4.  **Dropdown de Acciones (`⋮`):** Menú flotante absoluto (`absolute right-0 mt-2 w-48`) con z-index alto (`z-50`), que aparece al hacer clic en el disparador y se oculta automáticamente al perder el foco o hacer clic fuera.
5.  **Modal Overlay (Ventana Emergente):** Estructura compuesta por un contenedor padre (`fixed inset-0 z-50`), un backdrop oscuro (`bg-black/50 backdrop-blur-sm`), y una caja central animada (`bg-white dark:bg-gray-800 max-w-lg w-full p-6 rounded-xl`).
6.  **Badge (Etiquetas de Estado):** Componentes inline-block de tamaño pequeño (`text-xs font-semibold px-2.5 py-0.5 rounded-full`) utilizados para estados de usuarios, agentes y logs de errores.
7.  **Lista de Skills Colapsable:** Panel con transición CSS controlado por estados de visibilidad (`hidden` / `block` o manipulación de alturas dinámicas).

---

## 5. Criterios de Aceptación (Condiciones de Entrega)

El prototipo se considerará completado y aprobado únicamente si cumple las siguientes condiciones verificables:

1.  **[Diseño Global]** La interfaz completa aplica correctamente los estilos de Tailwind CSS. Al activar el interruptor de modo oscuro en la barra superior, la clase `dark` se inyecta en el elemento `<html>` y todos los componentes cambian instantáneamente de color usando las variantes `dark:`.
2.  **[Interactividad de Dropdowns]** Al hacer clic en cualquier botón de tres puntos (`⋮`), el menú de acciones correspondiente se despliega sin romper el layout de la tabla. Al hacer clic en cualquier otra parte del documento, el dropdown abierto se cierra automáticamente.
3.  **[Interactividad de Modales]** Al hacer clic en la opción "Ver detalle" (o "Configurar"), el modal asignado se abre en el centro de la pantalla bloqueando el scroll del fondo. El modal se cierra exitosamente a través de tres vías: pulsando el botón "X", pulsando el botón "Cerrar" en el footer del modal, o haciendo clic en el fondo oscuro difuminado (backdrop).
4.  **[Interactividad de Colapsables]** En la sección de Gestión de Agentes, al hacer clic en el control de expansión de un agente, la sección de habilidades asociadas se despliega de manera fluida (sin saltos bruscos de maquetación). Al volver a pulsar, se oculta por completo.
5.  **[Navegación entre Secciones]** Los enlaces de la barra lateral permiten cambiar el contenido principal de la pantalla para visualizar cada una de las 6 secciones requeridas, manteniendo los datos estáticos correctos e intactos en cada vista.
6.  **[Fidelidad de Datos Hardcodeados]** No existen campos vacíos o rotos; todas las tablas, modales y tarjetas muestran datos ficticios realistas relacionados con el negocio de AgentHub (nombres de agentes como *SaaS_Billing_Bot*, emails corporativos, importes en dólares/euros y logs con formato de tiempo real).