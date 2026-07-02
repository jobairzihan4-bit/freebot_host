import { Telegraf } from 'telegraf';
import { setupCommands } from './handlers/commands';

export const setupBot = () => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  
  if (!token) {
    console.warn('TELEGRAM_BOT_TOKEN is not set. Bot will not be initialized.');
    return null;
  }

  const bot = new Telegraf(token);

  // Setup command handlers
  setupCommands(bot);

  return bot;
};
