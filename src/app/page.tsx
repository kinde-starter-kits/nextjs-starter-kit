"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, isAuthenticated, user, getToken } = useKindeAuth();

  if (!isLoading && !isAuthenticated && pathname != "/") {
    console.log("sending home");
    return router.push("/");
  }

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div>
            <Link
              prefetch={false}
              className="btn btn-ghost sign-in-btn"
              href={{ pathname: "/api/auth/login" }}
            >
              Sign in
            </Link>
            <Link
              prefetch={false}
              className="btn btn-dark"
              href={{ pathname: "/api/auth/register" }}
            >
              Sign up
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card hero">
            <p className="text-display-1 hero-title">
              Let's start authenticating <br /> with KindeAuth
            </p>
            <p className="text-body-1 hero-tagline">Configure your app</p>

            <Link
              href="https://kinde.com/docs/sdks/nextjs-sdk"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light btn-big"
            >
              Go to docs
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
