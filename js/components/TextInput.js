// export function TextInput({label, type, value, onInput, name, showPassword, onToggleShowPassword, required, placeholder, tabIndex}) {
//     const group = document.createElement('div');
//     group.className = 'input-group';
//     if (label) {
//         const lbl = document.createElement('label');
//         lbl.className = 'input-label';
//         lbl.setAttribute('for', name);
//         lbl.textContent = label;
//         group.appendChild(lbl);
//     }
//     const input = document.createElement('input');
//     input.className = 'input-field';
//     input.type = type === 'password' && showPassword ? 'text' : type;
//     input.name = name;
//     input.id = name;
//     input.value = value;
//     input.required = !!required;
//     input.placeholder = placeholder || '';
//     input.tabIndex = tabIndex || 0;
//     input.addEventListener('input', e => onInput(e.target.value));
//     group.appendChild(input);
//     if (type === 'password') {
//         const toggleBtn = document.createElement('button');
//         toggleBtn.className = 'input-show-password';
//         toggleBtn.type = 'button';
//         toggleBtn.setAttribute('aria-label', showPassword ? 'Hide password' : 'Show password');
//         toggleBtn.textContent = showPassword ? '🙈' : '👁';
//         toggleBtn.onclick = (e) => {
//             e.preventDefault();
//             onToggleShowPassword();
//             input.type = showPassword ? 'text' : 'password';
//             input.focus();
//         };
//         group.appendChild(toggleBtn);
//     }
//     return group;
// }

export function TextInput({
  label,
  type,
  value,
  onInput,
  name,
  showPassword,
  onToggleShowPassword,
  required,
  placeholder,
  tabIndex,
  className, // <--- yangi parametr!
  style, // <--- style atributi (string yoki object)
  width, // <--- width atributi (optional)
  height, // <--- height atributi (optional)
}) {
  const group = document.createElement("div");
  group.className = "workform-input-group";

  if (label) {
    const lbl = document.createElement("label");
    lbl.className = "input-label";
    lbl.setAttribute("for", name);
    lbl.textContent = label;
    group.appendChild(lbl);
  }

  const input = document.createElement("input");
  input.className = "input-field" + (className ? ` ${className}` : ""); // Dinamik class
  input.type = type === "password" && showPassword ? "text" : type;
  input.name = name;
  input.id = name;
  input.value = value;
  input.required = !!required;
  input.placeholder = placeholder || "";
  input.tabIndex = tabIndex || 0;
  input.addEventListener("input", (e) => onInput(e.target.value));

  // --- Dinamik style ---
  if (style) {
    if (typeof style === "string") {
      input.style = style;
    } else if (typeof style === "object") {
      Object.assign(input.style, style);
    }
  }
  // --- Dinamik width/height ---
  if (width)
    input.style.width = typeof width === "number" ? `${width}px` : width;
  if (height)
    input.style.height = typeof height === "number" ? `${height}px` : height;

  group.appendChild(input);

  if (type === "password") {
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "input-show-password";
    toggleBtn.type = "button";
    toggleBtn.setAttribute(
      "aria-label",
      showPassword ? "Hide password" : "Show password"
    );
    toggleBtn.innerHTML = showPassword
      ? '<img src="/eyye.svg" alt="Ko\'z ochiq" width="24" height="24">'
      : '<img src="/public/eyye.svg" alt="Ko\'z yopiq" width="24" height="24">';
    toggleBtn.onclick = (e) => {
      e.preventDefault();
      onToggleShowPassword();
      input.type = showPassword ? "text" : "password";
      input.focus();
    };
    group.appendChild(toggleBtn);
  }
  return group;
}
