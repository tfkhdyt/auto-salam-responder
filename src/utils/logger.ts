import WAWebJS from 'whatsapp-web.js';

const printLog = (contact: WAWebJS.Contact, messageBody: string) => {
  // get current timestamp
  const timeStamp = new Date().toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
  });

  // print log
  console.log(
    `[${timeStamp}] ${contact.name ?? 'Unknown'} (${
      contact.id.user
    }) said: ${messageBody}`
  );
};

export default printLog;
