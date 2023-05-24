import Link from "next/link";

export default function Header() {
  return (
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
          © 2023 KindeAuth, Inc. All rights reserved
        </small>
      </div>
    </footer>
  );
}
