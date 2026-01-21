import { useState } from "react";
import "./styles.css";
import "./tailwind.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Survey } from "./components/Survey";
import { Footer } from "./components/Footer";
import { QuizFlow } from "./components/QuizFlow";

type View = "home" | "quiz";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("home");

  const handleStartQuiz = () => {
    setCurrentView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentView === "quiz") {
    return <QuizFlow onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen">
      <div className="bg-white flex flex-col gap-0 justify-start relative z-10">
        <Navbar />
        <div className="sm:hidden w-full relative">
          <img
            src="/frame-4273216650.png"
            alt="Beach sunset"
            className="w-full h-auto object-cover aspect-video"
          />
          <img
            src="/stamp.png"
            alt="Future of Travel Focus Group"
            className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-32 h-32 z-10"
          />
        </div>
        <main className="w-full flex flex-col items-center flex-1">
          <Hero onStartClick={handleStartQuiz} />
          <Survey onStartClick={handleStartQuiz} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
