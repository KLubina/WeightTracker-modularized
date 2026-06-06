// #region Authentication
import { toggleUiState } from "../ui/dom.js";
import { showAllWeights, clearWeightList } from "../ui/weights-view.js";

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

export function loginWithGoogle() {
  return auth.signInWithPopup(googleProvider).catch(handleLoginError);
}

function handleLoginError(error) {
  showLoginError(error);
}

function showLoginError(error) {
  alert("Login fehlgeschlagen: " + error.message);
}

// #endregion
