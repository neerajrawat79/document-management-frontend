import { render, screen, fireEvent } from '@testing-library/react';
import AuthForm from '../components/AuthForm';
import { AuthProvider } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }));

describe('AuthForm', () => {
  it('renders login form inputs and submits', () => {
    render(
      <AuthProvider>
        <AuthForm type="login" />
      </AuthProvider>
    );

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByText(/login/i));
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});
