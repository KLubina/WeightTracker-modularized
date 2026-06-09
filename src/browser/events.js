// #region Event Handlers & Wiring
import { getElementById } from "./dom.js";
import { loginWithGoogle } from "../auth/auth.js";
import { startDemoMode } from "../features/demo.js";
import { addNewWeight } from "../data/weights-crud.js";

export function attachEventListeners() {
  getElementById("weightInput").addEventListener("keypress", onEnterKeyPressed);
  getElementById("googleLoginBtn").addEventListener("click", loginWithGoogle);
  getElementById("demoLoginBtn").addEventListener("click", startDemoMode);
}

function onEnterKeyPressed(event) {
  if (event.key === "Enter") addNewWeight();
}
// #endregion
