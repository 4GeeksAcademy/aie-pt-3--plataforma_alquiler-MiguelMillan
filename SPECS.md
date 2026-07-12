### 3. Especificaciones Detalladas por Sección

#### 3.1. Dashboard (Vista General)
*   **SPEC-01 (Tarjetas de Métricas):** Una cuadrícula (grid) responsive que se adapta automáticamente de 1 columna en dispositivos móviles a 2 en tablets y 4 en pantallas de escritorio (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`). Contiene de forma estricta 4 tarjetas para: Ingresos Totales, Pérdida por Descuentos, Agentes Activos y Agentes Fallando.
*   **SPEC-02 (Estilos y Alertas):** Cada tarjeta debe incluir un fondo contenedor (`bg-white` / `dark:bg-gray-800`), bordes suavizados (`rounded-xl`), una sombra sutil (`shadow-sm`), un icono SVG representativo, una etiqueta descriptiva grisácea y un valor numérico destacado. La tarjeta de "Agentes Fallando" usará texto y fondos de alerta rojizos (`text-red-600` / `dark:text-red-400`) para resaltar el estado crítico del sistema.
*   **SPEC-03 (Marcador de Posición del Gráfico):** Debajo de las tarjetas, un contenedor de ancho completo (`w-full`) con una altura fija mínima (`h-64` o `h-80`), bordes discontinuos (`border-2 border-dashed border-gray-300 dark:border-gray-700`), fondo gris claro atenuado y un texto centrado vertical y horizontalmente que indique: *"Marcador de posición: Gráfico de Actividad Semanal"*.

#### 3.2. Gestión de Usuarios
*   **SPEC-04 (Tabla de Usuarios):** Un contenedor con scroll horizontal permitido (`overflow-x-auto`) que renderiza una tabla con las columnas: Nombre, Email, Plan (Básico, Profesional, Enterprise) y Estado (Activo, Suspendido). Las filas alternarán sutilmente de color para mejorar la lectura.
*   **SPEC-05 (Dropdown de Acciones `⋮`):** La última columna de cada fila contendrá un botón con tres puntos verticales (`⋮`). Al hacer clic, se debe desplegar de forma absoluta un menú flotante sobrepuesto con las opciones "Ver detalle" y "Eliminar". El menú debe cerrarse automáticamente si el usuario hace clic fuera de él.
*   **SPEC-06 (Modal de Detalle de Usuario):** Al pulsar "Ver detalle", se activará un componente modal (`fixed inset-0`) con un fondo oscuro semitransparente (backdrop). Mostrará toda la información extendida del usuario (ID de cliente, fecha de registro, pasarela de pago). Debe cerrarse al hacer clic en un botón de aspa "X", un botón "Cerrar" o directamente sobre el backdrop.

#### 3.3. Gestión de Agentes
*   **SPEC-07 (Listado y Estados):** Tabla o grid de agentes que detalla: Nombre del Agente, Propietario (Empresa/Cliente) y Estado Actual. El Estado se representará mediante un Badge visual: Verde (Activo), Gris (Inactivo) y Rojo sólido o parpadeante (Fallando).
*   **SPEC-08 (Skills Colapsables):** Cada fila de agente incluirá un botón "Ver Skills (+)". Al hacer clic, se expandirá un panel inferior interno mediante una transición suave de CSS (`transition-all duration-300` controlando el `max-height` o la opacidad), revelando las habilidades que ese agente tiene equipadas en forma de etiquetas individuales pequeñas (tags).
*   **SPEC-09 (Modal de Prompt de Sistema):** El dropdown de acciones de esta sección incluye la opción "Configurar". Al hacer clic, se abrirá un modal que contendrá un elemento `<textarea>` bloqueado (readonly) que muestra el "System Prompt" (las instrucciones base de lenguaje/IA) con el que fue inicializado ese agente.

#### 3.4. Catálogo de Skills (Habilidades)
*   **SPEC-10 (Sección Educativa/Contextual):** En la parte superior de la vista, se incluirá un banner o caja informativa (`bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-200 p-4 rounded-lg`) que explique textualmente qué es una "Skill" en AgentHub (módulos de código que extienden las capacidades operativas de los agentes de IA).
*   **SPEC-11 (Métricas de Adopción):** El listado de Skills mostrará el Nombre, Descripción breve y un contador entero destacado de cuántos agentes tienen esa habilidad activa en tiempo real (ej. *"Habilitada en 24 agentes"*).
*   **SPEC-12 (Acciones de Catálogo):** Cada skill contará con su respectivo botón `⋮` con acciones para "Ver detalle" (abre un modal con los parámetros técnicos de la skill en formato JSON hardcodeado) y "Eliminar".

#### 3.5. Contrataciones de Agentes (Facturación/Contratos)
*   **SPEC-13 (Historial Contractual):** Interfaz de tabla estructurada cronológicamente que documenta los alquileres. Columnas obligatorias: Cliente, Agente Alquilado, Skills Contratadas (lista condensada), Fechas del Contrato (Inicio y Fin) e Importe Total Pagado.
*   **SPEC-14 (Dropdown de Operaciones):** Botón selector de acciones por cada contrato para acceder a los recibos de auditoría ("Ver detalle") o finalizar el contrato.
*   **SPEC-15 (Modal de Desglose Financiero):** El modal de detalle de esta sección debe estructurarse como una factura/recibo. Debe listar de forma desglosada cada una de las skills contratadas junto a su precio unitario mensual simulado, calculando visualmente la sumatoria final que coincida con el "Importe Total Pagado" de la fila.

#### 3.6. Log de Errores
*   **SPEC-16 (Estructura de Auditoría):** Listado compacto tipo consola o tabla de logs que incluye de forma estricta: Timestamp (ISO u hora local completa), Nombre del Agente afectado, Tipo de Error (ej: `API_TIMEOUT`, `AUTH_FAILURE`, `RATE_LIMIT`) y una Descripción Corta.
*   **SPEC-17 (Severidad por Código de Colores):** Los tipos de errores se categorizarán mediante Badges de Tailwind utilizando clases condicionales: Rojo intenso (`bg-red-100 text-red-800`) para errores críticos de sistema, y Amarillo/Naranja (`bg-amber-100 text-amber-800`) para advertencias o fallos menores.
*   **SPEC-18 (Acción de Resolución e Inspección):** El dropdown de acciones permitirá "Ver detalle" (abre un modal ancho con un contenedor `<pre class="bg-gray-900 text-green-400">` simulando un Stack Trace de error completo) y "Marcar como resuelto" (lo cual modificará visualmente la opacidad de la fila o añadirá un tachado simulando el cambio de estado).