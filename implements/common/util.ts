export const isEmptyOrNullString = (str: string | null): boolean => {
  return str == null || str.trim() === "";
};
