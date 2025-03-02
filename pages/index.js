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
      options: ["Feel hurt and defend myself", "Dismiss it—they don’t know me", "Ask what
