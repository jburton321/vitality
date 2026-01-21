import "./styles.css";
import "./tailwind.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Survey } from "./components/Survey";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white flex flex-col gap-0 items-center justify-start overflow-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Survey />
      </main>
      <Footer />
    </div>
  );
}
