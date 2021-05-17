import fp from 'fastify-plugin';
import { RedisClient } from 'redis';

export default fp(async (fastify) => {
  // fastify.decorate(
  //   'redis',
  //   createClient({
  //     host: configuration.redis.host,
  //     port: configuration.redis.port
  //   })
  // );
});

declare module 'fastify' {
  interface FastifyInstance {
    redis: RedisClient;
  }
}
