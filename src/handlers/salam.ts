import { Message, Contact } from 'whatsapp-web.js';

import printLog from '@/utils/logger';
import checkSalamMessage from '@/utils/checkSalamMessage';

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
