import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function Title(props: Props) {
  return (
    <div class="flex items-center pb-4">
      <h2 class="uppercase text-[13px] text-primary  pr-4 leading-4 font-semibold">
        {props.children}
      </h2>

      <div class="flex-grow h-px bg-gray-400"></div>
    </div>
  );
}
