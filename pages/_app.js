import "../styles/globals.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

function MyApp({ Component, pageProps }) {
  return (
    <KindeProvider>
      <Component {...pageProps} />
    </KindeProvider>
  );
}

export default MyApp;
