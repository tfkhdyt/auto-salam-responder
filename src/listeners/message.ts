import WAWebJS from 'whatsapp-web.js';

import printLog from '@/utils/logger';

const messageListener = async (message: WAWebJS.Message) => {
  if (message.isStatus || message.author) return;

  // get contact info
  const contact = await message.getContact();

  // get message body
  const messageBody = message.body;
  const lowerCasedMessageBody = messageBody
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');

  // accepted keywords
  const acceptedSalam = ['assalamualaikum'];
  const acceptedNonSalam = ['pik', 'fik'];

  // if someone give me salam
  acceptedSalam.forEach((salam) => {
    if (lowerCasedMessageBody.startsWith(salam)) {
      message.reply("Wa'alaikumussalam");
      printLog(contact, messageBody);
      return;
    }
  });

  // if someone called me "pik"
  acceptedNonSalam.forEach((salam) => {
    if (lowerCasedMessageBody.startsWith(salam)) {
      message.reply('Euy');
      return printLog(contact, messageBody);
    }
  });
};

export default messageListener;
