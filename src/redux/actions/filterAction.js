export const DONE_FILTER = "DONE_FILTER";
export const ALL_FILTER = "ALL_FILTER";
export const UNDONE_FILTER = "UNDONE_FILTER";

export const changeFilter = (value) => {
  if (value === "done") {
    return { type: DONE_FILTER };
  } else if (value === "undone") {
    return { type: UNDONE_FILTER };
  } else if (value === "all") {
    return { type: ALL_FILTER };
  }
};
