const checkThanksMessage = (messageBody: string) => {
  const acceptedThanks = [
    'thanks',
    'thank you',
    'terima kasih',
    'makasih',
    'nuhun',
  ];
  let response = '';

  acceptedThanks.forEach((thank) => {
    if (messageBody.toLowerCase().includes(thank)) {
      if (thank === acceptedThanks[0] || thank === acceptedThanks[1]) {
        response = "You're welcome";
      } else if (thank === acceptedThanks[2] || thank === acceptedThanks[3]) {
        response = 'Sama-sama';
      } else {
        response = 'Sami-sami';
      }
    }
  });

  return response;
};

export default checkThanksMessage;
