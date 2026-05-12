"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function GetCredentialButton() {
  const [showCredentials, setShowCredentials] = useState(false);
  const dropdownRef = useRef(null);

  const copyToClipboard = (text, fieldType) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${fieldType} copied to clipboard!`);
    }).catch(() => {
      toast.error("Failed to copy to clipboard");
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCredentials(false);
      }
    };

    if (showCredentials) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCredentials]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        onClick={() => setShowCredentials(!showCredentials)}
        variant="outline"
        size="sm"
        className="bg-[#1a1a1a] border-white/10 text-stone-300 hover:text-stone-100 cursor-pointer"
      >
        Get Credential
      </Button>
      
      {/* Credentials Popup */}
      {showCredentials && (
        <div className="absolute top-12 right-0 bg-[#1a1a1a] border border-white/10 rounded-lg p-4 max-w-sm shadow-xl z-50 w-80">
          <h3 className="text-sm font-semibold text-stone-200 mb-3">🔧 Test Credentials</h3>
          
          <div className="space-y-3">
            <div className="bg-[#0f0f11] border border-white/5 rounded p-3">
              <p className="text-xs font-medium text-amber-400 mb-3">Interviewer Account</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-xs text-stone-400">Email: talent@yopmail.com</p>
                  <Button 
                    onClick={() => copyToClipboard("talent@yopmail.com", "Interviewer Email")}
                    variant="ghost"
                    size="sm"
                    className="text-xs h-6 px-2 text-amber-400 hover:text-amber-300 cursor-pointer"
                  >
                    Copy
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-xs text-stone-400">Password: Aa@dmin11</p>
                  <Button 
                    onClick={() => copyToClipboard("Aa@dmin11", "Interviewer Password")}
                    variant="ghost"
                    size="sm"
                    className="text-xs h-6 px-2 text-amber-400 hover:text-amber-300 cursor-pointer"
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0f0f11] border border-white/5 rounded p-3">
              <p className="text-xs font-medium text-blue-400 mb-3">Interviewee Account</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-xs text-stone-400">Email: interviewee@yopmail.com</p>
                  <Button 
                    onClick={() => copyToClipboard("interviewee@yopmail.com", "Interviewee Email")}
                    variant="ghost"
                    size="sm"
                    className="text-xs h-6 px-2 text-blue-400 hover:text-blue-300 cursor-pointer"
                  >
                    Copy
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-xs text-stone-400">Password: Aa@dmin11</p>
                  <Button 
                    onClick={() => copyToClipboard("Aa@dmin11", "Interviewee Password")}
                    variant="ghost"
                    size="sm"
                    className="text-xs h-6 px-2 text-blue-400 hover:text-blue-300 cursor-pointer"
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-stone-500 mt-3 italic">
            For project reviewers only
          </p>
        </div>
      )}
    </div>
  );
}
