// #region Authentication
import { loginContainer, appContainer, setDisplayStyle } from "./dom.js";
import { showAllWeights, clearWeightList } from "./weights-view.js";

export function handleAuthChanged(user) {
  const isLoggedIn = userIsLoggedIn(user);
  toggleUiState(isLoggedIn);

  if (isLoggedIn) {
    showAllWeights();
  } else {
    clearWeightList();
  }
}

const userIsLoggedIn = (user) => Boolean(user);

function toggleUiState(isLoggedIn) {
  setDisplayStyle(loginContainer(), isLoggedIn ? "none" : "flex");
  setDisplayStyle(appContainer(), isLoggedIn ? "block" : "none");
}

export function loginWithGoogle() {
  return auth.signInWithPopup(googleProvider).catch(handleLoginError);
}

function handleLoginError(error) {
  showLoginError(error);
}

function showLoginError(error) {
  alert("Login fehlgeschlagen: " + error.message);
}

export function logout() {
  auth.signOut();
}
// #endregion