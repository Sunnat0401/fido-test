export function Button({
  text,
  variant,
  onClick,
  disabled,
  tabIndex,
  className,
  icon // Yangi props!
}) {
  const btn = document.createElement('button');
  btn.className = `button ${variant || 'primary'}${className ? ' ' + className : ''}`;
  btn.type = variant === 'link' ? 'button' : 'submit';
  btn.disabled = !!disabled;
  btn.tabIndex = tabIndex || 0;
  btn.onclick = onClick;
 btn.appendChild(document.createTextNode(text));
  if (icon) {
    // icon ni <img> elementi sifatida qo'shamiz
    const img = document.createElement('img');
    img.className="Workroom-sing-arrow"
    img.src = icon;
    img.alt = "icon";
    // img.width = 22; 
    // img.height = 22;
    // img.style.marginRight = "8px"; 
    btn.appendChild(img);
  }

  // Button matni

  return btn;
}