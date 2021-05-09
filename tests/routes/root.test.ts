import { test } from 'tap';
import { build } from '../helper';

test('default root route', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: '/api',
    method: 'GET',
  });

  t.deepEqual(JSON.parse(res.payload).app, 'Fastify Starter');
  t.isA(JSON.parse(res.payload).uptime, 'number');
});
