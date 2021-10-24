const normalizeQuery = (query) => {
  return query.toLowerCase();
};

const formatPrice = (price) => {
  return `R$ ${price.replace(".",",")}`
}

export default { normalizeQuery, formatPrice };
