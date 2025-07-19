const request = require('supertest');
const express = require('express');
const notificationsRouter = require('../server/routes/notifications');

const app = express();
app.use(express.json());
app.use('/api/notifications', notificationsRouter);

describe('Notifications API', () => {
  it('GET /api/notifications returns all notifications', async () => {
    const res = await request(app).get('/api/notifications');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('message');
  });

  it('POST /api/notifications creates a new notification', async () => {
    const newMessage = { message: 'Test Notification' };
    const res = await request(app).post('/api/notifications').send(newMessage);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', newMessage.message);
  });
});
