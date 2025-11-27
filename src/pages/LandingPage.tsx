import React from "react";
import { MessageCircle, Lock, Shield } from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => (
  <div className="min-h-screen bg-gradient-to-b from-[#0F0F10] to-[#18191B] text-white">
    {/* Navigation */}
    <nav className="sticky top-0 bg-[#0F0F10]/90 backdrop-blur-sm border-b border-[#18191B] px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Voxora</div>
        <div className="flex gap-4">
          <button
            onClick={() => onNavigate("login")}
            className="px-4 py-2 text-[#B3B3B3] hover:text-white transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => onNavigate("signup")}
            className="px-6 py-2 bg-[#5865F2] hover:bg-[#6C75F8] rounded-[6px] transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Build your private community in one place
      </h1>
      <p className="text-xl text-[#B3B3B3] mb-12 max-w-2xl mx-auto">
        Secure chat platform for your exclusive members. Fast, simple, and all
        in your control.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => onNavigate("signup")}
          className="px-8 py-3 bg-[#5865F2] hover:bg-[#6C75F8] rounded-[6px] font-semibold transition-colors"
        >
          Sign Up
        </button>
        <button className="px-8 py-3 border border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2]/10 rounded-[6px] font-semibold transition-colors">
          Watch Demo
        </button>
      </div>
    </div>

    {/* Features Section */}
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#1F1F22] rounded-[10px] p-6">
          <div className="w-12 h-12 bg-[#5865F2] rounded-lg flex items-center justify-center mb-4">
            <MessageCircle size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Real time chat</h3>
          <p className="text-[#B3B3B3]">
            With typing indicators and file uploads.
          </p>
        </div>
        <div className="bg-[#1F1F22] rounded-[10px] p-6">
          <div className="w-12 h-12 bg-[#3BA55D] rounded-lg flex items-center justify-center mb-4">
            <Lock size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Private channels</h3>
          <p className="text-[#B3B3B3]">Only members you approve can join.</p>
        </div>
        <div className="bg-[#1F1F22] rounded-[10px] p-6">
          <div className="w-12 h-12 bg-[#ED4245] rounded-lg flex items-center justify-center mb-4">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Admin control</h3>
          <p className="text-[#B3B3B3]">You manage roles, bans, permissions.</p>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="border-t border-[#18191B] px-6 py-8">
      <div className="max-w-7xl mx-auto text-center text-[#B3B3B3]">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <p>&copy; 2025 Voxora. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default LandingPage;
