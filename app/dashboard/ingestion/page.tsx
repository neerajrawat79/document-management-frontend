import Navbar from "../../../components/Navbar";
import { mockIngestionStatus } from "../../../mocks/api";
import { useEffect, useState } from "react";

export default function IngestionPage() {
  const [status, setStatus] = useState("Pending");
  useEffect(() => {
    mockIngestionStatus().then(res => setStatus(res.status));
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="p-4 font-bold">Ingestion Management</h2>
      <p className="px-4">Current Status: {status}</p>
    </div>
  );
}