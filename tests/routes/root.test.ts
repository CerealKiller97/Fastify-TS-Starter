import { test } from 'tap';
import { build } from '../helper';

test('Healthcheck route', async (t) => {
  // Arrange
  const app = await build(t);

  // Act
  const res = await app.inject({
    url: '/api/healthcheck',
    method: 'GET'
  });

  // Assert
  t.is(JSON.parse(res.payload).app, 'Fastify Starter');
  t.isA(JSON.parse(res.payload).uptime, 'number');
  t.is(res.statusCode, 200);
});
