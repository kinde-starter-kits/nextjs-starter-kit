import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export const LoggedIn = () => {
  const { user } = useKindeAuth();

  const handleGetAccessToken = async () => {
    const res = await fetch("/api/getAccessToken");
    const { token } = await res.json();
    alert(JSON.stringify(token, null, 2));
  };

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">KindeAuth</h1>
          <div className="profile-blob">
            <div className="avatar">
              {user?.given_name?.[0]}
              {user?.family_name?.[1]}
            </div>
            <div>
              <p className="text-heading-2">
                {user?.given_name} {user?.family_name}
              </p>
              <Link className="text-subtle" href="/api/auth/logout">
                Sign out
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card start-hero">
            <p className="text-body-2 start-hero-intro">Woohoo!</p>
            <p className="text-display-2">
              Your authentication is all sorted.
              <br />
              Build the important stuff.
            </p>
          </div>
          <section className="next-steps-section">
            <h2 className="text-heading-1">Next steps for you</h2>
            <button onClick={handleGetAccessToken}>Get access token</button>
          </section>
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
