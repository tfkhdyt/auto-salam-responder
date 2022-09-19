import { Contact, Message } from 'whatsapp-web.js';

import printLog from '@/utils/logger';

const pikHandler = (
  messageBody: string,
  message: Message,
  contact: Contact
) => {
  const acceptedNonSalam = ['pik', 'fik', 'tupik', 'tufik'];
  const lowerCasedMessageBody = messageBody
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');

  const isMatch = acceptedNonSalam.some((word) =>
    lowerCasedMessageBody.startsWith(word)
  );

  if (isMatch && lowerCasedMessageBody.length <= 5) {
    message.reply('Euy');
    return printLog(contact, messageBody);
  }
};

export default pikHandler;
