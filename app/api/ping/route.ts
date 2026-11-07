export async function POST(request: Request){

    const body = await request.json();
    const { name } = body;
    
    return new Response(JSON.stringify({message: "My name is " + name }), {
        status: 200,
        headers: { 'Content-Type': 'application/json'}
    })

}