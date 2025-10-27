import { useState, useRef, useEffect } from 'react';

const HealthBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your HealthBot assistant. How can I help you today?",
      sender: 'bot',
      time: '10:00 AM',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const conversations = [
    { id: 1, title: 'Blood Pressure Query', date: '2025-10-25' },
    { id: 2, title: 'Medication Side Effects', date: '2025-10-20' },
    { id: 3, title: 'Diet Recommendations', date: '2025-10-15' },
  ];

  const botResponses = [
    "Based on your recent blood test results, your levels are within normal range. However, I recommend consulting with your doctor for a detailed analysis.",
    "I can help you understand your medical reports. Would you like me to explain any specific test results?",
    "It's important to take your medications on time. I've noticed you have 3 reminders set for today.",
    "Your health metrics show improvement over the past month. Keep up the good work!",
    "I recommend scheduling a follow-up appointment with your doctor to discuss your recent test results.",
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark mb-2">HealthBot Assistant</h1>
        <p className="text-text-light">Get instant answers to your health-related questions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Conversation History Sidebar */}
        <div className="lg:col-span-1">
          <div className="card">
            <h2 className="text-lg font-bold text-text-dark mb-4">Conversation History</h2>
            <div className="space-y-2">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  className="w-full text-left p-3 rounded-lg hover:bg-soft-mint transition-all"
                >
                  <p className="font-semibold text-text-dark text-sm">{conv.title}</p>
                  <p className="text-xs text-text-light">{conv.date}</p>
                </button>
              ))}
            </div>
            <button className="btn-primary w-full mt-4 text-sm">
              + New Conversation
            </button>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <div className="card h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 bg-primary-teal rounded-full flex items-center justify-center text-2xl">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-text-dark">HealthBot</h3>
                <p className="text-sm text-success-green">● Online</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-gray-100 text-text-dark'
                        : 'bg-soft-mint text-text-dark'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs text-text-light mt-1">{message.time}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-soft-mint rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary-teal rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-primary-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-primary-teal rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="pt-4 border-t border-gray-200">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:border-primary-teal focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-opacity-20"
                />
                <button
                  type="submit"
                  className="w-12 h-12 bg-primary-teal text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all text-xl"
                >
                  ➤
                </button>
              </div>
            </form>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <button className="card text-center py-3 hover:shadow-xl transition-all">
              <div className="text-2xl mb-1">📊</div>
              <p className="text-sm font-semibold text-text-dark">Explain Reports</p>
            </button>
            <button className="card text-center py-3 hover:shadow-xl transition-all">
              <div className="text-2xl mb-1">💊</div>
              <p className="text-sm font-semibold text-text-dark">Medication Info</p>
            </button>
            <button className="card text-center py-3 hover:shadow-xl transition-all">
              <div className="text-2xl mb-1">🍎</div>
              <p className="text-sm font-semibold text-text-dark">Diet Tips</p>
            </button>
            <button className="card text-center py-3 hover:shadow-xl transition-all">
              <div className="text-2xl mb-1">🏃</div>
              <p className="text-sm font-semibold text-text-dark">Exercise Plan</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthBot;
