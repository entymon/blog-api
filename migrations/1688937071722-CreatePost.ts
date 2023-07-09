import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePost1688937071722 implements MigrationInterface {
    name = 'CreatePost1688937071722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blog_post" ("id" SERIAL NOT NULL, "title" character varying(500) NOT NULL, "content" text NOT NULL, "author" character varying NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_694e842ad1c2b33f5939de6fede" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog_post"`);
    }

}
