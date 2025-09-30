export function renderSuccess(container) {
  container.innerHTML = "";
  const shell = document.createElement("div");
  shell.className = "success-shell";

  const card = document.createElement("div");
  card.className = "success-card";

  card.innerHTML = `
    <img src="public/success.svg" alt="Success" class="success-img">
    <div class="success-title">You are successfully registered!</div>
  `;

  // "Let's Start" button
  const btn = document.createElement("button");
  btn.className = "success-btn";
  btn.innerHTML = `Let's Start <img class="success-btn-arrow" src="public/arroww.svg" alt="arroww.svg" />`;
  btn.onclick = () => {
    window.location.hash = "dashboard";
  };

  card.appendChild(btn);
  shell.appendChild(card);
  container.appendChild(shell);
}