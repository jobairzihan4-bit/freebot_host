import { Telegraf } from 'telegraf';

export const setupCommands = (bot: Telegraf) => {
  bot.start((ctx) => {
    ctx.reply('Welcome to the Express + Telegram Bot blank project!');
  });

  bot.help((ctx) => {
    ctx.reply('Send me a message and I will respond.');
  });
};
