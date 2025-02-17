import React, { useState, useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Target, Bug, Sword, Brain, Mail, Github, Linkedin } from 'lucide-react';

function Home() {
  const [commands, setCommands] = useState<string[]>(['whoami']);
  const [currentCommand, setCurrentCommand] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (cmd: string) => {
    setCommands(prev => [...prev, cmd]);
    setCurrentCommand('');
    setShowPrompt(true);
    
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    }
  };

  const renderCommandOutput = (command: string) => {
    switch (command.toLowerCase().trim()) {
      case 'whoami':
        return (
          <div className="command-output">
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Target className="w-6 h-6 text-green-500" />
              <span className="text-base sm:text-xl">Ali Usman - Red Team Operator & Penetration Tester</span>
            </div>

            <p className="mb-6 text-sm sm:text-base">
              Elite red team operator and bug bounty hunter specializing in advanced adversary simulation and security assessments. 
              Proven track record in discovering critical vulnerabilities and conducting sophisticated red team operations.
            </p>

            <div className="space-y-6">
              <section>
                <div className="flex items-center gap-2 text-lg mb-3">
                  <Sword className="w-5 h-5 text-green-500" />
                  <h2>Offensive Security Skills</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    "Red Teaming",
                    "Advanced Penetration Testing",
                    "Bug Bounty Hunting",
                    "Social Engineering",
                    "Web Application Security",
                    "Network Exploitation",
                    "Active Directory Attacks",
                    "Cloud Security Testing"
                  ].map((skill, index) => (
                    <div key={index} className="border border-green-500/30 rounded p-2 text-sm hover:border-green-500/60 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 text-lg mb-3">
                  <Target className="w-5 h-5 text-green-500" />
                  <h2>Operations & Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Red Team Operations",
                      description: "Led multiple red team engagements for Fortune 500 companies",
                      tech: "Cobalt Strike, PowerShell Empire, Custom C2"
                    },
                    {
                      title: "Bug Bounty Findings",
                      description: "Critical vulnerabilities discovered in major tech platforms",
                      tech: "Web Security, API Testing, Mobile Security"
                    },
                    {
                      title: "Advanced Persistence",
                      description: "Developed custom persistence mechanisms for red team ops",
                      tech: "Windows/Linux Internals, Assembly, C++"
                    }
                  ].map((project, index) => (
                    <div key={index} className="border border-green-500/30 rounded p-3 hover:border-green-500/60 transition-colors">
                      <h3 className="font-bold mb-2">{project.title}</h3>
                      <p className="text-sm mb-2 opacity-80">{project.description}</p>
                      <p className="text-xs opacity-60">{project.tech}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-lg mb-3">
                    <Bug className="w-5 h-5 text-green-500" />
                    <h2>Bug Bounty Achievements</h2>
                  </div>
                  <ul className="list-disc list-inside space-y-2 opacity-80 text-sm">
                    {[
                      "Hall of Fame on HackerOne",
                      "Multiple CVEs Published",
                      "Top Bug Bounty Hunter 2023"
                    ].map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-lg mb-3">
                    <Brain className="w-5 h-5 text-green-500" />
                    <h2>Certifications</h2>
                  </div>
                  <ul className="list-disc list-inside space-y-2 opacity-80 text-sm">
                    <li>OSCP (Offensive Security Certified Professional)</li>
                    <li>OSCE (Offensive Security Certified Expert)</li>
                    <li>CRTO (Certified Red Team Operator)</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 text-lg mb-3">
                  <Mail className="w-5 h-5 text-green-500" />
                  <h2>Contact</h2>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com" className="hover:text-green-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com" className="hover:text-green-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        );
      case 'help':
        return (
          <div className="command-output">
            <p className="mb-2">Available commands:</p>
            <ul className="list-disc list-inside space-y-1 opacity-80">
              <li>whoami - Display profile information</li>
              <li>clear - Clear the terminal</li>
              <li>help - Show this help message</li>
            </ul>
          </div>
        );
      case 'clear':
        setCommands([]);
        return null;
      default:
        return (
          <div className="command-output text-red-500">
            Command not found. Type 'help' for available commands.
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-2 text-sm opacity-50">terminal@aliusman:~$</span>
        </div>

        <div className="space-y-4 p-4 max-h-[80vh] overflow-y-auto" ref={containerRef}>
          {commands.map((cmd, index) => (
            <div key={index}>
              <div className="flex items-center">
                <span className="command-prompt">terminal@aliusman:~$ </span>
                <span className="ml-2">{cmd}</span>
              </div>
              {renderCommandOutput(cmd)}
            </div>
          ))}
          
          {showPrompt && (
            <div className="flex items-center flex-wrap">
              <span className="command-prompt">terminal@aliusman:~$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyPress={handleKeyPress}
                className="ml-2 bg-transparent outline-none border-none text-green-500 flex-1 min-w-[200px]"
                autoFocus
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;