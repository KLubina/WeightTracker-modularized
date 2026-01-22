// #region Database Queries
export const weightsCollection = () => db.collection("weights");

export const allWeightsNewestFirst = () =>
  weightsCollection().orderBy("datum", "desc");

export const weightWithId = (id) => weightsCollection().doc(id);
// #endregion
