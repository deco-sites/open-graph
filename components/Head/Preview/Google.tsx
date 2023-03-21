import { PreviewItens } from "../inteface.tsx";

export default function Google(props: PreviewItens) {
  const { title, description, path } = props;

  return (
    <div class="p-[24px] flex flex-col gap-[4px] bg-white border border-light-border rounded-[8px]">
      <p class="text-xs font-normal leading-[19px]">
        {path}
        <span class="text-common ml-[10px] font-semibold">&#8942;</span>
      </p>
      <p class="text-[20px] font-thin text-third leading-[19px]">
        {title}
      </p>
      <p class="text-xs font-normal text-common leading-[19px] max-w-[352px] leading-[22px]">
        {description}
      </p>
    </div>
  );
}
