import React from "react";
import { MessageCircle, Hash, User, Lock } from "lucide-react";

interface DashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onLogout }) => (
  <div className="min-h-screen bg-[#0F0F10] flex">
    {/* Sidebar */}
    <div className="w-64 bg-[#18191B] border-r border-[#1F1F22] p-4">
      <div className="text-2xl font-bold text-white mb-8">Voxora</div>
      <nav className="space-y-2">
        <button
          onClick={() => onNavigate("dashboard")}
          className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#1F1F22] rounded-[6px] transition-colors"
        >
          <div className="w-5 h-5 bg-[#5865F2] rounded"></div>
          Home
        </button>
        <button
          onClick={() => onNavigate("chat")}
          className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#1F1F22] rounded-[6px] transition-colors"
        >
          <MessageCircle size={20} />
          Chat Workspace
        </button>
        <button
          onClick={() => onNavigate("channels")}
          className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#1F1F22] rounded-[6px] transition-colors"
        >
          <Hash size={20} />
          Channels
        </button>
        <button
          onClick={() => onNavigate("profile")}
          className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#1F1F22] rounded-[6px] transition-colors"
        >
          <User size={20} />
          Profile
        </button>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-[#1F1F22] rounded-[6px] transition-colors"
        >
          <Lock size={20} />
          Logout
        </button>
      </nav>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#1F1F22] rounded-[10px] p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Total Members Online
            </h3>
            <p className="text-3xl font-bold text-[#3BA55D]">24</p>
          </div>
          <div className="bg-[#1F1F22] rounded-[10px] p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Latest Announcements
            </h3>
            <p className="text-[#B3B3B3]">No new announcements</p>
          </div>
        </div>

        <button
          onClick={() => onNavigate("chat")}
          className="px-6 py-3 bg-[#5865F2] hover:bg-[#6C75F8] rounded-[6px] text-white font-semibold transition-colors"
        >
          Go to chat
        </button>
      </div>
    </div>
  </div>
);

export default Dashboard;
