// #region Demo Mode
import { toggleUiState } from "./dom.js";
import { renderWeightList, clearWeightList } from "./weights-view.js";

export function startDemoMode() {
  toggleUiState(true);
  showDemoWeights();
}

function showDemoWeights() {
  clearWeightList();
  const demoWeights = [
    {
      id: "demo1",
      data: () => ({
        gewicht: 85.5,
        datum: { toDate: () => new Date("2023-10-25") },
      }),
    },
    {
      id: "demo2",
      data: () => ({
        gewicht: 86.2,
        datum: { toDate: () => new Date("2023-10-20") },
      }),
    },
    {
      id: "demo3",
      data: () => ({
        gewicht: 87.0,
        datum: { toDate: () => new Date("2023-10-15") },
      }),
    },
  ];
  renderWeightList(demoWeights);
}
// #endregion
