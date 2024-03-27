import Page from "../about/page"
export async function GET() {
  return Response.json (

    {
        msg : "api method GET"
    }
    
  )
}

export async function POST() {
    return Response.json (
        {
        msg : "api method POST"
    }
  )
}
export async function PUT() {
    return Response.json (
        {
        msg : "api method PUT"
    }
  )
}
export async function DELETE() {
    return Response.json (
        {
        msg : "api method DELETE"
    }
  )
}

