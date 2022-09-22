import { Contact, Message } from 'whatsapp-web.js';

import printLog from '@/utils/logger';
import checkThanksMessage from '@/utils/checkThanksMessage';

const thanksHandler = (
  messageBody: string,
  message: Message,
  contact: Contact
) => {
  const response = checkThanksMessage(messageBody);
  message.reply(response);
  printLog(contact, messageBody);
};

export default thanksHandler;
