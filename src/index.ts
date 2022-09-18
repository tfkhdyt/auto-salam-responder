import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', async (message) => {
  const contact = await message.getContact();
  const messageBody = message.body;
  const lowerCasedMessageBody = messageBody.toLowerCase();
  const acceptedSalam = ['Assalamualaikum', "Assalamu'alaikum"];
  const timeStamp = new Date().toLocaleString('id-ID');

  console.log(
    `[${timeStamp}] ${contact.name} (${contact.id.user}) berkata: ${message.body}`
  );

  // if someone give me salam
  acceptedSalam.forEach((salam) => {
    if (lowerCasedMessageBody.startsWith(salam.toLowerCase())) {
      message.reply("Wa'alaikumussalam");
      return;
    }
  });

  // if someone called me "pik"
  if (lowerCasedMessageBody.startsWith('pik')) {
    message.reply('Euy');
  }
});

client.initialize();
