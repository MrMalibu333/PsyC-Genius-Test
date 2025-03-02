import { useState } from 'react';

export default function PsyCGeniusTest() {
    const questions = [
        {
            question: "Reality reflects back to you what you believe. If you keep facing the same limitation, where does it truly exist?",
            options: ["In me", "In the world", "Neither—perception is fluid", "All perspectives are valid at once"],
            scores: [1, 0, 2, 3]
        },
        {
            question: "If you were given the chance to step into the unknown without knowing what awaits, how do you feel?",
            options: ["Excited—I'm ready!", "Curious but hesitant", "Fearful—I need certainty", "There is no 'unknown'—only unfolding awareness"],
            scores: [3, 1, 0, 3]
        },
        {
            question: "You must make a life-changing decision. Do you:",
            options: ["Use logic to analyze all outcomes", "Trust your intuition and take the leap", "Observe the decision from multiple dimensions", "Realize no choice is 'final'—all timelines exist"],
            scores: [0, 2, 2, 3]
        },
        {
            question: "You meet a new person and feel an instant energetic shift. What do you do?",
            options: ["Analyze it rationally—why am I feeling this?", "Trust the feeling and engage deeper", "See it as a reflection of something in me", "Recognize this as a quantum entanglement moment"],
            scores: [0, 2, 2, 3]
        },
        {
            question: "You wake up and realize your entire personality was just a temporary character in a vast consciousness game. What do you do?",
            options: ["Panic—I need my identity!", "Laugh and explore who I really am", "Accept but still feel uneasy", "Realize I have been infinite all along"],
            scores: [0, 2, 1, 3]
        },
        {
            question: "When difficult emotions arise, what is your first instinct?",
            options: ["Suppress or distract myself", "Try to process and 'fix' them", "Observe them neutrally without attachment", "Recognize them as energy I can transmute"],
            scores: [0, 1, 2, 3]
        },
        {
            question: "You keep seeing repeating numbers and patterns. What do you believe is happening?",
            options: ["Just coincidence", "My subconscious noticing patterns", "A direct message from the universe", "A glitch in the matrix showing I can shift timelines"],
            scores: [0, 1, 2, 3]
        },
        {
            question: "How do you most easily enter a state of limitless creative flow?",
            options: ["Structured discipline—routine creates results", "Spontaneity—trusting the moment", "Merging effort & surrender", "Realizing 'I' am not creating—consciousness flows through me"],
            scores: [0, 2, 2, 3]
        },
        {
            question: "If someone insults you, how do you respond internally?",
            options: ["Feel hurt and defend myself", "Dismiss it—they don’t know me", "Ask what in me is attracting this reflection", "See it as a test of my ability to remain in neutrality"],
            scores: [0, 1, 2, 3]
        },
        {
            question: "If you were told you could shift into a completely new reality right now, what would stop you?",
            options: ["Fear of losing what I have", "Doubt that it’s possible", "Nothing—I’m already shifting", "I don’t need to shift—everything is already here"],
            scores: [0, 1, 3, 3]
        }
    ];

    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [result, setResult] = useState(null);

    const handleAnswer = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const calculateResult = () => {
        const totalScore = answers.reduce((sum, answer, index) => sum + (answer !== null ? questions[index].scores[answer] : 0), 0);
        let resultText = "";

        if (totalScore >= 25) {
            resultText = "You are a Quantum Surfer! You embrace infinite possibilities and navigate reality effortlessly.";
        } else if (totalScore >= 15) {
            resultText = "You have a strong PsyC Awareness! You are expanding your consciousness and shifting perspectives.";
        } else {
            resultText = "You're at the beginning of your PsyC journey. Keep exploring and expanding your awareness!";
        }

        setResult(resultText);
    };

    return (
        <div>
            <h1>PsyC Genius Test</h1>
            <p>Answer the questions below to reveal your level of consciousness expansion.</p>
            {questions.map((q, qIndex) => (
                <div key={qIndex}>
                    <p>{qIndex + 1}. {q.question}</p>
                    {q.options.map((option, oIndex) => (
                        <label key={oIndex}>
                            <input
                                type="radio"
                                name={`question-${qIndex}`}
                                checked={answers[qIndex] === oIndex}
                                onChange={() => handleAnswer(qIndex, oIndex)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={calculateResult}>Get My Result</button>
            {result && <h2>{result}</h2>}
        </div>
    );
}
