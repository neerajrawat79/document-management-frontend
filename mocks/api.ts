export const mockLogin = (email: string, password: string) =>
    Promise.resolve({ token: "mock-token", user: { email, role: "admin" } });
  
  export const mockFetchUsers = () =>
    Promise.resolve([{ id: 1, name: "Neeraj", role: "admin" }]);
  
  export const mockFetchDocuments = () =>
    Promise.resolve([{ id: 1, title: "Design Spec", status: "Processed" }]);
  
  export const mockIngestionStatus = () =>
    Promise.resolve({ status: "Completed", id: 123 });
  
  export const mockQnA = (question: string) =>
    Promise.resolve({ answer: "This is a mocked answer to: " + question });
  