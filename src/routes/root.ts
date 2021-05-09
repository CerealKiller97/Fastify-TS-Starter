import { FastifyPluginAsync } from 'fastify';
import { uptime } from 'process';
import { configuration } from '../config';

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return reply.code(200).send({
      app: configuration.app.name,
      uptime: uptime()
    });
  });
};

export default root;
