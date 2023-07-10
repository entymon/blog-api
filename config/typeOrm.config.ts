import { DataSource, DataSourceOptions } from 'typeorm';
import { dataSourceObject } from './dataSourceObject';

dataSourceObject.host = 'localhost';
const dataSourceOptions = { ...dataSourceObject } as DataSourceOptions;

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
