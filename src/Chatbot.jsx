import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Chatbot.css";
import { IoSend } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";

const questions = [
  { question: "Hello", answer: "Hi there! How can I help you?" },
  { question: "What is your name?", answer: "My name is SciAstra." },
  {
    question: "What can you do?",
    answer: "I can answer a few questions about SciAstra.",
  },
  {
    question: "Can I chat with mentors anytime?",
    answer: "Yes, you can instant chat with mentors for any assistance ",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can send your query at support@sciastra.com or you can visit us at SciAstra Education Pvt Ltd, Bhubaneswar, Odisha ",
  },
  {
    question: "How many research institute in india?",
    answer: "IISC, IISER, NISER, ISI, CMI, IACS, CEBR ",
  },
  {
    question: "Why I choose you?",
    answer:
      "You can choose us because of our experienced faculties, Our part results, Our world class study material and our mentors. ",
  },
  {
    question: "Tell me about yourself?",
    answer:
      "In March 2021, we started SciAstra from our hostel room and a small youtube channel. We started with 2 of us together, and today we have more than 50 mentors from all the premier research institutes all over the world. We, at SciAstra, believe that education should not just be cracking competitive exams. ",
  },
];

function Chatbot() {
  const [showChatbox, setShowChatbox] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleToggleChatbox = () => {
    setShowChatbox(!showChatbox);
  };

  const handleCloseChatbox = () => {
    setShowChatbox(false);
  };

  const handleUserInput = (event) => {
    setUserQuestion(event.target.value);
  };

  const handleSend = () => {
    const matchingAnswer = questions.find((q) => q.question === userQuestion);
    setChatHistory((prevHistory) => [...prevHistory, { user: userQuestion }]);

    if (matchingAnswer) {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { bot: matchingAnswer.answer },
      ]);
      setUserQuestion("");
    } else {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { bot: "I'm not sure I understand. Could you rephrase your question?" },
      ]);
    }
  };

  return (
    <div>
      {/* Chatbox icon */}
      <button
        className={`chatbox-button ${showChatbox ? "hide" : ""}`}
        onClick={handleToggleChatbox}
      >
        <FontAwesomeIcon icon={faRobot} className="icon" />
      </button>

      {/* Chatbox */}
      {showChatbox && (
        <div className="chatbox">
          <button className="close-button" onClick={handleCloseChatbox}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul>
            {chatHistory.map((message, index) => (
              <li key={index} className={message.user ? "user" : "bot"}>
                <FontAwesomeIcon icon={message.user ? faUser : faRobot} />{" "}
                {message.user || message.bot}
              </li>
            ))}
          </ul>
          <div className="input-container">
            <input
              type="text"
              value={userQuestion}
              onChange={handleUserInput}
              placeholder="Type your question here..."
              className="input"
            />
            <button className="btn_sub" onClick={handleSend}>
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
