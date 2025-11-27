import React, { useState } from "react";
import {
  Hash,
  Send,
  Paperclip,
  Smile,
  Plus,
  Volume2,
  Pin,
  Trash2,
  MoreVertical,
  Search,
} from "lucide-react";
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
}) => {
  const [hoveredMessage, setHoveredMessage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0F0F10] flex">
      {/* Channels Sidebar */}
      <div className="w-64 bg-[#18191B] border-r border-[#1F1F22] flex flex-col">
        <div className="p-4 border-b border-[#1F1F22]">
          <div className="text-2xl font-bold text-white mb-1">Voxora</div>
          <p className="text-xs text-[#B3B3B3]">Community Server</p>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          {/* Text Channels Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-xs font-semibold text-[#B3B3B3] uppercase">
                Text Channels
              </span>
              <button className="text-[#B3B3B3] hover:text-white transition-colors">
                <Plus size={16} />
              </button>
            </div>
            <nav className="space-y-0.5">
              {channels.map((channel) => (
                <button
                  key={channel}
                  onClick={() => setActiveChannel(channel)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 text-[#B3B3B3] rounded transition-colors ${
                    activeChannel === channel
                      ? "bg-[#404249] text-white"
                      : "hover:bg-[#35363C] hover:text-[#DCDDDE]"
                  }`}
                >
                  <Hash size={18} className="flex-shrink-0" />
                  <span className="text-sm font-medium truncate">
                    {channel.toLowerCase()}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Voice Channels Section */}
          <div>
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-xs font-semibold text-[#B3B3B3] uppercase">
                Voice Channels
              </span>
              <button className="text-[#B3B3B3] hover:text-white transition-colors">
                <Plus size={16} />
              </button>
            </div>
            <nav className="space-y-0.5">
              <button className="w-full flex items-center gap-2 px-2 py-1.5 text-[#B3B3B3] rounded hover:bg-[#35363C] hover:text-[#DCDDDE] transition-colors">
                <Volume2 size={18} className="flex-shrink-0" />
                <span className="text-sm font-medium truncate">General</span>
              </button>
              <button className="w-full flex items-center gap-2 px-2 py-1.5 text-[#B3B3B3] rounded hover:bg-[#35363C] hover:text-[#DCDDDE] transition-colors">
                <Volume2 size={18} className="flex-shrink-0" />
                <span className="text-sm font-medium truncate">Gaming</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#1E1F22]">
        {/* Chat Header */}
        <div className="bg-[#1E1F22] border-b border-[#26272B] px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <Hash size={24} className="text-[#B3B3B3]" />
            <h2 className="text-base font-semibold text-white">
              {activeChannel.toLowerCase()}
            </h2>
            <div className="h-6 w-px bg-[#3F4147] mx-2"></div>
            <p className="text-sm text-[#B3B3B3]">
              Community discussions and updates
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-[#B3B3B3] hover:text-white transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex gap-4 px-3 py-1 hover:bg-[#2E3035] rounded relative group"
              onMouseEnter={() => setHoveredMessage(message.id)}
              onMouseLeave={() => setHoveredMessage(null)}
            >
              <img
                src={message.avatar}
                alt={message.user}
                className="w-10 h-10 rounded-full mt-0.5 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-[#F2F3F5] font-medium text-sm hover:underline cursor-pointer">
                    {message.user}
                  </span>
                  <span className="text-[#949BA4] text-xs">
                    {message.timestamp}
                  </span>
                </div>
                <p className="text-[#DCDDDE] text-sm leading-relaxed break-words">
                  {message.content}
                </p>
              </div>

              {/* Message Actions */}
              {hoveredMessage === message.id && (
                <div className="absolute -top-3 right-4 flex items-center gap-1 bg-[#1E1F22] border border-[#3F4147] rounded shadow-lg px-1 py-0.5">
                  <button
                    className="p-1.5 hover:bg-[#404249] rounded transition-colors"
                    title="Pin message"
                  >
                    <Pin size={16} className="text-[#B3B3B3]" />
                  </button>
                  <button
                    className="p-1.5 hover:bg-[#404249] rounded transition-colors"
                    title="More options"
                  >
                    <MoreVertical size={16} className="text-[#B3B3B3]" />
                  </button>
                  <button
                    className="p-1.5 hover:bg-[#ED4245] rounded transition-colors"
                    title="Delete message"
                  >
                    <Trash2
                      size={16}
                      className="text-[#B3B3B3] hover:text-white"
                    />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4">
          <form onSubmit={onSendMessage} className="relative">
            <div className="flex items-center gap-2 bg-[#383A40] rounded-lg px-4 py-3 border border-transparent focus-within:border-[#00AFF4] transition-colors">
              <button
                type="button"
                className="text-[#B3B3B3] hover:text-white transition-colors"
                title="Add attachment"
              >
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={`Message #${activeChannel.toLowerCase()}`}
                className="flex-1 bg-transparent text-[#DCDDDE] placeholder-[#6D6F78] focus:outline-none text-sm"
              />
              <button
                type="button"
                className="text-[#B3B3B3] hover:text-white transition-colors"
                title="Add emoji"
              >
                <Smile size={20} />
              </button>
              <button
                type="submit"
                className="ml-2 p-2 bg-[#5865F2] hover:bg-[#4752C4] rounded-md transition-colors"
                title="Send message"
              >
                <Send size={18} className="text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Members Sidebar */}
      <div className="w-60 bg-[#1E1F22] border-l border-[#26272B] flex flex-col">
        <div className="p-4 border-b border-[#26272B]">
          <h3 className="text-xs font-semibold text-[#B3B3B3] uppercase">
            Members — {members.length}
          </h3>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {/* Online Members */}
          <div className="mb-4">
            <div className="px-2 mb-2">
              <span className="text-xs font-semibold text-[#B3B3B3] uppercase">
                Online — {members.filter((m) => m.status === "online").length}
              </span>
            </div>
            <div className="space-y-1">
              {members
                .filter((m) => m.status === "online")
                .map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-2 py-1.5 rounded hover:bg-[#35363C] cursor-pointer transition-colors group"
                  >
                    <div className="relative flex-shrink-0">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#23A559] rounded-full border-2 border-[#1E1F22]"></div>
                    </div>
                    <span className="text-[#B3B3B3] text-sm font-medium group-hover:text-[#DCDDDE] truncate">
                      {member.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Away Members */}
          {members.filter((m) => m.status === "away").length > 0 && (
            <div className="mb-4">
              <div className="px-2 mb-2">
                <span className="text-xs font-semibold text-[#B3B3B3] uppercase">
                  Away — {members.filter((m) => m.status === "away").length}
                </span>
              </div>
              <div className="space-y-1">
                {members
                  .filter((m) => m.status === "away")
                  .map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-2 py-1.5 rounded hover:bg-[#35363C] cursor-pointer transition-colors group"
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#F0B232] rounded-full border-2 border-[#1E1F22]"></div>
                      </div>
                      <span className="text-[#B3B3B3] text-sm font-medium group-hover:text-[#DCDDDE] truncate">
                        {member.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Offline Members */}
          {members.filter((m) => m.status === "offline").length > 0 && (
            <div>
              <div className="px-2 mb-2">
                <span className="text-xs font-semibold text-[#B3B3B3] uppercase">
                  Offline —{" "}
                  {members.filter((m) => m.status === "offline").length}
                </span>
              </div>
              <div className="space-y-1">
                {members
                  .filter((m) => m.status === "offline")
                  .map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-2 py-1.5 rounded hover:bg-[#35363C] cursor-pointer transition-colors group"
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full opacity-50"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#80848E] rounded-full border-2 border-[#1E1F22]"></div>
                      </div>
                      <span className="text-[#80848E] text-sm font-medium group-hover:text-[#B3B3B3] truncate">
                        {member.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
