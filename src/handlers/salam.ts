import { Message, Contact } from 'whatsapp-web.js';

import printLog from '@/utils/logger';

const salamHandler = (
  messageBody: string,
  message: Message,
  contact: Contact
) => {
  const lowerCasedMessageBody = messageBody
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');
  const acceptedSalam = ['assalamualaikum'];

  const isMatch = acceptedSalam.some((salam) =>
    lowerCasedMessageBody.startsWith(salam)
  );

  if (isMatch) {
    message.reply("Wa'alaikumussalam");
    return printLog(contact, messageBody);
  }
};

export default salamHandler;
