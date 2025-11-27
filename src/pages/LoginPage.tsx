import React from "react";
import type { FormData, FormErrors } from "../types";

interface LoginPageProps {
  formData: FormData;
  errors: FormErrors;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: React.FormEvent) => void;
  onNavigate: (page: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  formData,
  errors,
  onInputChange,
  onLogin,
  onNavigate,
}) => (
  <div className="min-h-screen bg-[#0F0F10] flex items-center justify-center p-6">
    <div className="bg-[#1F1F22] rounded-[10px] p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-[#B3B3B3]">Sign in to your account</p>
      </div>

      <form onSubmit={onLogin} className="space-y-4">
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

        <button
          type="submit"
          className="w-full py-3 bg-[#5865F2] hover:bg-[#6C75F8] rounded-[6px] text-white font-semibold transition-colors"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-center space-y-2">
        <button
          onClick={() => onNavigate("reset")}
          className="text-[#5865F2] hover:text-[#6C75F8] text-sm"
        >
          Forgot password?
        </button>
        <p className="text-[#B3B3B3] text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => onNavigate("signup")}
            className="text-[#5865F2] hover:text-[#6C75F8]"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default LoginPage;
