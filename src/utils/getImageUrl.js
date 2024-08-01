export const getImageUrl = (companyLogo) => {
  return new URL(`../assets/${companyLogo}`, import.meta.url).href;
};