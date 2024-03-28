/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {product_id: 1001, product_name: 'Computer', product_price: 35000.50},
    {product_id: 1002, product_name: 'Smart-Phone', product_price:12500.00},
    {product_id: 1003, product_name: 'TV', product_price:8900.00},
    {product_id: 1004, product_name: 'Key', product_price:50.00},
    {product_id: 1005, product_name: 'Book', product_price:110.00},
  ]);
};
