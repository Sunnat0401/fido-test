export function Checkbox({
  label,
  checked,
  onChange,
  name,
  tabIndex,
  className,
}) {
  const group = document.createElement("div");
  group.className = "workroom-checkbox-group";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = name;
  input.name = name;
  input.checked = checked;
  input.tabIndex = tabIndex || 0;
  input.className = className || "";
  input.addEventListener("change", (e) => onChange(e.target.checked));

  const lbl = document.createElement("label");
  lbl.className = "checkbox-label";
  lbl.setAttribute("for", name);
  lbl.textContent = label;

  group.appendChild(input);
  group.appendChild(lbl);

  return group;
}
