import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import Swal from 'sweetalert2';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Failed to send reset email. Please try again.');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message || 'Failed to send reset email. Please try again.',
        });
      } else {
        console.log('Password reset requested for:', email);
        setIsSuccess(true);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Password reset instructions have been sent to your email.',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send reset email. Please try again.',
      });
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <AuthLayout title="Check Your Email">
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            We've sent password reset instructions to {email}
          </p>
          <div>
            <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
              Back to Login
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Reset Password">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            disabled={isSubmitting}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Reset Password'}
        </button>
        <div className="text-center">
          <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
            Back to Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}