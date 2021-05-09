import fp from 'fastify-plugin';
import fastifySwagger from 'fastify-swagger';
import { configuration } from '../config';

export default fp(async (fastify) => {
  fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: configuration.app.name,
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    },
    exposeRoute: true
  });
});
