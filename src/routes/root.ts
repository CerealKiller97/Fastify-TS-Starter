import { FastifyPluginAsync } from 'fastify';
import { uptime } from 'process';
import { configuration } from '../config';

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get(
    '/healthcheck',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              app: { type: 'string' },
              uptime: { type: 'number' }
            }
          }
        }
      }
    },
    async (request, reply) => {
      return reply.code(200).send({
        app: configuration.app.name,
        uptime: uptime()
      });
    }
  );
};

export default root;
