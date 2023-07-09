import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostResolver } from './blog-post.resolver';
import { BlogPostController } from './blog-post.controller';
import { photoProviders } from './blog-post.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...photoProviders, BlogPostResolver, BlogPostService],
  controllers: [BlogPostController],
})
export class BlogPostModule {}
