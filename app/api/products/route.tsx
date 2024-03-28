const knex = require('knex');
const knexConfig = require('@/knexfile');
const sql = knex(knexConfig['development']);

export async function GET() {
    try{
        const data = await sql('products').select();
        return Response.json(data)
    } catch (err){
        console.log('Database Error:',err);
        throw new Error('Failed to fetch products data.');
    }
    
}
