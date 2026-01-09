import { useState } from 'react';
import type { Puzzle, DayCompletion } from '../types';
import { shareResult } from '../utils/puzzle';
import BackIcon from './icons/BackIcon';
import SettingsIcon from './icons/SettingsIcon';
interface ResultsScreenProps {
    dayNumber: number;
    completion: DayCompletion | null;
    puzzle: Puzzle | null;
    onBack: () => void;
    onSettings: () => void;
}
export default function ResultsScreen({ dayNumber, completion, puzzle, onBack, onSettings }: ResultsScreenProps) {
    const [showStory, setShowStory] = useState(false);
    const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'shared'>('idle');
    const handleShare = async ()=>{
        if (!completion) return;
        const success = await shareResult(dayNumber, completion.shareGrid);
        if (success) {
            setShareStatus('copied');
            setTimeout(()=>setShareStatus('idle'), 2000);
        }
    };
    const handleShareApp = async ()=>{
        const text = "Story Jigsaw — A once-a-day puzzle where you piece a short story back together.\n\nNo timer. No trivia. Just meaning.";
        if (navigator.share) {
            try {
                await navigator.share({
                    text
                });
                return;
            } catch (e) {
                console.log('Share cancelled:', e);
            }
        }
        try {
            await navigator.clipboard.writeText(text);
            setShareStatus('copied');
            setTimeout(()=>setShareStatus('idle'), 2000);
        } catch (e) {
            console.error('Copy failed:', e);
        }
    };
    const getMessage = ()=>{
        if (!completion) return '';
        switch(completion.result){
            case 'perfect':
                return 'The story found its order.';
            case 'close':
                return 'Almost there. The story is nearly whole.';
            case 'not_quite':
                return 'The pieces didn\'t quite align.';
        }
    };
    return (<div className="min-h-screen min-h-dvh flex flex-col" data-spec-id="B9EHdG7j4HqEwAu0">
      {}
      <header className="flex items-center justify-between px-4 py-4 border-b border-warm-300" data-spec-id="ySiA2al4vARQPpwD">
        <button onClick={onBack} className="p-2 -ml-2 rounded-lg hover:bg-warm-200 transition-colors" aria-label="Back to puzzle" data-spec-id="MeSgZgLnLxncUmzc">
          <BackIcon className="w-6 h-6 text-ink-light" data-spec-id="7Dx5sdscC3bCQ6zn"/>
        </button>
        <h1 className="font-sans font-semibold text-lg text-ink" data-spec-id="GqnDpme2ljoNJHzJ">
          Day {dayNumber}
        </h1>
        <button onClick={onSettings} className="p-2 -mr-2 rounded-lg hover:bg-warm-200 transition-colors" aria-label="Settings" data-spec-id="beJH1dS7ipfpI1rn">
          <SettingsIcon className="w-6 h-6 text-ink-light" data-spec-id="MGnuadl7naUCtjsE"/>
        </button>
      </header>

      {}
      <main className="flex-1 px-4 py-8 overflow-y-auto" data-spec-id="1Wp1T0XrBV0CRG9x">
        <div className="max-w-md mx-auto text-center space-y-8" data-spec-id="eGF6HJKLPP06uWzu">
          {}
          <div className="space-y-4" data-spec-id="3YMD8XOHQobIVzg9">
            <p className="text-xl font-serif text-ink leading-relaxed" data-spec-id="NxhCllVWRQyTWfaQ">
              {getMessage()}
            </p>
            
            {}
            {completion && (<div className="flex justify-center gap-1 text-2xl" aria-label="Your result" data-spec-id="Qxxac5tTDd2UoSwP">
                {completion.shareGrid.split('').map((emoji, i)=>(<span key={i} data-spec-id="cWBGGkMgy6HyLTd3">{emoji}</span>))}
              </div>)}
          </div>

          {}
          {puzzle && !showStory && (<button onClick={()=>setShowStory(true)} className="text-ink-muted font-sans text-sm underline hover:no-underline" data-spec-id="0fHBON5nXPoJtTtq">
              Reveal story order
            </button>)}

          {}
          {showStory && puzzle && (<div className="text-left space-y-4 p-4 bg-white rounded-xl border border-warm-300" data-spec-id="d3Y66cOWt9n2ohr5">
              {puzzle.fragmentsOrdered.map((fragment, index)=>(<p key={index} className="font-serif text-ink leading-relaxed" data-spec-id="lGGTUsanqXxjGuOC">
                  {fragment}
                </p>))}
            </div>)}

          {}
          <div className="space-y-3 pt-4" data-spec-id="SOM8uw90COoWUfGV">
            <button onClick={handleShare} className="w-full py-4 px-6 bg-accent text-white rounded-xl font-sans font-medium text-lg transition-transform active:scale-[0.98]" data-spec-id="Ybtes5AYcGLqozAb">
              {shareStatus === 'copied' ? 'Copied!' : 'Share Result'}
            </button>

            <button onClick={handleShareApp} className="w-full py-3 px-6 border border-warm-400 text-ink rounded-xl font-sans font-medium transition-colors hover:bg-warm-200" data-spec-id="0JJEyvfSpcnkkkcj">
              Share Story Jigsaw
            </button>
          </div>

          {}
          <p className="text-ink-muted font-sans text-sm pt-4" data-spec-id="t0xBHxAwkN6D2swP">
            Come back tomorrow for a new story.
          </p>

          {}
          <p className="text-ink-lighter font-serif text-sm italic" data-spec-id="h3Rp01UACpDkCMF1">
            If today's story lingered, send it.
          </p>
        </div>
      </main>
    </div>);
}
