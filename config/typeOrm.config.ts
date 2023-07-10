import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // commands run locally indicate localhosts
  port: configService.get('DB_DATABASE_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE_NAME'),
  entities: [__dirname + '/../src/**/*.entity{.ts,.js}'], // need to point src because there are duplications
  migrations: ['migrations/*{.ts,.js}'], // omit dist
  synchronize: true, // sync must be false on prod. SQL rusn manually
});

export default dataSource;
