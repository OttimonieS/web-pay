import React from "react";
import { Hash } from "lucide-react";
import Sidebar from "../components/Sidebar";

interface ChannelsPageProps {
  channels: string[];
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const ChannelsPage: React.FC<ChannelsPageProps> = ({
  channels,
  onNavigate,
  onLogout,
}) => (
  <div className="min-h-screen bg-[#0F0F10] flex">
    <Sidebar
      currentPage="channels"
      onNavigate={onNavigate}
      onLogout={onLogout}
    />

    {/* Main Content */}
    <div className="flex-1 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Channels</h1>

        <div className="bg-[#1F1F22] rounded-[10px] p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Create New Channel
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Channel name"
              className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
            />
            <select className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white focus:outline-none focus:border-[#5865F2]">
              <option value="text">Text Channel</option>
              <option value="media">Media Channel</option>
            </select>
            <button className="px-6 py-3 bg-[#5865F2] hover:bg-[#6C75F8] rounded-[6px] text-white font-semibold transition-colors">
              Create Channel
            </button>
          </div>
        </div>

        <div className="bg-[#1F1F22] rounded-[10px] p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Existing Channels
          </h2>
          <div className="space-y-2">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-[#18191B] rounded-[6px]"
              >
                <span className="text-white flex items-center gap-2">
                  <Hash size={16} />
                  {channel}
                </span>
                <button className="text-[#ED4245] hover:text-red-400 text-sm">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ChannelsPage;
