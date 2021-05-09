import { test } from 'tap';
import { build } from '../helper';

test('default root route', async (t) => {
  // Arrange
  const app = await build(t);

  // Act
  const res = await app.inject({
    url: '/api',
    method: 'GET'
  });

  // Assert
  t.deepEqual(JSON.parse(res.payload).app, 'Fastify Starter');
  t.isA(JSON.parse(res.payload).uptime, 'number');
  t.equal(res.statusCode, 200);
});
