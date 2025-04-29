import Navbar from "../../../components/Navbar";
import { mockQnA } from "../../../mocks/api";
import { useState } from "react";

export default function QAPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async () => {
    const res = await mockQnA(question);
    setAnswer(res.answer);
  };

  return (
    <div>
      <Navbar />
      <h2 className="p-4 font-bold">Q&A Interface</h2>
      <div className="px-4">
        <input
          type="text"
          placeholder="Ask a question..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className="border p-2 w-full"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-2">
          Submit
        </button>
        <p className="mt-4">Answer: {answer}</p>
      </div>
    </div>
  );
}