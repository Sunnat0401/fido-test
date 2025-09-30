export function OtpInput({ value, onChange, tabIndex }) {
  const wrapper = document.createElement("div");
  wrapper.style = "display:flex;gap:18px;";
  let vals = (value || "").split("");
  for (let i = 0; i < 4; i++) {
    const box = document.createElement("div");
    box.style = "position:relative;";
    const inp = document.createElement("input");
    inp.type = "text";
    inp.maxLength = 1;
    inp.value = vals[i] || "";
    inp.className = "input-field otp-input";
    inp.style = "width:48px;text-align:center;font-size:20px;";
    inp.tabIndex = (tabIndex || 0) + i;

    inp.style.borderColor =
      vals[i] && vals[i].length === 1 ? "#357cf7" : "#e3e7ee";
    inp.style.background = vals[i] ? "#eef5fe" : "#f8fafc";
    inp.addEventListener("input", (e) => {
      let v = e.target.value.replace(/[^\d]/, "").slice(0, 1);
      vals[i] = v;
      inp.value = v;
      inp.style.borderColor = v ? "#357cf7" : "#e3e7ee";
      inp.style.background = v ? "#eef5fe" : "#f8fafc";
      box.querySelector(".otp-check")?.remove();
      if (v) {
        const check = document.createElement("span");
        check.textContent = "✓";
        check.style =
          "color:#357cf7;position:absolute;right:8px;top:8px;font-size:15px;";
        check.className = "otp-check";
        box.appendChild(check);
      }
      onChange(vals.join(""));
      if (v && i < 3) wrapper.children[i + 1].firstChild.focus();
    });
    inp.addEventListener("focus", () => {
      inp.style.borderColor = "#357cf7";
    });
    inp.addEventListener("blur", () => {
      inp.style.borderColor = vals[i] ? "#357cf7" : "#e3e7ee";
    });
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !inp.value && i > 0) {
        wrapper.children[i - 1].firstChild.focus();
      }
    });
    inp.addEventListener("paste", (e) => {
      let paste = (e.clipboardData.getData("text") || "").replace(/[^\d]/g, "");
      if (paste.length === 4) {
        for (let j = 0; j < 4; j++) {
          wrapper.children[j].firstChild.value = paste[j];
          wrapper.children[j].firstChild.style.borderColor = "#357cf7";
          wrapper.children[j].firstChild.style.background = "#eef5fe";
          wrapper.children[j].querySelector(".otp-check")?.remove();
          const check = document.createElement("span");
          check.textContent = "✓";
          check.style =
            "color:#357cf7;position:absolute;right:8px;top:8px;font-size:15px;";
          check.className = "otp-check";
          wrapper.children[j].appendChild(check);
        }
        onChange(paste);
        wrapper.children[3].firstChild.focus();
        e.preventDefault();
      }
    });
    box.appendChild(inp);
    wrapper.appendChild(box);
  }
  return wrapper;
}
