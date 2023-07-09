import { DataSource } from 'typeorm';
import { BlogPost } from './entities/blog-post.entity';

export const photoProviders = [
  {
    provide: 'BLOG_POST_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(BlogPost),
    inject: ['DATA_SOURCE'],
  },
];
