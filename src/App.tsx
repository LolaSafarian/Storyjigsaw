import { useState, useEffect, useCallback } from 'react';
import type { Screen, AppSettings, DayCompletion, ResultType } from './types';
import { loadState, saveState, completeOnboarding } from './utils/storage';
import { getTodaysPuzzle, evaluateAnswer } from './utils/puzzle';
import Onboarding from './components/Onboarding';
import PuzzleScreen from './components/PuzzleScreen';
import ResultsScreen from './components/ResultsScreen';
import SettingsScreen from './components/SettingsScreen';
import AboutScreen from './components/AboutScreen';
function App() {
    const [screen, setScreen] = useState<Screen>('puzzle');
    const [settings, setSettings] = useState<AppSettings>({
        textSize: 'default',
        reduceMotion: false,
        highContrast: false
    });
    const [, setHasCompletedOnboarding] = useState(true);
    const [todayCompletion, setTodayCompletion] = useState<DayCompletion | null>(null);
    const [currentAttempt, setCurrentAttempt] = useState(0);
    const [lastResult, setLastResult] = useState<{
        result: ResultType;
        shareGrid: string;
    } | null>(null);
    const { puzzle, dayNumber, isFallback } = getTodaysPuzzle();
    useEffect(()=>{
        const state = loadState();
        setSettings(state.settings);
        setHasCompletedOnboarding(state.hasCompletedOnboarding);
        const completion = state.completionByDay[dayNumber];
        if (completion) {
            setTodayCompletion(completion);
            setCurrentAttempt(completion.attempts);
        }
        if (!state.hasCompletedOnboarding) {
            setScreen('onboarding');
        }
    }, [
        dayNumber
    ]);
    useEffect(()=>{
        document.documentElement.classList.remove('text-size-default', 'text-size-large', 'text-size-xl');
        document.documentElement.classList.add(`text-size-${settings.textSize}`);
        if (settings.reduceMotion) {
            document.documentElement.classList.add('reduce-motion');
        } else {
            document.documentElement.classList.remove('reduce-motion');
        }
        if (settings.highContrast) {
            document.documentElement.classList.add('high-contrast');
        } else {
            document.documentElement.classList.remove('high-contrast');
        }
    }, [
        settings
    ]);
    const handleOnboardingComplete = useCallback(()=>{
        completeOnboarding();
        setHasCompletedOnboarding(true);
        setScreen('puzzle');
    }, []);
    const handleCheck = useCallback((currentOrder: string[])=>{
        if (!puzzle) return;
        const { result, shareGrid } = evaluateAnswer(currentOrder, puzzle.fragmentsOrdered);
        setLastResult({
            result,
            shareGrid
        });
        const newAttempt = currentAttempt + 1;
        setCurrentAttempt(newAttempt);
        if (result === 'perfect' || newAttempt >= 2) {
            const completion: DayCompletion = {
                completed: true,
                result,
                shareGrid,
                completedAtISO: new Date().toISOString(),
                attempts: newAttempt
            };
            setTodayCompletion(completion);
            const state = loadState();
            state.completionByDay[dayNumber] = completion;
            saveState(state);
            setScreen('results');
        }
    }, [
        puzzle,
        dayNumber,
        currentAttempt
    ]);
    const handleSettingsUpdate = useCallback((newSettings: Partial<AppSettings>)=>{
        setSettings((prev)=>{
            const updated = {
                ...prev,
                ...newSettings
            };
            const state = loadState();
            state.settings = updated;
            saveState(state);
            return updated;
        });
    }, []);
    const goToSettings = useCallback(()=>setScreen('settings'), []);
    const goToAbout = useCallback(()=>setScreen('about'), []);
    const goToPuzzle = useCallback(()=>setScreen('puzzle'), []);
    const goToResults = useCallback(()=>setScreen('results'), []);
    const canTryAgain = currentAttempt === 1 && lastResult && lastResult.result !== 'perfect' && !todayCompletion?.completed;
    const renderScreen = ()=>{
        switch(screen){
            case 'onboarding':
                return <Onboarding onComplete={handleOnboardingComplete} reduceMotion={settings.reduceMotion} data-spec-id="eicYuT5G1YWSYOwS"/>;
            case 'puzzle':
                return (<PuzzleScreen puzzle={puzzle} dayNumber={dayNumber} isFallback={isFallback} isCompleted={!!todayCompletion?.completed} currentAttempt={currentAttempt} lastResult={lastResult} canTryAgain={canTryAgain} onCheck={handleCheck} onViewResults={goToResults} onSettings={goToSettings} settings={settings} data-spec-id="xcljePRbGazSjSsN"/>);
            case 'results':
                return (<ResultsScreen dayNumber={dayNumber} completion={todayCompletion} puzzle={puzzle} onBack={goToPuzzle} onSettings={goToSettings} data-spec-id="g2ZKVardvScpfptt"/>);
            case 'settings':
                return (<SettingsScreen settings={settings} onUpdate={handleSettingsUpdate} onBack={goToPuzzle} onAbout={goToAbout} data-spec-id="UFOc9YfBOnYjI6g3"/>);
            case 'about':
                return <AboutScreen onBack={goToSettings} data-spec-id="gi1ukAFb6iAyawFC"/>;
            default:
                return null;
        }
    };
    return (<div className="min-h-screen min-h-dvh bg-cream text-ink font-serif safe-area-top safe-area-bottom" data-spec-id="LcvSKncThsbPZhU8">
      {renderScreen()}
    </div>);
}
export default App;
