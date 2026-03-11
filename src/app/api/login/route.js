// post method for login
export async function POST(request) {
  const { email, password } = await request.json();

   //Here you would typically check the email and password against your database
  if (email === "neogi.arup@gmail.com" && password === "1234") {
    return new Response(
      JSON.stringify({ message: "Login successful!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } else {
    return new Response(
     JSON.stringify({ message: "Invalid credentials!" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
   );
  } 
}