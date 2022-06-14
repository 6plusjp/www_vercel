export const toCapitalize = ([first, ...rest]: string[], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

export const toDecapitalize = ([first, ...rest]: string[], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join("").toUpperCase() : rest.join(""));

export const toKebabCase = (text: string) => {
  return text
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const toTitleCase = (text: string) => {
  return text.replace(
    /[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
};

export const includes = (text?: string, search?: string[]) => {
  return search?.some((item) => text?.includes(item));
};
