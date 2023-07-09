import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  content: string;

  @Column()
  author: string;

  @Column()
  isPublished: boolean;
}
