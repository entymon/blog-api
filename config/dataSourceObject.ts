import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

export const dataSourceObject = {
  type: 'postgres',
  host: 'localhost', // commands run locally indicate localhost
  port: configService.get('DB_DATABASE_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE_NAME'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // need to point src because there are duplications
  migrations: [__dirname + '/../dist/migrations/*{.ts,.js}'], // omit src
  synchronize: true, // sync must be false on prod. SQL rusn manually
};
