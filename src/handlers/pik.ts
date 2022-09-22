import { Contact, Message } from 'whatsapp-web.js';

import checkPikMessage from '@/utils/checkPikMessage';
import printLog from '@/utils/logger';
import removeSpecialChars from '@/utils/removeSpecialChars';

const pikHandler = (
  messageBody: string,
  message: Message,
  contact: Contact
) => {
  const isMatch = checkPikMessage(messageBody);

  if (isMatch && removeSpecialChars(messageBody).length <= 5) {
    message.reply('Euy');
    return printLog(contact, messageBody);
  }
};

export default pikHandler;
