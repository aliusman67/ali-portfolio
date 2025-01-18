import React from 'react';
import { Globe, Shield, Code, Lock } from 'lucide-react';

function WebAppSecurity() {
  const vulnerabilities = [
    {
      icon: Shield,
      title: "Authentication & Authorization",
      description: "Identifying and exploiting authentication bypass and privilege escalation vulnerabilities.",
      techniques: [
        { name: "OAuth Misconfigurations", url: "https://portswigger.net/web-security/oauth" },
        { name: "JWT Attacks", url: "https://portswigger.net/web-security/jwt" },
        { name: "Session Management Flaws", url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/06-Session_Management_Testing/01-Testing_for_Session_Management_Schema" }
      ]
    },
    {
      icon: Code,
      title: "Injection Attacks",
      description: "Advanced injection techniques across different contexts and technologies.",
      techniques: [
        { name: "SQL Injection", url: "https://portswigger.net/web-security/sql-injection" },
        { name: "Command Injection", url: "https://portswigger.net/web-security/os-command-injection" },
        { name: "Template Injection", url: "https://portswigger.net/web-security/server-side-template-injection" }
      ]
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Testing and bypassing access control mechanisms in web applications.",
      techniques: [
        { name: "IDOR", url: "https://portswigger.net/web-security/access-control/idor" },
        { name: "Broken Access Control", url: "https://owasp.org/Top10/A01_2021-Broken_Access_Control/" },
        { name: "Role Manipulation", url: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/05-Authorization_Testing/02-Testing_for_Bypassing_Authorization_Schema" }
      ]
    },
    {
      icon: Globe,
      title: "Client-Side Attacks",
      description: "Exploiting client-side vulnerabilities and security misconfigurations.",
      techniques: [
        { name: "XSS", url: "https://portswigger.net/web-security/cross-site-scripting" },
        { name: "CSRF", url: "https://portswigger.net/web-security/csrf" },
        { name: "DOM-based Vulnerabilities", url: "https://portswigger.net/web-security/dom-based" }
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
          <span className="ml-2 text-sm opacity-50">web-application-security</span>
        </div>

        <div className="space-y-6 p-4">
          <div className="flex items-center gap-2 text-xl font-bold mb-6">
            <Globe className="w-8 h-8 text-green-500" />
            <h1>Web Application Security</h1>
          </div>

          <p className="text-green-400/80 mb-8">
            Expert in identifying and exploiting web application vulnerabilities, with deep understanding of modern web technologies and security mechanisms.
          </p>

          <div className="grid gap-6">
            {vulnerabilities.map((vuln, index) => {
              const Icon = vuln.icon;
              return (
                <div key={index} className="border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-green-500" />
                    <h2 className="text-lg font-bold">{vuln.title}</h2>
                  </div>
                  <p className="text-green-400/80 mb-4">{vuln.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {vuln.techniques.map((technique, techIndex) => (
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

          <div className="mt-8 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <h3 className="text-lg font-bold mb-3">Tools & Methodologies</h3>
            <ul className="list-disc list-inside space-y-2 text-green-400/80">
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

export default WebAppSecurity;