// import { Stepper } from "./Stepper.js";
// import { NextPrevButtons } from "./NextPrevButtons.js";
// import { getAuthState, setAuthState } from "../storage.js";

// // Email input component
// function EmailInput({
//   label,
//   value,
//   onInput,
//   name,
//   required,
//   placeholder,
//   tabIndex,
// }) {
//   const group = document.createElement("div");
//   group.className = "input-group";
//   if (label) {
//     const lbl = document.createElement("label");
//     lbl.className = "input-label";
//     lbl.setAttribute("for", name);
//     lbl.textContent = label;
//     group.appendChild(lbl);
//   }
//   const input = document.createElement("input");
//   input.className = "input-field";
//   input.type = "email";
//   input.name = name;
//   input.id = name;
//   input.value = value;
//   input.required = !!required;
//   input.placeholder = placeholder || "";
//   input.tabIndex = tabIndex || 0;
//   input.addEventListener("input", (e) => onInput(e.target.value));
//   group.appendChild(input);
//   return group;
// }



// export function renderOnboardingStep4(container) {
//   let state = getAuthState();
//   let invites =
//     Array.isArray(state.onboarding.invites) && state.onboarding.invites.length
//       ? state.onboarding.invites
//       : [""];
//   let error = "";

//   function validate() {
//     if (!invites[0] || !/\S+@\S+\.\S+/.test(invites[0])) return false;
//     for (let i = 1; i < invites.length; i++) {
//       if (invites[i] && !/\S+@\S+\.\S+/.test(invites[i])) return false;
//     }
//     return true;
//   }
//   function handleNext(e) {
//     e.preventDefault();
//     if (!validate()) {
//       error =
//         "At least one valid email is required, and all entered emails must be valid!";
//       render();
//       return;
//     }
//     state.onboarding.invites = invites.filter((email) => email.trim());
//     state.onboarding.step = 5;
//     setAuthState(state);
//     window.location.hash = "success";
//   }
//   function handlePrev(e) {
//     e.preventDefault();
//     state.onboarding.step = 3;
//     setAuthState(state);
//     window.location.hash = "onboarding-3";
//   }
//   function handleAddMember(e) {
//     e.preventDefault();
//     if (invites.length < 3) {
//       invites.push("");
//       render();
//       setTimeout(() => {
//         const inputs = document.querySelectorAll('.input-field[type="email"]');
//         if (inputs.length) inputs[inputs.length - 1].focus();
//       }, 20);
//     }
//   }
//   function render() {
//     container.innerHTML = "";
//     const shell = document.createElement("div");
//     shell.className = "woorkroom-auth-shell";
//     shell.style = "display:flex;min-height:100vh;background:#f9fbff;";
//     const side = document.createElement("div");
//     side.className = "woorkroom-auth-side";
//     side.style = `background:#357cf7;border-radius:30px;padding:44px 32px 0 32px;display:flex;flex-direction:column;align-items:start;`;
//     side.innerHTML = `<img src="assets/logo.svg" alt="Woorkroom" style="width:54px; margin-bottom:24px;">
//         <h2 style="margin:0;font-size:2.1rem;font-weight:700;color:#fff;">Get started</h2>`;
//     side.appendChild(Stepper({ step: 4 }));

//     const main = document.createElement("div");
//     main.className = "woorkroom-auth-main";
//     main.style =
//       "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:52px 0 0 0;";
//     main.innerHTML = `<div style="margin-bottom:32px;text-align:center;">
//         <div style="color:#357cf7;font-weight:600;font-size:1.1rem;">STEP 4/4</div>
//         <h3 style="margin-top:6px;font-size:1.45rem;font-weight:700;">Jamoa a’zolarini taklif qilish</h3>
//       </div>`;

//     const form = document.createElement("form");
//     form.style =
//       "display:flex;flex-direction:column;gap:28px;width:100%;max-width:490px;margin:auto;";
//     form.onsubmit = handleNext;

//     invites.forEach((email, idx) => {
//       const group = document.createElement("div");
//       group.className = "input-group";
//       if (idx === 0) {
//         const lbl = document.createElement("label");
//         lbl.className = "input-label";
//         lbl.setAttribute("for", `invite${idx}`);
//         lbl.textContent = "Member's Email";
//         group.appendChild(lbl);
//       }
//       const input = document.createElement("input");
//       input.className = "input-field";
//       input.type = "email";
//       input.name = `invite${idx}`;
//       input.id = `invite${idx}`;
//       input.value = email;
//       input.required = idx === 0;
//       input.placeholder = "memberemail@gmail.com";
//       input.tabIndex = 1 + idx;
//       input.addEventListener("input", (e) => {
//         invites[idx] = e.target.value;
//         nextPrevFooter.querySelector(".button.primary").disabled = !validate();
//       });
//       group.appendChild(input);
//       form.appendChild(group);
//     });

//     if (invites.length < 3) {
//       const addLink = document.createElement("a");
//       addLink.className = "button link";
//       addLink.href = "#";
//       addLink.textContent = "+ Add another Member";
//       addLink.style =
//         "margin-top:-12px;color:#357cf7;font-size:17px;font-weight:500;padding-left:8px;text-decoration:none;";
//       addLink.onclick = handleAddMember;
//       form.appendChild(addLink);
//     }

//     if (error) {
//       const errDiv = document.createElement("div");
//       errDiv.className = "alert";
//       errDiv.style = "background:#ffeaea;color:#c72c2c;";
//       errDiv.textContent = error;
//       form.appendChild(errDiv);
//     }
//     nextPrevFooter = NextPrevButtons({
//       onPrev: handlePrev,
//       onNext: handleNext,
//       nextDisabled: !validate(),
//       prevDisabled: false,
//     });
//     form.appendChild(nextPrevFooter);

//     main.appendChild(form);
//     shell.appendChild(side);
//     shell.appendChild(main);
//     container.appendChild(shell);
//   }
//   let nextPrevFooter;
//   render();
// }

import { SidePanel } from "./SidePanel.js";
import { getAuthState, setAuthState } from "../storage.js";

export function renderOnboardingStep4(container) {
  let state = getAuthState();
  let invites =
    Array.isArray(state.onboarding.invites) && state.onboarding.invites.length
      ? state.onboarding.invites
      : [""];
  let error = "";

  function validate() {
    if (!invites[0] || !/\S+@\S+\.\S+/.test(invites[0])) return false;
    for (let i = 1; i < invites.length; i++) {
      if (invites[i] && !/\S+@\S+\.\S+/.test(invites[i])) return false;
    }
    return true;
  }
  function handleNext(e) {
    e.preventDefault();
    if (!validate()) {
      error =
        "At least one valid email is required, and all entered emails must be valid!";
      render();
      return;
    }
    state.onboarding.invites = invites.filter((email) => email.trim());
    state.onboarding.step = 5;
    setAuthState(state);
    window.location.hash = "success";
  }
  function handlePrev(e) {
    e.preventDefault();
    state.onboarding.step = 3;
    setAuthState(state);
    window.location.hash = "onboarding-3";
  }
  function handleAddMember(e) {
    e.preventDefault();
    if (invites.length < 3) {
      invites.push("");
      render();
      setTimeout(() => {
        const inputs = document.querySelectorAll('.step4-input-field[type="email"]');
        if (inputs.length) inputs[inputs.length - 1].focus();
      }, 20);
    }
  }
  function render() {
    container.innerHTML = "";
    const shell = document.createElement("div");
    shell.className = "woorkroom-auth-shell";

    shell.appendChild(SidePanel({ step: 4, totalSteps: 4, title: "Get started" }));

    const main = document.createElement("div");
    main.className = "woorkroom-auth-main-step1";
    main.innerHTML = `<div class="step4-header">
        <div class="step4-step">STEP 4/4</div>
        <h3 class="step4-title">Invite teammates</h3>
      </div>`;

    const form = document.createElement("form");
    form.className = "step4-form";
    form.onsubmit = handleNext;

    // Email input fields
    invites.forEach((email, idx) => {
      const group = document.createElement("div");
      group.className = "step4-input-group";
      if (idx === 0) {
        const lbl = document.createElement("label");
        lbl.className = "step4-label";
        lbl.setAttribute("for", `invite${idx}`);
        lbl.textContent = "Member's Email";
        group.appendChild(lbl);
      }
      const input = document.createElement("input");
      input.className = "step4-input-field";
      input.type = "email";
      input.name = `invite${idx}`;
      input.id = `invite${idx}`;
      input.value = email;
      input.required = idx === 0;
      input.placeholder = "memberemail@gmail.com";
      input.tabIndex = 1 + idx;
      input.addEventListener("input", (e) => {
        invites[idx] = e.target.value;
        nextPrevFooter.querySelector(".step4-btn-primary").disabled = !validate();
      });
      group.appendChild(input);
      form.appendChild(group);
    });

    // Add another member button, always visible if less than 3 members
    if (invites.length < 3) {
      const addLink = document.createElement("a");
      addLink.className = "step4-add-member-link";
      addLink.href = "#";
      addLink.textContent = "+ Add another Member";
      addLink.onclick = handleAddMember;
      form.appendChild(addLink);
    }

    // Error message
    if (error) {
      const errDiv = document.createElement("div");
      errDiv.className = "step4-alert-error";
      errDiv.textContent = error;
      form.appendChild(errDiv);
    }

    // Next/Prev buttons (custom, no external component)
    const nextPrevFooter = document.createElement("div");
    nextPrevFooter.className = "step4-btn-footer";
    const prevBtn = document.createElement("button");
    prevBtn.className = "step4-btn step4-btn-link";
    prevBtn.type = "button";
    prevBtn.innerHTML = "← Previous";
    prevBtn.onclick = handlePrev;

    const nextBtn = document.createElement("button");
    nextBtn.className = "step4-btn step4-btn-primary";
    nextBtn.type = "submit";
    nextBtn.innerHTML = "Next Step →";
    nextBtn.disabled = !validate();
    nextBtn.onclick = handleNext;

    nextPrevFooter.appendChild(prevBtn);
    nextPrevFooter.appendChild(nextBtn);
    form.appendChild(nextPrevFooter);

    main.appendChild(form);
    shell.appendChild(main);
    container.appendChild(shell);
  }
  render();
}