import { FastifyPluginAsync } from 'fastify';
import { uptime } from 'process';
import { configuration } from '../config';

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get(
    '/healthcheck',
    {
      schema: {
        body: {
          tags: ['Health Check'],
          description: 'HC route',
          type: 'object',
          response: {
            200: {
              type: 'object',
              properties: {
                app: { type: 'string' },
                uptime: { type: 'number' }
              }
            },
            required: ['app', 'name']
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

  fastify.get('/test', async (request, reply) => {
    return reply.status(200).send({ abc: '13' });
  });
};

export default root;
