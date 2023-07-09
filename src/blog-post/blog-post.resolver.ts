import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BlogPostService } from './blog-post.service';
import { CreateBlogPostInput } from './dto/create-blog-post.input';
import { UpdateBlogPostInput } from './dto/update-blog-post.input';

@Resolver('BlogPost')
export class BlogPostResolver {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Mutation('createBlogPost')
  create(@Args('createBlogPostInput') createBlogPostInput: CreateBlogPostInput) {
    return this.blogPostService.create(createBlogPostInput);
  }

  @Query('blogPost')
  findAll() {
    return this.blogPostService.findAll();
  }

  @Query('blogPost')
  findOne(@Args('id') id: number) {
    return this.blogPostService.findOne(id);
  }

  @Mutation('updateBlogPost')
  update(@Args('updateBlogPostInput') updateBlogPostInput: UpdateBlogPostInput) {
    return this.blogPostService.update(updateBlogPostInput.id, updateBlogPostInput);
  }

  @Mutation('removeBlogPost')
  remove(@Args('id') id: number) {
    return this.blogPostService.remove(id);
  }
}
