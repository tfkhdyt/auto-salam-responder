import removeSpecialChars from './removeSpecialChars';

const checkPikMessage = (messageBody: string) => {
  const acceptedNonSalam = ['pik', 'fik', 'tupik', 'tufik'];

  const isMatch = acceptedNonSalam.some((word) =>
    removeSpecialChars(messageBody.toLowerCase()).startsWith(word)
  );

  return isMatch;
};

export default checkPikMessage;
