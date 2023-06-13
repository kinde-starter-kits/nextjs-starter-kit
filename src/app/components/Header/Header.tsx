"use client";
import { useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Header() {
  const { user, getToken, getUserOrganizations, isAuthenticated } = useKindeAuth();
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
            {user?.family_name?.[0]}
          </div>
          <div>
            <p className="text-heading-2">
              {user?.given_name} {user?.family_name}
            </p>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className="text-subtle" href="/api/auth/logout">
              Sign out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
