export const declOfNum = (declensions: [string, string, string]) => (amount: number) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const isManyDeclension = amount % 100 > 4 && amount % 100 < 20;
  return declensions[isManyDeclension ? 2 : cases[amount % 10 < 5 ? amount % 10 : 5]];
};

const age = declOfNum(['год', 'года', 'лет']);

export const declFormatters = {
  age,
};
