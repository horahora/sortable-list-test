import React, { PropsWithChildren } from "react";
import { DragOverlay, type UniqueIdentifier } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "@/components/sortable-item";

type Props = {
  id: UniqueIdentifier;
  items: UniqueIdentifier[];
  activeId: UniqueIdentifier | null;
  containers: UniqueIdentifier[];
};

export default function SortableColumn({
  items,
  activeId,
}: PropsWithChildren<Props>) {
  return (
    <div className="border-r border-[#abaeb1] px-3 last:border-r-0">
      <div className="flex flex-col">
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <SortableItem key={item} id={item} />
          ))}
        </SortableContext>
      </div>
      <DragOverlay>
        {activeId ? <SortableItem id={activeId} isDragOverlay /> : null}
      </DragOverlay>
    </div>
  );
}
