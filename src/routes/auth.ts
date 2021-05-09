import { FastifyPluginAsync } from 'fastify';
import loginSchema from '../schemas/auth/login.json';

const login: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post('/login', { schema: { body: loginSchema } }, async (request, reply) => {
    return reply.code(200).send({ message: '/api/login' });
  });
};

export default login;
