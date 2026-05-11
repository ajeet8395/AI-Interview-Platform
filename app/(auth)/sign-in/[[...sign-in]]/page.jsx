import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black relative">
      <SignIn />
      
      {/* Test Credentials Section - Fixed positioning */}
      <div className="fixed top-4 right-4 bg-[#1a1a1a] border border-white/10 rounded-lg p-4 max-w-xs z-50 shadow-xl">
        <h3 className="text-sm font-semibold text-stone-200 mb-3">🔧 Test Credentials</h3>
        
        <div className="space-y-3">
          <div className="bg-[#0f0f11] border border-white/5 rounded p-3">
            <p className="text-xs font-medium text-amber-400 mb-1">Interviewer Account</p>
            <p className="text-xs text-stone-400 mb-1">Email: talent@yopmail.com</p>
            <p className="text-xs text-stone-400">Password: Aa@dmin11</p>
          </div>
          
          <div className="bg-[#0f0f11] border border-white/5 rounded p-3">
            <p className="text-xs font-medium text-blue-400 mb-1">Interviewee Account</p>
            <p className="text-xs text-stone-400 mb-1">Email: interviewee@yopmail.com</p>
            <p className="text-xs text-stone-400">Password: Aa@dmin11</p>
          </div>
        </div>
        
        <p className="text-xs text-stone-500 mt-3 italic">
          For project reviewers only
        </p>
      </div>
    </div>
  );
}
