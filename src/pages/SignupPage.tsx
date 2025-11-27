import React from "react";
import type { FormData, FormErrors } from "../types";

interface SignupPageProps {
  formData: FormData;
  errors: FormErrors;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSignup: (e: React.FormEvent) => void;
  onNavigate: (page: string) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({
  formData,
  errors,
  onInputChange,
  onSignup,
  onNavigate,
}) => (
  <div className="min-h-screen bg-[#0F0F10] flex items-center justify-center p-6">
    <div className="bg-[#1F1F22] rounded-[10px] p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-[#B3B3B3]">Join our private community</p>
      </div>

      <form onSubmit={onSignup} className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={onInputChange}
            className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
          />
          {errors.email && (
            <p className="text-[#ED4245] text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={onInputChange}
            className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
          />
          {errors.username && (
            <p className="text-[#ED4245] text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={onInputChange}
            className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
          />
          {errors.password && (
            <p className="text-[#ED4245] text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={onInputChange}
            className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
          />
          {errors.confirmPassword && (
            <p className="text-[#ED4245] text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#5865F2] hover:bg-[#6C75F8] rounded-[6px] text-white font-semibold transition-colors"
        >
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-[#B3B3B3] text-sm">
          Already have an account?{" "}
          <button
            onClick={() => onNavigate("login")}
            className="text-[#5865F2] hover:text-[#6C75F8]"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default SignupPage;
