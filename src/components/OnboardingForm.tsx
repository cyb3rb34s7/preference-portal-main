import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface OnboardingFormProps {
  onSubmit: (name: string, userId: string) => void;
}

const OnboardingForm = ({ onSubmit }: OnboardingFormProps) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [errors, setErrors] = useState({ name: false, userId: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {
      name: !name.trim(),
      userId: !userId.trim()
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.userId) {
      toast.success("Welcome to the survey!");
      onSubmit(name, userId);
    } else {
      toast.error("Please fill out all fields");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto animate-fade-up bg-white/95 shadow-lg rounded-xl border-0">
      <CardHeader className="space-y-3 pb-8">
        <CardTitle className="text-3xl font-semibold text-slate-800">
          Welcome to Preference Pulse
        </CardTitle>
        <CardDescription className="text-base text-slate-600 font-normal">
          Please enter your credentials to continue
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-sm font-medium text-slate-700">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`h-11 px-4 text-base bg-slate-50 border border-slate-200 rounded-lg 
                focus-visible:ring-1 focus-visible:ring-slate-400 focus-visible:border-slate-400
                placeholder:text-slate-400 transition-all duration-200
                ${errors.name ? 'border-red-300 focus-visible:ring-red-400 focus-visible:border-red-400' : ''}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm flex items-center gap-2 mt-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Please enter your name
              </p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="userId" className="text-sm font-medium text-slate-700">
              User ID
            </Label>
            <Input
              id="userId"
              type="text"
              placeholder="Enter your unique ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className={`h-11 px-4 text-base bg-slate-50 border border-slate-200 rounded-lg 
                focus-visible:ring-1 focus-visible:ring-slate-400 focus-visible:border-slate-400
                placeholder:text-slate-400 transition-all duration-200
                ${errors.userId ? 'border-red-300 focus-visible:ring-red-400 focus-visible:border-red-400' : ''}`}
            />
            {errors.userId && (
              <p className="text-red-500 text-sm flex items-center gap-2 mt-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Please enter your user ID
              </p>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          onClick={handleSubmit}
          className="w-full h-11 text-base font-medium bg-slate-900 hover:bg-slate-800 
            text-white rounded-lg transition-all duration-200"
        >
          Continue
          <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none">
            <path d="M4 12H20M20 12L14 6M20 12L14 18"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingForm;
