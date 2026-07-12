# Especificacion de Producto
## AgentHub Admin Panel (prototipo frontend)

Version: 1.0
Fecha: 2026-07-12

## 1. Vision de producto
AgentHub es una plataforma SaaS donde empresas alquilan agentes de IA preconfigurados y les agregan skills para tareas de negocio especificas.

El usuario principal de este panel es el administrador interno (operaciones y soporte), que necesita monitorear ingresos, salud operativa, contratos, errores y configuraciones de agentes desde una sola interfaz.

## 2. Stack y restricciones tecnicas
- HTML5 semantico.
- Tailwind CSS cargado por CDN oficial en el HTML.
- JavaScript vanilla (ES6+), sin frameworks.
- Datos hardcodeados en frontend, sin llamadas a API ni backend.
- Modo oscuro implementado con clase en html y utilidades dark: de Tailwind.
- Proyecto en una experiencia SPA simulada en un index con secciones renderizadas/ocultas por JS.

## 3. Especificaciones por seccion

### 3.1 Dashboard
- SPEC-D-01: Mostrar 4 metric cards en grid responsive (1 col movil, 2 col tablet, 4 col desktop) para Ingresos del mes, Perdida por descuentos, Agentes activos y Agentes fallando. Cada card incluye icono, etiqueta y valor hardcodeado.
- SPEC-D-02: Cada tarjeta usa acento visual distinto por tipo de metrica (ingresos: verde, perdida: amber, activos: cian, fallando: rojo) y un estilo consistente de borde suave, sombra y hover discreto.
- SPEC-D-03: Debajo del grid, incluir un bloque de ancho completo con borde discontinuo y texto centrado como placeholder de grafico semanal.

### 3.2 Gestion de usuarios
- SPEC-U-01: Mostrar tabla con columnas Nombre, Email, Plan y Estado, con scroll horizontal en pantallas pequenas.
- SPEC-U-02: Cada fila incluye dropdown de acciones activado por boton de tres puntos, con opciones Ver detalle y Eliminar.
- SPEC-U-03: Ver detalle abre modal overlay con datos completos hardcodeados del usuario; el modal cierra con boton cerrar, boton x y clic en backdrop.

### 3.3 Gestion de agentes
- SPEC-A-01: Mostrar listado de agentes con Nombre, Propietario, Estado y Acciones, usando badges de estado Activo, Inactivo o Fallando.
- SPEC-A-02: Skills del agente ocultas por defecto; boton expandible por fila despliega lista de skills con transicion suave (max-height + opacidad).
- SPEC-A-03: En dropdown de acciones, Configurar abre modal con system prompt en textarea readonly; Eliminar dispara accion de confirmacion visual simple.

### 3.4 Skills
- SPEC-S-01: Incluir bloque explicativo al inicio de la seccion que defina que es una skill en AgentHub y para que se usa.
- SPEC-S-02: Listado de skills con Nombre, Descripcion breve y contador de adopcion (cantidad de agentes que la usan).
- SPEC-S-03: Cada fila tiene dropdown con Ver detalle (modal con payload JSON hardcodeado de parametros tecnicos) y Eliminar.

### 3.5 Contrataciones de agentes
- SPEC-C-01: Tabla de contratos activos y pasados con columnas Cliente, Agente, Skills contratadas, Fechas y Importe total pagado.
- SPEC-C-02: Cada fila tiene dropdown de acciones con Ver detalle para inspeccion de contrato.
- SPEC-C-03: Modal de detalle presenta desglose tipo factura con skills y precios individuales, subtotal y total final consistente con el importe de la fila.

### 3.6 Log de errores
- SPEC-E-01: Tabla de logs con Timestamp, Agente, Tipo de error y Descripcion breve.
- SPEC-E-02: Tipo o severidad representada por badges con codigo de color (critico rojo, warning amber, info slate).
- SPEC-E-03: Dropdown por fila con Ver detalle (modal con stack trace completo) y Marcar como resuelto (cambio visual en la fila).

## 4. Inventario de componentes reutilizables
- Sidebar de navegacion lateral persistente.
- Topbar con titulo de seccion y toggle de modo oscuro.
- Metric card reutilizable.
- Action dropdown reutilizable para tablas/listados.
- Modal overlay reutilizable para detalles.
- Badge reutilizable para estados y severidad.
- Skill list colapsable en la seccion de agentes.

## 5. Accesibilidad, SEO y buenas practicas
- Usar landmarks semanticos (header, nav, main, section, table).
- Todos los botones interactivos deben tener aria-label cuando el texto visible no sea suficiente (por ejemplo, boton de tres puntos).
- Modales con role dialog, aria-modal=true y titulo referenciado con aria-labelledby.
- Navegacion por teclado funcional en botones de nav, dropdown y modal.
- Meta title y meta description definidos para contexto de producto interno.

## 6. Criterios de aceptacion
1. El panel muestra las 6 secciones obligatorias y permite navegar entre ellas desde sidebar persistente.
2. El toggle de modo oscuro aplica o quita la clase dark en html y cambia toda la UI con utilidades dark:.
3. Cada boton de acciones abre un dropdown contextual y este se cierra al hacer clic fuera.
4. Todas las acciones Ver detalle y Configurar abren modal con contenido correcto y cierran por x, boton cerrar o backdrop.
5. La lista de skills en Gestion de agentes inicia colapsada y se expande/colapsa con transicion visible.
6. En Log de errores, Marcar como resuelto cambia visualmente la fila del error (opacidad/estado).
7. El proyecto funciona sin backend, sin frameworks y con todos los datos hardcodeados.