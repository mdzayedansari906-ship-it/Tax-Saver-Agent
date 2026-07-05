/* ==========================================================================
   TAX DATA & CONSTANTS
   ========================================================================== */

// Last reviewed: 2026-07-04. Sources: IRS.gov, Canada.ca, Gov.uk.
const US_TAX_DATA_2026 = {
  asOf: "2026-01-15",
  source: "IRS.gov",
  standardDeductions: {
    single: 16100,
    married_joint: 32200,
    married_separate: 16100,
    head_household: 24150
  },
  federalBrackets: [
    { limit: 12400, rate: 0.10 },
    { limit: 50400, rate: 0.12 },
    { limit: 105700, rate: 0.22 },
    { limit: 201775, rate: 0.24 },
    { limit: 256225, rate: 0.32 },
    { limit: 640600, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
  ],
  federalBracketsJoint: [
    { limit: 24800, rate: 0.10 },
    { limit: 100800, rate: 0.12 },
    { limit: 211400, rate: 0.22 },
    { limit: 403550, rate: 0.24 },
    { limit: 512450, rate: 0.32 },
    { limit: 768700, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
  ],
  limits: {
    retirement401k: 24500,
    retirement401kCatchup: 8000,
    retirement401kSuperCatchup: 11250, // age 60-63
    retirementIRA: 7500,
    retirementIRACatchup: 1100,
    hsaSingle: 4300,
    hsaFamily: 8550,
    hsaCatchup: 1000 // age 55+
  },
  credits: {
    childTaxCredit: 2000,
    otherDependentCredit: 500
  }
};

const US_TAX_DATA_2025 = {
  asOf: "2025-01-15",
  source: "IRS.gov",
  standardDeductions: {
    single: 15750,
    married_joint: 31500,
    married_separate: 15750,
    head_household: 23625
  },
  federalBrackets: [
    { limit: 11925, rate: 0.10 },
    { limit: 48475, rate: 0.12 },
    { limit: 103350, rate: 0.22 },
    { limit: 197300, rate: 0.24 },
    { limit: 250525, rate: 0.32 },
    { limit: 626350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
  ],
  federalBracketsJoint: [
    { limit: 23850, rate: 0.10 },
    { limit: 96950, rate: 0.12 },
    { limit: 206700, rate: 0.22 },
    { limit: 394600, rate: 0.24 },
    { limit: 501050, rate: 0.32 },
    { limit: 1252700, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
  ],
  limits: {
    retirement401k: 23500,
    retirement401kCatchup: 7500,
    retirement401kSuperCatchup: 7500,
    retirementIRA: 7000,
    retirementIRACatchup: 1000,
    hsaSingle: 4150,
    hsaFamily: 8300,
    hsaCatchup: 1000
  },
  credits: {
    childTaxCredit: 2000,
    otherDependentCredit: 500
  }
};

const CA_TAX_DATA_2026 = {
  asOf: "2026-01-15",
  source: "Canada.ca",
  bpaMax: 16452,
  bpaMin: 14829,
  bpaClawbackThreshold: 181440,
  bpaClawbackEnd: 258482,
  federalBrackets: [
    { limit: 58523, rate: 0.15 },
    { limit: 117045, rate: 0.205 },
    { limit: 181440, rate: 0.26 },
    { limit: 258482, rate: 0.29 },
    { limit: Infinity, rate: 0.33 }
  ],
  cpp: {
    ympe: 74600,
    yampe: 85000,
    basicExemption: 3500,
    baseRate: 0.1190,
    cpp2Rate: 0.0800
  },
  limits: {
    rrspMax: 33810,
    tfsaMax: 7000
  }
};

const CA_TAX_DATA_2025 = {
  asOf: "2025-01-15",
  source: "Canada.ca",
  bpaMax: 16129,
  bpaMin: 14650,
  bpaClawbackThreshold: 173205,
  bpaClawbackEnd: 246752,
  federalBrackets: [
    { limit: 55867, rate: 0.15 },
    { limit: 111733, rate: 0.205 },
    { limit: 173205, rate: 0.26 },
    { limit: 246752, rate: 0.29 },
    { limit: Infinity, rate: 0.33 }
  ],
  cpp: {
    ympe: 71300,
    yampe: 81200,
    basicExemption: 3500,
    baseRate: 0.1190,
    cpp2Rate: 0.0800
  },
  limits: {
    rrspMax: 32490,
    tfsaMax: 7000
  }
};

const UK_TAX_DATA_2026 = {
  asOf: "2026-03-01",
  source: "Gov.uk",
  personalAllowance: 12570,
  allowanceClawbackThreshold: 100000,
  englandBrackets: [
    { limit: 12570, rate: 0.0 },
    { limit: 50270, rate: 0.20 },
    { limit: 125140, rate: 0.40 },
    { limit: Infinity, rate: 0.45 }
  ],
  scotlandBrackets: [
    { limit: 12570, rate: 0.0 },
    { limit: 14876, rate: 0.19 },
    { limit: 26561, rate: 0.20 },
    { limit: 44260, rate: 0.21 },
    { limit: 75000, rate: 0.42 },
    { limit: 125140, rate: 0.45 },
    { limit: Infinity, rate: 0.48 }
  ],
  limits: {
    pensionMax: 60000,
    pensionMinTapered: 10000,
    pensionTaperThreshold: 260000,
    isaMax: 20000
  },
  niClass4: [
    { limit: 12570, rate: 0.0 },
    { limit: 50270, rate: 0.06 },
    { limit: Infinity, rate: 0.02 }
  ],
  marriageAllowanceSavings: 252
};

const UK_TAX_DATA_2025 = { ...UK_TAX_DATA_2026, asOf: "2025-03-01" };

const REGIONS = {
  us: [
    { code: "CA", name: "California (Progressive Tax)" },
    { code: "NY", name: "New York (Progressive Tax)" },
    { code: "IL", name: "Illinois (Flat 4.95%)" },
    { code: "TX", name: "Texas (No Income Tax)" },
    { code: "FL", name: "Florida (No Income Tax)" },
    { code: "OTHER", name: "Other State (Generic flat 5.0% - Rough Placeholder)" }
  ],
  ca: [
    { code: "ON", name: "Ontario" },
    { code: "BC", name: "British Columbia" },
    { code: "AB", name: "Alberta" },
    { code: "QC", name: "Quebec (Not supported in v1)" },
    { code: "OTHER", name: "Other Province/Territory" }
  ],
  uk: [
    { code: "ENG", name: "England / Wales / Northern Ireland" },
    { code: "SCO", name: "Scotland (Distinct Tax Bands)" }
  ]
};

const FILING_STATUSES = {
  us: [
    { value: "single", label: "Single" },
    { value: "married_joint", label: "Married Filing Jointly" },
    { value: "married_separate", label: "Married Filing Separately" },
    { value: "head_household", label: "Head of Household" }
  ],
  ca: [
    { value: "single", label: "Single / Individual" },
    { value: "married_joint", label: "Married / Common-Law Partner" }
  ],
  uk: [
    { value: "single", label: "Individual / Single" },
    { value: "married_joint", label: "Married / Civil Partnership" }
  ]
};

/* ==========================================================================
   APP STATE
   ========================================================================== */
let currentStep = 1;
const totalSteps = 4;
let userProfile = {
  country: "",
  region: "",
  residency: "resident",
  tax_year: "2026",
  filing_status: "",
  children: 0,
  other_dependents: 0,
  income_types: [],
  annual_income: 0,
  has_retirement: false,
  retirement_contrib: 0,
  age_50: "no",
  has_mortgage: false,
  mortgage_interest: 0,
  has_medical: false,
  medical_expenses: 0,
  hsa_contrib: 0,
  has_charity: false,
  charitable_donations: 0,
  has_education: false,
  education_expenses: 0
};

let chartInstance = null;

/* ==========================================================================
   DOM ELEMENTS & INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Setup Tab Navigation Links
  setupTabNavigation();
  
  // Setup Event Listeners for Intake Form
  setupNavigation();
  setupFormControls();
  setupCounterInputs();
  
  // Setup Helpdesk actions
  setupHelpdeskActions();
  setupSettingsAndProfile();

  // Initialize Lucide Icons
  lucide.createIcons();
});

/* ==========================================================================
   TAB NAVIGATION SYSTEM
   ========================================================================== */
function setupTabNavigation() {
  const tabs = document.querySelectorAll(".nav-item, .bottom-nav-item");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Mobile menu drawer toggle
  const menuToggle = document.getElementById("btn-mobile-menu-toggle");
  const sidebar = document.getElementById("sidebar");
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar.classList.toggle("menu-open");
    });
    
    // Close sidebar on outer document clicks
    document.addEventListener("click", () => {
      sidebar.classList.remove("menu-open");
    });
    sidebar.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
}

function switchTab(tabId) {
  // Check if trying to open locked dashboard tabs before profile is filled
  const lockedTabs = ["dashboard", "investments", "savings", "documents"];
  if (lockedTabs.includes(tabId) && userProfile.annual_income === 0) {
    alert("Please complete the Calculator Wizard first to unlock your personalized tax dashboard!");
    switchTab("calculators");
    return;
  }

  // Deactivate all nav items
  document.querySelectorAll(".nav-item, .bottom-nav-item").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    }
  });

  // Hide all panels
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.remove("active-panel");
  });

  // Show active panel
  const targetPanel = document.getElementById(`panel-${tabId}`);
  if (targetPanel) {
    targetPanel.classList.add("active-panel");
  }

  // Close mobile menu if open
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.remove("menu-open");
  
  // Scroll to top of panel
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   NAVIGATION & WIZARD ENGINE
   ========================================================================== */
function setupNavigation() {
  const btnStart = document.getElementById("btn-start");
  const btnBack = document.getElementById("btn-back");
  const btnNext = document.getElementById("btn-next");
  const btnRestart = document.getElementById("btn-restart");
  const btnPrint = document.getElementById("btn-print");
  const form = document.getElementById("tax-intake-form");

  if (btnStart) {
    btnStart.addEventListener("click", () => {
      switchTab("calculators");
      currentStep = 1;
      updateWizardUI();
    });
  }

  if (btnBack) {
    btnBack.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (validateStep(currentStep)) {
        if (currentStep < totalSteps) {
          currentStep++;
          updateWizardUI();
        }
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateStep(totalSteps)) {
        saveStepData(totalSteps);
        runCalculationsAndShowResults();
      }
    });
  }

  if (btnRestart) {
    btnRestart.addEventListener("click", () => {
      if (form) form.reset();
      userProfile = {
        country: "",
        region: "",
        residency: "resident",
        tax_year: "2026",
        filing_status: "",
        children: 0,
        other_dependents: 0,
        income_types: [],
        annual_income: 0,
        has_retirement: false,
        retirement_contrib: 0,
        age_50: "no",
        has_mortgage: false,
        mortgage_interest: 0,
        has_medical: false,
        medical_expenses: 0,
        hsa_contrib: 0,
        has_charity: false,
        charitable_donations: 0,
        has_education: false,
        education_expenses: 0
      };
      
      // Reset inputs
      document.querySelectorAll(".deduction-details").forEach(el => el.classList.add("hidden"));
      document.querySelectorAll(".counter-input input").forEach(el => el.value = 0);
      document.getElementById("quebec-notice").classList.add("hidden");
      document.getElementById("state-approx-notice").classList.add("hidden");
      document.getElementById("high-income-warning").classList.add("hidden");
      
      // Reset header greetings
      document.getElementById("header-user-welcome").textContent = "Welcome back, Guest 👋";
      document.getElementById("header-user-subtitle").textContent = "Here's your tax saving overview";
      document.getElementById("user-display-name-lbl").textContent = "Guest User";
      document.getElementById("user-display-status-lbl").textContent = "Tax Planner";
      
      switchTab("welcome");
    });
  }

  if (btnPrint) {
    btnPrint.addEventListener("click", () => {
      window.print();
    });
  }

  // Dashboard quick actions routing
  document.getElementById("qa-invest-now").addEventListener("click", () => {
    switchTab("investments");
  });
  document.getElementById("qa-calculate-tax").addEventListener("click", () => {
    switchTab("calculators");
  });
  document.getElementById("qa-save-docs").addEventListener("click", () => {
    switchTab("documents");
  });
  document.getElementById("qa-file-itr").addEventListener("click", () => {
    alert("Tax filing checklists are available under Compliance Checklist on the Dashboard. Electronic e-filing portals open in early 2027.");
  });
  
  // Dashboard primary CTA button
  document.getElementById("btn-increase-savings").addEventListener("click", () => {
    const slider = document.getElementById("play-retirement");
    if (slider) {
      slider.focus();
      slider.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

function updateWizardUI() {
  // Hide all steps
  for (let i = 1; i <= totalSteps; i++) {
    const stepEl = document.getElementById(`step-${i}`);
    if (stepEl) {
      if (i === currentStep) {
        stepEl.classList.remove("hidden");
        stepEl.classList.add("active");
        const titleEl = stepEl.querySelector(".step-title");
        if (titleEl) titleEl.focus(); 
      } else {
        stepEl.classList.add("hidden");
        stepEl.classList.remove("active");
      }
    }
  }

  // Update progress bar
  const progressPercent = (currentStep / totalSteps) * 100;
  const progressFill = document.getElementById("progress-indicator");
  if (progressFill) {
    progressFill.style.width = `${progressPercent}%`;
    progressFill.setAttribute("aria-valuenow", progressPercent);
  }
  
  const stepLabels = [
    "Location & Residency",
    "Filing Status & Dependents",
    "Income & Career",
    "Deductions & Expenses"
  ];
  
  document.getElementById("step-label").textContent = `Step ${currentStep} of ${totalSteps}: ${stepLabels[currentStep - 1]}`;
  document.getElementById("step-percentage").textContent = `${Math.round(progressPercent)}% Complete`;

  // Buttons toggling
  const btnBack = document.getElementById("btn-back");
  const btnNext = document.getElementById("btn-next");
  const btnSubmit = document.getElementById("btn-submit");

  if (currentStep === 1) {
    btnBack.classList.add("hidden");
  } else {
    btnBack.classList.remove("hidden");
  }

  if (currentStep === totalSteps) {
    btnNext.classList.add("hidden");
    btnSubmit.classList.remove("hidden");
  } else {
    btnNext.classList.remove("hidden");
    btnSubmit.classList.add("hidden");
  }
  
  if (currentStep > 1) {
    saveStepData(currentStep - 1);
  }
}

/* ==========================================================================
   FORM CONTROLS & VALIDATION
   ========================================================================== */
function setupFormControls() {
  const selectCountry = document.getElementById("input-country");
  const selectRegion = document.getElementById("input-region");
  const incomeInput = document.getElementById("input-income");
  
  selectCountry.addEventListener("change", () => {
    const val = selectCountry.value;
    userProfile.country = val;
    
    // 1. Populate states/provinces
    selectRegion.innerHTML = '<option value="" disabled selected>Select option</option>';
    if (REGIONS[val]) {
      REGIONS[val].forEach(r => {
        const opt = document.createElement("option");
        opt.value = r.code;
        opt.textContent = r.name;
        selectRegion.appendChild(opt);
      });
    }
    
    // Label change for Region
    const labelRegion = document.getElementById("label-region");
    if (val === "us") labelRegion.textContent = "State of Residence *";
    else if (val === "ca") labelRegion.textContent = "Province of Residence *";
    else if (val === "uk") labelRegion.textContent = "Nation of Residence *";
    
    // 2. Populate filing statuses
    const selectStatus = document.getElementById("input-filing-status");
    selectStatus.innerHTML = "";
    if (FILING_STATUSES[val]) {
      FILING_STATUSES[val].forEach(fs => {
        const opt = document.createElement("option");
        opt.value = fs.value;
        opt.textContent = fs.label;
        selectStatus.appendChild(opt);
      });
    }
    
    // 3. Update Currency prefix
    const curPrefix = getCurrencySymbol(val);
    document.querySelectorAll(".currency-prefix").forEach(el => {
      el.textContent = curPrefix;
    });

    // 4. Toggle conditional questions depending on country
    toggleCountrySpecificFields(val);
    
    // Reset region warning boxes
    document.getElementById("quebec-notice").classList.add("hidden");
    document.getElementById("state-approx-notice").classList.add("hidden");
  });

  selectRegion.addEventListener("change", () => {
    const region = selectRegion.value;
    const country = selectCountry.value;
    
    if (country === "ca" && region === "QC") {
      document.getElementById("quebec-notice").classList.remove("hidden");
    } else {
      document.getElementById("quebec-notice").classList.add("hidden");
    }
    
    if (country === "us" && region === "OTHER") {
      document.getElementById("state-approx-notice").classList.remove("hidden");
    } else {
      document.getElementById("state-approx-notice").classList.add("hidden");
    }
  });

  incomeInput.addEventListener("input", () => {
    const val = parseFloat(incomeInput.value);
    if (val > 1000000) {
      document.getElementById("high-income-warning").classList.remove("hidden");
    } else {
      document.getElementById("high-income-warning").classList.add("hidden");
    }
  });

  document.querySelectorAll(".deduction-toggle input").forEach(chk => {
    chk.addEventListener("change", () => {
      const detailsId = chk.id.replace("toggle-", "detail-");
      const detailsEl = document.getElementById(detailsId);
      if (chk.checked) {
        detailsEl.classList.remove("hidden");
        detailsEl.setAttribute("aria-live", "polite");
      } else {
        detailsEl.classList.add("hidden");
        detailsEl.removeAttribute("aria-live");
      }
    });
  });
}

function toggleCountrySpecificFields(country) {
  const ageGroup = document.getElementById("us-age-group");
  const hsaWrapper = document.getElementById("us-hsa-wrapper");
  const labelRetContrib = document.getElementById("label-retirement-contrib");

  if (country === "us") {
    if (ageGroup) ageGroup.classList.remove("hidden");
    if (hsaWrapper) hsaWrapper.classList.remove("hidden");
    labelRetContrib.textContent = "Annual Traditional 401(k) / IRA Contributions";
  } else {
    if (ageGroup) ageGroup.classList.add("hidden");
    if (hsaWrapper) hsaWrapper.classList.add("hidden");
    if (country === "ca") {
      labelRetContrib.textContent = "Annual RRSP Contribution Amount";
    } else if (country === "uk") {
      labelRetContrib.textContent = "Annual Workplace or SIPP Pension Contribution";
    }
  }
}

function setupCounterInputs() {
  document.querySelectorAll(".btn-counter-dec").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const input = document.getElementById(targetId);
      let val = parseInt(input.value);
      if (val > parseInt(input.min)) {
        input.value = val - 1;
      }
    });
  });
  
  document.querySelectorAll(".btn-counter-inc").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const input = document.getElementById(targetId);
      let val = parseInt(input.value);
      if (val < parseInt(input.max)) {
        input.value = val + 1;
      }
    });
  });
}

function validateStep(step) {
  let isValid = true;
  document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

  if (step === 1) {
    const country = document.getElementById("input-country");
    const region = document.getElementById("input-region");
    
    if (!country.value) {
      document.getElementById("error-country").textContent = "Please select a country.";
      isValid = false;
    }
    if (!region.value) {
      document.getElementById("error-region").textContent = "Please select a region.";
      isValid = false;
    } else if (country.value === "ca" && region.value === "QC") {
      document.getElementById("error-region").textContent = "Quebec is not supported in v1.";
      isValid = false;
    }
  }
  
  else if (step === 3) {
    const incomeTypes = document.querySelectorAll('input[name="income_types"]:checked');
    const income = document.getElementById("input-income");
    
    if (incomeTypes.length === 0) {
      document.getElementById("error-income-types").textContent = "Please select at least one income source.";
      isValid = false;
    }
    
    const incomeVal = parseFloat(income.value);
    if (isNaN(incomeVal) || incomeVal < 0) {
      document.getElementById("error-income").textContent = "Please enter a valid non-negative income amount.";
      isValid = false;
    }
  }
  
  else if (step === 4) {
    const retirementChk = document.getElementById("toggle-retirement");
    const mortgageChk = document.getElementById("toggle-mortgage");
    const medicalChk = document.getElementById("toggle-medical");
    const charityChk = document.getElementById("toggle-charity");
    const educationChk = document.getElementById("toggle-education");
    
    if (retirementChk.checked) {
      const val = parseFloat(document.getElementById("input-retirement-contrib").value);
      if (isNaN(val) || val < 0) {
        document.getElementById("error-retirement").textContent = "Contribution must be a non-negative number.";
        isValid = false;
      }
    }
    if (mortgageChk.checked) {
      const val = parseFloat(document.getElementById("input-mortgage-interest").value);
      if (isNaN(val) || val < 0) {
        document.getElementById("error-mortgage").textContent = "Interest must be a non-negative number.";
        isValid = false;
      }
    }
    if (medicalChk.checked) {
      const val1 = parseFloat(document.getElementById("input-medical-expenses").value);
      if (isNaN(val1) || val1 < 0) {
        document.getElementById("error-medical-exp").textContent = "Expenses must be non-negative.";
        isValid = false;
      }
      if (userProfile.country === "us") {
        const val2 = parseFloat(document.getElementById("input-hsa-contrib").value);
        if (isNaN(val2) || val2 < 0) {
          document.getElementById("error-hsa").textContent = "HSA contribution must be non-negative.";
          isValid = false;
        }
      }
    }
    if (charityChk.checked) {
      const val = parseFloat(document.getElementById("input-charity").value);
      if (isNaN(val) || val < 0) {
        document.getElementById("error-charity").textContent = "Donations must be a non-negative number.";
        isValid = false;
      }
    }
    if (educationChk.checked) {
      const val = parseFloat(document.getElementById("input-education").value);
      if (isNaN(val) || val < 0) {
        document.getElementById("error-education").textContent = "Expenses must be a non-negative number.";
        isValid = false;
      }
    }
  }
  
  return isValid;
}

function saveStepData(step) {
  if (step === 1) {
    userProfile.country = document.getElementById("input-country").value;
    userProfile.region = document.getElementById("input-region").value;
    userProfile.residency = document.getElementById("input-residency").value;
    userProfile.tax_year = document.getElementById("input-tax-year").value;
  }
  else if (step === 2) {
    userProfile.filing_status = document.getElementById("input-filing-status").value;
    userProfile.children = parseInt(document.getElementById("input-children").value) || 0;
    userProfile.other_dependents = parseInt(document.getElementById("input-other-dependents").value) || 0;
  }
  else if (step === 3) {
    const checkedTypes = [];
    document.querySelectorAll('input[name="income_types"]:checked').forEach(chk => {
      checkedTypes.push(chk.value);
    });
    userProfile.income_types = checkedTypes;
    userProfile.annual_income = parseFloat(document.getElementById("input-income").value) || 0;
  }
  else if (step === 4) {
    userProfile.has_retirement = document.getElementById("toggle-retirement").checked;
    userProfile.retirement_contrib = userProfile.has_retirement ? (parseFloat(document.getElementById("input-retirement-contrib").value) || 0) : 0;
    userProfile.age_50 = document.getElementById("input-age-50") ? document.getElementById("input-age-50").value : "no";
    
    userProfile.has_mortgage = document.getElementById("toggle-mortgage").checked;
    userProfile.mortgage_interest = userProfile.has_mortgage ? (parseFloat(document.getElementById("input-mortgage-interest").value) || 0) : 0;
    
    userProfile.has_medical = document.getElementById("toggle-medical").checked;
    userProfile.medical_expenses = userProfile.has_medical ? (parseFloat(document.getElementById("input-medical-expenses").value) || 0) : 0;
    userProfile.hsa_contrib = (userProfile.has_medical && userProfile.country === "us") ? (parseFloat(document.getElementById("input-hsa-contrib").value) || 0) : 0;
    
    userProfile.has_charity = document.getElementById("toggle-charity").checked;
    userProfile.charitable_donations = userProfile.has_charity ? (parseFloat(document.getElementById("input-charity").value) || 0) : 0;
    
    userProfile.has_education = document.getElementById("toggle-education").checked;
    userProfile.education_expenses = userProfile.has_education ? (parseFloat(document.getElementById("input-education").value) || 0) : 0;
  }
}

/* ==========================================================================
   CALCULATION ENGINES (US, Canada, UK)
   ========================================================================== */
function calculateBracketTax(taxableIncome, brackets) {
  let tax = 0;
  let previousLimit = 0;
  
  for (let i = 0; i < brackets.length; i++) {
    const { limit, rate } = brackets[i];
    if (taxableIncome > previousLimit) {
      const taxableAmount = Math.min(taxableIncome - previousLimit, limit - previousLimit);
      tax += taxableAmount * rate;
      previousLimit = limit;
    } else {
      break;
    }
  }
  return tax;
}

function calculateUSTaxes(profile, customRetirement = null, customHsa = null) {
  const is2026 = profile.tax_year === "2026";
  const data = is2026 ? US_TAX_DATA_2026 : US_TAX_DATA_2025;
  const isJoint = profile.filing_status === "married_joint";
  
  const income = profile.annual_income;
  const isSelfEmployed = profile.income_types.includes("self_employed");
  
  let seTax = 0;
  let seDeduction = 0;
  if (isSelfEmployed) {
    seTax = income * 0.9235 * 0.153;
    seDeduction = seTax * 0.5; 
  }
  
  const retContrib = customRetirement !== null ? customRetirement : profile.retirement_contrib;
  const hsaContrib = customHsa !== null ? customHsa : profile.hsa_contrib;
  
  const adjustedGrossIncome = Math.max(0, income - seDeduction - retContrib - hsaContrib);
  const stdDeduction = data.standardDeductions[profile.filing_status] || data.standardDeductions.single;
  
  const medicalItemized = Math.max(0, profile.medical_expenses - (adjustedGrossIncome * 0.075));
  const totalItemized = profile.mortgage_interest + medicalItemized + profile.charitable_donations;
  
  const deductionApplied = Math.max(stdDeduction, totalItemized);
  const taxableIncome = Math.max(0, adjustedGrossIncome - deductionApplied);
  
  const brackets = isJoint ? data.federalBracketsJoint : data.federalBrackets;
  let federalTax = calculateBracketTax(taxableIncome, brackets);
  
  let stateTax = 0;
  const region = profile.region;
  if (region === "CA") {
    const caBrackets = [
      { limit: 10400, rate: 0.01 },
      { limit: 24600, rate: 0.02 },
      { limit: 38900, rate: 0.04 },
      { limit: 54000, rate: 0.06 },
      { limit: 68200, rate: 0.08 },
      { limit: 349100, rate: 0.093 },
      { limit: 418900, rate: 0.103 },
      { limit: 698200, rate: 0.113 },
      { limit: Infinity, rate: 0.123 }
    ];
    stateTax = calculateBracketTax(taxableIncome, caBrackets);
  } else if (region === "NY") {
    const nyBrackets = [
      { limit: 8500, rate: 0.04 },
      { limit: 11700, rate: 0.045 },
      { limit: 13900, rate: 0.0525 },
      { limit: 21400, rate: 0.059 },
      { limit: 80650, rate: 0.0633 },
      { limit: 215400, rate: 0.0685 },
      { limit: 1077550, rate: 0.0965 },
      { limit: 5000000, rate: 0.103 },
      { limit: Infinity, rate: 0.109 }
    ];
    stateTax = calculateBracketTax(taxableIncome, nyBrackets);
  } else if (region === "IL") {
    stateTax = taxableIncome * 0.0495;
  } else if (region === "TX" || region === "FL") {
    stateTax = 0;
  } else {
    stateTax = taxableIncome * 0.0500;
  }
  
  const ctc = profile.children * data.credits.childTaxCredit;
  const odc = profile.other_dependents * data.credits.otherDependentCredit;
  const totalCredits = ctc + odc;
  
  const incomeTaxPaid = Math.max(0, federalTax + stateTax - totalCredits);
  const totalTaxBill = incomeTaxPaid + seTax;
  
  return {
    seTax,
    seDeduction,
    adjustedGrossIncome,
    standardDeduction: stdDeduction,
    itemizedDeductions: totalItemized,
    taxableIncome,
    federalTax,
    stateTax,
    totalCredits,
    totalTaxBill
  };
}

function calculateCanadaTaxes(profile, customRetirement = null) {
  const is2026 = profile.tax_year === "2026";
  const data = is2026 ? CA_TAX_DATA_2026 : CA_TAX_DATA_2025;
  
  const income = profile.annual_income;
  const isSelfEmployed = profile.income_types.includes("self_employed");
  
  let cppContribution = 0;
  if (isSelfEmployed) {
    const ympe = data.cpp.ympe;
    const yampe = data.cpp.yampe;
    const basicExemption = data.cpp.basicExemption;
    
    const tier1Earnings = Math.max(0, Math.min(income, ympe) - basicExemption);
    const baseCPP = tier1Earnings * data.cpp.baseRate;
    
    const tier2Earnings = Math.max(0, Math.min(income, yampe) - ympe);
    const cpp2 = tier2Earnings * data.cpp.cpp2Rate;
    
    cppContribution = baseCPP + cpp2;
  }
  
  const cppDeduction = cppContribution * 0.5;
  const rrspContrib = customRetirement !== null ? customRetirement : profile.retirement_contrib;
  const taxableIncome = Math.max(0, income - cppDeduction - rrspContrib);
  
  let federalTax = calculateBracketTax(taxableIncome, data.federalBrackets);
  
  let bpa = data.bpaMax;
  if (taxableIncome > data.bpaClawbackThreshold) {
    const clawbackFactor = (taxableIncome - data.bpaClawbackThreshold) / (data.bpaClawbackEnd - data.bpaClawbackThreshold);
    bpa = Math.max(data.bpaMin, data.bpaMax - (clawbackFactor * (data.bpaMax - data.bpaMin)));
  }
  const bpaCredit = bpa * 0.15;
  federalTax = Math.max(0, federalTax - bpaCredit);
  
  let provincialTax = 0;
  const region = profile.region;
  if (region === "ON") {
    const onBrackets = [
      { limit: 49000, rate: 0.0505 },
      { limit: 98000, rate: 0.0915 },
      { limit: 150000, rate: 0.1116 },
      { limit: 220000, rate: 0.1216 },
      { limit: Infinity, rate: 0.1316 }
    ];
    provincialTax = calculateBracketTax(taxableIncome, onBrackets);
  } else if (region === "BC") {
    const bcBrackets = [
      { limit: 47000, rate: 0.0506 },
      { limit: 95000, rate: 0.0770 },
      { limit: 109000, rate: 0.1050 },
      { limit: 133000, rate: 0.1229 },
      { limit: 172000, rate: 0.1470 },
      { limit: 243000, rate: 0.1680 },
      { limit: Infinity, rate: 0.2050 }
    ];
    provincialTax = calculateBracketTax(taxableIncome, bcBrackets);
  } else if (region === "AB") {
    const abBrackets = [
      { limit: 148000, rate: 0.1000 },
      { limit: 178000, rate: 0.1200 },
      { limit: 237000, rate: 0.1300 },
      { limit: 356000, rate: 0.1400 },
      { limit: Infinity, rate: 0.1500 }
    ];
    provincialTax = calculateBracketTax(taxableIncome, abBrackets);
  } else {
    provincialTax = taxableIncome * 0.1000;
  }
  
  const totalTaxBill = federalTax + provincialTax + cppContribution;
  
  return {
    cppContribution,
    cppDeduction,
    taxableIncome,
    bpa,
    bpaCredit,
    federalTax,
    provincialTax,
    totalTaxBill
  };
}

function calculateUKTaxes(profile, customRetirement = null) {
  const is2026 = profile.tax_year === "2026";
  const data = is2026 ? UK_TAX_DATA_2026 : UK_TAX_DATA_2025;
  
  const income = profile.annual_income;
  const isSelfEmployed = profile.income_types.includes("self_employed");
  const isScotland = profile.region === "SCO";
  
  let niTax = 0;
  if (isSelfEmployed) {
    niTax = calculateBracketTax(income, data.niClass4);
  }
  
  const pensionContrib = customRetirement !== null ? customRetirement : profile.retirement_contrib;
  const netAdjustedIncome = Math.max(0, income - pensionContrib);
  
  let personalAllowance = data.personalAllowance;
  if (netAdjustedIncome > data.allowanceClawbackThreshold) {
    const clawbackAmount = (netAdjustedIncome - data.allowanceClawbackThreshold) / 2;
    personalAllowance = Math.max(0, data.personalAllowance - clawbackAmount);
  }
  
  const taxableIncome = Math.max(0, netAdjustedIncome - personalAllowance);
  const brackets = isScotland ? data.scotlandBrackets : data.englandBrackets;
  let incomeTax = calculateBracketTax(taxableIncome, brackets);
  
  let marriageCredit = 0;
  if (profile.filing_status === "married_joint") {
    marriageCredit = data.marriageAllowanceSavings;
  }
  
  const finalIncomeTax = Math.max(0, incomeTax - marriageCredit);
  const totalTaxBill = finalIncomeTax + niTax;
  
  return {
    niTax,
    personalAllowance,
    taxableIncome,
    incomeTax: finalIncomeTax,
    totalTaxBill
  };
}

function calculateTaxes(profile, customRetirement = null, customHsa = null) {
  const country = profile.country;
  
  if (country === "us") {
    return calculateUSTaxes(profile, customRetirement, customHsa);
  } else if (country === "ca") {
    return calculateCanadaTaxes(profile, customRetirement);
  } else if (country === "uk") {
    return calculateUKTaxes(profile, customRetirement);
  }
  return { totalTaxBill: 0 };
}

/* ==========================================================================
   RESULTS & PLAYGROUND RENDERER
   ========================================================================== */
function runCalculationsAndShowResults() {
  switchTab("loading");
  
  setTimeout(() => {
    // Set headers
    const currencySym = getCurrencySymbol(userProfile.country);
    const dataCurrency = document.getElementById("data-currency-label");
    const dataFreshness = document.getElementById("data-freshness-label");
    const logoSymbol = document.getElementById("sidebar-logo-currency");
    
    // Update headers and profile states
    let freshnessDate = "";
    let sourceSite = "";
    let currencyName = "";
    
    if (userProfile.country === "us") {
      freshnessDate = userProfile.tax_year === "2026" ? US_TAX_DATA_2026.asOf : US_TAX_DATA_2025.asOf;
      sourceSite = "IRS.gov";
      currencyName = "USD ($)";
    } else if (userProfile.country === "ca") {
      freshnessDate = userProfile.tax_year === "2026" ? CA_TAX_DATA_2026.asOf : CA_TAX_DATA_2025.asOf;
      sourceSite = "Canada.ca / CRA";
      currencyName = "CAD (C$)";
    } else if (userProfile.country === "uk") {
      freshnessDate = userProfile.tax_year === "2026" ? UK_TAX_DATA_2026.asOf : UK_TAX_DATA_2025.asOf;
      sourceSite = "Gov.uk / HMRC";
      currencyName = "GBP (£)";
    }
    
    if (dataCurrency) dataCurrency.textContent = currencyName;
    if (dataFreshness) dataFreshness.textContent = `Data verified: ${freshnessDate} (${sourceSite})`;
    if (logoSymbol) logoSymbol.textContent = currencySym;
    
    // Update Header Profile greeting
    const formattedFiling = userProfile.filing_status.charAt(0).toUpperCase() + userProfile.filing_status.slice(1).replace("_", " ");
    document.getElementById("header-user-welcome").textContent = `Welcome back, Zayed 👋`;
    document.getElementById("header-user-subtitle").textContent = `Filing Status: ${formattedFiling} • FY ${userProfile.tax_year} Overview`;
    document.getElementById("user-display-name-lbl").textContent = "Zayed Ansari";
    document.getElementById("user-display-status-lbl").textContent = `Filer (${userProfile.country.toUpperCase()})`;
    
    // Update dashboard text labels
    document.getElementById("text-dashboard-fy").textContent = `For FY ${userProfile.tax_year}`;
    
    // Populate Document Required checklist items dynamically
    populateDocsChecklist();
    
    // Populate Investment Funds limits dynamically
    populateInvestmentsLimitCards();

    // Trigger tab switch
    switchTab("dashboard");

    // Setup Playgrounds values & maximum limits
    setupPlaygroundSliders();
    
    // Trigger render updates
    updatePlaygroundResults();
  }, 1200);
}

function setupPlaygroundSliders() {
  const sliderRetirement = document.getElementById("play-retirement");
  const labelRetirement = document.getElementById("play-retirement-lbl");
  const maxRetirement = document.getElementById("play-retirement-max");
  const groupHsa = document.getElementById("group-play-hsa");
  const sliderHsa = document.getElementById("play-hsa");
  
  const curPrefix = getCurrencySymbol(userProfile.country);
  
  let maxRetAllowed = 20000;
  if (userProfile.country === "us") {
    const is2026 = userProfile.tax_year === "2026";
    const limits = is2026 ? US_TAX_DATA_2026.limits : US_TAX_DATA_2025.limits;
    
    maxRetAllowed = limits.retirement401k;
    if (userProfile.age_50 === "yes") {
      maxRetAllowed += limits.retirement401kCatchup;
    } else if (userProfile.age_50 === "yes_60" && is2026) {
      maxRetAllowed += limits.retirement401kSuperCatchup;
    }
    
    labelRetirement.textContent = "401(k) Contribution";
    maxRetirement.textContent = `Max limit: ${curPrefix}${formatNumber(maxRetAllowed)}`;
    
    groupHsa.classList.remove("hidden");
    const hsaLimit = (userProfile.filing_status === "married_joint") ? limits.hsaFamily : limits.hsaSingle;
    sliderHsa.max = hsaLimit;
    sliderHsa.value = userProfile.hsa_contrib;
    document.getElementById("play-hsa-max").textContent = `Max limit: ${curPrefix}${formatNumber(hsaLimit)}`;
  } 
  
  else if (userProfile.country === "ca") {
    const is2026 = userProfile.tax_year === "2026";
    const limits = is2026 ? CA_TAX_DATA_2026.limits : CA_TAX_DATA_2025.limits;
    
    maxRetAllowed = Math.min(limits.rrspMax, Math.round(userProfile.annual_income * 0.18));
    labelRetirement.textContent = "RRSP Contribution";
    maxRetirement.textContent = `Max (18% income): ${curPrefix}${formatNumber(maxRetAllowed)}`;
    
    groupHsa.classList.add("hidden");
  } 
  
  else if (userProfile.country === "uk") {
    const is2026 = userProfile.tax_year === "2026";
    const limits = is2026 ? UK_TAX_DATA_2026.limits : UK_TAX_DATA_2025.limits;
    
    maxRetAllowed = limits.pensionMax;
    if (userProfile.annual_income > limits.pensionTaperThreshold) {
      const taperOver = (userProfile.annual_income - limits.pensionTaperThreshold) / 2;
      maxRetAllowed = Math.max(limits.pensionMinTapered, limits.pensionMax - taperOver);
    }
    
    labelRetirement.textContent = "Workplace or SIPP Pension Contribution";
    maxRetirement.textContent = `Max annual allowance: ${curPrefix}${formatNumber(maxRetAllowed)}`;
    
    groupHsa.classList.add("hidden");
  }

  // Bind values
  sliderRetirement.max = maxRetAllowed;
  sliderRetirement.value = userProfile.retirement_contrib;

  // Bind slide events
  sliderRetirement.oninput = () => {
    document.getElementById("val-play-retirement").textContent = `${curPrefix}${formatNumber(sliderRetirement.value)}`;
    updatePlaygroundResults();
  };
  
  sliderHsa.oninput = () => {
    document.getElementById("val-play-hsa").textContent = `${curPrefix}${formatNumber(sliderHsa.value)}`;
    updatePlaygroundResults();
  };

  // Set initial labels
  document.getElementById("val-play-retirement").textContent = `${curPrefix}${formatNumber(sliderRetirement.value)}`;
  document.getElementById("val-play-hsa").textContent = `${curPrefix}${formatNumber(sliderHsa.value)}`;
}

function updatePlaygroundResults() {
  const sliderRetirement = document.getElementById("play-retirement");
  const sliderHsa = document.getElementById("play-hsa");
  const curPrefix = getCurrencySymbol(userProfile.country);
  
  const playRetVal = parseFloat(sliderRetirement.value) || 0;
  const playHsaVal = userProfile.country === "us" ? (parseFloat(sliderHsa.value) || 0) : 0;
  
  // 1. Wizard Input Baseline
  const baselineCalculations = calculateTaxes(userProfile, userProfile.retirement_contrib, userProfile.hsa_contrib);
  
  // 2. Playground active calculations
  const playCalculations = calculateTaxes(userProfile, playRetVal, playHsaVal);
  
  // potentialSavings is baseline minus playground
  const potentialSavings = Math.max(0, baselineCalculations.totalTaxBill - playCalculations.totalTaxBill);
  
  // Render Savings Hero
  document.getElementById("text-total-savings").textContent = `${curPrefix}${formatNumber(Math.round(potentialSavings))}`;
  
  const rateCurrent = (baselineCalculations.totalTaxBill / userProfile.annual_income) * 100;
  const rateOptimized = (playCalculations.totalTaxBill / userProfile.annual_income) * 100;
  
  document.getElementById("rate-current-tax").textContent = `${isNaN(rateCurrent) ? "0.0" : rateCurrent.toFixed(1)}%`;
  document.getElementById("rate-optimized-tax").textContent = `${isNaN(rateOptimized) ? "0.0" : rateOptimized.toFixed(1)}%`;
  
  // Render Overview cards
  const totalInvestmentsVal = playRetVal + playHsaVal;
  const deductionsClaimedVal = Math.round(userProfile.annual_income - playCalculations.taxableIncome);
  
  document.getElementById("text-overview-investments").textContent = `${curPrefix}${formatNumber(totalInvestmentsVal)}`;
  document.getElementById("text-overview-taxable").textContent = `${curPrefix}${formatNumber(Math.round(playCalculations.taxableIncome))}`;
  document.getElementById("text-overview-deductions").textContent = `${curPrefix}${formatNumber(deductionsClaimedVal)}`;
  
  // Update Circular SVG progress gauge
  updateCircularProgressGauge(totalInvestmentsVal);
  
  // Render Dynamic Categories Donut Chart
  renderDeductionsBreakdownChart(playCalculations, playRetVal, playHsaVal);

  // Render Action Grid & breakdowns
  renderActionAndBreakdownLists(playCalculations, baselineCalculations, playRetVal, playHsaVal);
  
  // Populate dynamic Recent Investments Table
  populateInvestmentsTable(playRetVal, playHsaVal);
}

function updateCircularProgressGauge(totalInvestments) {
  let goal = 28800; // standard default
  
  if (userProfile.country === "us") {
    const is2026 = userProfile.tax_year === "2026";
    const limits = is2026 ? US_TAX_DATA_2026.limits : US_TAX_DATA_2025.limits;
    let base401k = limits.retirement401k;
    if (userProfile.age_50 === "yes") {
      base401k += limits.retirement401kCatchup;
    } else if (userProfile.age_50 === "yes_60" && is2026) {
      base401k += limits.retirement401kSuperCatchup;
    }
    const hsaLimit = (userProfile.filing_status === "married_joint") ? limits.hsaFamily : limits.hsaSingle;
    goal = base401k + hsaLimit;
  }
  else if (userProfile.country === "ca") {
    const is2026 = userProfile.tax_year === "2026";
    const limits = is2026 ? CA_TAX_DATA_2026.limits : CA_TAX_DATA_2025.limits;
    goal = Math.min(limits.rrspMax, Math.round(userProfile.annual_income * 0.18));
  }
  else if (userProfile.country === "uk") {
    const is2026 = userProfile.tax_year === "2026";
    const limits = is2026 ? UK_TAX_DATA_2026.limits : UK_TAX_DATA_2025.limits;
    goal = limits.pensionMax;
    if (userProfile.annual_income > limits.pensionTaperThreshold) {
      const taperOver = (userProfile.annual_income - limits.pensionTaperThreshold) / 2;
      goal = Math.max(limits.pensionMinTapered, limits.pensionMax - taperOver);
    }
  }

  const curPrefix = getCurrencySymbol(userProfile.country);
  const percentage = Math.min(100, Math.round((totalInvestments / goal) * 100));
  const remaining = Math.max(0, goal - totalInvestments);

  // SVG dash offset calculation
  const circle = document.getElementById("gauge-progress-circle");
  if (circle) {
    const circumference = 2 * Math.PI * 40; // 251.2
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  document.getElementById("gauge-percentage-lbl").textContent = `${percentage}%`;
  document.getElementById("gauge-goal-lbl").textContent = `${curPrefix}${formatNumber(goal)}`;
  document.getElementById("gauge-achieved-lbl").textContent = `${curPrefix}${formatNumber(totalInvestments)}`;
  document.getElementById("gauge-remaining-lbl").textContent = `${curPrefix}${formatNumber(remaining)}`;
}

function renderDeductionsBreakdownChart(playCalcs, playRetVal, playHsaVal) {
  const ctx = document.getElementById("savings-chart").getContext("2d");
  
  if (chartInstance) {
    chartInstance.destroy();
  }
  
  let labels = [];
  let values = [];
  
  if (userProfile.country === "us") {
    labels = ["Standard / Itemized", "Retirement 401(k)", "HSA Contribution"];
    values = [playCalcs.standardDeduction || playCalcs.itemizedDeductions || 16100, playRetVal, playHsaVal];
  } 
  else if (userProfile.country === "ca") {
    labels = ["Basic Personal Amount", "RRSP Contributions"];
    values = [playCalcs.bpa || 16452, playRetVal];
  } 
  else if (userProfile.country === "uk") {
    labels = ["Personal Allowance", "Pension Contributions"];
    values = [playCalcs.personalAllowance || 12570, playRetVal];
  }
  
  // Read colors from CSS
  const textColor = getComputedStyle(document.body).getPropertyValue('--text-secondary').trim() || '#475569';

  chartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: [
          '#0f766e', 
          '#10b981', 
          '#8b5cf6', 
          '#f97316', 
          '#3b82f6'
        ],
        borderWidth: 2,
        borderColor: getComputedStyle(document.body).getPropertyValue('--bg-card').trim() || '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: textColor,
            font: { family: 'Inter', size: 11 }
          }
        }
      },
      cutout: '70%'
    }
  });
}

function populateInvestmentsTable(playRetVal, playHsaVal) {
  const tbody = document.getElementById("dashboard-investments-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  
  const curPrefix = getCurrencySymbol(userProfile.country);
  
  // 1. Retirement row
  if (playRetVal > 0) {
    let schemeName = "Pre-Tax Retirement Contributions";
    let section = "Section 401(k)";
    if (userProfile.country === "ca") {
      schemeName = "RRSP Contributions";
      section = "Line 20800";
    } else if (userProfile.country === "uk") {
      schemeName = "Workplace / SIPP Pension";
      section = "Chapter 4 (Part 4)";
    }
    
    tbody.innerHTML += `
      <tr>
        <td><strong>${schemeName}</strong></td>
        <td class="text-success"><strong>${curPrefix}${formatNumber(playRetVal)}</strong></td>
        <td>FY ${userProfile.tax_year}</td>
        <td><code>${section}</code></td>
        <td><span class="status-badge badge-active">Active</span></td>
      </tr>
    `;
  }
  
  // 2. HSA row
  if (userProfile.country === "us" && playHsaVal > 0) {
    tbody.innerHTML += `
      <tr>
        <td><strong>Health Savings Account (HSA)</strong></td>
        <td class="text-success"><strong>${curPrefix}${formatNumber(playHsaVal)}</strong></td>
        <td>FY ${userProfile.tax_year}</td>
        <td><code>IRC Sec 125</code></td>
        <td><span class="status-badge badge-active">Active</span></td>
      </tr>
    `;
  }
  
  // 3. Child Credit row
  if (userProfile.country === "us" && userProfile.children > 0) {
    const data = userProfile.tax_year === "2026" ? US_TAX_DATA_2026 : US_TAX_DATA_2025;
    const creditVal = userProfile.children * data.credits.childTaxCredit;
    tbody.innerHTML += `
      <tr>
        <td><strong>Child Tax Credit (CTC)</strong></td>
        <td class="text-success"><strong>${curPrefix}${formatNumber(creditVal)}</strong></td>
        <td>FY ${userProfile.tax_year}</td>
        <td><code>Form 8812</code></td>
        <td><span class="status-badge badge-completed">Completed</span></td>
      </tr>
    `;
  }
  
  // 4. Mortgage row
  if (userProfile.has_mortgage && userProfile.mortgage_interest > 0) {
    tbody.innerHTML += `
      <tr>
        <td><strong>Mortgage Interest Deduction</strong></td>
        <td class="text-success"><strong>${curPrefix}${formatNumber(userProfile.mortgage_interest)}</strong></td>
        <td>FY ${userProfile.tax_year}</td>
        <td><code>Schedule A</code></td>
        <td><span class="status-badge badge-eligible">Eligible</span></td>
      </tr>
    `;
  }
  
  // 5. Charity row
  if (userProfile.has_charity && userProfile.charitable_donations > 0) {
    tbody.innerHTML += `
      <tr>
        <td><strong>Charitable Donations Deduction</strong></td>
        <td class="text-success"><strong>${curPrefix}${formatNumber(userProfile.charitable_donations)}</strong></td>
        <td>FY ${userProfile.tax_year}</td>
        <td><code>Donation Receipts</code></td>
        <td><span class="status-badge badge-eligible">Eligible</span></td>
      </tr>
    `;
  }
  
  // 6. Education row
  if (userProfile.has_education && userProfile.education_expenses > 0) {
    tbody.innerHTML += `
      <tr>
        <td><strong>Tuition & Student Loan Relief</strong></td>
        <td class="text-success"><strong>${curPrefix}${formatNumber(userProfile.education_expenses)}</strong></td>
        <td>FY ${userProfile.tax_year}</td>
        <td><code>Form 8863 / T2202</code></td>
        <td><span class="status-badge badge-eligible">Eligible</span></td>
      </tr>
    `;
  }
  
  if (tbody.innerHTML === "") {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted">No investments or deductions are currently active. Move the sliders or edit your profile.</td>
      </tr>
    `;
  }
}

function renderActionAndBreakdownLists(playCalcs, baselineCalcs, playRetVal, playHsaVal) {
  const impactGrid = document.getElementById("grid-impact-items");
  const detailList = document.getElementById("list-detailed-deductions");
  const watchoutsGrid = document.getElementById("grid-watchouts");
  
  impactGrid.innerHTML = "";
  detailList.innerHTML = "";
  watchoutsGrid.innerHTML = "";
  
  const curSym = getCurrencySymbol(userProfile.country);
  const is2026 = userProfile.tax_year === "2026";
  
  let suggestions = [];
  let detailedItems = [];
  let watchouts = [];

  // US CALCULATIONS
  if (userProfile.country === "us") {
    const data = is2026 ? US_TAX_DATA_2026 : US_TAX_DATA_2025;
    
    watchouts.push({
      title: "Filing Deadline",
      desc: is2026 ? "The filing and payment deadline is April 15, 2027." : "Prior year deadline was April 15, 2026.",
      icon: "calendar"
    });
    
    if (userProfile.income_types.includes("self_employed")) {
      watchouts.push({
        title: "Estimated Taxes",
        desc: "Estimated quarterly payments (Form 1040-ES) are due April 15, June 15, September 15, and January 15.",
        icon: "credit-card"
      });
      
      const seSavingsNote = `Calculated Self-Employment Tax of 15.3% is applied on net income. A 50% deduction of this amount (${curSym}${formatNumber(Math.round(playCalcs.seDeduction))}) was applied to reduce your federal Adjusted Gross Income (AGI).`;
      detailedItems.push({
        category: "Self-Employment Tax",
        title: "Schedule SE Compliance",
        desc: seSavingsNote,
        savings: 0,
        form: "Form 1040 Schedule SE",
        confidence: "high",
        source: "https://www.irs.gov/forms-pubs/about-schedule-se-form-1040",
        asOf: data.asOf
      });
    }
    
    watchouts.push({
      title: "Record Keeping",
      desc: "Retain receipts, W-2s, 1099s, and HSA contribution forms (Form 5498-SA) for at least 3 years.",
      icon: "folder-open"
    });

    if (playRetVal > 0) {
      const baselineRetTax = calculateBracketTax(baselineCalcs.taxableIncome, data.federalBrackets);
      const optimizedRetTax = calculateBracketTax(playCalcs.taxableIncome, data.federalBrackets);
      const retSavings = Math.max(0, baselineRetTax - optimizedRetTax);
      
      suggestions.push({
        title: "Max pre-tax retirement accounts",
        desc: `Maximize pre-tax 401(k) and Traditional IRA contributions up to limits to reduce adjusted income.`,
        savings: retSavings
      });

      detailedItems.push({
        category: "Retirement",
        title: "Pre-Tax Traditional 401(k) / IRA Contributions",
        desc: `By contributing ${curSym}${formatNumber(playRetVal)} pre-tax, you directly lower your Adjusted Gross Income (AGI) from ${curSym}${formatNumber(Math.round(playCalcs.adjustedGrossIncome + playRetVal))} to ${curSym}${formatNumber(Math.round(playCalcs.adjustedGrossIncome))}, lowering tax liability.`,
        savings: retSavings,
        form: "Form 1040 / Form 8606",
        confidence: "high",
        source: "https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits",
        asOf: data.asOf
      });
    }

    if (playHsaVal > 0) {
      const hsaSavings = Math.round(playHsaVal * 0.22); 
      suggestions.push({
        title: "Contribute to Health Savings Account (HSA)",
        desc: `Unlock triple-tax benefits (tax-free contribution, growth, and withdrawals).`,
        savings: hsaSavings
      });
      detailedItems.push({
        category: "Health & Medical",
        title: "Health Savings Account (HSA)",
        desc: `Contributing ${curSym}${formatNumber(playHsaVal)} reduces taxable income directly. Ensure you are enrolled in a High-Deductible Health Plan (HDHP) to be eligible.`,
        savings: hsaSavings,
        form: "Form 8889",
        confidence: "high",
        source: "https://www.irs.gov/publications/p969",
        asOf: data.asOf
      });
    }

    if (userProfile.has_mortgage && userProfile.mortgage_interest > 0) {
      detailedItems.push({
        category: "Housing",
        title: "Itemized Mortgage Interest Deduction",
        desc: `Mortgage interest on home acquisition debt up to $750,000 is deductible if itemizing deductions instead of taking the standard deduction.`,
        savings: Math.round(userProfile.mortgage_interest * 0.15),
        form: "Schedule A (Form 1040)",
        confidence: "approximate",
        source: "https://www.irs.gov/publications/p936",
        asOf: data.asOf
      });
    }

    if (userProfile.children > 0) {
      const childCreditAmt = userProfile.children * data.credits.childTaxCredit;
      suggestions.push({
        title: "Claim Child Tax Credit (CTC)",
        desc: `Receive direct credit reduction of up to $2,000 per qualifying child under 17.`,
        savings: childCreditAmt
      });
      detailedItems.push({
        category: "Family Credits",
        title: "Child Tax Credit",
        desc: `Direct dollar-for-dollar reduction of income tax of ${curSym}${formatNumber(childCreditAmt)} for your ${userProfile.children} child(ren).`,
        savings: childCreditAmt,
        form: "Schedule 8812",
        confidence: "high",
        source: "https://www.irs.gov/credits-deductions/individuals/child-tax-credit",
        asOf: data.asOf
      });
    }
  } 
  
  // CANADA CALCULATIONS
  else if (userProfile.country === "ca") {
    const data = is2026 ? CA_TAX_DATA_2026 : CA_TAX_DATA_2025;
    
    watchouts.push({
      title: "Filing Deadline",
      desc: is2026 ? "Standard filing deadline is April 30, 2027. Self-employed filers have until June 15, 2027." : "Prior year deadline was April 30, 2026.",
      icon: "calendar"
    });
    
    if (userProfile.income_types.includes("self_employed")) {
      watchouts.push({
        title: "Self-Employment CPP",
        desc: "Freelancers pay both employer and employee portions of CPP (11.9% base + 8.0% CPP2). Half is deductible.",
        icon: "credit-card"
      });
      
      const cppSavingsNote = `Calculated self-employed CPP contributions of ${curSym}${formatNumber(Math.round(playCalcs.cppContribution))} (Base rate 11.90% up to $74,600 and CPP2 8.00% up to $85,000). A 50% deduction of this amount (${curSym}${formatNumber(Math.round(playCalcs.cppDeduction))}) was applied to reduce your Net Income.`;
      detailedItems.push({
        category: "Self-Employment Tax",
        title: "Self-Employed CPP Contributions",
        desc: cppSavingsNote,
        savings: 0,
        form: "Schedule 8 (T1)",
        confidence: "high",
        source: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums.html",
        asOf: data.asOf
      });
    }
    
    watchouts.push({
      title: "Receipt Audit Prep",
      desc: "CRA routinely reviews RRSP contributions and tuition expenses. Retain your official slips (T4, T5, T2202) for 6 years.",
      icon: "folder-open"
    });

    if (playRetVal > 0) {
      const baselineRetTax = calculateBracketTax(baselineCalculations.taxableIncome, data.federalBrackets);
      const optimizedRetTax = calculateBracketTax(playCalcs.taxableIncome, data.federalBrackets);
      const retSavings = Math.max(0, baselineRetTax - optimizedRetTax);
      
      suggestions.push({
        title: "Optimize RRSP Contributions",
        desc: `Contribute pre-tax income to your RRSP to lower your federal and provincial taxable income.`,
        savings: retSavings
      });

      detailedItems.push({
        category: "Retirement",
        title: "Registered Retirement Savings Plan (RRSP) Contributions",
        desc: `Contributing ${curSym}${formatNumber(playRetVal)} reduces your net income directly, lowering both federal and provincial brackets.`,
        savings: retSavings,
        form: "Line 20800 (Schedule 7)",
        confidence: "high",
        source: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/registered-retirement-savings-plan-rrsp.html",
        asOf: data.asOf
      });
    }

    suggestions.push({
      title: "Utilize Tax-Free Savings Account (TFSA)",
      desc: `Growth and withdrawals are 100% tax-free. Standard annual allowance is ${curSym}${formatNumber(data.limits.tfsaMax)}.`,
      savings: 0 
    });
    detailedItems.push({
      category: "Savings Vehicles",
      title: "Tax-Free Savings Account (TFSA) Room",
      desc: `Allows tax-free investment compounding. The current annual limit is ${curSym}${formatNumber(data.limits.tfsaMax)} with carrying forward of unused room.`,
      savings: 0,
      form: "TFSA Contribution Room (MyAccount)",
      confidence: "high",
      source: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account.html",
      asOf: data.asOf
    });
  } 
  
  // UK CALCULATIONS
  else if (userProfile.country === "uk") {
    const data = is2026 ? UK_TAX_DATA_2026 : UK_TAX_DATA_2025;
    
    watchouts.push({
      title: "Self Assessment Deadline",
      desc: "Online tax returns must be submitted, and any tax owed paid, by 31 January following the end of the tax year.",
      icon: "calendar"
    });
    
    if (userProfile.income_types.includes("self_employed")) {
      watchouts.push({
        title: "Class 4 NI",
        desc: "Class 4 National Insurance is calculated at progressive rates (6% / 2%). You may also be subject to advance 'payments on account'.",
        icon: "credit-card"
      });
      
      const niNotes = `Calculated Class 4 National Insurance of ${curSym}${formatNumber(Math.round(playCalcs.niTax))} (6% on earnings between £12,570 and £50,270; 2% above).`;
      detailedItems.push({
        category: "Self-Employment Tax",
        title: "Class 4 National Insurance",
        desc: niNotes,
        savings: 0,
        form: "Self Assessment SA100 (Page TR4)",
        confidence: "high",
        source: "https://www.gov.uk/self-employed-national-insurance-rates",
        asOf: data.asOf
      });
    }
    
    watchouts.push({
      title: "Tax Year End",
      desc: "The UK tax year runs from 6 April to 5 April. All allowances and pension limits reset after this date.",
      icon: "folder-open"
    });

    if (playRetVal > 0) {
      const baselineRetTax = calculateBracketTax(baselineCalculations.taxableIncome, data.englandBrackets);
      const optimizedRetTax = calculateBracketTax(playCalcs.taxableIncome, data.englandBrackets);
      const retSavings = Math.max(0, baselineRetTax - optimizedRetTax);
      
      suggestions.push({
        title: "Pension Tax Relief",
        desc: `Maximize workplace pension salary sacrifice or private SIPP contributions to receive government tax relief.`,
        savings: retSavings
      });

      detailedItems.push({
        category: "Retirement",
        title: "Pension Contribution (Workplace / SIPP)",
        desc: `Contributing £${formatNumber(playRetVal)} reduces taxable income. Basic rate tax relief (20%) is added automatically, and higher/additional rate relief can be claimed via Self Assessment.`,
        savings: retSavings,
        form: "Self Assessment SA100",
        confidence: "high",
        source: "https://www.gov.uk/tax-on-your-private-pension/pension-tax-relief",
        asOf: data.asOf
      });
    }

    suggestions.push({
      title: "Utilize ISA allowance",
      desc: `Save up to £20,000 annually across Cash, Stocks & Shares, or Innovative Finance ISAs tax-free.`,
      savings: 0
    });
    detailedItems.push({
      category: "Savings Vehicles",
      title: "Individual Savings Account (ISA)",
      desc: `Grow capital gains and savings interest completely tax-free up to the annual £20,000 limit. Note: Cash ISA contributions are capped at £12,000 from April 2027.`,
      savings: 0,
      form: "Standard Bank/Broker Setup",
      confidence: "high",
      source: "https://www.gov.uk/individual-savings-accounts",
      asOf: data.asOf
    });

    if (userProfile.filing_status === "married_joint") {
      suggestions.push({
        title: "Marriage Allowance Transfer",
        desc: `Transfer £1,260 of your Personal Allowance to your partner to save up to £252.`,
        savings: 252
      });
      detailedItems.push({
        category: "Family Credits",
        title: "Marriage Allowance",
        desc: `Allows lower-earning partner to transfer 10% of their Personal Allowance to the higher-earning partner (saving up to £252). Only valid if the higher earner is a basic-rate taxpayer.`,
        savings: 252,
        form: "Claim online via Gov.uk Portal",
        confidence: "high",
        source: "https://www.gov.uk/marriage-allowance",
        asOf: data.asOf
      });
    }
  }

  // 2. RENDER KEY ACTION SUGGESTIONS GRID
  if (suggestions.length === 0) {
    impactGrid.innerHTML = `
      <div class="suggestion-card" style="grid-column: span 2; border: 1px solid var(--border-color); padding: 1.5rem; border-radius: var(--radius-md);">
        <h4 style="margin-bottom: 0.5rem; font-weight: 700;">Explore Playground Options</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">No optimization deductions were filled. Move the sliders in the Tax Optimization Playground above to evaluate pension savings and deductibles.</p>
      </div>
    `;
  } else {
    suggestions.sort((a, b) => b.savings - a.savings);
    suggestions.slice(0, 4).forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.marginBottom = "0";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
          <h4 style="font-weight: 700; font-size: 0.95rem; color:var(--text-primary); max-width:70%;">${item.title}</h4>
          ${item.savings > 0 ? `<span style="font-weight: 800; color:var(--success); font-size: 0.95rem;">+${curSym}${formatNumber(Math.round(item.savings))}</span>` : `<span style="color:var(--text-muted); font-size:0.8rem; font-weight: 700;">Strategic</span>`}
        </div>
        <p style="font-size:0.82rem; color:var(--text-secondary); line-height:1.4;">${item.desc}</p>
      `;
      impactGrid.appendChild(card);
    });
  }

  // 3. RENDER DETAILED LIST WITH CITATIONS
  detailedItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "breakdown-card";
    
    const confidenceColor = item.confidence === "high" ? "var(--success)" : "var(--warning)";
    const confidenceText = item.confidence === "high" ? "High Confidence" : "Approximate";
    
    card.innerHTML = `
      <div class="breakdown-row">
        <div class="breakdown-heading">
          <span class="badge badge-info" style="margin-bottom: 0.5rem;">${item.category}</span>
          <h3>${item.title}</h3>
        </div>
        ${item.savings > 0 ? `<div class="breakdown-saving">${curSym}${formatNumber(Math.round(item.savings))} Est. Savings</div>` : `<div class="breakdown-saving" style="color:var(--text-muted)">Info Item</div>`}
      </div>
      <p class="breakdown-desc">${item.desc}</p>
      <div class="breakdown-meta">
        <div class="meta-item">
          <i data-lucide="file-input" aria-hidden="true"></i>
          <span><strong>How to claim:</strong> ${item.form}</span>
        </div>
        <div class="meta-item">
          <i data-lucide="award" aria-hidden="true"></i>
          <span><strong>Confidence:</strong> <span style="color: ${confidenceColor}; font-weight: bold;">${confidenceText}</span></span>
        </div>
        <div class="meta-item">
          <i data-lucide="link" aria-hidden="true"></i>
          <a class="meta-link" href="${item.source}" target="_blank" rel="noopener noreferrer">Official Source Citation</a>
        </div>
        <div class="meta-item">
          <i data-lucide="calendar" aria-hidden="true"></i>
          <span>Data as of: ${item.asOf}</span>
        </div>
      </div>
    `;
    detailList.appendChild(card);
  });
  
  lucide.createIcons({
    nodeList: detailList.querySelectorAll('[data-lucide]')
  });

  // 4. RENDER WATCHOUTS
  watchouts.forEach(w => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.marginBottom = "0";
    card.style.display = "flex";
    card.style.gap = "1rem";
    card.style.alignItems = "flex-start";
    card.style.padding = "1.5rem";
    card.innerHTML = `
      <div style="background-color: var(--primary-green-bg); padding:0.5rem; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
        <i data-lucide="${w.icon}" style="width:1.25rem; height:1.25rem; color:var(--primary-green);" aria-hidden="true"></i>
      </div>
      <div class="watchout-info">
        <h4 style="font-weight: 700; font-size: 0.95rem; margin-bottom:0.25rem;">${w.title}</h4>
        <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.4;">${w.desc}</p>
      </div>
    `;
    watchoutsGrid.appendChild(card);
  });
  
  lucide.createIcons({
    nodeList: watchoutsGrid.querySelectorAll('[data-lucide]')
  });
}

function populateDocsChecklist() {
  const listContainer = document.getElementById("docs-checklist-box");
  if (!listContainer) return;
  listContainer.innerHTML = "";
  
  let requiredDocs = [];
  if (userProfile.country === "us") {
    requiredDocs.push("W-2 Wage and Tax Statement (Salary proof)");
    if (userProfile.income_types.includes("self_employed")) requiredDocs.push("Form 1099-NEC (Self-Employment proof)");
    if (userProfile.has_mortgage) requiredDocs.push("Form 1098 (Mortgage Interest Statement)");
    if (userProfile.hsa_contrib > 0) requiredDocs.push("Form 5498-SA (HSA Contributions Receipt)");
  } 
  else if (userProfile.country === "ca") {
    requiredDocs.push("T4 slip (Statement of Remuneration Paid)");
    if (userProfile.has_retirement) requiredDocs.push("RRSP Contribution Slips (for tax deductions)");
    if (userProfile.education_expenses > 0) requiredDocs.push("T2202 Tuition and Enrolment Certificate");
  } 
  else if (userProfile.country === "uk") {
    requiredDocs.push("P60 End of Year Certificate (Workplace salary summary)");
    if (userProfile.income_types.includes("self_employed")) requiredDocs.push("SA102 (Self Assessment pages)");
    if (userProfile.has_retirement) requiredDocs.push("SIPP/Personal Pension contribution receipts");
  }
  
  if (requiredDocs.length === 0) {
    listContainer.innerHTML = `<p class="text-muted">Fill out the tax wizard to view checklist items.</p>`;
    return;
  }
  
  requiredDocs.forEach(doc => {
    listContainer.innerHTML += `
      <div class="checklist-row">
        <i data-lucide="file-warning" class="text-danger" aria-hidden="true"></i>
        <span>${doc}</span>
        <span class="badge badge-required font-outfit">Required</span>
      </div>
    `;
  });
  
  lucide.createIcons({
    nodeList: listContainer.querySelectorAll('[data-lucide]')
  });
}

function populateInvestmentsLimitCards() {
  const curPrefix = getCurrencySymbol(userProfile.country);
  
  let elss = "0";
  let ppf = "0";
  let nps = "0";
  let lic = "0";
  
  if (userProfile.country === "us") {
    const limits = userProfile.tax_year === "2026" ? US_TAX_DATA_2026.limits : US_TAX_DATA_2025.limits;
    elss = `${curPrefix}${formatNumber(limits.retirement401k)}`;
    ppf = `${curPrefix}${formatNumber(limits.retirementIRA)}`;
    nps = `${curPrefix}${formatNumber(limits.hsaSingle)}`;
    lic = `${curPrefix}${formatNumber(limits.hsaFamily)}`;
    
    // Change names of cards slightly for US
    document.querySelector("#panel-investments h2").textContent = "US Tax Savings Investments";
    document.querySelectorAll(".invest-desc h3")[0].textContent = "401(k) Pre-Tax Plans";
    document.querySelectorAll(".invest-desc p")[0].textContent = "Tax-deferred employer plans.";
    document.querySelectorAll(".invest-desc h3")[1].textContent = "Traditional IRA accounts";
    document.querySelectorAll(".invest-desc p")[1].textContent = "Individual retirement accounts.";
    document.querySelectorAll(".invest-desc h3")[2].textContent = "Single Health Savings (HSA)";
    document.querySelectorAll(".invest-desc p")[2].textContent = "Medical savings accounts.";
    document.querySelectorAll(".invest-desc h3")[3].textContent = "Family Health Savings (HSA)";
    document.querySelectorAll(".invest-desc p")[3].textContent = "High-deductible plan medical accounts.";
  } 
  else if (userProfile.country === "ca") {
    const limits = userProfile.tax_year === "2026" ? CA_TAX_DATA_2026.limits : CA_TAX_DATA_2025.limits;
    const maxRRSP = Math.min(limits.rrspMax, Math.round(userProfile.annual_income * 0.18));
    elss = `${curPrefix}${formatNumber(maxRRSP)}`;
    ppf = `${curPrefix}${formatNumber(limits.tfsaMax)}`;
    nps = `${curPrefix}5,000`;
    lic = `${curPrefix}10,000`;
    
    document.querySelector("#panel-investments h2").textContent = "Canada Tax Savings Investments";
    document.querySelectorAll(".invest-desc h3")[0].textContent = "Registered Retirement (RRSP)";
    document.querySelectorAll(".invest-desc p")[0].textContent = "Pre-tax retirement savings.";
    document.querySelectorAll(".invest-desc h3")[1].textContent = "Tax-Free Savings (TFSA)";
    document.querySelectorAll(".invest-desc p")[1].textContent = "Tax-free growth and withdrawals.";
    document.querySelectorAll(".invest-desc h3")[2].textContent = "Tuition Slips (T2202)";
    document.querySelectorAll(".invest-desc p")[2].textContent = "Tuition credits tax write-offs.";
    document.querySelectorAll(".invest-desc h3")[3].textContent = "First Home Savings (FHSA)";
    document.querySelectorAll(".invest-desc p")[3].textContent = "Tax-free home purchase accounts.";
  } 
  else if (userProfile.country === "uk") {
    const data = userProfile.tax_year === "2026" ? UK_TAX_DATA_2026 : UK_TAX_DATA_2025;
    const limits = data.limits;
    elss = `${curPrefix}${formatNumber(limits.pensionMax)}`;
    ppf = `${curPrefix}${formatNumber(limits.isaMax)}`;
    nps = `${curPrefix}1,260`;
    lic = `£${formatNumber(data.marriageAllowanceSavings || 252)}`;
    
    document.querySelector("#panel-investments h2").textContent = "UK Tax Savings Investments";
    document.querySelectorAll(".invest-desc h3")[0].textContent = "Workplace & Private Pensions";
    document.querySelectorAll(".invest-desc p")[0].textContent = "SIPP or workplace salary sacrifice.";
    document.querySelectorAll(".invest-desc h3")[1].textContent = "Individual Savings Accounts (ISA)";
    document.querySelectorAll(".invest-desc p")[1].textContent = "Tax-free cash or stocks wrapper.";
    document.querySelectorAll(".invest-desc h3")[2].textContent = "Marriage Allowance Transfer";
    document.querySelectorAll(".invest-desc p")[2].textContent = "Transfer personal allowance room.";
    document.querySelectorAll(".invest-desc h3")[3].textContent = "Gift Aid Charity Donations";
    document.querySelectorAll(".invest-desc p")[3].textContent = "Charitable gifts net tax refund.";
  }
  
  document.getElementById("elss-savings-val").textContent = elss;
  document.getElementById("ppf-savings-val").textContent = ppf;
  document.getElementById("nps-savings-val").textContent = nps;
  document.getElementById("lic-savings-val").textContent = lic;
}

/* ==========================================================================
   LIVE SUPPORT CHAT LOGIC
   ========================================================================== */
function setupHelpdeskActions() {
  const btnSidebarChat = document.getElementById("btn-sidebar-chat");
  const btnSendMsg = document.getElementById("btn-chat-send-msg");
  const chatInput = document.getElementById("chat-message-input-text");
  const chatBox = document.getElementById("chat-messages-area-box");
  const btnRequestCall = document.getElementById("btn-request-call-chat");
  const btnExpertCall = document.getElementById("btn-expert-call");

  if (btnSidebarChat) {
    btnSidebarChat.addEventListener("click", () => {
      switchTab("support");
    });
  }

  function sendChatMessage() {
    const txt = chatInput.value.trim();
    if (!txt) return;
    
    // Add user message
    chatBox.innerHTML += `
      <div class="message msg-sent">
        <div class="msg-bubble-content">
          <p>${txt}</p>
          <span class="msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    `;
    
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Consultant automated response
    setTimeout(() => {
      let reply = "Thanks for the query. I am reviewing your selection. Let's arrange a call to map your exact allocations legally.";
      if (txt.toLowerCase().includes("hsa") || txt.toLowerCase().includes("retirement")) {
        reply = "Under IRS Sec 125, HSAs offer triple tax advantages. It is highly recommended to prioritize maximizing this contribution first, and allocating the remaining room to W-2 401(k)s. Would you like me to map the exact split?";
      } else if (txt.toLowerCase().includes("rrsp") || txt.toLowerCase().includes("tfsa")) {
        reply = "In Canada, RRSPs directly lower net income. TFSAs offer long-term tax-free gains. I recommend allocating up to your RRSP deduction limit first, then putting the rest in a TFSA.";
      }
      
      chatBox.innerHTML += `
        <div class="message msg-received">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=128&auto=format&fit=crop" class="msg-avatar" alt="CA Zayed" />
          <div class="msg-bubble-content">
            <p>${reply}</p>
            <span class="msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      `;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1500);
  }

  if (btnSendMsg && chatInput) {
    btnSendMsg.addEventListener("click", sendChatMessage);
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendChatMessage();
    });
  }

  const triggerCallAlert = () => {
    alert("Zayed Ansari has been scheduled! You will receive a call at your registered number within 15 minutes.");
  };

  if (btnRequestCall) btnRequestCall.addEventListener("click", triggerCallAlert);
  if (btnExpertCall) btnExpertCall.addEventListener("click", triggerCallAlert);
}

/* ==========================================================================
   SETTINGS & PROFILE
   ========================================================================== */
function setupSettingsAndProfile() {
  const btnThemeLight = document.getElementById("btn-theme-light");
  const btnThemeDark = document.getElementById("btn-theme-dark");
  const currencyOverride = document.getElementById("setting-currency-override");
  
  if (btnThemeLight) {
    btnThemeLight.addEventListener("click", () => {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    });
  }
  
  if (btnThemeDark) {
    btnThemeDark.addEventListener("click", () => {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    });
  }

  if (currencyOverride) {
    currencyOverride.addEventListener("change", () => {
      const val = currencyOverride.value;
      if (val !== "auto") {
        let sym = "$";
        if (val === "gbp") sym = "£";
        else if (val === "inr") sym = "₹";
        
        document.querySelectorAll(".currency-prefix, .logo-currency-symbol").forEach(el => {
          el.textContent = sym;
        });
      } else {
        // Fallback to active profile country currency
        const sym = getCurrencySymbol(userProfile.country);
        document.querySelectorAll(".currency-prefix, .logo-currency-symbol").forEach(el => {
          el.textContent = sym;
        });
      }
      if (userProfile.annual_income > 0) {
        updatePlaygroundResults();
      }
    });
  }

  // Dummy profile changes save
  document.getElementById("btn-save-profile-changes").addEventListener("click", () => {
    const name = document.getElementById("prof-name").value;
    alert(`Profile details for ${name} saved successfully!`);
  });
  
  document.getElementById("btn-save-settings-changes").addEventListener("click", () => {
    alert("Workspace preferences and notification channels saved successfully.");
  });

  // Prepopulate document uploader file change trigger
  const fileZone = document.getElementById("drag-drop-zone");
  const fileInput = document.getElementById("file-uploader-input");
  
  if (fileZone && fileInput) {
    fileZone.addEventListener("click", () => {
      fileInput.click();
    });
    
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        const filesContainer = document.getElementById("uploaded-files-container");
        for (let i = 0; i < fileInput.files.length; i++) {
          const file = fileInput.files[i];
          filesContainer.innerHTML += `
            <div class="uploaded-file-row">
              <div class="file-info-left">
                <i data-lucide="file-text" class="text-primary" aria-hidden="true"></i>
                <div class="file-name-meta">
                  <span class="file-name-txt">${file.name}</span>
                  <span class="file-size-txt text-muted">${Math.round(file.size / 1024)} KB • Just Uploaded</span>
                </div>
              </div>
              <button type="button" class="btn-icon text-danger file-delete-btn"><i data-lucide="trash-2" aria-hidden="true"></i></button>
            </div>
          `;
        }
        lucide.createIcons({
          nodeList: filesContainer.querySelectorAll('[data-lucide]')
        });
        alert("Documents uploaded successfully. Zayed Ansari will review them momentarily.");
      }
    });
  }
}

/* ==========================================================================
   FORMATTERS & HELPERS
   ========================================================================== */
function getCurrencySymbol(country) {
  const settingOverride = document.getElementById("setting-currency-override");
  if (settingOverride && settingOverride.value !== "auto") {
    const val = settingOverride.value;
    if (val === "gbp") return "£";
    if (val === "inr") return "₹";
    return "$";
  }
  
  if (country === "uk") return "£";
  return "$";
}

function formatNumber(num) {
  return Number(num).toLocaleString(undefined, { maximumFractionDigits: 0 });
}
