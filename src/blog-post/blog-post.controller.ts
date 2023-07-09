import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Req,
} from '@nestjs/common';
import { CreateBlogPostInput } from './dto/create-blog-post.input';
import { UpdateBlogPostInput } from './dto/update-blog-post.input';
import { BlogPostService } from './blog-post.service';
import { BlogPost } from './entities/blog-post.entity';

@Controller({ path: 'post', host: 'localhost' })
export class BlogPostController {
  constructor(private postService: BlogPostService) {}

  @Get()
  async findAll(): Promise<BlogPost[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} post`;
  }

  @Post()
  create(@Body() createPostInput: CreateBlogPostInput): void {
    this.postService.create(createPostInput);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostInput: UpdateBlogPostInput,
  ): string {
    return `This action returns an #${id} post with body ${JSON.stringify(
      updatePostInput,
    )}`;
  }

  @Delete(':id')
  remove(@Param() id: string): string {
    return `This action deletes a #${id} post`;
  }
}
