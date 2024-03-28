import * as Student from './Student.json'
export async function GET(request,{params}){
    const id = parseInt(params.id);
    if(!isNaN(id)){
      const foundItem = Student.find(item => item.id === id);

      if(foundItem) {
        return Response.json(foundItem);
      } else {
        return new Response("Item Not Found");
      }
    } else{
      return new Response("Invlid ID");
    }
  }
  