import { Module } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { BlogPostResolver } from './blog-post.resolver';
import { BlogPostController } from './blog-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogPost } from './entities/blog-post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost])],
  providers: [BlogPostResolver, BlogPostService],
  controllers: [BlogPostController],
})
export class BlogPostModule {}
