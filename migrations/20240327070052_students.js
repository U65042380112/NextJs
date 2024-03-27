/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('students', function (table){
        //id
        //name
        //age
        table.bigInteger('id',11).primary().unsigned();
        table.string('name',100).notNullable().unique();
        table.integer('age',2).unsigned();
        table.timestamp(true,true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
