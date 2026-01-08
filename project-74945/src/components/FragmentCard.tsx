import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
interface FragmentCardProps {
    id: string;
    text: string;
    index: number;
    disabled?: boolean;
    textSize: 'default' | 'large' | 'xl';
}
export default function FragmentCard({ id, text, index, disabled, textSize }: FragmentCardProps) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id,
        disabled
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };
    const textSizeClasses = {
        default: 'text-lg',
        large: 'text-xl',
        xl: 'text-2xl'
    };
    return (<div ref={setNodeRef} style={style} className={`
        fragment-card
        bg-white rounded-xl p-4 mb-3
        border border-warm-300
        flex items-start gap-3
        ${isDragging ? 'dragging shadow-lg z-50 opacity-95' : 'shadow-sm'}
        ${disabled ? 'opacity-60' : ''}
      `} data-spec-id="3emcBVWL5SvMDv22">
      {}
      <button {...attributes} {...listeners} className={`
          drag-handle flex-shrink-0 p-1 -ml-1 rounded
          ${disabled ? 'cursor-not-allowed' : 'cursor-grab active:cursor-grabbing'}
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent
        `} aria-label={`Drag to reorder fragment ${index + 1}`} disabled={disabled} data-spec-id="XehNLlOe8TmhK4C5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-ink-muted" aria-hidden="true" data-spec-id="8P9yEi3ipgo6HzLK">
          <circle cx="7" cy="5" r="1.5" fill="currentColor" data-spec-id="I9MOZdHRxxi1feXh"/>
          <circle cx="13" cy="5" r="1.5" fill="currentColor" data-spec-id="KjObKzgSQyuSXNwZ"/>
          <circle cx="7" cy="10" r="1.5" fill="currentColor" data-spec-id="lhmJgqNon6sLKEcR"/>
          <circle cx="13" cy="10" r="1.5" fill="currentColor" data-spec-id="f1gP6bThxHN6X98L"/>
          <circle cx="7" cy="15" r="1.5" fill="currentColor" data-spec-id="2B5u188xPJkgEDnV"/>
          <circle cx="13" cy="15" r="1.5" fill="currentColor" data-spec-id="jZISmcKytNa3zEYj"/>
        </svg>
      </button>

      {}
      <p className={`flex-1 font-serif leading-relaxed text-ink ${textSizeClasses[textSize]}`} data-spec-id="aKGsfffNIjlB5kQh">
        {text}
      </p>
    </div>);
}
