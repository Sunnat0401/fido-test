import { SidePanel } from "./SidePanel.js";
import { getAuthState, setAuthState } from "../storage.js";
import { NextPrevButtons } from "./NextPrevButtons.js";

export function renderOnboardingStep3(container) {
  let state = getAuthState();
  let name = state.onboarding.company.name || "";
  let direction = state.onboarding.company.direction || "IT and programming";
  let teamSize = state.onboarding.company.teamSize || "";

  function validate() {
    return name.trim() && direction && teamSize;
  }
  function handleNext(e) {
    e.preventDefault();
    state.onboarding.company = { name, direction, teamSize };
    state.onboarding.step = 4;
    setAuthState(state);
    window.location.hash = "onboarding-4";
  }
  function handlePrev(e) {
    e.preventDefault();
    state.onboarding.step = 2;
    setAuthState(state);
    window.location.hash = "onboarding-2";
  }
  container.innerHTML = "";
  const shell = document.createElement("div");
  shell.className = "woorkroom-auth-shell";
  shell.style = "display:flex;min-height:100vh;background:#f9fbff;";

  shell.appendChild(
    SidePanel({ step: 3, totalSteps: 4, title: "Get started" })
  );

  const main = document.createElement("div");
  main.className = "woorkroom-auth-main-step1";
  main.innerHTML = `<div class="company-step3-header">
    <div class="company-step3-step">STEP 3/4</div>
    <h3 class="company-step3-title">Tell about your company</h3>
  </div>`;

  const form = document.createElement("form");
  form.className = "company-step3-form";
  form.onsubmit = handleNext;

  const nameGroup = document.createElement("div");
  nameGroup.className = "company-step3-input-group";
  const nameLabel = document.createElement("label");
  nameLabel.className = "company-step3-label";
  nameLabel.textContent = "Your Company's Name";
  nameLabel.htmlFor = "companyName";
  nameGroup.appendChild(nameLabel);
  const nameInput = document.createElement("input");
  nameInput.className = "company-step3-input-field";
  nameInput.type = "text";
  nameInput.name = "companyName";
  nameInput.value = name;
  nameInput.required = true;
  nameInput.placeholder = "Company's Name";
  nameInput.addEventListener("input", (e) => {
    name = e.target.value;
    nextPrevFooter.querySelector(".company-step3-btn-primary").disabled =
      !validate();
  });
  nameGroup.appendChild(nameInput);
  form.appendChild(nameGroup);

  const directionGroup = document.createElement("div");
  directionGroup.className = "company-step3-input-group";
  const directionLabel = document.createElement("label");
  directionLabel.className = "company-step3-label";
  directionLabel.textContent = "Business Direction";
  directionLabel.htmlFor = "direction";
  directionGroup.appendChild(directionLabel);
  const directionSelect = document.createElement("select");
  directionSelect.className = "company-step3-input-field company-step3-select";
  directionSelect.name = "direction";
  directionSelect.id = "direction";
  [
    "IT and programming",
    "Finance",
    "Construction",
    "Education",
    "Healthcare",
    "Retail",
    "Other",
  ].forEach((v) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    directionSelect.appendChild(opt);
  });
  directionSelect.value = direction;
  directionSelect.onchange = (e) => {
    direction = e.target.value;
    nextPrevFooter.querySelector(".company-step3-btn-primary").disabled =
      !validate();
  };
  directionGroup.appendChild(directionSelect);
  form.appendChild(directionGroup);

  const teamSizes = [
    { value: "me", label: "Only me" },
    { value: "2-5", label: "2 - 5" },
    { value: "6-10", label: "6 - 10" },
    { value: "11-20", label: "11 - 20" },
    { value: "21-40", label: "21 - 40" },
    { value: "41-50", label: "41 - 50" },
    { value: "51-100", label: "51 - 100" },
    { value: "101-500", label: "101 - 500" },
  ];
  const teamGroup = document.createElement("div");
  teamGroup.className = "company-step3-input-group";
  const teamLabel = document.createElement("label");
  teamLabel.className = "company-step3-label";
  teamLabel.textContent = "How many people in your team?";
  teamGroup.appendChild(teamLabel);
  const teamRow = document.createElement("div");
  teamRow.className = "company-step3-team-row";
  teamSizes.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = opt.label;
    btn.className =
      "company-step3-team-btn" + (teamSize === opt.value ? " selected" : "");
    btn.setAttribute("data-value", opt.value);
    btn.onclick = () => {
      teamSize = opt.value;
      Array.from(teamRow.children).forEach((b) =>
        b.classList.remove("selected")
      );
      btn.classList.add("selected");
      nextPrevFooter.querySelector(".company-step3-btn-primary").disabled =
        !validate();
    };
    teamRow.appendChild(btn);
  });
  teamGroup.appendChild(teamRow);
  form.appendChild(teamGroup);

  const nextPrevFooter = (function () {
    const wrapper = document.createElement("div");
    wrapper.className = "company-step3-btn-footer";
    const prevBtn = document.createElement("button");
    prevBtn.className = "company-step3-btn company-step3-btn-link";
    prevBtn.type = "button";
    prevBtn.innerHTML = "← Previous";
    prevBtn.onclick = handlePrev;

    const nextBtn = document.createElement("button");
    nextBtn.className = "company-step3-btn company-step3-btn-primary";
    nextBtn.type = "submit";
    nextBtn.innerHTML = "Next Step →";
    nextBtn.disabled = !validate();
    nextBtn.onclick = handleNext;

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);
    return wrapper;
  })();
  form.appendChild(nextPrevFooter);

  main.appendChild(form);
  shell.appendChild(main);
  container.appendChild(shell);
}
