const titleBySection = {
  dashboard: "Dashboard",
  users: "Gestion de usuarios",
  agents: "Gestion de agentes",
  skills: "Skills",
  contracts: "Contrataciones",
  errors: "Log de errores"
};

const modalData = {
  users: {
    u1: { title: "Detalle de Laura Naranjo", body: "<p><strong>ID:</strong> CL-00192</p><p><strong>Email:</strong> laura.naranjo@innotech.ai</p><p><strong>Plan:</strong> Enterprise</p><p><strong>Registro:</strong> 2025-11-14</p><p><strong>Pasarela:</strong> Stripe Corporate</p>" },
    u2: { title: "Detalle de Ruben Castro", body: "<p><strong>ID:</strong> CL-00403</p><p><strong>Email:</strong> ruben.castro@fluxpayments.com</p><p><strong>Plan:</strong> Profesional</p><p><strong>Registro:</strong> 2026-01-27</p><p><strong>Pasarela:</strong> Adyen</p>" },
    u3: { title: "Detalle de Ana Silva", body: "<p><strong>ID:</strong> CL-00874</p><p><strong>Email:</strong> ana.silva@novatech.io</p><p><strong>Plan:</strong> Basico</p><p><strong>Registro:</strong> 2026-03-03</p><p><strong>Pasarela:</strong> Paypal Business</p>" },
    u4: { title: "Detalle de Lucia Marquez", body: "<p><strong>ID:</strong> CL-01411</p><p><strong>Email:</strong> lucia.marquez@atlaslegal.com</p><p><strong>Plan:</strong> Enterprise</p><p><strong>Registro:</strong> 2025-12-06</p><p><strong>Pasarela:</strong> Stripe Enterprise</p>" },
    u5: { title: "Detalle de Mateo Rivas", body: "<p><strong>ID:</strong> CL-01920</p><p><strong>Email:</strong> mateo.rivas@cloudkinetics.net</p><p><strong>Plan:</strong> Profesional</p><p><strong>Registro:</strong> 2026-05-19</p><p><strong>Pasarela:</strong> Mercado Pago Business</p>" }
  },
  agents: {
    a1: { title: "Configurar SaaS Billing Copilot", body: "<p class='mb-2'>Prompt de sistema (editable):</p><textarea class='w-full min-h-40 rounded-lg border border-slate-300 bg-slate-50 p-3 text-xs dark:border-slate-700 dark:bg-slate-950'>Actuas como analista de facturacion SaaS. Detecta discrepancias, valida reglas de cupones y reporta incidentes con prioridad.</textarea>" },
    a2: { title: "Configurar Legal Intake Navigator", body: "<p class='mb-2'>Prompt de sistema (editable):</p><textarea class='w-full min-h-40 rounded-lg border border-slate-300 bg-slate-50 p-3 text-xs dark:border-slate-700 dark:bg-slate-950'>Eres un asistente legal de intake. Clasifica documentos, prioriza urgencias y sugiere siguiente accion procesal.</textarea>" },
    a3: { title: "Configurar Ops Sentinel", body: "<p class='mb-2'>Prompt de sistema (editable):</p><textarea class='w-full min-h-40 rounded-lg border border-slate-300 bg-slate-50 p-3 text-xs dark:border-slate-700 dark:bg-slate-950'>Monitorea endpoints criticos, detecta riesgos de SLA y propone runbooks para equipos on-call.</textarea>" },
    a4: { title: "Configurar Calendar Ops Coordinator", body: "<p class='mb-2'>Prompt de sistema (editable):</p><textarea class='w-full min-h-40 rounded-lg border border-slate-300 bg-slate-50 p-3 text-xs dark:border-slate-700 dark:bg-slate-950'>Coordina agendas multiequipo, sugiere ventanas optimas y gestiona conflictos de reuniones.</textarea>" }
  },
  skills: {
    s1: { title: "Skill: Web Navigator", body: "<pre class='overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-cyan-200'>{\n  \"allowed_domains\": [\"status.agenthub.ai\", \"docs.partner.com\"],\n  \"max_depth\": 3,\n  \"timeout_ms\": 5000\n}</pre>" },
    s2: { title: "Skill: Doc Reader", body: "<pre class='overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-cyan-200'>{\n  \"types\": [\"pdf\", \"docx\", \"xlsx\"],\n  \"ocr\": true,\n  \"chunk_size\": 1200\n}</pre>" },
    s3: { title: "Skill: Calendar Orchestrator", body: "<pre class='overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-cyan-200'>{\n  \"providers\": [\"google\", \"outlook\"],\n  \"sync_interval_min\": 15,\n  \"conflict_strategy\": \"propose-alternative\"\n}</pre>" },
    s4: { title: "Skill: Knowledge Retriever", body: "<pre class='overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-cyan-200'>{\n  \"index\": \"internal-kb-v3\",\n  \"retrieval\": \"hybrid\",\n  \"top_k\": 5\n}</pre>" }
  },
  contracts: {
    c1: { title: "Contrato Innotech", body: "<p><strong>Periodo:</strong> 01/05/2026 - 01/08/2026</p><div class='mt-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700'><p><strong>Facturacion API:</strong> $2,100</p><p><strong>Alertas Email:</strong> $2,100</p><hr class='my-2 border-slate-200 dark:border-slate-700' /><p><strong>Total:</strong> $4,200</p></div>" },
    c2: { title: "Contrato Atlas Legal", body: "<p><strong>Periodo:</strong> 14/03/2026 - 14/06/2026</p><div class='mt-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700'><p><strong>OCR documentos:</strong> $1,300</p><p><strong>Clasificacion legal:</strong> $1,560</p><hr class='my-2 border-slate-200 dark:border-slate-700' /><p><strong>Total:</strong> $2,860</p></div>" },
    c3: { title: "Contrato FluxPayments", body: "<p><strong>Periodo:</strong> 01/01/2026 - 01/01/2027</p><div class='mt-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700'><p><strong>Monitoreo API:</strong> $4,200</p><p><strong>SLA scoring:</strong> $4,710</p><hr class='my-2 border-slate-200 dark:border-slate-700' /><p><strong>Total:</strong> $8,910</p></div>" },
    c4: { title: "Contrato CloudKinetics", body: "<p><strong>Periodo:</strong> 10/04/2026 - 10/10/2026</p><div class='mt-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700'><p><strong>Calendar sync:</strong> $1,900</p><p><strong>Reminder bot:</strong> $1,540</p><hr class='my-2 border-slate-200 dark:border-slate-700' /><p><strong>Total:</strong> $3,440</p></div>" }
  },
  errors: {
    e1: { title: "Traza API_TIMEOUT", body: "<pre class='max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-emerald-300'>2026-07-12T09:10:33Z [CRITICAL] Ops Sentinel\nRequestError: timeout 5000ms\nat fetchEndpoint (skills/monitor.js:88)</pre>" },
    e2: { title: "Traza RATE_LIMIT", body: "<pre class='max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-emerald-300'>2026-07-12T08:52:20Z [WARNING] SaaS Billing Copilot\nProviderError: 429 Too Many Requests\nat executeBillingSync (agents/billing.js:137)</pre>" },
    e3: { title: "Traza AUTH_FAILURE", body: "<pre class='max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-emerald-300'>2026-07-12T07:41:11Z [INFO] Legal Intake Navigator\nAuthError: token expired\nat refreshToken (skills/document_reader.js:44)</pre>" },
    e4: { title: "Traza SYNC_DELAY", body: "<pre class='max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-emerald-300'>2026-07-12T07:10:02Z [WARNING] Calendar Ops Coordinator\nSync delay > 90 seconds\nat syncCalendar (skills/calendar.js:112)</pre>" },
    e5: { title: "Traza WEBHOOK_FAIL", body: "<pre class='max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-emerald-300'>2026-07-12T06:55:44Z [CRITICAL] Ops Sentinel\nWebhook POST failed 503\nat sendWebhook (alerts/webhook.js:77)</pre>" },
    e6: { title: "Traza PARSER_WARNING", body: "<pre class='max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-emerald-300'>2026-07-12T06:30:15Z [INFO] SaaS Billing Copilot\nCsvParserWarning: irregular separator\nat parseBatch (skills/parser.js:51)</pre>" }
  }
};

const navItems = document.querySelectorAll("[data-nav-item]");
const sections = document.querySelectorAll("[data-panel-section]");
const pageTitle = document.getElementById("page-title");

const themeToggle = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");
const themeIcon = document.getElementById("theme-icon");

const modalRoot = document.getElementById("modal-root");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalCloseTop = document.getElementById("modal-close-top");
const modalCloseBottom = document.getElementById("modal-close-bottom");

let lastFocused = null;

function setTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("agenthub-theme", isDark ? "dark" : "light");
  themeText.textContent = isDark ? "Modo claro" : "Modo oscuro";
  themeIcon.textContent = isDark ? "🌞" : "🌙";
}

function hydrateTheme() {
  setTheme(localStorage.getItem("agenthub-theme") === "dark");
}

function closeAllDropdowns() {
  document.querySelectorAll("[data-action-toggle]").forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
  document.querySelectorAll("[role='menu']").forEach((menu) => menu.classList.add("hidden"));
}

function switchSection(sectionId) {
  sections.forEach((section) => section.classList.toggle("hidden", section.id !== sectionId));
  navItems.forEach((item) => {
    const active = item.dataset.section === sectionId;
    item.className = active
      ? "w-full rounded-xl bg-cyan-600 px-3 py-2 text-left text-sm font-semibold text-white shadow"
      : "w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800";
  });
  pageTitle.textContent = titleBySection[sectionId] || "Dashboard";
  closeAllDropdowns();
}

function openModal(title, bodyHtml) {
  lastFocused = document.activeElement;
  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHtml;
  modalRoot.classList.remove("hidden");
  modalRoot.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");
  modalCloseTop.focus();
}

function closeModal() {
  modalRoot.classList.add("hidden");
  modalRoot.setAttribute("aria-hidden", "true");
  modalTitle.textContent = "";
  modalBody.innerHTML = "";
  document.body.classList.remove("overflow-hidden");
  if (lastFocused) lastFocused.focus();
}

function getModalPayload(action, id) {
  if (action === "view-user") return modalData.users[id];
  if (action === "config-agent") return modalData.agents[id];
  if (action === "view-skill") return modalData.skills[id];
  if (action === "view-contract") return modalData.contracts[id];
  if (action === "view-error") return modalData.errors[id];
  return null;
}

function resolveError(id) {
  const row = document.querySelector(`[data-error-row='${id}']`);
  if (!row) return;
  row.classList.add("opacity-50", "line-through");
}

navItems.forEach((item) => {
  item.addEventListener("click", () => switchSection(item.dataset.section));
});

themeToggle.addEventListener("click", () => {
  setTheme(!document.documentElement.classList.contains("dark"));
});

document.addEventListener("click", (event) => {
  const actionToggle = event.target.closest("[data-action-toggle]");
  const actionButton = event.target.closest("[data-action]");
  const collapseToggle = event.target.closest("[data-collapse-toggle]");

  if (actionToggle) {
    const wrapper = actionToggle.closest("[data-dropdown]");
    const menu = wrapper?.querySelector("[role='menu']");
    if (!menu) return;

    const willOpen = menu.classList.contains("hidden");
    closeAllDropdowns();
    if (willOpen) {
      menu.classList.remove("hidden");
      actionToggle.setAttribute("aria-expanded", "true");
    }
    return;
  }

  if (actionButton) {
    const { action, id } = actionButton.dataset;
    closeAllDropdowns();

    if (action === "delete") {
      alert(`Eliminacion simulada para ID ${id}`);
      return;
    }

    if (action === "resolve-error") {
      resolveError(id);
      return;
    }

    const payload = getModalPayload(action, id);
    if (payload) openModal(payload.title, payload.body);
    return;
  }

  if (collapseToggle) {
    const target = document.getElementById(collapseToggle.dataset.collapseToggle);
    if (!target) return;

    const isOpen = !target.classList.contains("max-h-0");
    target.classList.toggle("max-h-0", isOpen);
    target.classList.toggle("opacity-0", isOpen);
    target.classList.toggle("max-h-40", !isOpen);
    target.classList.toggle("opacity-100", !isOpen);
    target.setAttribute("aria-hidden", String(isOpen));
    collapseToggle.setAttribute("aria-expanded", String(!isOpen));
    collapseToggle.textContent = isOpen ? "Ver skills" : "Ocultar skills";
    return;
  }

  if (!event.target.closest("[data-dropdown]")) {
    closeAllDropdowns();
  }
});

modalBackdrop.addEventListener("click", closeModal);
modalCloseTop.addEventListener("click", closeModal);
modalCloseBottom.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeAllDropdowns();
  }
});

hydrateTheme();
switchSection("dashboard");