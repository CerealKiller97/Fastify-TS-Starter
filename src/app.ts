import { FastifyPluginAsync } from 'fastify';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { join } from 'path';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

export const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  await fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  await fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: {
      ...opts,
      prefix: '/api'
    }
  });
};
