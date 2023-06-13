"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Auth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, isAuthenticated, user, getToken } = useKindeAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname != "/") {
      return router.push("/");
    }
    if (!isLoading && isAuthenticated && pathname === "/") {
      return router.push("/dashboard");
    }
  }, [isAuthenticated, isLoading, router, pathname]);

  return <>{isLoading ? <p>Loading...</p> : children}</>;
}
