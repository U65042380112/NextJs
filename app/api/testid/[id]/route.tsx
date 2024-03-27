export async function GET(request,{params}) {
    const Student = [
      {
        id:1,name:"Ukrit",major:"CS",gpa:"3.33"
      },
      {
        id:2,name:"Arkkarat",major:"CS",gpa:"3.99"
      },
      {
        id:3,name:"Thanawat",major:"CS",gpa:"2.50"
      }
    ]
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
  