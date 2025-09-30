const LS_KEY = "woorkroom.auth";

export function getAuthState() {
  const str = localStorage.getItem(LS_KEY);
  if (str) return JSON.parse(str);
  return {
    rememberMe: false,
    signin: { email: "", password: "" },
    onboarding: {
      step: 1,
      phone: { cc: "+998", number: "", otp: "", otpExpiresAt: 0 },
      profile: { useCase: "", role: "", newsletterOptIn: true },
      company: { name: "", direction: "", teamSize: "" },
      invites: [""],
    },
  };
}
export function setAuthState(data) {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}
export function clearOnboarding() {
  let state = getAuthState();
  state.onboarding = {
    step: 1,
    phone: { cc: "+998", number: "", otp: "", otpExpiresAt: 0 },
    profile: { useCase: "", role: "", newsletterOptIn: true },
    company: { name: "", direction: "", teamSize: "" },
    invites: [""],
  };
  setAuthState(state);
}
