//this is the Actions Creator
export const selectSweets = sweet => {
    //return an Action
    return {
      type: "SWEETS_SELECTED",
      payload: sweet
    };
  };
  