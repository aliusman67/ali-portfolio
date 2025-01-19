import React from 'react';
import { Bug, Search, AlertTriangle, Trophy } from 'lucide-react';

function BugBounty() {
  const methodologies = [
    {
      icon: Search,
      title: "Reconnaissance & Discovery",
      description: "Advanced asset discovery and attack surface mapping techniques.",
      techniques: [
        { name: "Subdomain Enumeration", url: "https://portswigger.net/web-security/information-disclosure/subdomain-enumeration" },
        { name: "Technology Stack Analysis", url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/02-Fingerprint_Web_Server" },
        { name: "Hidden Parameter Discovery", url: "https://portswigger.net/web-security/logic-flaws/examples" }
      ]
    },
    {
      icon: Bug,
      title: "Vulnerability Assessment",
      description: "Systematic approach to identifying security weaknesses and potential vulnerabilities.",
      techniques: [
        { name: "Business Logic Flaws", url: "https://portswigger.net/web-security/logic-flaws" },
        { name: "Authentication Bypass", url: "https://owasp.org/www-community/attacks/Authentication_Bypass" },
        { name: "Race Conditions", url: "https://portswigger.net/web-security/race-conditions" }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Exploitation & POC",
      description: "Responsible exploitation and proof-of-concept development.",
      techniques: [
        { name: "Custom Exploit Development", url: "https://owasp.org/www-community/attacks/" },
        { name: "Chain Building", url: "https://portswigger.net/research/top-10-web-hacking-techniques" },
        { name: "Impact Demonstration", url: "https://hackerone.com/hacktivity" }
      ]
    },
    {
      icon: Trophy,
      title: "Reporting & Disclosure",
      description: "Professional vulnerability documentation and responsible disclosure practices.",
      techniques: [
        { name: "Detailed Documentation", url: "https://www.bugcrowd.com/blog/how-to-write-good-bug-submissions" },
        { name: "Impact Analysis", url: "https://www.hackerone.com/vulnerability-management/guide-cvss-calculation" },
        { name: "Mitigation Recommendations", url: "https://cheatsheetseries.owasp.org/" }
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
          <span className="ml-2 text-sm opacity-50">bug-bounty-hunting</span>
        </div>

        <div className="space-y-6 p-4 sm:p-6">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold mb-6">
            <Bug className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            <h1>Bug Bounty Hunting</h1>
          </div>

          <p className="text-green-400/80 text-sm sm:text-base mb-8">
            Professional bug bounty hunter with a track record of discovering high-impact vulnerabilities across major platforms.
          </p>

          <div className="grid gap-4 sm:gap-6">
            {methodologies.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="border border-green-500/30 rounded-lg p-4 sm:p-6 hover:border-green-500/60 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                    <h2 className="text-base sm:text-lg font-bold">{method.title}</h2>
                  </div>
                  <p className="text-green-400/80 text-sm sm:text-base mb-4">{method.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {method.techniques.map((technique, techIndex) => (
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
            <h3 className="text-base sm:text-lg font-bold mb-3">Tools & Methodologies</h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-green-400/80">
              <li>OWASP Top 10 & WSTG</li>
              <li>Custom Exploitation Frameworks</li>
              <li>Advanced Web Proxies</li>
              <li>Security Headers Analysis</li>
              <li>API Security Testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BugBounty;