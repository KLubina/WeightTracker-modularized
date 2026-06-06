// #region Demo Mode
import { toggleUiState } from "../ui/dom.js";
import { renderWeightList, clearWeightList } from "../ui/weights-view.js";

export function startDemoMode() {
  toggleUiState(true);
  showDemoWeights();
}

function showDemoWeights() {
  clearWeightList();
  // Generiere Demo-Daten für die letzten 90 Tage (jeden 10. Tag ein Eintrag, heute immer dabei)
  const today = new Date();
  const demoWeights = [];
  for (let i = 0; i <= 90; i += 10) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    demoWeights.push({
      id: `demo${i}`,
      data: () => ({
        gewicht: 85.5 + (i / 10) * 0.7, // kleine Variation
        datum: { toDate: () => d },
      }),
    });
  }
  renderWeightList(demoWeights);
}
// #endregion
