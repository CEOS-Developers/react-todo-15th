export const validateForm = (input) => {
  const res = input.replace(/\s/g, '');
  if (res === '') return false;
  return true;
};
