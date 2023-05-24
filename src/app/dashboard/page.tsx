import Header from "../components/Header/Header";
import Link from "next/link";
import Footer from "../components/Footer/Footer";

export default function Dashboard() {
  return (
    <>
      <Header />

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
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
