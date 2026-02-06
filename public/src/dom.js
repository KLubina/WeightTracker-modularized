// #region DOM Helpers
export const getElementById = (id) => document.getElementById(id);

export const weightInput = () => getElementById("weightInput");
export const weightList = () => getElementById("weightList");
export const loginContainer = () => getElementById("loginContainer");
export const appContainer = () => getElementById("appContainer");

export const setDisplayStyle = (element, displayValue) => {
  element.style.display = displayValue;
};

export function toggleUiState(isLoggedIn) {
  setDisplayStyle(loginContainer(), isLoggedIn ? "none" : "flex");
  setDisplayStyle(appContainer(), isLoggedIn ? "block" : "none");
}
// #endregion
