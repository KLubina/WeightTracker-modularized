// #region Display Weights
import { allWeightsNewestFirst } from "./db.js";
import { weightList } from "./dom.js";
import { formatDateAsGerman } from "./utils.js";

export function showAllWeights() {
  return allWeightsNewestFirst().get().then(renderWeightList);
}

export function renderWeightList(weights) {
  clearWeightList();
  weights.forEach(addWeightEntry);
}

export function clearWeightList() {
  weightList().innerHTML = "";
}

function addWeightEntry(doc) {
  const entry = createWeightEntryElement(doc);
  weightList().appendChild(entry);
}

function createWeightEntryElement(doc) {
  const data = doc.data();
  const element = document.createElement("div");
  element.className = "weightEntry";
  const weightContainer = createWeightContainer(doc.id, data);
  const deleteBtn = createDeleteButton(doc.id);
  element.appendChild(weightContainer);
  element.appendChild(deleteBtn);
  return element;
}

function createWeightContainer(id, data) {
  const container = document.createElement("div");
  container.className = "weightValue";
  const weightSpan = createWeightSpan(id, data.gewicht);
  const dateSpan = createDateSpan(id, data.datum.toDate());
  container.appendChild(weightSpan);
  container.appendChild(dateSpan);
  return container;
}

function createWeightSpan(id, weight) {
  const span = document.createElement("span");
  span.onclick = () => editWeight(id, weight);
  span.textContent = `${weight} kg`;
  return span;
}

function createDateSpan(id, date) {
  const span = document.createElement("span");
  span.className = "date";
  span.onclick = () => editDate(id, date.toISOString());
  span.textContent = formatDateAsGerman(date);
  return span;
}

function createDeleteButton(id) {
  const button = document.createElement("button");
  button.onclick = () => deleteWeight(id);
  button.textContent = "×";
  return button;
}
// #endregion
