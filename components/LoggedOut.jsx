import Link from "next/link";

export const LoggedOut = () => {
  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div>
            <Link className="btn btn-ghost sign-in-btn" href="/api/auth/login">
              Sign in
            </Link>
            <Link className="btn btn-dark" href="/api/auth/register">
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

      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">KindeAuth</strong>
          <p className="footer-tagline text-body-3">
            Visit our{" "}
            <Link className="link" href="https://kinde.com/docs">
              help center
            </Link>
          </p>

          <small className="text-subtle">
            © 2022 KindeAuth, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
};
