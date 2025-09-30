export function Button({
  text,
  variant,
  onClick,
  disabled,
  tabIndex,
  className,
  icon,
}) {
  const btn = document.createElement("button");
  btn.className = `button ${variant || "primary"}${
    className ? " " + className : ""
  }`;
  btn.type = variant === "link" ? "button" : "submit";
  btn.disabled = !!disabled;
  btn.tabIndex = tabIndex || 0;
  btn.onclick = onClick;
  btn.appendChild(document.createTextNode(text));
  if (icon) {
    const img = document.createElement("img");
    img.className = "Workroom-sing-arrow";
    img.src = icon;
    img.alt = "icon";
    btn.appendChild(img);
  }

  return btn;
}
