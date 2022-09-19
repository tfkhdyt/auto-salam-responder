import { Contact, Message } from 'whatsapp-web.js';

import printLog from '@/utils/logger';

const thanksHandler = (
  messageBody: string,
  message: Message,
  contact: Contact
) => {
  const acceptedThanks = [
    'thanks',
    'thank you',
    'terima kasih',
    'makasih',
    'nuhun',
  ];
  const lowerCasedMessageBody = messageBody
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');

  acceptedThanks.forEach((thank) => {
    if (lowerCasedMessageBody.includes(thank)) {
      if (thank === acceptedThanks[0] || thank === acceptedThanks[1]) {
        message.reply("You're welcome");
      } else if (thank === acceptedThanks[2] || thank === acceptedThanks[3]) {
        message.reply('Sama-sama');
      } else {
        message.reply('Sami-sami');
      }
      return printLog(contact, messageBody);
    }
  });
};

export default thanksHandler;
