import { CreateBlogPostInput } from './create-blog-post.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBlogPostInput extends PartialType(CreateBlogPostInput) {
  id: number;
}
