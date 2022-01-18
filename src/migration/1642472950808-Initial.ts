import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1642472950808 implements MigrationInterface {
    name = 'Initial1642472950808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(250) NOT NULL, "slug" character varying(250) NOT NULL, CONSTRAINT "PK_c2727780c5b9b0c564c29a4977c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Category"`);
    }

}
