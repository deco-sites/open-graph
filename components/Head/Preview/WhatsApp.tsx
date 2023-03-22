import Image from "$live/std/ui/components/Image.tsx";
import { PreviewItens } from "../inteface.tsx";

function WhatsAppBiggerImages(props: PreviewItens) {
  const { image, title, description, path } = props;
  return (
    <div class="w-[330px] rounded-lg overflow-hidden box-border ">
      <Image
        src={image}
        alt={title}
        class="w-full h-[174px] object-cover"
        decoding="async"
        loading="lazy"
        width={200}
        height={200}
      />
      <div class="text-[13px] bg-secondary p-3 leading-5">
        <h3 class="text-secondary">
        {title.length > 105 ? title.slice(0, 105) + "..." : title}
        </h3>
        <p class="text-common text-[12px] overflow-ellipsis 
        overflow-hidden max-w-full  whitespace-nowrap">
          {description}
        </p>
        <p class="text-[12px] text-common">{path}</p>
      </div>
    </div>
  );
}

function WhatsAppSmallerImages(props: PreviewItens) {
  const { image, title, description, path } = props;
  return (
    <div class="rounded-lg overflow-hidden box-border flex">
      <Image
        src={image}
        decoding="async"
        class="object-fill"
        loading="lazy"
        width={106}
        height={106}
      />
      <div class="text-[15px] flex flex-col px-[12px] justify-center bg-secondary rounded-r-lg  leading-5">
        <h3 class="text-secondary">{title.length > 100 ? title.slice(0, 100) + "..." : title}</h3>
        <p class="text-common text-[13px] overflow-ellipsis 
        overflow-hidden max-w-[360px]  whitespace-nowrap">
        {description}
        </p>
        <p class="text-[13px] text-common">{path}</p>
      </div>
    </div>
  );
}

function Whatsapp(props: PreviewItens) {
  const { image, title, description, width } = props;

  if (width === 0) {
    return <div></div>;
  }

  if (width < 300 && width !== 0) {
    return <WhatsAppSmallerImages {...props} />;
  }

  return <WhatsAppBiggerImages {...props} />;
}

export default Whatsapp;
