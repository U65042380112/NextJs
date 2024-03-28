const knex = require('knex');
const knexConfig = require('@/knexfile');
const sql = knex(knexConfig['development']);




export async function GET(request,{params}) 
{  
      {
        try{
            const data = await sql('products').where('product_id',params.id).first();
            return Response.json(data)
        } catch (err){
            return Response.json({
                msg: 'data not found'
            })

        }
      }
      
  }

export async function DELETE(request,{params}) 
{  
      {
        try{
            const data = await sql('products').where('product_id',params.id).delete();
            return Response.json({
                msg:'product id ${params.id} deleted successfully'
            })
        } catch (err){
            return Response.json({
                msg: 'data not found'
            })

        }
      }
      
  }