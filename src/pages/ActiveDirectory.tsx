import React from 'react';
import { Network, Key, Users, Database } from 'lucide-react';

function ActiveDirectory() {
  const techniques = [
    {
      icon: Key,
      title: "Domain Privilege Escalation",
      description: "Advanced techniques for escalating privileges within Active Directory environments.",
      methods: [
        { name: "Kerberoasting", url: "https://attack.mitre.org/techniques/T1558/003/" },
        { name: "AS-REP Roasting", url: "https://attack.mitre.org/techniques/T1558/004/" },
        { name: "DCSync Attacks", url: "https://attack.mitre.org/techniques/T1003/006/" }
      ]
    },
    {
      icon: Users,
      title: "Lateral Movement",
      description: "Sophisticated methods for moving laterally across domain-joined systems.",
      methods: [
        { name: "Pass-the-Hash", url: "https://attack.mitre.org/techniques/T1550/002/" },
        { name: "Pass-the-Ticket", url: "https://attack.mitre.org/techniques/T1550/003/" },
        { name: "Token Manipulation", url: "https://attack.mitre.org/techniques/T1134/" }
      ]
    },
    {
      icon: Database,
      title: "Persistence Mechanisms",
      description: "Establishing and maintaining persistent access in AD environments.",
      methods: [
        { name: "Golden Ticket", url: "https://attack.mitre.org/techniques/T1558/001/" },
        { name: "Silver Ticket", url: "https://attack.mitre.org/techniques/T1558/002/" },
        { name: "Skeleton Key", url: "https://attack.mitre.org/techniques/T1505/" }
      ]
    },
    {
      icon: Network,
      title: "Domain Dominance",
      description: "Techniques for achieving and maintaining domain admin privileges.",
      methods: [
        { name: "Domain Controller Sync", url: "https://attack.mitre.org/techniques/T1003/006/" },
        { name: "Group Policy Abuse", url: "https://attack.mitre.org/techniques/T1484/" },
        { name: "Trust Relationship Attacks", url: "https://attack.mitre.org/techniques/T1482/" }
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
          <span className="ml-2 text-sm opacity-50"><b>Active Directory Attacks</b></span>
        </div>

        <div className="space-y-6 p-4">
          <div className="flex items-center gap-2 text-xl font-bold mb-6">
            <Network className="w-8 h-8 text-green-500" />
            <h1>Active Directory Attacks</h1>
          </div>

          <p className="text-green-400/80 mb-8">
            Specialized in compromising and taking control of Active Directory environments through advanced attack techniques and methodologies.
          </p>

          <div className="grid gap-6">
            {techniques.map((technique, index) => {
              const Icon = technique.icon;
              return (
                <div key={index} className="border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-green-500" />
                    <h2 className="text-lg font-bold">{technique.title}</h2>
                  </div>
                  <p className="text-green-400/80 mb-4">{technique.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {technique.methods.map((method, methodIndex) => (
                      <a
                        key={methodIndex}
                        href={method.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/60 transition-all cursor-pointer"
                      >
                        {method.name}
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

export default ActiveDirectory;