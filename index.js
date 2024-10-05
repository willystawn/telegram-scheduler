const TelegramBot = require("node-telegram-bot-api");
const schedule = require("node-schedule");

const token = "7764491592:AAEdOn7hoN4v0UjisjaInKFrae6NBC3dErw";
const chatId = "@airdropjasun";

const bot = new TelegramBot(token, { polling: true });

const sendMessage = (message, replyToMessageId) => {
  const options = replyToMessageId
    ? { reply_to_message_id: replyToMessageId }
    : {};

  bot
    .sendMessage(chatId, message, options)
    .then(() => console.log(`Message sent: ${message}`))
    .catch((err) => console.error(`Failed to send message: ${err}`));
};

const scheduleMessages = () => {
  const messages = [
    {
      message: "Time to catch the worm! 🪱",
      time: "07:00",
      replyToMessageId: 49,
    },
    {
      message: "Time to catch the worm! 🪱",
      time: "11:00",
      replyToMessageId: 49,
    },
    {
      message: "Time to catch the worm! 🪱",
      time: "15:00",
      replyToMessageId: 49,
    },
    {
      message: "Time to catch the worm! 🪱",
      time: "19:00",
      replyToMessageId: 49,
    },
    {
      message: "Time to catch the worm! 🪱",
      time: "23:00",
      replyToMessageId: 49,
    },
    {
      message: "Time to catch the worm! 🪱",
      time: "03:00",
      replyToMessageId: 49,
    },
  ];

  messages.forEach(({ message, time, replyToMessageId }) => {
    const [hour, minute] = time.split(":").map(Number);
    schedule.scheduleJob({ hour, minute }, () => {
      sendMessage(message, replyToMessageId);
    });
  });
};

scheduleMessages();
