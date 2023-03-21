import Image from "$live/std/ui/components/Image.tsx";
import { PreviewItens } from "../inteface.tsx";

function TelegramBiggerImage(props: PreviewItens) {
  const { image, title, description, width, height, path } = props;

  return (
    <div class="flex gap-[6px]">
      <div class="flex-grow border-1 border-divider-blue max-w-[2px]"></div>
      <div>
        <Image
          src={image}
          alt={title}
          class="rounded-[6px] w-[454px] max-h-[432px] object-fill"
          decoding="async"
          loading="lazy"
          width={width}
          height={height}
        />
        <div class="py-1 bg-white font-semibold">
          <p class="text-xs text-third leading-[19px]">
            {path}
          </p>
          <p class="text-sm  text-secondary leading-[19px]">
            {title}
          </p>
          <p class="font-normal text-sm leading-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function TelegramSmallerImage(props: PreviewItens) {
  const { image, title, description, height, path } = props;

  return (
    <div class="flex gap-[6px]">
      <div class="flex-grow border-1 border-divider-blue max-w-[2px]">
      </div>
      <div>
        <Image
          src={image}
          alt={title}
          class="rounded-[6px] "
          decoding="async"
          loading="lazy"
          width={454}
          height={height}
        />
        <div class="py-1 bg-white font-semibold">
          <p class="text-xs text-third leading-[19px]">
            {path}
          </p>
          <p class="text-sm  text-secondary leading-[19px]">
            {title}
          </p>
          <p class="font-normal text-sm leading-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Telegram(props: PreviewItens) {
  const { image, title, description, width, height, path } = props;

  if (width === 0) {
    return <div></div>;
  }

  if (width < 300 || height < 300 && width !== 0) {
    return <TelegramSmallerImage {...props} />;
  }

  return <TelegramBiggerImage {...props} />;
}

export default Telegram;
