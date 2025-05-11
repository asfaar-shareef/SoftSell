import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hi! I’m SoftSell AI. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const predefinedQA = {
    "How does SoftSell work?": "SoftSell turns idle software licenses into profit by helping you securely and quickly sell them.",
    "What software licenses can I sell?": "You can sell operating systems, office suites, and other business software licenses.",
    "How do I get a quote for my licenses?": "Fill out our contact form or click the 'Sell My Licenses' button on the homepage.",
    "What is SoftSell's pricing?": "Pricing depends on the license type. Get a custom quote via our contact form.",
    "Who can use SoftSell?": "Both individuals and businesses with unused software licenses can use SoftSell."
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const response = predefinedQA[input.trim()];
      const botMsg = {
        from: 'bot',
        text: response || "I'm still updating myself, but our support team can answer this. Contact: support@softsell.com"
      };
      setMessages(prev => [...prev, botMsg]);
    }, 600);

    setInput('');
  };

  const handleQuestionClick = (question) => {
    setMessages(prev => [
      ...prev,
      { from: 'user', text: question },
      { from: 'bot', text: predefinedQA[question] }
    ]);
  };

  return (
    <>
      {/* Chat Toggle with Label */}
      <div
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '25px',
          textAlign: 'right',
          zIndex: 9999
        }}
      >
        <div className="mb-2 text-white small bg-dark px-3 py-1 rounded">
          Chat with Us
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-light rounded-circle"
          style={{
            width: '60px',
            height: '60px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            fontSize: '24px',
          }}
        >
          💬
        </button>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div
          className="card shadow"
          style={{
            position: 'fixed',
            bottom: '170px',
            right: '25px',
            width: '320px',
            maxHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9999,
            borderRadius: '16px',
            overflow: 'hidden'
          }}
        >
          <div className="bg-primary text-white p-3 d-flex align-items-center">
            <img
              src="https://api.dicebear.com/7.x/bottts/svg?seed=SoftSellAI"
              alt="bot"
              style={{ width: '30px', height: '30px', marginRight: '10px' }}
            />
            <strong>SoftSell AI Assistant</strong>
          </div>

          <div
            className="p-3"
            style={{ flex: 1, backgroundColor: '#f8f9fa', overflowY: 'auto' }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`d-flex ${msg.from === 'user' ? 'justify-content-end' : 'justify-content-start'} mb-2`}
              >
                <div
                  className={`p-2 px-3 rounded-pill ${msg.from === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                  style={{ maxWidth: '80%', wordWrap: 'break-word' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-light px-3 py-2 border-top">
            <small className="text-muted">Questions I can answer:</small>
            {Object.keys(predefinedQA).map((q, i) => (
              <button
                key={i}
                className="btn btn-link p-0 d-block text-start text-primary"
                style={{ fontSize: '13px', textDecoration: 'none' }}
                onClick={() => handleQuestionClick(q)}
              >
                • {q}
              </button>
            ))}
          </div>

          <div className="bg-white border-top d-flex p-2">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              style={{ fontSize: '14px', borderRadius: '20px' }}
            />
            <button className="btn btn-primary" onClick={handleSend} style={{ borderRadius: '20px' }}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
