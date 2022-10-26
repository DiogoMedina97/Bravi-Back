import { DataSource } from 'typeorm';
import { config } from 'dotenv';

const env = config().parsed || {};

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: env.SQL_HOST,
        port: Number.parseInt(env.SQL_PORT, 10),
        username: env.SQL_USERNAME,
        password: env.SQL_PASSWORD,
        database: env.SQL_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
