import { useState } from 'react';
import glowSvg from '../assets/ellipse-glow.svg';
import ringSvg from '../assets/ellipse-border.svg';

const PASSWORD_REQUIREMENTS = {
  length: { regex: /^.{8,}$/, label: '8+ characters' },
  uppercase: { regex: /[A-Z]/, label: '1 uppercase letter' },
  number: { regex: /[0-9]/, label: '1 number' },
  special: { regex: /[!@#$%^&*(),.?":{}|<>]/, label: '1 special character (!@#$% etc.)' },
} as const;

const CheckIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9775 0.133673C11.2351 0.342171 11.2749 0.719983 11.0664 0.977539L4.26637 9.37754C4.15207 9.51874 3.97995 9.60054 3.79829 9.60002C3.61663 9.59949 3.44498 9.51669 3.3315 9.37484L0.131501 5.37484C-0.0755049 5.11608 -0.0335521 4.7385 0.225205 4.5315C0.483962 4.32449 0.861538 4.36645 1.06854 4.6252L3.80279 8.04301L10.1337 0.222501C10.3422 -0.0350553 10.72 -0.0748249 10.9775 0.133673Z"
      fill="currentColor"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

interface AccountCreatePageProps {
  onComplete: () => void;
}

export default function AccountCreatePage({ onComplete }: AccountCreatePageProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName?.trim() || !email?.trim() || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    for (const { regex } of Object.values(PASSWORD_REQUIREMENTS)) {
      if (!regex.test(password)) {
        alert('Please make sure your password meets all requirements');
        return;
      }
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem('accountCreated', 'true');
    localStorage.setItem('userName', fullName.trim());
    onComplete();
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '32px',
    padding: '6px 8px',
    fontFamily: "'Instrument Sans', sans-serif",
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '-0.15px',
    color: 'rgba(26,26,26,0.8)',
    background: '#ffffff',
    border: '1px solid rgba(26,26,26,0.09)',
    borderRadius: '8px',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Instrument Sans', sans-serif",
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px',
    color: 'rgba(26,26,26,0.8)',
    whiteSpace: 'nowrap',
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#ffffff',
        overflow: 'hidden',
        borderRadius: '24px',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 60%, rgba(0,175,208,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '420px',
          maxWidth: '420px',
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(26,26,26,0.09)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow:
            '0px 67px 19px 0px rgba(0,0,0,0), 0px 43px 17px 0px rgba(0,0,0,0.01), 0px 24px 15px 0px rgba(0,0,0,0.02), 0px 11px 11px 0px rgba(0,0,0,0.03), 0px 3px 6px 0px rgba(0,0,0,0.04)',
        }}
      >
        {/* Top bar with logo + title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            padding: '28px 28px 0',
          }}
        >
          {/* Logo */}
          <div style={{ position: 'relative', width: '64px', height: '64px', flexShrink: 0 }}>
            <div
              className="absolute pointer-events-none"
              style={{ inset: '-46px -46.5px' }}
            >
              <img src={glowSvg} alt="" className="block w-full h-full" />
            </div>
            <div
              style={{
                position: 'absolute',
                top: '12px',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                aspectRatio: '1 / 1',
                border: '1px solid rgba(26,26,26,0.06)',
                borderRadius: '999px',
                overflow: 'hidden',
                boxShadow:
                  '0px 20px 6px 0px rgba(12,48,70,0), 0px 13px 5px 0px rgba(12,48,70,0.02), 0px 7px 4px 0px rgba(12,48,70,0.07), 0px 3px 3px 0px rgba(12,48,70,0.12), 0px 1px 2px 0px rgba(12,48,70,0.14)',
              }}
            >
              <div style={{ position: 'absolute', inset: '-1px' }}>
                <img src={ringSvg} alt="" className="block w-full h-full" />
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#B7F1FF',
                }}
              />
            </div>
          </div>

          {/* Title section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              paddingBottom: '12px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '20px',
                color: 'rgba(26,26,26,0.8)',
                letterSpacing: '-0.15px',
              }}
            >
              Create your account
            </h1>
            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                color: 'rgba(26,26,26,0.6)',
                letterSpacing: '-0.15px',
              }}
            >
              Let&apos;s get you set up.
            </p>
          </div>
        </div>

        {/* Form */}
        <div style={{ padding: '8px 28px 28px' }}>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Full name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="fullName" style={labelStyle}>
                What is your full name?
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g., Ana Silva"
                className="account-input"
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="email" style={labelStyle}>
                What is your email?
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g., ana@email.com"
                className="account-input"
                style={inputStyle}
              />
            </div>

            {/* Password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="password" style={labelStyle}>
                Create password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="account-input"
                  style={{ ...inputStyle, paddingRight: '36px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(26,26,26,0.6)',
                  }}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>

              {/* Password requirements */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                <p
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '16px',
                    color: 'rgba(26,26,26,0.8)',
                  }}
                >
                  Your password must include:
                </p>
                {Object.entries(PASSWORD_REQUIREMENTS).map(([key, { regex, label }]) => {
                  const valid = regex.test(password);
                  return (
                    <div
                      key={key}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: valid ? '#16A34A' : 'rgba(26,26,26,0.6)',
                        }}
                      >
                        <CheckIcon />
                      </span>
                      <span
                        style={{
                          fontFamily: "'Instrument Sans', sans-serif",
                          fontSize: '12px',
                          fontWeight: 500,
                          lineHeight: '16px',
                          color: valid ? '#16A34A' : 'rgba(26,26,26,0.6)',
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Confirm password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label htmlFor="confirmPassword" style={labelStyle}>
                Re-enter your password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="account-input"
                  style={{ ...inputStyle, paddingRight: '36px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(26,26,26,0.6)',
                  }}
                >
                  {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Submit button */}
            <button type="submit" className="account-submit-btn">
              <div className="account-submit-particles">
                {Array.from({ length: 10 }, (_, i) => (
                  <i key={i} className="account-submit-particle" />
                ))}
              </div>
              <span className="account-submit-inner">
                Create my account
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
