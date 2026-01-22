// #region Event Handlers & Wiring
import { getElementById } from "./dom.js";
import { loginWithGoogle, logout } from "./auth.js";
import { addNewWeight } from "./weights-crud.js";

export function attachEventListeners() {
  getElementById("weightInput").addEventListener(
    "keypress",
    onEnterKeyPressed,
  );
  getElementById("googleLoginBtn").addEventListener("click", loginWithGoogle);
  getElementById("logoutBtn").addEventListener("click", logout);
}

function onEnterKeyPressed(event) {
  if (event.key === "Enter") addNewWeight();
}
// #endregion
