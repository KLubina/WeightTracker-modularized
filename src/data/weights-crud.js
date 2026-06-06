// #region CRUD Operations
// `ensureLoggedIn` checks removed (centralized UI gating)
import { showAllWeights } from "../ui/weights-view.js";
import { weightInput } from "../ui/dom.js";
import { isEmptyString, extractDateFromISO } from "../shared/utils.js";
import { weightsCollection, weightWithId } from "./db.js";

export function addNewWeight() {
  const weightValue = getWeightInputValue();
  if (isEmptyString(weightValue)) return;

  createWeightInDatabase(weightValue)
    .then(clearInputField)
    .then(showAllWeights);
}

function getWeightInputValue() {
  return weightInput().value;
}

function createWeightInDatabase(weightValue) {
  return weightsCollection().add({
    gewicht: weightValue,
    datum: new Date(),
  });
}

function clearInputField() {
  weightInput().value = "";
}

export function deleteWeight(id) {
  return weightWithId(id).delete().then(showAllWeights);
}

export function editWeight(id, currentWeight) {
  const newWeight = promptForNewWeight(currentWeight);
  const weightWasChanged = hasValueChanged(newWeight, currentWeight);

  if (weightWasChanged) {
    updateWeightInDatabase(id, newWeight).then(showAllWeights);
  }
}

const promptForNewWeight = (currentWeight) =>
  prompt("New weight:", currentWeight);

const hasValueChanged = (newValue, currentValue) =>
  newValue && newValue !== currentValue;

const updateWeightInDatabase = (id, newWeight) =>
  weightWithId(id).update({ gewicht: newWeight });

export function editDate(id, currentDateISO) {
  const currentDate = extractDateFromISO(currentDateISO);
  const newDate = promptForNewDate(currentDate);
  const dateWasChanged = hasValueChanged(newDate, currentDate);

  if (dateWasChanged) {
    updateDateInDatabase(id, newDate).then(showAllWeights);
  }
}

const promptForNewDate = (currentDate) =>
  prompt("New date (YYYY-MM-DD):", currentDate);

const updateDateInDatabase = (id, newDate) =>
  weightWithId(id).update({ datum: new Date(newDate) });

// Für bestehende inline onclick-Handler (ohne neue Logik zu erfinden):
// -> Globale Referenzen setzen:
window.deleteWeight = deleteWeight;
window.editWeight = editWeight;
window.editDate = editDate;
window.addNewWeight = addNewWeight;
// #endregion
