export const diffDate = (timeNow, due) => {
  const difference = Math.round((due - timeNow) / (1000 * 60 * 60 * 24));
  return difference > 0 ? difference : "-";
};
