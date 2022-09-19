import WAWebJS from 'whatsapp-web.js';

import pikHandler from '@/handlers/pik';
import salamHandler from '@/handlers/salam';
import thanksHandler from '@/handlers/thanks';

const messageListener = async (message: WAWebJS.Message) => {
  // stop the listener if message is from a status or from a group
  if (message.isStatus || message.author) return;

  // get contact info
  const contact = await message.getContact();

  // get message body
  const { body: messageBody } = message;

  // if someone give me salam
  salamHandler(messageBody, message, contact);

  // if someone called me "pik"
  pikHandler(messageBody, message, contact);

  // if someone say "thanks"
  thanksHandler(messageBody, message, contact);
};

export default messageListener;
