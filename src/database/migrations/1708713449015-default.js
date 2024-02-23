const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Default1708713449015 {
    name = 'Default1708713449015'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "carros" ("id" SERIAL NOT NULL, "marca" character varying NOT NULL, "modelo" character varying NOT NULL, "ano" integer NOT NULL, "cor" character varying NOT NULL, CONSTRAINT "PK_ba7be410cab15cfd6475fda1b9d" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "carros"`);
    }
}
