"use client";
import { useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function Header() {
  const { user, getToken, getUserOrganizations, isAuthenticated } =
    useKindeAuth();
  useEffect(() => {
    if (isAuthenticated) {
      console.log(getUserOrganizations());
      console.log(getToken());
    }
  }, [isAuthenticated]);
  return (
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
            <Link
              className="text-subtle"
              href={{ pathname: "/api/auth/logout" }}
            >
              Sign out
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
