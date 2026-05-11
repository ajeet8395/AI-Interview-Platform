"use client";

import { useState } from "react";
import { SignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [showCredentials, setShowCredentials] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const copyCredentials = (type) => {
    if (type === "interviewer") {
      copyToClipboard("Email: talent@yopmail.com\nPassword: Aa@dmin11");
    } else {
      copyToClipboard("Email: interviewee@yopmail.com\nPassword: Aa@dmin11");
    }
  };

  return (
    <div className="relative">
      <SignIn />
      
      {/* Get Credential Button */}
      <div className="absolute top-4 right-4">
        <Button 
          onClick={() => setShowCredentials(!showCredentials)}
          variant="outline"
          size="sm"
          className="bg-[#1a1a1a] border-white/10 text-stone-300 hover:text-stone-100"
        >
          Get Credential
        </Button>
        
        {/* Credentials Popup */}
        {showCredentials && (
          <div className="absolute top-12 right-0 bg-[#1a1a1a] border border-white/10 rounded-lg p-4 max-w-xs shadow-xl z-50">
            <h3 className="text-sm font-semibold text-stone-200 mb-3">🔧 Test Credentials</h3>
            
            <div className="space-y-3">
              <div className="bg-[#0f0f11] border border-white/5 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs font-medium text-amber-400">Interviewer Account</p>
                  <Button 
                    onClick={() => copyCredentials("interviewer")}
                    variant="ghost"
                    size="sm"
                    className="text-xs h-6 px-2 text-amber-400 hover:text-amber-300"
                  >
                    Copy
                  </Button>
                </div>
                <p className="text-xs text-stone-400">Email: talent@yopmail.com</p>
                <p className="text-xs text-stone-400">Password: Aa@dmin11</p>
              </div>
              
              <div className="bg-[#0f0f11] border border-white/5 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs font-medium text-blue-400">Interviewee Account</p>
                  <Button 
                    onClick={() => copyCredentials("interviewee")}
                    variant="ghost"
                    size="sm"
                    className="text-xs h-6 px-2 text-blue-400 hover:text-blue-300"
                  >
                    Copy
                  </Button>
                </div>
                <p className="text-xs text-stone-400">Email: interviewee@yopmail.com</p>
                <p className="text-xs text-stone-400">Password: Aa@dmin11</p>
              </div>
            </div>
            
            <p className="text-xs text-stone-500 mt-3 italic">
              For project reviewers only
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
