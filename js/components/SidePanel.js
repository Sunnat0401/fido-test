import { Stepper } from "./Stepper.js";

export function SidePanel({
  step,
  totalSteps = 4,
  title = "Get started",
  showLogo = true,
}) {
  const side = document.createElement("div");
  side.className = "woorkroom-sidebar";
  side.innerHTML = `
    ${
      showLogo
        ? `<img class="workroom-logo" src="/public/logo.jpg" alt="Woorkroom" >`
        : ""
    }
    <h2 class="workroom-sidebar-title">${title}</h2>
  `;
  side.appendChild(Stepper({ step, totalSteps }));
  return side;
}
