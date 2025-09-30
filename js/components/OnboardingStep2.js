import { SidePanel } from "./SidePanel.js";
import { getAuthState, setAuthState } from "../storage.js";
import { NextPrevButtons } from "./NextPrevButtons.js";

export function renderOnboardingStep2(container) {
  let state = getAuthState();
  let useCase = state.onboarding.profile.useCase || "Work";
  let role = state.onboarding.profile.role || "Business Owner";
  let newsletterOptIn = state.onboarding.profile.newsletterOptIn ?? true;

  function validate() { return !!useCase && !!role; }
  function handleNext(e) {
    e.preventDefault();
    state.onboarding.profile = { useCase, role, newsletterOptIn };
    state.onboarding.step = 3;
    setAuthState(state);
    window.location.hash = "onboarding-3";
  }
  function handlePrev(e) {
    e.preventDefault();
    state.onboarding.step = 1;
    setAuthState(state);
    window.location.hash = "onboarding-1";
  }
  container.innerHTML = "";
  const shell = document.createElement("div");
  shell.className = "woorkroom-auth-shell";
  shell.style = "display:flex;min-height:100vh;background:#f9fbff;";

  shell.appendChild(SidePanel({ step: 2, totalSteps: 4, title: "Get started" }));

  const main = document.createElement("div");
  main.className = "woorkroom-auth-main-step1";
  main.style = "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:52px 0 0 0;";
  main.innerHTML = `<div style="margin-bottom:32px;text-align:center;">
    <div style="color:#357cf7;font-weight:600;font-size:1.1rem;">STEP 2/4</div>
    <h3 style="margin-top:6px;font-size:1.45rem;font-weight:700;">O‘zingiz haqingizda aytib bering</h3>
  </div>`;

  const form = document.createElement("form");
  form.style = "display:flex;flex-direction:column;gap:28px;width:100%;max-width:490px;margin:auto;";
  form.onsubmit = handleNext;

  // Use case select
  const useCaseGroup = document.createElement("div");
  useCaseGroup.className = "input-group";
  const useCaseLabel = document.createElement("label");
  useCaseLabel.className = "input-label";
  useCaseLabel.textContent = "Why will you use the service?";
  useCaseLabel.htmlFor = "useCase";
  useCaseGroup.appendChild(useCaseLabel);
  const useCaseSelect = document.createElement("select");
  useCaseSelect.className = "input-field";
  useCaseSelect.name = "useCase"; useCaseSelect.id = "useCase";
  ["Work", "Personal", "Startup"].forEach(v => {
    const opt = document.createElement("option");
    opt.value = v; opt.textContent = v; useCaseSelect.appendChild(opt);
  });
  useCaseSelect.value = useCase;
  useCaseSelect.onchange = e => { useCase = e.target.value; nextPrevFooter.querySelector(".button.primary").disabled = !validate(); };
  useCaseGroup.appendChild(useCaseSelect);
  form.appendChild(useCaseGroup);

  // Role select
  const roleGroup = document.createElement("div");
  roleGroup.className = "input-group";
  const roleLabel = document.createElement("label");
  roleLabel.className = "input-label";
  roleLabel.textContent = "What describes you best?";
  roleLabel.htmlFor = "role";
  roleGroup.appendChild(roleLabel);
  const roleSelect = document.createElement("select");
  roleSelect.className = "input-field";
  roleSelect.name = "role"; roleSelect.id = "role";
  ["Business Owner", "Manager", "Employee"].forEach(v => {
    const opt = document.createElement("option");
    opt.value = v; opt.textContent = v; roleSelect.appendChild(opt);
  });
  roleSelect.value = role;
  roleSelect.onchange = e => { role = e.target.value; nextPrevFooter.querySelector(".button.primary").disabled = !validate(); };
  roleGroup.appendChild(roleSelect);
  form.appendChild(roleGroup);

  // Newsletter radio
  const radioGroup = document.createElement("div");
  radioGroup.className = "input-group";
  const radioLabel = document.createElement("label");
  radioLabel.className = "input-label";
  radioLabel.textContent = "Do you want to receive newsletter?";
  radioLabel.htmlFor = "newsletterOptIn";
  radioGroup.appendChild(radioLabel);
  ["Yes", "No"].forEach((v, idx) => {
    const radioLabelOpt = document.createElement("label");
    radioLabelOpt.style = "font-size:16px;display:flex;align-items:center;gap:6px;cursor:pointer;margin-right:18px;";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "newsletterOptIn";
    radio.value = idx === 0 ? "true" : "false";
    radio.checked = newsletterOptIn === (idx === 0);
    radio.onclick = () => newsletterOptIn = idx === 0;
    radioLabelOpt.appendChild(radio);
    radioLabelOpt.appendChild(document.createTextNode(v));
    radioGroup.appendChild(radioLabelOpt);
  });
  form.appendChild(radioGroup);

  const nextPrevFooter = NextPrevButtons({
    onPrev: handlePrev, onNext: handleNext, nextDisabled: !validate(), prevDisabled: false
  });
  form.appendChild(nextPrevFooter);

  main.appendChild(form);
  shell.appendChild(main);
  container.appendChild(shell);
}