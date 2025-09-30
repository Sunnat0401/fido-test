export function Stepper({ step }) {
  const steps = [
    "Valid your phone",
    "Tell about yourself",
    "Tell about your company",
    "Invite Team Members",
  ];
  const wrapper = document.createElement("div");
  wrapper.className = "stepper";
  steps.forEach((text, i) => {
    const row = document.createElement("div");
    row.className =
      "stepper-step" +
      (step > i ? " completed" : step === i + 1 ? " active" : "");
    const circle = document.createElement("div");
    circle.className = "stepper-circle";
    circle.textContent = step > i ? "✓" : i + 1;
    row.appendChild(circle);
    const label = document.createElement("div");
    label.textContent = text;
    row.appendChild(label);
    if (i !== steps.length - 1) {
      const line = document.createElement("div");
      row.appendChild(line);
    }
    wrapper.appendChild(row);
  });
  return wrapper;
}
