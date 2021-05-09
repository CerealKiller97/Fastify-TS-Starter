import { config } from 'dotenv';

config();

export interface Configuration {
  app: {
    name: string;
    port: number;
    url: string;
    environment: 'development' | 'production';
  };
  mail: {
    host: string;
    port: number;
    username: string;
    password: string;
    secure: true;
  };
  database: {
    host: string;
    user: string;
    password: string;
    db: string;
    port: number;
    type: string;
    mongoUri: string;
  };
  redis: {
    host: string;
    port: number;
    username: string;
    password: string;
  };
  secrets: {
    cookie: string;
    session: string;
    jwt: string;
  };
  services: {};
}

export const configuration = {
  app: {
    environment: process.env.APP_ENV,
    name: process.env.APP_NAME,
    port: Number(process.env.APP_PORT),
    url: process.env.APP_URL,
  },
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    type: process.env.DB_TYPE,
    db: process.env.DB_DATABASE,
    mongoUri: process.env.DB_MONGO_URI,
  },
  secrets: {
    cookie: process.env.COOKIE_SECRET,
    session: process.env.SESSION_SECRET,
    jwt: process.env.JWT_SECRET,
  },
  mail: {
    username: process.env.MAILER_USERNAME,
    port: Number(process.env.MAILER_PORT),
    password: process.env.MAILER_PASSWORD,
    host: process.env.MAILER_HOST,
    secure: !!process.env.MAILER_SECURE,
  },
  redis: {
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  },
  services: {},
} as Readonly<Configuration>;
