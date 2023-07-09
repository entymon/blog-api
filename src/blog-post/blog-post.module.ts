import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostResolver } from './blog-post.resolver';
import { BlogPostController } from './blog-post.controller';

@Module({
  providers: [BlogPostResolver, BlogPostService],
  controllers: [BlogPostController],
})
export class BlogPostModule {}
