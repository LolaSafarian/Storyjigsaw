// Puzzle data types
export interface Puzzle {
  id: string;
  dayNumber: number;
  dateISO: string;
  fragmentCount: number;
  genreTag: string;
  fragmentsOrdered: string[];
  fragmentsShuffled: string[];
}

export interface PuzzlesData {
  puzzles: Puzzle[];
}

// Result types
export type ResultType = 'perfect' | 'close' | 'not_quite';

// Completion record for a day
export interface DayCompletion {
  completed: boolean;
  result: ResultType;
  shareGrid: string;
  completedAtISO: string;
  attempts: number;
}

// App settings
export interface AppSettings {
  textSize: 'default' | 'large' | 'xl';
  reduceMotion: boolean;
  highContrast: boolean;
}

// App state stored in localStorage
export interface AppState {
  completionByDay: Record<number, DayCompletion>;
  settings: AppSettings;
  hasCompletedOnboarding: boolean;
}

// Screen types for navigation
export type Screen = 'onboarding' | 'puzzle' | 'results' | 'settings' | 'about';
