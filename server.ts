import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { setupBot } from './src/bot';
import { setupApiRoutes } from './src/api/routes';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Setup API Routes
  setupApiRoutes(app);

  // Initialize Telegram Bot
  const bot = setupBot();
  if (bot) {
    // Standard long-polling for both dev and production
    bot.launch()
      .then(() => console.log('Telegram bot started successfully'))
      .catch((err) => console.error('Failed to start Telegram bot:', err));
      
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  }

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static frontend files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
