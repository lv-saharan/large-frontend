export const isEmptyOrNullString = (str: string | null): boolean => {
  return str == null || str.trim() === "";
};

export const trim = (input: string, chars: string = " "): string => {
  if (isEmptyOrNullString(input)) return input;

  const trimmed = input.replace(
    new RegExp(`(^${chars}+)|(${chars}+$)`, "g"),
    ""
  );

  return trimmed;
};
export const trimStart = (input: string, chars: string = " "): string => {
  if (isEmptyOrNullString(input)) return input;

  const trimmed = input.replace(new RegExp(`^${chars}+`, "g"), "");

  return trimmed;
};

export const trimEnd = (input: string, chars: string = " "): string => {
  if (isEmptyOrNullString(input)) return input;

  const trimmed = input.replace(new RegExp(`${chars}+$`, "g"), "");

  return trimmed;
};
