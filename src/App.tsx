import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Dashboard from "./pages/Dashboard";
import ChatPage from "./pages/ChatPage";
import ChannelsPage from "./pages/ChannelsPage";
import ProfilePage from "./pages/ProfilePage";
import type { User, Message, Member, FormData, FormErrors } from "./types";

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user: "Alex Chen",
      avatar: "https://placehold.co/40x40/5865F2/FFFFFF?text=AC",
      content: "Welcome to our community!",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      user: "Sarah Kim",
      avatar: "https://placehold.co/40x40/3BA55D/FFFFFF?text=SK",
      content: "Great to see everyone here!",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      user: "Mike Johnson",
      avatar: "https://placehold.co/40x40/ED4245/FFFFFF?text=MJ",
      content: "What are we working on today?",
      timestamp: "10:32 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [channels] = useState([
    "General Chat",
    "Announcement",
    "Images",
    "Questions",
  ]);
  const [activeChannel, setActiveChannel] = useState("General Chat");
  const [members] = useState<Member[]>([
    {
      name: "Alex Chen",
      avatar: "https://placehold.co/32x32/5865F2/FFFFFF?text=AC",
      status: "online",
    },
    {
      name: "Sarah Kim",
      avatar: "https://placehold.co/32x32/3BA55D/FFFFFF?text=SK",
      status: "online",
    },
    {
      name: "Mike Johnson",
      avatar: "https://placehold.co/32x32/ED4245/FFFFFF?text=MJ",
      status: "away",
    },
    {
      name: "Emma Davis",
      avatar: "https://placehold.co/32x32/5865F2/FFFFFF?text=ED",
      status: "offline",
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ email: formData.email, username: formData.username });
    setCurrentPage("dashboard");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setUser({ email: formData.email, username: formData.username });
    setCurrentPage("login");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        user: user?.username || "You",
        avatar: "https://placehold.co/40x40/5865F2/FFFFFF?text=Y",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage("landing");
  };

  // Render current page
  switch (currentPage) {
    case "landing":
      return <LandingPage onNavigate={setCurrentPage} />;
    case "login":
      return (
        <LoginPage
          formData={formData}
          errors={errors}
          onInputChange={handleInputChange}
          onLogin={handleLogin}
          onNavigate={setCurrentPage}
        />
      );
    case "signup":
      return (
        <SignupPage
          formData={formData}
          errors={errors}
          onInputChange={handleInputChange}
          onSignup={handleSignup}
          onNavigate={setCurrentPage}
        />
      );
    case "reset":
      return <ResetPasswordPage onNavigate={setCurrentPage} />;
    case "dashboard":
      return <Dashboard onNavigate={setCurrentPage} onLogout={handleLogout} />;
    case "chat":
      return (
        <ChatPage
          messages={messages}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          onSendMessage={handleSendMessage}
          channels={channels}
          activeChannel={activeChannel}
          setActiveChannel={setActiveChannel}
          members={members}
        />
      );
    case "channels":
      return (
        <ChannelsPage
          channels={channels}
          onNavigate={setCurrentPage}
          onLogout={handleLogout}
        />
      );
    case "profile":
      return (
        <ProfilePage
          user={user}
          setUser={setUser}
          onNavigate={setCurrentPage}
          onLogout={handleLogout}
        />
      );
    default:
      return <LandingPage onNavigate={setCurrentPage} />;
  }
};

export default App;
