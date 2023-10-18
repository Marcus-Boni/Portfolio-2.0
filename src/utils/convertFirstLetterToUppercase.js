export const convertFirstLetterToUppercase = (params) => {
  const firstLetterUppercase = params.charAt(0).toUpperCase();
  const restOfTheString = params.slice(1);
  const convertedParams = `${firstLetterUppercase}${restOfTheString}`;
  return convertedParams;
};
