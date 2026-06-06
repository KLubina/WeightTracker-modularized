// #region Initialization
import { attachEventListeners } from "./shared/events.js";
import { handleAuthChanged } from "./auth/auth.js";
import { exportToCsv } from "./features/csv.js";

window.exportToCsv = exportToCsv; // Expose for onclick

window.onload = () => {
  attachEventListeners();
  auth.onAuthStateChanged(handleAuthChanged);
};
// #endregion
