import React, { PropsWithChildren } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { type UniqueIdentifier } from "@dnd-kit/core";

type Props = {
  id: UniqueIdentifier;
  isDragOverlay?: boolean;
};

export default function SortableItem({
  id,
  isDragOverlay,
}: PropsWithChildren<Props>) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    borderStyle: isDragging ? "dashed" : "solid",
    borderColor: isDragOverlay || isDragging ? "#4b87b8" : "#caccda",
    backgroundColor: isDragOverlay
      ? "#d7e8f8"
      : isDragging
      ? "white"
      : "#f5f7f9",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="min-w-60 px-4 py-2 my-1 text-center border border-[#caccda] bg-[#f5f7f9] cursor-move"
    >
      {`Task ${id}`}
    </div>
  );
}
