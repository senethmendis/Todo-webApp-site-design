import React from "react";
import styles from "./styles";
import {
  Navbar,
  Hero,
  Buy,
  CrossPlatform,
  FQuestions,
  Features,
  HowWorks,
  Testimonials,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <Hero />
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Features />
          <CrossPlatform />
          <HowWorks />
          <Testimonials />
          <FQuestions />
          <Buy />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
