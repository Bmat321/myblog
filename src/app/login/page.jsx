"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./loginPage.module.css";

import Spinner from "../../components/spinner/Spinner";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="loading">
        <Spinner color="#4d56a9" width="80px" height="80px" />
      </div>
    );
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {status === "authenticated" ? (
          <div className={styles.loading}>
            <Spinner color="#4d56a9" width="80px" height="80px" />
          </div>
        ) : (
          <div className={styles.socialButton} onClick={() => signIn("google")}>
            Sign in with Google
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
