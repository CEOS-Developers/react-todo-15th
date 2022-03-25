export const validateForm = (input: string): boolean => {
  const res = input.replace(/\s/g, '');
  if (res === '') return false;
  return true;
};
