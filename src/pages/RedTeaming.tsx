import React from 'react';
import { Target, Shield, Sword, Crosshair } from 'lucide-react';

function RedTeaming() {
  const phases = [
    {
      icon: Crosshair,
      title: "Initial Access & Reconnaissance",
      description: "Sophisticated phishing campaigns, social engineering, and external network mapping to gain initial footholds.",
      techniques: [
        { name: "Spear Phishing", url: "https://attack.mitre.org/techniques/T1566/002/" },
        { name: "Watering Hole Attacks", url: "https://attack.mitre.org/techniques/T1189/" },
        { name: "Supply Chain Compromise", url: "https://attack.mitre.org/techniques/T1195/" }
      ]
    },
    {
      icon: Sword,
      title: "Lateral Movement",
      description: "Advanced techniques for moving through networks while maintaining stealth and persistence.",
      techniques: [
        { name: "Pass-the-Hash", url: "https://attack.mitre.org/techniques/T1550/002/" },
        { name: "Token Manipulation", url: "https://attack.mitre.org/techniques/T1134/" },
        { name: "Living off the Land", url: "https://lolbas-project.github.io/" }
      ]
    },
    {
      icon: Target,
      title: "Command & Control",
      description: "Custom C2 infrastructure development and covert communication channels.",
      techniques: [
        { name: "Domain Fronting", url: "https://attack.mitre.org/techniques/T1090/004/" },
        { name: "Custom Protocols", url: "https://attack.mitre.org/techniques/T1071/" },
        { name: "Traffic Tunneling", url: "https://attack.mitre.org/techniques/T1572/" }
      ]
    },
    {
      icon: Shield,
      title: "Objective Completion",
      description: "Achieving mission objectives while documenting findings and maintaining operational security.",
      techniques: [
        { name: "Data Exfiltration", url: "https://attack.mitre.org/tactics/TA0010/" },
        { name: "Persistence Establishment", url: "https://attack.mitre.org/tactics/TA0003/" },
        { name: "Clean-up Operations", url: "https://attack.mitre.org/techniques/T1070/" }
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-2 text-xs sm:text-sm opacity-50">red-teaming-operations</span>
        </div>

        <div className="space-y-6 p-4 sm:p-6">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold mb-6">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            <h1>Red Team Operations</h1>
          </div>

          <p className="text-green-400/80 text-sm sm:text-base mb-8">
            Specialized in conducting full-scope red team operations, simulating real-world adversaries to test organization's detection and response capabilities.
          </p>

          <div className="grid gap-4 sm:gap-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="border border-green-500/30 rounded-lg p-4 sm:p-6 hover:border-green-500/60 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                    <h2 className="text-base sm:text-lg font-bold">{phase.title}</h2>
                  </div>
                  <p className="text-green-400/80 text-sm sm:text-base mb-4">{phase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.techniques.map((technique, techIndex) => (
                      <a
                        key={techIndex}
                        href={technique.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border border-green-500/30 
                                 bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/60 
                                 transition-all cursor-pointer whitespace-nowrap"
                      >
                        {technique.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 sm:p-6 border border-green-500/30 rounded-lg bg-green-500/5">
            <h3 className="text-base sm:text-lg font-bold mb-3">Advanced Techniques</h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-green-400/80">
              <li>Custom C2 Infrastructure</li>
              <li>Advanced Evasion Methods</li>
              <li>OPSEC Best Practices</li>
              <li>Stealth Operations</li>
              <li>Post-Exploitation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedTeaming;