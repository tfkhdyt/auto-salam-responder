import { Contact,Message } from 'whatsapp-web.js';

import checkSalamMessage from '@/utils/checkSalamMessage';
import printLog from '@/utils/logger';

const salamHandler = (
  messageBody: string,
  message: Message,
  contact: Contact
) => {
  const isMatch = checkSalamMessage(messageBody);

  if (isMatch) {
    message.reply("Wa'alaikumussalam");
    printLog(contact, messageBody);
  }
};

export default salamHandler;
