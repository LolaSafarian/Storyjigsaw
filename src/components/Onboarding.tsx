import { useState } from 'react';
interface OnboardingProps {
    onComplete: () => void;
    reduceMotion: boolean;
}
const screens = [
    {
        title: "Once a day, you'll be given a short story.",
        subtitle: "The pieces are out of order."
    },
    {
        title: "Read carefully.",
        subtitle: "Drag the lines into the order that makes sense."
    },
    {
        title: "There's no timer.",
        subtitle: "Just meaning."
    }
];
export default function Onboarding({ onComplete, reduceMotion }: OnboardingProps) {
    const [currentScreen, setCurrentScreen] = useState(0);
    const handleNext = ()=>{
        if (currentScreen < screens.length - 1) {
            setCurrentScreen(currentScreen + 1);
        } else {
            onComplete();
        }
    };
    const handleSkip = ()=>{
        onComplete();
    };
    const screen = screens[currentScreen];
    const isLast = currentScreen === screens.length - 1;
    return (<div className="min-h-screen min-h-dvh flex flex-col items-center justify-center px-8 py-12" data-spec-id="AhgMwBN17lFraIYW">
      {}
      <div className={`flex-1 flex flex-col items-center justify-center text-center max-w-md ${!reduceMotion ? 'animate-fade-in' : ''}`} key={currentScreen} data-spec-id="sCR7mES3mCZ1oIZ2">
        <h1 className="text-2xl md:text-3xl font-medium leading-relaxed mb-6 text-ink" data-spec-id="HolwIJBQYLeuo3Hx">
          {screen.title}
        </h1>
        <p className="text-xl md:text-2xl text-ink-light leading-relaxed" data-spec-id="4sCTfGcrI1OhtypQ">
          {screen.subtitle}
        </p>
      </div>

      {}
      <div className="w-full max-w-md space-y-4" data-spec-id="fvFq9BgQOdQnSXgu">
        {}
        <div className="flex justify-center gap-2 mb-8" data-spec-id="0vfEtatBuJS4DpJg">
          {screens.map((_, index)=>(<div key={index} className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentScreen ? 'bg-ink' : 'bg-warm-400'}`} aria-label={`Screen ${index + 1} of ${screens.length}`} data-spec-id="crncUjcFZOonDicE"/>))}
        </div>

        {}
        <button onClick={handleNext} className="w-full py-4 px-6 bg-accent text-white rounded-xl font-sans font-medium text-lg transition-transform active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2" aria-label={isLast ? 'Begin' : 'Continue'} data-spec-id="BqhqjX07aUhsNOr7">
          {isLast ? 'Begin' : 'Continue'}
        </button>

        {!isLast && (<button onClick={handleSkip} className="w-full py-3 text-ink-muted font-sans text-base transition-colors hover:text-ink" aria-label="Skip introduction" data-spec-id="GgYdwsKEnY1bi0YM">
            Skip
          </button>)}
      </div>
    </div>);
}
