import { MigrationInterface, QueryRunner } from "typeorm";

export class Movies1729718218500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "movies" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying NOT NULL,
                "description" character varying NOT NULL,
                "director" character varying NOT NULL,
                "year" integer NOT NULL,
                "rating" character varying NOT NULL,
                "image" character varying NOT NULL,
                "cast" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }
}
