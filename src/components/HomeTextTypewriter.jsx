import { useState, useEffect } from "react";

export default function HomeTextTypewriter() {
  const text = "Buy or Rent Medical Equipment on best Price!";
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
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
              fontFamily: "monospace",
        fontWeight: "bold"
      }}
    >
      <h1 style={{ display: "inline" }}>{displayedText}</h1>
      <span
        style={{
          display: "inline-block",
          width: "1ch",
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
