import React from "react";
import Sidebar from "../components/Sidebar";
import type { User } from "../types";

interface ProfilePageProps {
  user: User | null;
  setUser: (user: User | null) => void;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  user,
  setUser,
  onNavigate,
  onLogout,
}) => (
  <div className="min-h-screen bg-[#0F0F10] flex">
    <Sidebar
      currentPage="profile"
      onNavigate={onNavigate}
      onLogout={onLogout}
    />

    {/* Main Content */}
    <div className="flex-1 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Profile Settings</h1>

        <div className="bg-[#1F1F22] rounded-[10px] p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-white mb-2">Username</label>
              <input
                type="text"
                value={user?.username || ""}
                onChange={(e) =>
                  setUser({ ...user!, username: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                value={user?.email || ""}
                onChange={(e) => setUser({ ...user!, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
              />
            </div>

            <div>
              <label className="block text-white mb-2">New Password</label>
              <input
                type="password"
                placeholder="Leave blank to keep current password"
                className="w-full px-4 py-3 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#5865F2]"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Profile Picture</label>
              <div className="flex items-center gap-4">
                <img
                  src={`https://placehold.co/80x80/5865F2/FFFFFF?text=${
                    user?.username?.charAt(0) || "U"
                  }`}
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
                <button className="px-4 py-2 bg-[#18191B] border border-[#1F1F22] rounded-[6px] text-white hover:bg-[#1F1F22] transition-colors">
                  Change Photo
                </button>
              </div>
            </div>

            <button className="px-6 py-3 bg-[#5865F2] hover:bg-[#6C75F8] rounded-[6px] text-white font-semibold transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfilePage;
