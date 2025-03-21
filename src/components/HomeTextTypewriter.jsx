import { useState, useEffect } from "react";

export default function HomeTextTypewriter() {
  const text = "Buy and Get on Rent Medical Equipments from Medtrade Stystem on the best Price.";
  const speed = 100; // Typing speed in milliseconds
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout); // Clean up timeout
    }
  }, [index, text, speed]);

  return (
    <div className="text-center font-mono font-bold">
      <p
        className="text-sm lg:text-4xl inline text-"
        style={{ textShadow: "5px 2px black" }}
      >
        {displayedText}
      </p>
      <span
        className="inline-block w-2 text-sm lg:text-4xl"
        style={{
          animation: "blink 0.7s steps(1) infinite",
        }}
      >
        |
      </span>
      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          50.1%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
