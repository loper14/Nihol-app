const useInput = () => {
  let phoneFormatter = (value) => {
    value = value.replace(/[^\d]/g, "");
    if (value.length <= 2) return value;
    if (value.length <= 3) return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length <= 5) return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length <= 7)
      return `(${value.slice(0, 2)}) ${value.slice(2, 5)} - ${value.slice(
        5,
        7
      )}`;
    return `(${value.slice(0, 2)}) ${value.slice(2, 5)} - ${value.slice(
      5,
      7
    )} - ${value.slice(7, 9)}`;
  };

  return { phoneFormatter };
};

export default useInput;
