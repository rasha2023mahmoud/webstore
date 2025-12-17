import LandingSection from "./Components/LandingSection";
import { Container } from "react-bootstrap";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import FeatureWorks from "./Components/FeatureWork";
import Store from "./Components/Store";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <Container fluid className="min-vh-100" style={{ width: "100%" }}>
      <main className="page-wrapper">
        <LandingSection />
        <Intro />
        <Services />
        <FeatureWorks />
        <Store />
        <Footer />
      </main>
    </Container>
  );
}
