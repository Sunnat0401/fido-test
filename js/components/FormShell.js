import { TextInput } from './TextInput.js';
import { Button } from './Button.js';
import { Checkbox } from './Checkbox.js';
import { Alert } from './Alert.js';
import { getAuthState, setAuthState } from '../storage.js';

export function renderSignIn(container) {
    let state = getAuthState();
    let email = state.signin.email || '';
    let password = state.signin.password || '';
    let showPassword = false;
    let rememberMe = state.rememberMe || false;
    let error = '';

    function validate() {
        return /\S+@\S+\.\S+/.test(email) && password.length >= 6;
    }
    function handleSignIn(e) {
        e.preventDefault();
        if (!validate()) {
            error = 'Email yoki parol noto‘g‘ri';
            render();
            return;
        }
        state.signin.email = email;
        state.signin.password = rememberMe ? password : '';
        state.rememberMe = rememberMe;
        setAuthState(state);
        window.location.hash = 'onboarding';
    }
    function render() {
        container.innerHTML = '';
        const formShell = document.createElement('form');
        formShell.className = 'form-shell';
        formShell.setAttribute('autocomplete', 'on');
        formShell.onsubmit = handleSignIn;

        formShell.appendChild(TextInput({
            label: 'Email',
            type: 'email',
            value: email,
            name: 'email',
            required: true,
            tabIndex: 1,
            onInput: v => { email = v; }
        }));
        formShell.appendChild(TextInput({
            label: 'Parol',
            type: 'password',
            value: password,
            name: 'password',
            required: true,
            tabIndex: 2,
            showPassword,
            onInput: v => { password = v; },
            onToggleShowPassword: () => { showPassword = !showPassword; render(); }
        }));
        formShell.appendChild(Checkbox({
            label: 'Meni eslab qol',
            checked: rememberMe,
            name: 'rememberMe',
            tabIndex: 3,
            onChange: v => { rememberMe = v; }
        }));

        const forgot = document.createElement('a');
        forgot.className = 'button link';
        forgot.href = '#forgot';
        forgot.textContent = 'Parolni unutdingizmi?';
        forgot.tabIndex = 4;

        formShell.appendChild(forgot);
        if (error) formShell.appendChild(Alert({text: error}));

        formShell.appendChild(Button({
            text: 'Kirish',
            variant: 'primary',
            tabIndex: 5,
            disabled: !validate(),
            onClick: handleSignIn
        }));

        container.appendChild(formShell);
    }
    render();
}