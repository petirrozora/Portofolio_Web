export default function proxy(request) {
  const token = request.cookies.get("token")?.value;

  // Protect dashboard
  if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return Response.redirect(new URL("/login", request.url));
  }

  // NEW BEHAVIOR: DO NOT RETURN "NEXT()" ANYMORE
  // Just return nothing to continue
  return;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
