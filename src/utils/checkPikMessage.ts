const checkPikMessage = (messageBody: string) => {
  const acceptedNonSalam = ['pik', 'fik', 'tupik', 'tufik'];

  const isMatch = acceptedNonSalam.some((word) =>
    messageBody.toLowerCase().startsWith(word)
  );

  return isMatch;
};

export default checkPikMessage;
