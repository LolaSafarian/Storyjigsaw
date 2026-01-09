import type { AppState, AppSettings, DayCompletion } from '../types';

const STORAGE_KEY = 'story-jigsaw-state';

// Default app state
const defaultState: AppState = {
  completionByDay: {},
  settings: {
    textSize: 'default',
    reduceMotion: false,
    highContrast: false,
  },
  hasCompletedOnboarding: false,
};

// Load state from localStorage
export function loadState(): AppState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge with defaults to handle new fields
      return {
        ...defaultState,
        ...parsed,
        settings: {
          ...defaultState.settings,
          ...parsed.settings,
        },
      };
    }
  } catch (e) {
    console.error('Failed to load state:', e);
  }
  return defaultState;
}

// Save state to localStorage
export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

// Update settings
export function updateSettings(settings: Partial<AppSettings>): AppState {
  const state = loadState();
  state.settings = { ...state.settings, ...settings };
  saveState(state);
  return state;
}

// Mark onboarding as completed
export function completeOnboarding(): AppState {
  const state = loadState();
  state.hasCompletedOnboarding = true;
  saveState(state);
  return state;
}

// Save puzzle completion
export function savePuzzleCompletion(dayNumber: number, completion: DayCompletion): AppState {
  const state = loadState();
  state.completionByDay[dayNumber] = completion;
  saveState(state);
  return state;
}

// Get completion for a specific day
export function getDayCompletion(dayNumber: number): DayCompletion | undefined {
  const state = loadState();
  return state.completionByDay[dayNumber];
}

// Check if puzzle is completed for today
export function isPuzzleCompleted(dayNumber: number): boolean {
  const completion = getDayCompletion(dayNumber);
  return completion?.completed ?? false;
}
