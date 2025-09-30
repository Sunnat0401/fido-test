import { TextInput } from "./TextInput.js";
import { Button } from "./Button.js";
import { Checkbox } from "./Checkbox.js";
import { getAuthState, setAuthState, clearOnboarding } from "../storage.js";

export function renderSignIn(container) {
  let state = getAuthState();
  let email = state.signin.email || "";
  let password = state.signin.password || "";
  let showPassword = false;
  let rememberMe = state.rememberMe || false;
  let error = "";

  function isSignedUp(email, password) {
    let s = getAuthState();
    return (
      s.signin.email === email &&
      s.signin.password === password &&
      !!email &&
      !!password
    );
  }
  function validate() {
    return /\S+@\S+\.\S+/.test(email) && password.length >= 6;
  }
  function handleSignIn(e) {
    e.preventDefault();
    if (!validate()) {
      error = "Email yoki parol noto‘g‘ri";
      render();
      return;
    }
    if (isSignedUp(email, password)) {
      window.location.hash = "dashboard";
    } else {
      error = "This user is not registered!";
      render();
    }
  }
  function handleSignUp(e) {
    e.preventDefault();
    clearOnboarding();
    window.location.hash = "onboarding-1";
  }
  function render() {
    container.innerHTML = "";
    const shell = document.createElement("div");
    shell.className = "woorkroom-auth-shell-sign-in";

    const side = document.createElement("div");
    side.className = "woorkroom-auth-side-auth";
    side.innerHTML = `
        <div class="woorkroom-sing-in-side">
          <img class="woorkroom-sing-in-side-logo" src="/public/logo.jpg" alt="Woorkroom" class="woorkroom-logo">
          <span class="woorkroom-brand">Woorkroom</span>
        </div>
        <h2 class="woorkroom-sing-in-side-title">Your place to work<br>Plan. Create. Control.</h2>
        <img class="woorkroom-sing-in-side-pircture" src="/public/sign-in.jpg" alt="Workboard" class="woorkroom-workboard">
      `;
    const main = document.createElement("div");
    main.className = "woorkroom-auth-main";
    const title = document.createElement("h3");
    title.textContent = "Sign In to Woorkroom";
    title.className = "woorkroom-auth-main-sign-in";

    const form = document.createElement("form");
    form.style = "display:flex;flex-direction:column;gap:15px;width:100%;";
    form.onsubmit = handleSignIn;

    form.appendChild(
      TextInput({
        label: "Email Address",
        type: "email",
        value: email,
        name: "email",
        required: true,
        placeholder: "youremail@gmail.com",
        tabIndex: 1,
        className: "woorkroom-auth-main-email-input-singin",
        style: { color: "", background: "" },
        width: "",
        onInput: (v) => {
          email = v;
        },
      })
    );
    form.appendChild(
      TextInput({
        // label: "Password",
        // type: "password",
        // value: password,
        // name: "password",
        // required: true,
        // tabIndex: 2,
        // showPassword,
        // onInput: (v) => {
        //   password = v;
        // },
        // onToggleShowPassword: () => {
        //   showPassword = !showPassword;
        //   render();
        // },
        label: "Password",
        type: "password",
        value: password,
        name: "password",
        required: true,
        placeholder: "Enter your password",
        tabIndex: 2,
        className: "workform-password-input-singin custom-class",
        // width: ,
        // height: ,
        showPassword,
        onInput: (v) => {
          password = v;
        },
        onToggleShowPassword: () => {
          showPassword = !showPassword;
          render();
        },
      })
    );

    const optRow = document.createElement("div");
    optRow.className = "workkroom-sing-in-password";
    optRow.appendChild(
      Checkbox({
        label: "Remember me",
        checked: rememberMe,
        name: "rememberMe",
        className: "workform-chechkbox",
        tabIndex: 3,
        onChange: (v) => {
          rememberMe = v;
        },
      })
    );
    const forgot = document.createElement("a");
    forgot.className = "workroom-forget-pasword";
    forgot.href = "#forgot";
    forgot.textContent = "Forgot Password ?";
    forgot.tabIndex = 4;
    optRow.appendChild(forgot);
    form.appendChild(optRow);

    if (error) {
      const errDiv = document.createElement("div");
      errDiv.className = "alert";
      errDiv.textContent = error;
      form.appendChild(errDiv);
    }
    form.appendChild(
      Button({
        text: "Sign in",
        className: "workroom-sign-in-buttons",
        variant: "primary",
        tabIndex: 5,
        disabled: !validate(),
        onClick: handleSignIn,
        icon: "/public/arrow.svg",
      })
    );

    const signup = document.createElement("a");
    signup.className = "workroom-sign-in-account-link";
    signup.href = "#";
    signup.textContent = "Don't have an account?";
    signup.tabIndex = 6;
    signup.style = "margin:0 auto;";
    signup.onclick = handleSignUp;
    form.appendChild(signup);

    main.appendChild(title);
    main.appendChild(form);
    shell.appendChild(side);
    shell.appendChild(main);
    container.appendChild(shell);
  }
  render();
}
