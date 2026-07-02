import { Express } from 'express';

export const setupApiRoutes = (app: Express) => {
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'API is running' });
  });
};
