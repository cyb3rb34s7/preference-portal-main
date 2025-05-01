
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import confetti from "@/utils/confetti";
import { useEffect } from "react";

interface SurveyCompleteProps {
  userName: string;
  onRestart: () => void;
}

const SurveyComplete = ({ userName, onRestart }: SurveyCompleteProps) => {
  useEffect(() => {
    // Trigger confetti effect when component mounts
    confetti();
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto animate-scale-in">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-bold">Thank You!</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="text-6xl mb-6">🎉</div>
        <p className="text-xl mb-2">
          Thanks for completing the survey, <span className="font-semibold">{userName}</span>!
        </p>
        <p className="text-muted-foreground">
          Your preferences have been recorded. Your feedback helps us improve content
          presentation styles.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button 
          onClick={onRestart} 
          variant="outline" 
          className="w-full"
        >
          Start New Survey
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SurveyComplete;
