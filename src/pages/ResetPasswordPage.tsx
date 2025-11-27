import React from "react";

interface ResetPasswordPageProps {
  onNavigate: (page: string) => void;
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({
  onNavigate,
}) => (
  <div className="min-h-screen bg-[#0F0F10] flex items-center justify-center p-6">
    <div className="bg-[#1F1F22] rounded-[10px] p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
        <p className="text-[#B3B3B3]">
          Enter your email to reset your password
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#5865F2] hover:bg-[#6C75F8] rounded-[6px] text-white font-semibold transition-colors"
        >
          Send Reset Link
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={() => onNavigate("login")}
          className="text-[#5865F2] hover:text-[#6C75F8] text-sm"
        >
          Back to Login
        </button>
      </div>
    </div>
  </div>
);

export default ResetPasswordPage;
