import { Inject, Injectable } from '@nestjs/common';
import { CreateBlogPostInput } from './dto/create-blog-post.input';
import { UpdateBlogPostInput } from './dto/update-blog-post.input';
import { BlogPost } from './entities/blog-post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlogPostService {
  private postBlog: BlogPost;

  constructor(
    @InjectRepository(BlogPost)
    private postRepository: Repository<BlogPost>,
  ) {}

  create(createBlogPostInput: CreateBlogPostInput): void {
    const newPost = this.postRepository.create();

    const { title, content, author } = createBlogPostInput;

    newPost.title = title;
    newPost.content = content;
    newPost.author = author;

    try {
      this.postRepository.save(newPost);
    } catch (error) {
      throw new Error(error.message);
    }
    return;
  }

  async findAll(): Promise<BlogPost[]> {
    try {
      return this.postRepository.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findOneById(id: number) {
    try {
      return this.postRepository.findOneBy({ id });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(id: number, updateBlogPostInput: UpdateBlogPostInput) {
    const { title, content, author } = updateBlogPostInput;

    try {
      this.postBlog = await this.postRepository.findOneBy({ id });

      if (title) this.postBlog.title = title;
      if (content) this.postBlog.title = content;
      if (author) this.postBlog.title = author;

      this.postRepository.save(this.postBlog);
    } catch (error) {
      throw new Error(error.message);
    }

    return `This action updates a #${id} post`;
  }

  async remove(id: number) {
    try {
      const postBlog = await this.postRepository.findOneBy({ id });
      if (postBlog) {
        this.postRepository.remove(postBlog);
        return `This action removes a #${id} post`;
      }
    } catch (error) {
      throw new Error(error.message);
    }
    return `Post for id: #${id} does not exists`;
  }
}
