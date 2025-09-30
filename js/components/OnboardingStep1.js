import { SidePanel } from "./SidePanel.js";
import { Stepper } from "./Stepper.js";
import { getAuthState, setAuthState } from "../storage.js";
import { TextInput } from "./TextInput.js";
import { Button } from "./Button.js";
import { Checkbox } from "./Checkbox.js";
import { OtpInput } from "./OtpInput.js";
import { NextPrevButtons } from "./NextPrevButtons.js";

export function renderOnboardingStep1(container) {
  let state = getAuthState();
  let cc = state.onboarding.phone.cc || "+998";
  let phone = state.onboarding.phone.number || "";
  let email = state.signin.email || "";
  let password = state.signin.password || "";
  let otp = state.onboarding.phone.otp || "";
  let generatedOtp = state.onboarding.phone.generatedOtp || "";
  let otpExpiresAt = state.onboarding.phone.otpExpiresAt || 0;
  let smsSentAt = state.onboarding.phone.smsSentAt || 0;
  let error = "";
  let timerIntervalId = null;
  let smsTimeoutId = null;

  function maskPhoneInput(raw) {
    let digits = raw.replace(/\D/g, "").slice(0, 9);
    let masked = "";
    if (digits.length > 0) masked += digits.slice(0, 2);
    if (digits.length > 2) masked += " " + digits.slice(2, 5);
    if (digits.length > 5) masked += " " + digits.slice(5, 7);
    if (digits.length > 7) masked += " " + digits.slice(7, 9);
    return masked;
  }
  function validatePhone(phone) {
    return /^\d{2} \d{3} \d{2} \d{2}$/.test(phone);
  }
  function validateOtp(code) {
    return /^\d{4}$/.test(code);
  }
  function validate() {
    return (
      validatePhone(phone) &&
      validateOtp(otp) &&
      generatedOtp &&
      otp === generatedOtp &&
      /\S+@\S+\.\S+/.test(email) &&
      password.length >= 6
    );
  }
  function autoSendSms() {
    generatedOtp = String(Math.floor(1000 + Math.random() * 9000));
    otp = generatedOtp;
    otpExpiresAt = Date.now() + 120 * 1000;
    smsSentAt = Date.now();
    error = "";
    setAuthState({
      ...state,
      onboarding: {
        ...state.onboarding,
        phone: { cc, number: phone, otp, otpExpiresAt, generatedOtp, smsSentAt }
      }
    });
    updateTimer();
    updateOtpInput();
  }
  function updateTimer() {
    if (timerIntervalId) clearInterval(timerIntervalId);
    timerIntervalId = setInterval(() => {
      let remain = Math.max(0, Math.floor((otpExpiresAt - Date.now()) / 1000));
      const timerEl = document.getElementById("otp-timer");
      if (timerEl) {
        timerEl.textContent = `${String(Math.floor(remain / 60)).padStart(2, "0")}:${String(remain % 60).padStart(2, "0")}`;
      }
      if (remain <= 0) clearInterval(timerIntervalId);
    }, 1000);
  }
  function updateOtpInput() {
    setTimeout(() => {
      const inputs = document.querySelectorAll(".otp-input");
      if (inputs.length === 4 && generatedOtp) {
        for (let i = 0; i < 4; i++) inputs[i].value = generatedOtp[i];
      }
    }, 30);
  }

  function handlePhoneChange(newPhone) {
    phone = newPhone;
    otp = "";
    generatedOtp = "";
    otpExpiresAt = 0;
    smsSentAt = 0;
    error = "";
    if (smsTimeoutId) clearTimeout(smsTimeoutId);
    if (timerIntervalId) clearInterval(timerIntervalId);
    setAuthState({
      ...state,
      onboarding: {
        ...state.onboarding,
        phone: { cc, number: phone, otp, otpExpiresAt, generatedOtp, smsSentAt }
      }
    });
  }

  function handleNext(e) {
    e.preventDefault();
    if (!validate()) {
      error = "Maʼlumotlar toʻliq va toʻgʻri emas yoki SMS kod noto‘g‘ri!";
      render();
      return;
    }
    state.onboarding.phone = { cc, number: phone, otp, otpExpiresAt, generatedOtp, smsSentAt };
    state.signin = { email, password };
    state.onboarding.step = 2;
    setAuthState(state);
    window.location.hash = "onboarding-2";
  }
  function handlePrev(e) {
    e.preventDefault();
    window.location.hash = "sign-in";
  }

  function render() {
    container.innerHTML = "";
    const shell = document.createElement("div");
    shell.className = "woorkroom-auth-shell";
    // shell.style = "display:flex;min-height:100vh;background:#f9fbff;";

    shell.appendChild(
      SidePanel({ step: 1, totalSteps: 4, title: "Get started" })
    );

    const main = document.createElement("div");
    main.className = "woorkroom-auth-main-step1";
    main.innerHTML = `<div style="margin-bottom:32px;">
      <div class="workroom-main-stepper">STEP 1/4</div>
      <h3 class="workroom-stepper-subtitle">Valid your phone</h3>
    </div>`;

    const form = document.createElement("form");
    form.style = "display:flex;flex-direction:column;gap:24px;width:100%;max-width:490px;";
    form.onsubmit = handleNext;

    // ===== MOBILE NUMBER GROUP =====
    const phoneGroup = document.createElement('div');
    phoneGroup.className = "input-group";
    // Label
    const phoneLabel = document.createElement("label");
    phoneLabel.className = "workroom-text-label";
    phoneLabel.htmlFor = "phoneInput";
    phoneLabel.textContent = "Mobile Number";
    phoneGroup.appendChild(phoneLabel);
    // Row: select + input
    // const phoneRow = document.createElement("div");
    // phoneRow.className = "workroom-mobile-number-group";

    // // Custom select (div, option chiqmaydi)
    // const ccSelectFake = document.createElement("div");
    // ccSelectFake.className = "workroom-mobile-number-select";
    // ccSelectFake.innerHTML = `+998 <span class="workroom-mobile-number-arrow"></span>`;
    // phoneRow.appendChild(ccSelectFake);
    const phoneRow = document.createElement("div");
    phoneRow.className = "workroom-mobile-number-group";
    
    const ccSelectFake = document.createElement("div");
    ccSelectFake.className = "workroom-mobile-number-select";
    ccSelectFake.innerHTML = `+998 <span class="workroom-mobile-number-arrow"></span>`;
    ccSelectFake.tabIndex = 0; // Fokus bo‘lishi uchun
    phoneRow.appendChild(ccSelectFake);

    
    // Input
    const phoneInput = document.createElement("input");
    phoneInput.className = "workroom-mobile-input-field";
    phoneInput.type = "text";
    phoneInput.value = phone;
    phoneInput.placeholder = "90 123 45 67";
    phoneInput.maxLength = 12;
    phoneInput.id = "phoneInput";
    phoneInput.autocomplete = "tel";
    phoneInput.addEventListener("input", (e) => {
      let masked = maskPhoneInput(e.target.value);
      handlePhoneChange(masked);
      phoneInput.value = masked;
      phone = masked;


      if (validatePhone(masked)) {
        phoneRow.classList.add("is-checked");
      } else {
        phoneRow.classList.remove("is-checked");
      }

      
      if (validatePhone(masked)) {
        if (smsTimeoutId) clearTimeout(smsTimeoutId);
        smsTimeoutId = setTimeout(() => {
          if (!generatedOtp || !smsSentAt || smsSentAt < Date.now() - 1000) {
            autoSendSms();
            render();
          }
        }, 1000);
      } else {
        if (smsTimeoutId) clearTimeout(smsTimeoutId);
        if (timerIntervalId) clearInterval(timerIntervalId);
        generatedOtp = "";
        otpExpiresAt = 0;
        smsSentAt = 0;
        otp = "";
        error = "";
        setAuthState({
          ...state, onboarding: { ...state.onboarding, phone: { cc, number: phone, otp, otpExpiresAt, generatedOtp, smsSentAt } }
        });
      }
    });
    phoneRow.appendChild(phoneInput);
    phoneGroup.appendChild(phoneRow);
    form.appendChild(phoneGroup);

    // ===== OTP GROUP =====
    const otpGroup = document.createElement("div");
    otpGroup.className = "input-group";
    // OTP Label
    const otpLabel = document.createElement("label");
    otpLabel.className = "input-label";
    otpLabel.textContent = "Code from SMS";
    otpGroup.appendChild(otpLabel);
    // OTP Inputs
    const otpRow = document.createElement("div");
    otpRow.className = "workform-sms-code-and-otp";
    for (let i = 0; i < 4; i++) {
      const inp = document.createElement("input");
      inp.className = "otp-input";
      inp.type = "text";
      inp.maxLength = 1;
      // inp.style = "width:42px;height:42px;margin-right:8px;text-align:center;font-size:21px;font-weight:600;border-radius:8px;border:1.5px solid #e3e8ef;";
      inp.value = otp[i] || "";
      inp.addEventListener("input", (e) => {
        let v = e.target.value.replace(/\D/g, "");
        inp.value = v;
        let arr = Array.from(otpRow.querySelectorAll(".otp-input")).map(t => t.value).join('');
        otp = arr;
        setAuthState({
          ...state, onboarding: { ...state.onboarding, phone: { ...state.onboarding.phone, otp } }
        });
        if (otp.length === 4 && generatedOtp && otp !== generatedOtp) {
          error = "Kiritilgan kod noto‘g‘ri!";
        } else {
          error = "";
        }
      });
      otpRow.appendChild(inp);
    }
    // if (validatePhone(phone) && generatedOtp && smsSentAt) {
    //   const info = document.createElement("div");
    //   info.className = "alert";
    //   info.style = "background:#eaf3ff;color:#357cf7;border:none;";
    //   let remain = Math.max(0, Math.floor((otpExpiresAt - Date.now()) / 1000));
    //   info.innerHTML = `
    //     SMS yuborildi <strong>+998 ${phone}</strong>.<br>
    //     Kod amal qiladi: <b id="otp-timer">${String(Math.floor(remain / 60)).padStart(2, "0")}:${String(remain % 60).padStart(2, "0")}</b>
    //   `;
    //   otpRow.appendChild(info);
    //   updateTimer();
    // }
    if (validatePhone(phone) && generatedOtp && smsSentAt) {
      const info = document.createElement("div");
      info.className = "register-otp-alert";
      let remain = Math.max(0, Math.floor((otpExpiresAt - Date.now()) / 1000));
      info.innerHTML = `
        SMS yuborildi <strong>+998 ${phone}</strong>.<br>
        Kod amal qiladi: <b id="register-otp-timer">${String(Math.floor(remain / 60)).padStart(2, "0")}:${String(remain % 60).padStart(2, "0")}</b>
      `;
      otpRow.appendChild(info);
      updateTimer();
    }
    otpGroup.appendChild(otpRow);
    form.appendChild(otpGroup);

    // ===== Email input =====
    const emailGroup = document.createElement("div");
    emailGroup.className = "input-group";
    const emailLabel = document.createElement("label");
    emailLabel.className = "input-label";
    emailLabel.textContent = "Email Address";
    emailLabel.htmlFor = "email";
    emailGroup.appendChild(emailLabel);
    const emailInput = document.createElement("input");
    emailInput.className = "input-field";
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.value = email;
    emailInput.required = true;
    emailInput.placeholder = "youremail@gmail.com";
    emailInput.addEventListener("input", e => { email = e.target.value; });
    emailGroup.appendChild(emailInput);
    form.appendChild(emailGroup);

    // ===== Password input =====
    const passGroup = document.createElement("div");
    passGroup.className = "input-group";
    const passLabel = document.createElement("label");
    passLabel.className = "input-label";
    passLabel.textContent = "Create Password";
    passLabel.htmlFor = "password";
    passGroup.appendChild(passLabel);
    const passInput = document.createElement("input");
    passInput.className = "input-field";
    passInput.type = "password";
    passInput.name = "password";
    passInput.value = password;
    passInput.required = true;
    passInput.placeholder = "Password";
    passInput.addEventListener("input", e => { password = e.target.value; });
    passGroup.appendChild(passInput);
    form.appendChild(passGroup);

    // ===== Error & Next/Prev buttons =====
    if (error) {
      const errDiv = document.createElement("div");
      errDiv.className = "alert";
      errDiv.style = "background:#ffeaea;color:#c72c2c;";
      errDiv.textContent = error;
      form.appendChild(errDiv);
    }
    form.appendChild(NextPrevButtons({ onPrev: handlePrev, onNext: handleNext, nextDisabled: !validate(), prevDisabled: false }));

    main.appendChild(form);
    shell.appendChild(main);
    container.appendChild(shell);
    if (generatedOtp && otp === generatedOtp) updateOtpInput();
  }
  render();
}