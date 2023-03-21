import Image from "$live/std/ui/components/Image.tsx";
import { PreviewItens } from "../inteface.tsx";

function WhatsAppBiggerImages(props: PreviewItens) {
  const { image, title, description } = props;
  return (
    <div class="w-[330px] h-[280px] rounded-lg overflow-hidden box-border ">
      <Image
        src={image}
        alt={title}
        class="w-full h-[174px] object-cover"
        decoding="async"
        loading="lazy"
        width={200}
        height={200}
      />
      <div class="text-[15px] bg-secondary p-3 leading-5">
        <h3 class="text-secondary">Website</h3>
        <p class="text-common">
          A page's meta description tag is meant to give the user an idea of the
          content that exists within the page.
        </p>
      </div>
    </div>
  );
}

function WhatsAppSmallerImages(props: PreviewItens) {
  const { image, title, description, width } = props;
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
      <div class="text-[15px] flex flex-col px-[12px] justify-center bg-secondary leading-5">
        <h3 class="text-secondary">Website</h3>
        <p class="text-common">
          A page's meta description tag is meant to give the user an idea of the
          content that exists within the page.
        </p>
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
