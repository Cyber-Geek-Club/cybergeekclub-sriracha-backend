import dotenv from 'dotenv';

dotenv.config();

interface Config {
  nodeEnv: string;
  port: number;
  host: string;
}

const config: Config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 8080,
  host: process.env.SERVER_HOST || "127.0.0.1",
};

export default config;