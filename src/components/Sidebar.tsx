import React from "react";
import { MessageCircle, Hash, User, Lock } from "lucide-react";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onNavigate,
  onLogout,
}) => (
  <div className="w-64 bg-[#18191B] border-r border-[#1F1F22] p-4">
    <div className="text-2xl font-bold text-white mb-8">Voxora</div>
    <nav className="space-y-2">
      <button
        onClick={() => onNavigate("dashboard")}
        className={`w-full flex items-center gap-3 px-4 py-3 text-white rounded-[6px] transition-colors ${
          currentPage === "dashboard" ? "bg-[#1F1F22]" : "hover:bg-[#1F1F22]"
        }`}
      >
        <div className="w-5 h-5 bg-[#5865F2] rounded"></div>
        Home
      </button>
      <button
        onClick={() => onNavigate("chat")}
        className={`w-full flex items-center gap-3 px-4 py-3 text-white rounded-[6px] transition-colors ${
          currentPage === "chat" ? "bg-[#1F1F22]" : "hover:bg-[#1F1F22]"
        }`}
      >
        <MessageCircle size={20} />
        Chat Workspace
      </button>
      <button
        onClick={() => onNavigate("channels")}
        className={`w-full flex items-center gap-3 px-4 py-3 text-white rounded-[6px] transition-colors ${
          currentPage === "channels" ? "bg-[#1F1F22]" : "hover:bg-[#1F1F22]"
        }`}
      >
        <Hash size={20} />
        Channels
      </button>
      <button
        onClick={() => onNavigate("profile")}
        className={`w-full flex items-center gap-3 px-4 py-3 text-white rounded-[6px] transition-colors ${
          currentPage === "profile" ? "bg-[#1F1F22]" : "hover:bg-[#1F1F22]"
        }`}
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
);

export default Sidebar;
