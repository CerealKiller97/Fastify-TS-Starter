// This file contains code that we reuse between our tests.
import Fastify from 'fastify';
import fp from 'fastify-plugin';
import tap from 'tap';
import { app } from '../src/app';

export type Test = typeof tap['Test']['prototype'];

// Fill in this config with all the configurations
// needed for testing the application
export const config = () => {
  return {};
};

// Automatically build and tear down our instance
export const build = async (t: Test) => {
  const fastify = Fastify();

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  await fastify.register(fp(app), config());

  await fastify.ready();

  // Tear down our app after we are done
  t.tearDown(async () => {
    await fastify.close();
  });

  return fastify;
};
