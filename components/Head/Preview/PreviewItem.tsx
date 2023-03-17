import type { ComponentChildren } from "preact";
import Title from "./fragments/Title.tsx";

interface PreviewItemProps {
  title: string;
  children: ComponentChildren;
}

export default function PreviewItem({ title, children }: PreviewItemProps) {
  return (
    <div class="px-10 w-[522px]">
      <Title>{title}</Title>
      {children}
    </div>
  );
}
