import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent, DragStartEvent, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import FragmentCard from './FragmentCard';
interface SortableListProps {
    items: string[];
    onReorder: (items: string[]) => void;
    disabled?: boolean;
    textSize: 'default' | 'large' | 'xl';
    reduceMotion?: boolean;
}
export default function SortableList({ items, onReorder, disabled, textSize, reduceMotion }: SortableListProps) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8
        }
    }), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    }));
    const handleDragStart = (event: DragStartEvent)=>{
        setActiveId(event.active.id as string);
    };
    const handleDragEnd = (event: DragEndEvent)=>{
        const { active, over } = event;
        setActiveId(null);
        if (over && active.id !== over.id) {
            const oldIndex = items.indexOf(active.id as string);
            const newIndex = items.indexOf(over.id as string);
            const newItems = arrayMove(items, oldIndex, newIndex);
            onReorder(newItems);
        }
    };
    const handleDragCancel = ()=>{
        setActiveId(null);
    };
    const activeItem = activeId ? items.find((item)=>item === activeId) : null;
    return (<DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel} data-spec-id="eWUsH8YY9w8a21Vz">
      <SortableContext items={items} strategy={verticalListSortingStrategy} data-spec-id="k2U8IY18Tr01XQNQ">
        <div role="list" aria-label="Story fragments, drag to reorder" className="space-y-0" data-spec-id="Ub8cRupIJr3rSLEi">
          {items.map((item, index)=>(<FragmentCard key={item} id={item} text={item} index={index} disabled={disabled} textSize={textSize} data-spec-id="CSecfvrc5w13sd0K"/>))}
        </div>
      </SortableContext>

      {}
      <DragOverlay dropAnimation={reduceMotion ? null : undefined} data-spec-id="jIWhz1Zsgwty9QqT">
        {activeItem ? (<div className="fragment-card bg-white rounded-xl p-4 border border-accent shadow-xl opacity-95" data-spec-id="NhgeuEPkNHFiBuff">
            <div className="flex items-start gap-3" data-spec-id="lVZJ5JpjjNwUAUgP">
              <div className="flex-shrink-0 p-1 -ml-1" data-spec-id="QIhNXFyYmNDTRX7h">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent" data-spec-id="Ik1Vw9ZHK98k321o">
                  <circle cx="7" cy="5" r="1.5" fill="currentColor" data-spec-id="bcXYVem2PyTVp8OZ"/>
                  <circle cx="13" cy="5" r="1.5" fill="currentColor" data-spec-id="iECpQJcUyPiolRmN"/>
                  <circle cx="7" cy="10" r="1.5" fill="currentColor" data-spec-id="ML7P0gwgl0bcIDgZ"/>
                  <circle cx="13" cy="10" r="1.5" fill="currentColor" data-spec-id="PcqPl707thJEX4Tw"/>
                  <circle cx="7" cy="15" r="1.5" fill="currentColor" data-spec-id="PVfLiCfvesstNQZw"/>
                  <circle cx="13" cy="15" r="1.5" fill="currentColor" data-spec-id="CBV578j4sH9Cf5mb"/>
                </svg>
              </div>
              <p className={`flex-1 font-serif leading-relaxed text-ink ${textSize === 'xl' ? 'text-2xl' : textSize === 'large' ? 'text-xl' : 'text-lg'}`} data-spec-id="CNZ5ks53WdlAAomb">
                {activeItem}
              </p>
            </div>
          </div>) : null}
      </DragOverlay>
    </DndContext>);
}
