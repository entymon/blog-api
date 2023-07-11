import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { dataSourceObject } from 'config/dataSourceObject';
import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

config();
const configService = new ConfigService();

dataSourceObject.host = configService.get('DB_DATABASE_DOCKER_HOST');
const dataSourceOptions = { ...dataSourceObject } as DataSourceOptions;

@Module({
  imports: [BlogPostModule, TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
