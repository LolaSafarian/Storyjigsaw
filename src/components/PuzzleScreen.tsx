import { useState, useEffect } from 'react';
import type { Puzzle, AppSettings, ResultType } from '../types';
import SortableList from './SortableList';
import SettingsIcon from './icons/SettingsIcon';
interface PuzzleScreenProps {
    puzzle: Puzzle | null;
    dayNumber: number;
    isFallback: boolean;
    isCompleted: boolean;
    currentAttempt: number;
    lastResult: {
        result: ResultType;
        shareGrid: string;
    } | null;
    canTryAgain: boolean | undefined;
    onCheck: (currentOrder: string[]) => void;
    onViewResults: () => void;
    onSettings: () => void;
    settings: AppSettings;
}
export default function PuzzleScreen({ puzzle, dayNumber, isFallback, isCompleted, currentAttempt, lastResult, canTryAgain, onCheck, onViewResults, onSettings, settings }: PuzzleScreenProps) {
    const [fragments, setFragments] = useState<string[]>([]);
    useEffect(()=>{
        if (puzzle) {
            setFragments([
                ...puzzle.fragmentsShuffled
            ]);
        }
    }, [
        puzzle
    ]);
    const handleCheck = ()=>{
        onCheck(fragments);
    };
    const getFeedbackMessage = ()=>{
        if (!lastResult) return null;
        switch(lastResult.result){
            case 'perfect':
                return 'Perfect.';
            case 'close':
                return 'Close. One or two are out of place.';
            case 'not_quite':
                return 'Not quite. Take another look.';
        }
    };
    if (!puzzle) {
        return (<div className="min-h-screen min-h-dvh flex flex-col items-center justify-center px-6" data-spec-id="ERiUOWLpuh8uYBMd">
        <p className="text-ink-light text-lg text-center" data-spec-id="m018q023xW0eTLNs">
          No puzzle available today.
        </p>
      </div>);
    }
    return (<div className="min-h-screen min-h-dvh flex flex-col" data-spec-id="sgJJWM9PQbZgBv3W">
      {}
      <header className="flex items-center justify-between px-4 py-4 border-b border-warm-300" data-spec-id="LCSvcOCAcYtTpeHl">
        <div data-spec-id="nSulDbppe9whLYKC">
          <h1 className="font-sans font-semibold text-lg text-ink" data-spec-id="43PsMzMEu6Bz5EN9">
            Story Jigsaw
          </h1>
          <p className="font-sans text-sm text-ink-muted" data-spec-id="e1KivsBq7750hFje">
            Day {dayNumber}
          </p>
        </div>
        <button onClick={onSettings} className="p-2 -mr-2 rounded-lg hover:bg-warm-200 transition-colors" aria-label="Settings" data-spec-id="hzB4lcRJnpL9eS6i">
          <SettingsIcon className="w-6 h-6 text-ink-light" data-spec-id="QYVE3GFCi262quQc"/>
        </button>
      </header>

      {}
      {isFallback && (<div className="bg-warning-light px-4 py-3 text-center" data-spec-id="U1JsIbezYbhHzOmR">
          <p className="font-sans text-sm text-ink-light" data-spec-id="feneWmJG1tdxLNcw">
            New stories arrive soon.
          </p>
        </div>)}

      {}
      {isCompleted && (<div className="bg-success-light px-4 py-3 text-center" data-spec-id="wa2mbkqnRMc6w0lC">
          <p className="font-sans text-sm text-ink" data-spec-id="be6RblfWJlDP0WL5">
            You've completed today's puzzle.{' '}
            <button onClick={onViewResults} className="underline hover:no-underline font-medium" data-spec-id="cFs8SyuvUjfoSfqG">
              View results
            </button>
          </p>
        </div>)}

      {}
      {lastResult && !isCompleted && (<div className={`px-4 py-3 text-center ${lastResult.result === 'perfect' ? 'bg-success-light' : lastResult.result === 'close' ? 'bg-warning-light' : 'bg-error-light'}`} data-spec-id="uatfZEw0NHvcWYgB">
          <p className="font-sans text-sm text-ink" data-spec-id="R6AaaGYBEtDDGQBh">
            {getFeedbackMessage()}
          </p>
        </div>)}

      {}
      <main className="flex-1 px-4 py-6 overflow-y-auto" data-spec-id="f3CFweYUKaFP0y2y">
        <div className="max-w-lg mx-auto" data-spec-id="Yvj6Vef7wOUuhJv8">
          <SortableList items={fragments} onReorder={setFragments} disabled={isCompleted} textSize={settings.textSize} reduceMotion={settings.reduceMotion} data-spec-id="wGTSXCiV2sImxDA4"/>
        </div>
      </main>

      {}
      <footer className="px-4 py-4 border-t border-warm-300 bg-cream" data-spec-id="OWEK29KlaRyGPea9">
        <div className="max-w-lg mx-auto" data-spec-id="fjtgDy1ThNYnU4dR">
          {isCompleted ? (<button onClick={onViewResults} className="w-full py-4 px-6 bg-accent text-white rounded-xl font-sans font-medium text-lg transition-transform active:scale-[0.98]" data-spec-id="u2gfWdrjuOebLxpq">
              View Results
            </button>) : canTryAgain ? (<button onClick={handleCheck} className="w-full py-4 px-6 bg-accent text-white rounded-xl font-sans font-medium text-lg transition-transform active:scale-[0.98]" data-spec-id="sjcg5orUbc7E3LkT">
              Try Once More
            </button>) : (<button onClick={handleCheck} className="w-full py-4 px-6 bg-accent text-white rounded-xl font-sans font-medium text-lg transition-transform active:scale-[0.98]" data-spec-id="fdhp3wa610zUnRhp">
              Check
            </button>)}
          
          {currentAttempt > 0 && !isCompleted && (<p className="text-center text-ink-muted text-sm mt-3 font-sans" data-spec-id="A5dhfxDtByYGzoPN">
              Attempt {currentAttempt} of 2
            </p>)}
        </div>
      </footer>
    </div>);
}
