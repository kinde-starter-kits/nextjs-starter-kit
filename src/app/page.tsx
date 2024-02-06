"use client";
import { useKindeAuth, } from "@kinde-oss/kinde-auth-nextjs";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, isAuthenticated } = useKindeAuth();

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
            <LoginLink className="btn btn-ghost sign-in-btn">Sign in</LoginLink>
            <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card hero">
            <p className="text-display-1 hero-title">
              Let’s start authenticating <br /> with KindeAuth
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
