const titleBySection = {
  dashboard: "Dashboard",
  users: "Gestion de usuarios",
  agents: "Gestion de agentes",
  skills: "Skills",
  contracts: "Contrataciones de agentes",
  errors: "Log de errores"
};

const modalData = {
  users: {
    u1: {
      title: "Detalle de usuario: Laura Naranjo",
      body: `
        <p><strong>ID cliente:</strong> CL-00192</p>
        <p><strong>Email:</strong> laura.naranjo@innotech.ai</p>
        <p><strong>Plan:</strong> Enterprise</p>
        <p><strong>Fecha de registro:</strong> 2025-11-14</p>
        <p><strong>Pasarela de pago:</strong> Stripe Corporate</p>
      `
    },
    u2: {
      title: "Detalle de usuario: Ruben Castro",
      body: `
        <p><strong>ID cliente:</strong> CL-00403</p>
        <p><strong>Email:</strong> ruben.castro@fluxpayments.com</p>
        <p><strong>Plan:</strong> Profesional</p>
        <p><strong>Fecha de registro:</strong> 2026-01-27</p>
        <p><strong>Pasarela de pago:</strong> Adyen</p>
      `
    },
    u3: {
      title: "Detalle de usuario: Ana Silva",
      body: `
        <p><strong>ID cliente:</strong> CL-00874</p>
        <p><strong>Email:</strong> ana.silva@novatech.io</p>
        <p><strong>Plan:</strong> Basico</p>
        <p><strong>Fecha de registro:</strong> 2026-03-03</p>
        <p><strong>Pasarela de pago:</strong> Paypal Business</p>
      `
    }
  },
  agents: {
    a1: {
      title: "Configurar agente: SaaS Billing Copilot",
      body: `
        <p class="mb-2">System prompt activo:</p>
        <textarea readonly class="w-full min-h-40 rounded-lg border border-slate-300 bg-slate-50 p-3 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">Actuas como un analista de facturacion SaaS. Detecta discrepancias en cobros, valida reglas de cupones y reporta incidentes con prioridad y resumen ejecutivo.</textarea>
      `
    },
    a2: {
      title: "Configurar agente: Legal Intake Navigator",
      body: `
        <p class="mb-2">System prompt activo:</p>
        <textarea readonly class="w-full min-h-40 rounded-lg border border-slate-300 bg-slate-50 p-3 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">Eres un asistente legal de intake. Clasifica documentos entrantes, prioriza urgencias y sugiere proximo paso procesal segun tipologia de expediente.</textarea>
      `
    },
    a3: {
      title: "Configurar agente: Ops Sentinel",
      body: `
        <p class="mb-2">System prompt activo:</p>
        <textarea readonly class="w-full min-h-40 rounded-lg border border-slate-300 bg-slate-50 p-3 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">Monitorea endpoints criticos, calcula riesgo de SLA y eleva alertas accionables con runbook sugerido para equipos on-call.</textarea>
      `
    }
  },
  skills: {
    s1: {
      title: "Skill: Web Navigator",
      body: `
        <p class="mb-2">Parametros tecnicos:</p>
        <pre class="overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-cyan-200">{
  "allowed_domains": ["status.agenthub.ai", "docs.partner.com"],
  "max_depth": 3,
  "request_timeout_ms": 5000,
  "mode": "safe-crawl"
}</pre>
      `
    },
    s2: {
      title: "Skill: Doc Reader",
      body: `
        <p class="mb-2">Parametros tecnicos:</p>
        <pre class="overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-cyan-200">{
  "supported_types": ["pdf", "docx", "xlsx"],
  "ocr": true,
  "language_hint": "es,en",
  "chunk_size": 1200
}</pre>
      `
    },
    s3: {
      title: "Skill: Calendar Orchestrator",
      body: `
        <p class="mb-2">Parametros tecnicos:</p>
        <pre class="overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-cyan-200">{
  "providers": ["google", "outlook"],
  "sync_interval_min": 15,
  "conflict_strategy": "propose-alternative",
  "timezone": "UTC"
}</pre>
      `
    }
  },
  contracts: {
    c1: {
      title: "Detalle de contrato: Innotech",
      body: `
        <p><strong>Periodo:</strong> 01/05/2026 - 01/08/2026</p>
        <div class="mt-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
          <p><strong>Desglose de skills:</strong></p>
          <p>Facturacion API: $2,100</p>
          <p>Alertas Email: $2,100</p>
          <hr class="my-2 border-slate-200 dark:border-slate-700" />
          <p><strong>Total:</strong> $4,200</p>
        </div>
      `
    },
    c2: {
      title: "Detalle de contrato: Atlas Legal",
      body: `
        <p><strong>Periodo:</strong> 14/03/2026 - 14/06/2026</p>
        <div class="mt-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
          <p><strong>Desglose de skills:</strong></p>
          <p>OCR documentos: $1,300</p>
          <p>Clasificacion legal: $1,560</p>
          <hr class="my-2 border-slate-200 dark:border-slate-700" />
          <p><strong>Total:</strong> $2,860</p>
        </div>
      `
    },
    c3: {
      title: "Detalle de contrato: FluxPayments",
      body: `
        <p><strong>Periodo:</strong> 01/01/2026 - 01/01/2027</p>
        <div class="mt-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
          <p><strong>Desglose de skills:</strong></p>
          <p>Monitoreo API: $4,200</p>
          <p>SLA scoring: $4,710</p>
          <hr class="my-2 border-slate-200 dark:border-slate-700" />
          <p><strong>Total:</strong> $8,910</p>
        </div>
      `
    }
  },
  errors: {
    e1: {
      title: "Traza completa: API_TIMEOUT",
      body: `
        <pre class="max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-emerald-300">2026-07-12T09:10:33Z [CRITICAL] Ops Sentinel
RequestError: API timeout after 5000ms
 at fetchEndpoint (skills/monitor.js:88)
 at runHealthCheck (agent/runtime.js:214)
 traceId=trc_9f4a2a1 channel=prod-eu-west</pre>
      `
    },
    e2: {
      title: "Traza completa: RATE_LIMIT",
      body: `
        <pre class="max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-emerald-300">2026-07-12T08:52:20Z [WARNING] SaaS Billing Copilot
ProviderError: 429 Too Many Requests
 at executeBillingSync (agents/billing.js:137)
 retryAfter=30s provider=stripe-proxy</pre>
      `
    },
    e3: {
      title: "Traza completa: AUTH_FAILURE",
      body: `
        <pre class="max-h-72 overflow-auto rounded-lg bg-slate-900 p-3 text-xs text-emerald-300">2026-07-12T07:41:11Z [INFO] Legal Intake Navigator
AuthError: token expired
 at refreshToken (skills/document_reader.js:44)
 tenant=atlas-legal scope=document.read</pre>
      `
    }
  }
};

const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".panel-section");
const pageTitle = document.getElementById("page-title");
const themeToggle = document.getElementById("themeToggle");
const themeToggleText = document.getElementById("themeToggleText");
const themeToggleIcon = document.getElementById("themeToggleIcon");

const modalRoot = document.getElementById("modalRoot");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalCloseTop = document.getElementById("modalCloseTop");
const modalCloseBottom = document.getElementById("modalCloseBottom");

let lastFocusedElement = null;

function setTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("agenthub-theme", isDark ? "dark" : "light");
  themeToggleText.textContent = isDark ? "Modo claro" : "Modo oscuro";
  themeToggleIcon.textContent = isDark ? "🌙" : "🌞";
}

function hydrateTheme() {
  const saved = localStorage.getItem("agenthub-theme");
  const shouldUseDark = saved === "dark";
  setTheme(shouldUseDark);
}

function closeAllDropdowns() {
  document.querySelectorAll(".action-menu").forEach((menu) => menu.classList.add("hidden"));
  document.querySelectorAll(".action-btn[aria-expanded='true']").forEach((btn) => {
    btn.setAttribute("aria-expanded", "false");
  });
}

function switchSection(sectionId) {
  sections.forEach((section) => {
    section.classList.toggle("hidden", section.id !== sectionId);
  });
  navItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.section === sectionId);
  });
  pageTitle.textContent = titleBySection[sectionId] || "AgentHub";
  closeAllDropdowns();
}

function openModal(title, contentHtml) {
  lastFocusedElement = document.activeElement;
  modalTitle.textContent = title;
  modalBody.innerHTML = contentHtml;
  modalRoot.classList.remove("hidden");
  modalRoot.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");
  modalCloseTop.focus();
}

function closeModal() {
  modalRoot.classList.add("hidden");
  modalRoot.setAttribute("aria-hidden", "true");
  document.body.classList.remove("overflow-hidden");
  modalTitle.textContent = "";
  modalBody.innerHTML = "";
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function getModalPayload(action, id) {
  if (action === "view-user") return modalData.users[id];
  if (action === "config-agent") return modalData.agents[id];
  if (action === "view-skill") return modalData.skills[id];
  if (action === "view-contract") return modalData.contracts[id];
  if (action === "view-error") return modalData.errors[id];
  return null;
}

function resolveErrorRow(id) {
  const row = document.querySelector(`[data-error-row='${id}']`);
  if (!row) return;
  row.classList.add("row-resolved");
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    switchSection(item.dataset.section);
  });
});

themeToggle.addEventListener("click", () => {
  const currentlyDark = document.documentElement.classList.contains("dark");
  setTheme(!currentlyDark);
});

document.addEventListener("click", (event) => {
  const actionButton = event.target.closest(".action-btn");
  const menuAction = event.target.closest(".action-menu button");
  const expandButton = event.target.closest(".expand-btn");

  if (actionButton) {
    const wrapper = actionButton.closest(".dropdown-wrap");
    const menu = wrapper?.querySelector(".action-menu");
    if (!menu) return;

    const willOpen = menu.classList.contains("hidden");
    closeAllDropdowns();
    if (willOpen) {
      menu.classList.remove("hidden");
      actionButton.setAttribute("aria-expanded", "true");
    }
    return;
  }

  if (menuAction) {
    const { action, id } = menuAction.dataset;
    closeAllDropdowns();

    if (action === "delete") {
      alert("Accion de eliminacion simulada para ID: " + id);
      return;
    }

    if (action === "resolve-error") {
      resolveErrorRow(id);
      return;
    }

    const payload = getModalPayload(action, id);
    if (payload) {
      openModal(payload.title, payload.body);
    }
    return;
  }

  if (expandButton) {
    const targetId = expandButton.dataset.collapseTarget;
    const panel = document.getElementById(targetId);
    if (!panel) return;

    const willOpen = !panel.classList.contains("is-open");
    panel.classList.toggle("is-open", willOpen);
    panel.setAttribute("aria-hidden", String(!willOpen));
    expandButton.setAttribute("aria-expanded", String(willOpen));
    expandButton.textContent = willOpen ? "Ocultar skills" : "Ver skills";
    return;
  }

  if (!event.target.closest(".dropdown-wrap")) {
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