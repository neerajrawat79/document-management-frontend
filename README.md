# Document Management App (Frontend Only)

This project is a mock frontend implementation of a document management system built using Next.js, TypeScript, TailwindCSS, and mock API services.

## 📦 Tech Stack
- Next.js (App Router)
- React 18
- Tailwind CSS
- TypeScript
- Jest (Unit Testing)

## 🔧 Installation
```bash
npm install
npm run dev
```

## 🧪 Run Tests
```bash
npm run test
```

## 🔁 Pages
- `/signup` – User signup
- `/login` – User login
- `/dashboard` – Main panel
- `/dashboard/users` – Manage users
- `/dashboard/documents` – Upload/manage documents
- `/dashboard/ingestion` – Ingestion process
- `/dashboard/qa` – Question/Answer section

## 🧠 Mock Services
All API calls are mocked to simulate backend responses.

## 📁 Folder Structure
```
components/         → UI components
context/            → Global auth context
mocks/              → API mocks
app/                → App Router pages
__tests__/          → Unit tests
styles/             → Tailwind setup
```