import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { dataSourceObject } from 'config/dataSourceObject';

config();
const configService = new ConfigService();

dataSourceObject.host = configService.get('DB_DATABASE_DOCKER_HOST');
const dataSourceOptions = { ...dataSourceObject } as DataSourceOptions;

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(dataSourceOptions);

      return dataSource.initialize();
    },
  },
];

// export const databaseProviders = [TypeOrmModule.forRoot(dataSourceOptions)];
