// #region Utils
export const formatDateAsGerman = (date) => date.toLocaleDateString("de-DE");

export const isEmptyString = (value) => !value;

export const extractDateFromISO = (isoString) => isoString.split("T")[0];

export const getCurrentDateAsISO = () => new Date().toISOString().split("T")[0];
// #endregion
