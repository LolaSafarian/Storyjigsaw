import type { Puzzle, ResultType } from '../types';
import puzzlesData from '../data/puzzles.json';

// Get today's date in ISO format (local time)
export function getTodayISO(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Calculate day number based on a start date
// For MVP, we'll use a simple approach: map the current date to available puzzles
export function getDayNumber(): number {
  const startDate = new Date('2025-01-15'); // Day 1 starts here
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  startDate.setHours(0, 0, 0, 0);
  
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Cycle through available puzzles (1-30), return at least 1
  const dayNumber = ((diffDays % 30) + 30) % 30 + 1;
  return dayNumber;
}

// Get puzzle by day number
export function getPuzzleByDay(dayNumber: number): Puzzle | null {
  const puzzle = puzzlesData.puzzles.find(p => p.dayNumber === dayNumber);
  return puzzle || null;
}

// Get today's puzzle
export function getTodaysPuzzle(): { puzzle: Puzzle | null; dayNumber: number; isFallback: boolean } {
  const dayNumber = getDayNumber();
  let puzzle = getPuzzleByDay(dayNumber);
  let isFallback = false;
  
  // If no puzzle found, use the last available puzzle
  if (!puzzle) {
    const lastPuzzle = puzzlesData.puzzles[puzzlesData.puzzles.length - 1];
    puzzle = lastPuzzle || null;
    isFallback = true;
  }
  
  return { puzzle, dayNumber, isFallback };
}

// Evaluate the user's answer
export function evaluateAnswer(
  currentOrder: string[],
  correctOrder: string[]
): { result: ResultType; shareGrid: string; correctCount: number } {
  let correctCount = 0;
  const gridEmojis: string[] = [];
  
  for (let i = 0; i < currentOrder.length; i++) {
    if (currentOrder[i] === correctOrder[i]) {
      // Correct position
      correctCount++;
      gridEmojis.push('🟩');
    } else {
      // Check if it's close (within 1 position)
      const correctIndex = correctOrder.indexOf(currentOrder[i]);
      if (correctIndex !== -1 && Math.abs(correctIndex - i) === 1) {
        gridEmojis.push('🟨');
      } else {
        gridEmojis.push('🟥');
      }
    }
  }
  
  const shareGrid = gridEmojis.join('');
  
  let result: ResultType;
  const incorrectCount = currentOrder.length - correctCount;
  
  if (incorrectCount === 0) {
    result = 'perfect';
  } else if (incorrectCount <= 2) {
    result = 'close';
  } else {
    result = 'not_quite';
  }
  
  return { result, shareGrid, correctCount };
}

// Generate share text
export function generateShareText(dayNumber: number, shareGrid: string): string {
  return `Story Jigsaw — Day ${dayNumber}\n${shareGrid}`;
}

// Share result using Web Share API or clipboard fallback
export async function shareResult(dayNumber: number, shareGrid: string): Promise<boolean> {
  const text = generateShareText(dayNumber, shareGrid);
  
  if (navigator.share) {
    try {
      await navigator.share({
        text: text,
      });
      return true;
    } catch (e) {
      // User cancelled or share failed, try clipboard
      console.log('Share cancelled or failed:', e);
    }
  }
  
  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    console.error('Clipboard write failed:', e);
    return false;
  }
}
