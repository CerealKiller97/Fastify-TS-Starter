import fp from 'fastify-plugin';
import { createTransport, Transporter } from 'nodemailer';
import { configuration } from '../config';
export default fp(async (fastify) => {
  const mailer = createTransport({
    port: configuration.mail.port,
    host: configuration.mail.host,
    auth: {
      user: configuration.mail.username,
      pass: configuration.mail.password
    },
    secure: configuration.mail.secure
  });
  fastify.decorate('mailer', mailer);
});

declare module 'fastify' {
  interface FastifyInstance {
    mailer: Transporter;
  }
}
