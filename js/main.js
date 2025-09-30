

import { renderSignIn } from './components/SignInForm.js';
import { getAuthState, clearOnboarding } from './storage.js';
import { renderOnboardingStep1 } from "./components/OnboardingStep1.js";
import { renderOnboardingStep2 } from './components/OnboardingStep2.js';
import { renderOnboardingStep3 } from './components/onBoardingStep3.js';
import { renderOnboardingStep4 } from './components/onBoarddingStep4.js';
import { renderSuccess } from './components/Succes.js';
import { Layout } from './components/Layout.js';

function router() {
  const app = document.getElementById('app');
  let hash = window.location.hash.replace('#', '');
  if (!hash) hash = 'sign-in';
  app.innerHTML = '';
  if (hash === 'sign-in') {
    clearOnboarding();
    renderSignIn(app);
  } else if (hash === 'onboarding-1') {
    renderOnboardingStep1(app);
  } else if (hash === 'onboarding-2') {
    renderOnboardingStep2(app);
  } else if (hash === 'onboarding-3') {
    renderOnboardingStep3(app);
  } else if (hash === 'onboarding-4') {
    renderOnboardingStep4(app);
  } else if (hash === "success") {
    renderSuccess(app);
  } else if (hash === 'dashboard' || hash === 'events') {
    const state = getAuthState();
    if (!state || !state.isAuthenticated || !state.user) {
      window.location.hash = "sign-in";
      return;
    }
    app.appendChild(Layout(hash, state.user));
  } else {
    window.location.hash = "main";
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);