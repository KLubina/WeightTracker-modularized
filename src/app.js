// #region Initialization
import { attachEventListeners } from "./events.js";
import { handleAuthChanged } from "./auth.js";
import { exportToCsv } from "./csv.js";

window.exportToCsv = exportToCsv; // Expose for onclick

window.onload = () => {
  attachEventListeners();
  auth.onAuthStateChanged(handleAuthChanged);
};
// #endregion
