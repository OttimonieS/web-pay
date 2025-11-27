import React from "react";
import { Hash, Send, Paperclip, Smile } from "lucide-react";
import type { Message, Member } from "../types";

interface ChatPageProps {
  messages: Message[];
  newMessage: string;
  setNewMessage: (message: string) => void;
  onSendMessage: (e: React.FormEvent) => void;
  channels: string[];
  activeChannel: string;
  setActiveChannel: (channel: string) => void;
  members: Member[];
}

const ChatPage: React.FC<ChatPageProps> = ({
  messages,
  newMessage,
  setNewMessage,
  onSendMessage,
  channels,
  activeChannel,
  setActiveChannel,
  members,
}) => (
  <div className="min-h-screen bg-[#0F0F10] flex">
    {/* Channels Sidebar */}
    <div className="w-64 bg-[#18191B] border-r border-[#1F1F22] p-4">
      <div className="text-2xl font-bold text-white mb-6">Voxora</div>
      <nav className="space-y-2">
        {channels.map((channel) => (
          <button
            key={channel}
            onClick={() => setActiveChannel(channel)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-white rounded-[6px] transition-colors ${
              activeChannel === channel ? "bg-[#1F1F22]" : "hover:bg-[#1F1F22]"
            }`}
          >
            <Hash size={16} />
            {channel}
          </button>
        ))}
      </nav>
    </div>

    {/* Chat Area */}
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="bg-[#18191B] border-b border-[#1F1F22] p-4">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Hash size={20} />
          {activeChannel}
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-3">
            <img
              src={message.avatar}
              alt={message.user}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold">{message.user}</span>
                <span className="text-[#B3B3B3] text-sm">
                  {message.timestamp}
                </span>
              </div>
              <p className="text-white">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-[#1F1F22]">
        <form onSubmit={onSendMessage} className="flex gap-3 items-center">
          <button type="button" className="text-[#B3B3B3] hover:text-white">
            <Smile size={20} />
          </button>
          <button type="button" className="text-[#B3B3B3] hover:text-white">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Message #general"
            className="flex-1 px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
          />
          <button
            type="submit"
            className="p-3 bg-[#5865F2] hover:bg-[#6C75F8] rounded-[6px] transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>

    {/* Members Sidebar */}
    <div className="w-64 bg-[#18191B] border-l border-[#1F1F22] p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Members</h3>
      <div className="space-y-3">
        {members.map((member, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${
                member.status === "online"
                  ? "bg-green-500"
                  : member.status === "away"
                  ? "bg-yellow-500"
                  : "bg-gray-500"
              }`}
            ></div>
            <img
              src={member.avatar}
              alt={member.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-white text-sm">{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ChatPage;
