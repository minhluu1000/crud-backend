import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CRUD1725726708672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'items',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'type',
                type: 'varchar',
              },
              {
                name: 'category',
                type: 'varchar',
              },
              {
                name: 'price',
                type: 'int',
              },
            ],
          }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('items');
    }

}
