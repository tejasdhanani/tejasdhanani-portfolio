import AboutSection from "./components/about/AboutSection";
import EmailSection from "./components/email/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/header/Navbar";
import ProjectsSection from "./components/project/ProjectsSection";

export default function Home() {
  return (
    <>

      <main
        className="flex min-h-screen flex-col bg-[#121212]"
      >
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
