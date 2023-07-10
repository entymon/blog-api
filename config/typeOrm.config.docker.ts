import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { dataSourceObject } from './dataSourceObject';

config();
const configService = new ConfigService();

dataSourceObject.host = configService.get('DB_DATABASE_DOCKER_HOST');
const dataSourceOptions = { ...dataSourceObject } as DataSourceOptions;

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
