import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const puppeteerOptions = {
  args: ['--no-sandbox'],
};

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer:
    process.env.NODE_ENV === 'production' ? puppeteerOptions : undefined,
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', async (message) => {
  // get contact info
  const contact = await message.getContact();

  // get message body
  const messageBody = message.body;
  const lowerCasedMessageBody = messageBody
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');

  // accepted keywords
  const acceptedSalam = ['assalamualaikum'];
  const acceptedNonSalam = ['pik, fik'];

  // get current timestamp
  const timeStamp = new Date().toLocaleString('id-ID');

  // print log
  console.log(
    `[${timeStamp}] ${contact.name} (${contact.id.user}) berkata: ${messageBody}`
  );

  // if someone give me salam
  acceptedSalam.forEach((salam) => {
    if (lowerCasedMessageBody.startsWith(salam)) {
      message.reply("Wa'alaikumussalam");
    }
  });

  // if someone called me "pik"
  acceptedNonSalam.forEach((salam) => {
    if (lowerCasedMessageBody.startsWith(salam)) {
      message.reply('Euy');
    }
  });
});

client.initialize();
