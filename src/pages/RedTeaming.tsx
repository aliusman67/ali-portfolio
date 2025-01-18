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
    <div className="max-w-4xl mx-auto">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-2 text-sm opacity-50"><b>Red Team Operation</b></span>
        </div>

        <div className="space-y-6 p-4">
          <div className="flex items-center gap-2 text-xl font-bold mb-6">
            <Target className="w-8 h-8 text-green-500" />
            <h1>Red Team Operations</h1>
          </div>

          <p className="text-green-400/80 mb-8">
            Specialized in conducting full-scope red team operations, simulating real-world adversaries to test organization's detection and response capabilities.
          </p>

          <div className="grid gap-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-green-500" />
                    <h2 className="text-lg font-bold">{phase.title}</h2>
                  </div>
                  <p className="text-green-400/80 mb-4">{phase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.techniques.map((technique, techIndex) => (
                      <a
                        key={techIndex}
                        href={technique.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/60 transition-all cursor-pointer"
                      >
                        {technique.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedTeaming;