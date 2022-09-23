import { Contact, Message } from 'whatsapp-web.js';

import checkThanksMessage from '@/utils/checkThanksMessage';
import printLog from '@/utils/logger';

const thanksHandler = (
  messageBody: string,
  message: Message,
  contact: Contact
) => {
  const response = checkThanksMessage(messageBody);

  if (response) {
    message.reply(response);
    printLog(contact, messageBody);
  }
};

export default thanksHandler;
