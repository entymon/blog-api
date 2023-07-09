import { Injectable } from '@nestjs/common';
import { CreateBlogPostInput } from './dto/create-blog-post.input';
import { UpdateBlogPostInput } from './dto/update-blog-post.input';
import { BlogPost } from './entities/blog-post.entity';

@Injectable()
export class BlogPostService {
  private readonly posts: BlogPost[] = [];

  create(createBlogPostInput: CreateBlogPostInput): void {
    try {
      const post = createBlogPostInput as BlogPost;
      this.posts.push(post);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  findAll(): BlogPost[] {
    return this.posts;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updateBlogPostInput: UpdateBlogPostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
