import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-[60vh] w-full flex flex-col justify-center items-center bg-background text-theme text-center">
      <div className="absolute -z-10 h-[120px] w-screen bg-muted inset-0" />
      <div className="mb-8">
        <h1 className="text-9xl font-extrabold tracking-wider">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      </div>
      <Link
        href="/"
        passHref
        className="relative inline-block text-sm font-medium group focus:outline-none focus:ring rounded-md">
        <span className="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-theme group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-md"></span>
        <span className="relative block px-8 py-3 bg-background border border-current rounded-md">
          Go Home
        </span>
      </Link>
    </main>
  );
}
