/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()




  await knex('students').insert([
    {id: 1, name: 'Aekkarat', age: 22},
    {id: 2, name: 'Ukrit', age:23},
    {id: 3, name: 'Nattaporn', age:24},
    {id: 4, name: 'kanyarat', age:25},
    {id: 5, name: 'Thanawat', age:99},
    {id: 6, name: 'Thanawat2', age:10}
  ]);

};
