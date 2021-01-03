//Function to format the currency depends on the country
export const formatNumber = (number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(number);
};
