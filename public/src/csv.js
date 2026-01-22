// #region CSV Export
import { allWeightsNewestFirst } from "./db.js";
import { formatDateAsGerman, getCurrentDateAsISO } from "./utils.js";

export function exportToCsv() {
  return allWeightsNewestFirst()
    .get()
    .then(buildCsvFromWeights)
    .then(downloadCsvFile)
    .catch(showExportError);
}

function buildCsvFromWeights(weights) {
  if (hasNoWeights(weights)) {
    return null;
  }

  return combineCsvRows(createHeaderRow(), createDataRows(weights.docs));
}

const hasNoWeights = (weights) => weights.empty;

const createHeaderRow = () => "Date,Weight";

const createDataRows = (docs) => docs.map(documentAsCsvRow);

const combineCsvRows = (header, dataRows) =>
  [header, ...dataRows].join("\n");

function documentAsCsvRow(doc) {
  const data = doc.data();
  const date = formatDateAsGerman(data.datum.toDate());
  return `${date},${data.gewicht}`;
};

function downloadCsvFile(csvContent) {
  if (!csvContent) return;

  const filename = generateCsvFilename();
  const blob = createCsvBlob(csvContent);
  const downloadUrl = createBlobUrl(blob);

  triggerDownload(downloadUrl, filename);
  cleanupBlobUrl(downloadUrl);
}

const generateCsvFilename = () =>
  `weight-tracker-${getCurrentDateAsISO()}.csv`;

const createCsvBlob = (content) =>
  new Blob([content], { type: "text/csv;charset=utf-8;" });

const createBlobUrl = (blob) => URL.createObjectURL(blob);

function triggerDownload(url, filename) {
  const link = createDownloadLink(url, filename);
  appendToBody(link);
  clickElement(link);
  removeFromBody(link);
}

function createDownloadLink(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  return link;
};

const appendToBody = (element) => document.body.appendChild(element);
const clickElement = (element) => element.click();
const removeFromBody = (element) => document.body.removeChild(element);

const cleanupBlobUrl = (url) => URL.revokeObjectURL(url);

function showExportError(error) {
  console.error("Export error:", error);
  alert("Error exporting data!");
}
// #endregion
