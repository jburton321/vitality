import "./styles.css";
import "./tailwind.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Survey } from "./components/Survey";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white flex flex-col gap-0 justify-start overflow-hidden min-h-screen">
      <Navbar />
      <div className="sm:hidden w-full">
        <img
          src="/frame-4273216650.png"
          alt="Beach sunset"
          className="w-full h-auto object-cover aspect-video"
        />
      </div>
      <main className="w-full flex flex-col items-center flex-1">
        <Hero />
        <Survey />
      </main>
      <Footer />
    </div>
  );
}
