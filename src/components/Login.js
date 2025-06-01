import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem('signupData') || '{}');

    if (email === savedData.email && password === savedData.password) {
      alert('Login successful!');
      window.location.href = '/'; // Adjust this to your app's landing page
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 position-relative bg-white overflow-hidden">
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: '60vh',
          background: 'linear-gradient(to right top, #6ec3f4, #c27bf9, #f9ce7b)',
          clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
          zIndex: 0
        }}
      ></div>

      <div className="form-container position-relative bg-white p-4 rounded shadow" style={{ zIndex: 1, maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <h2 className="form-title fw-bold">Log In to QuickPlan</h2>
          <p className="form-subtitle text-muted small">
            Quick & Simple way to Track Your Day and Events
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="nealjustice@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="***"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="#" className="text-decoration-none small">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-dark w-100 mb-3">PROCEED</button>

          <div className="text-center text-muted mb-2">OR USE</div>

          <div className="d-flex justify-content-center gap-3 mb-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              width="36"
              style={{ cursor: 'pointer' }}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
              alt="Apple"
              width="36"
              style={{ cursor: 'pointer' }}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt="Facebook"
              width="36"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;