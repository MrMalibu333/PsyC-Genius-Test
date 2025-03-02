import { useState } from "react";

export default function Home() {
  const questions = [
    {
      text: "Reality reflects back to you what you believe. If you keep facing the same limitation, where does it truly exist?",
      options: ["In me", "In the world", "Neither—perception is fluid", "All perspectives are valid at once"],
      scores: [1, 0, 2, 3]
    },
    {
      text: "If you were given the chance to step into the unknown without knowing what awaits, how do you feel?",
      options: ["Excited—I'm ready!", "Curious but hesitant", "Fearful—I need certainty", "There is no 'unknown'—only unfolding awareness"],
      scores: [3, 1, 0, 3]
    },
    {
      text: "You must make a life-changing decision. Do you:",
      options: ["Use logic to analyze all outcomes", "Trust your intuition and take the leap", "Observe the decision from multiple dimensions", "Realize no choice is 'final'—all timelines exist"],
      scores: [0, 2, 2, 3]
    },
    {
      text: "You meet a new person and feel an instant energetic shift. What do you do?",
      options: ["Analyze it rationally—why am I feeling this?", "Trust the feeling and engage deeper", "See it as a reflection of something in me", "Recognize this as a quantum entanglement moment"],
      scores: [0, 2, 2, 3]
    },
    {
      text: "You wake up and realize your entire personality was just a temporary character in a vast consciousness game. What do you do?",
      options: ["Panic—I need my identity!", "Laugh and explore who I really am", "Accept but still feel uneasy", "Realize I have been infinite all along"],
      scores: [0, 2, 1, 3]
    },
    {
      text: "When difficult emotions arise, what is your first instinct?",
      options: ["Suppress or distract myself", "Try to process and 'fix' them", "Observe them neutrally without attachment", "Recognize them as energy I can transmute"],
      scores: [0, 1, 2, 3]
    },
    {
      text: "You keep seeing repeating numbers and patterns. What do you believe is happening?",
      options: ["Just coincidence", "My subconscious noticing patterns", "A direct message from the universe", "A glitch in the matrix showing I can shift timelines"],
      scores: [0, 1, 2, 3]
    },
    {
      text: "How do you most easily enter a state of limitless creative flow?",
      options: ["Structured discipline—routine creates results", "Spontaneity—trusting the moment", "Merging effort & surrender", "Realizing 'I' am not creating—consciousness flows through me"],
      scores: [0, 1, 2, 3]
    },
    {
      text: "If someone insults you, how do you respond internally?",
      options: ["Feel hurt and defend myself", "Dismiss it—they don’t know me", "Ask what in me is attracting this reflection", "See it as a test of my ability to remain in neutrality"],
      scores: [0, 1, 2, 3]
    },
    {
      text: "If you were told you could shift into a completely new reality right now, what would stop you?",
      options: ["Fear of losing what I have", "Doubt that it’s possible", "Nothing—I’m already shifting", "I don’t need to shift—everything is already here"],
      scores: [0, 1, 3, 3]
    }
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState("");

  const handleAnswer = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (answer !== null) {
        totalScore += questions[index].scores[answer];
      }
    });

    let finalResult = "";
    if (totalScore >= 25) {
      finalResult = "Quantum Visionary 🌌 – You see reality as fluid and multidimensional.";
    } else if (totalScore >= 15) {
      finalResult = "Transformational Explorer 🚀 – You are expanding your awareness rapidly.";
    } else {
      finalResult = "Seeker of Truth 🔍 – You are beginning to explore consciousness at a deeper level.";
    }

    setResult(finalResult);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "auto" }}>
      <h1>PsyC Genius Test</h1>
      <p>Answer the questions below to reveal your level of consciousness expansion.</p>

      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p><strong>{index + 1}. {q.text}</strong></p>
          {q.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => handleAnswer(index, optionIndex)}
              style={{
                margin: "5px",
                padding: "10px",
                cursor: "pointer",
                backgroundColor: answers[index] === optionIndex ? "#4CAF50" : "#ddd",
                border: "none",
                borderRadius: "5px"
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ))}

      <button onClick={calculateResult} style={{ padding: "15px", cursor: "pointer", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", marginTop: "20px" }}>
        Get My Result
      </button>

      {result && <h2 style={{ marginTop: "20px" }}>{result}</h2>}
    </div>
  );
}
