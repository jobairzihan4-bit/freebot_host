import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export function startBot() {
    const token = process.env.BOT_TOKEN;
    
    if (!token) {
        console.error('BOT_TOKEN is missing in environment variables. Bot will not start.');
        return;
    }

    const bot = new Telegraf(token);

    // Simple echo bot
    bot.on('text', (ctx) => {
        ctx.reply(ctx.message.text);
    });

    // Launch the bot
    bot.launch()
        .then(() => {
            console.log('Bot is running');
        })
        .catch((error) => {
            console.error('Failed to start the bot:', error);
        });

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
}
