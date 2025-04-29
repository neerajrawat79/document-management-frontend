import Navbar from "../../../components/Navbar";
import { mockFetchDocuments } from "../../../mocks/api";
import { useEffect, useState } from "react";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    mockFetchDocuments().then(setDocuments);
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="p-4 font-bold">Document Management</h2>
      <ul className="px-4">
        {documents.map((doc: any) => (
          <li key={doc.id}>{doc.title} - {doc.status}</li>
        ))}
      </ul>
    </div>
  );
}