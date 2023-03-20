import { Dimensions, Props } from "../inteface.tsx";
import WhatsApp from "./WhatsApp.tsx";
import PreviewItem from "./PreviewItem.tsx";
import LinkedIn from "./LinkedIn.tsx";
import { signal, useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

export default function PreviewHandler(propsOriginais: Props) {
  const { title, description, url, image, type, themeColor } = propsOriginais;
  const dimensions = useSignal<Dimensions>({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    handleLoad();
  }, [imageRef.current]);

  function handleLoad() {
    const img = imageRef.current;
    if (img !== null) {
      dimensions.value = {
        width: img.width,
        height: img.naturalHeight,
      };
    }
  }

  return (
    <>
      <img
        ref={imageRef}
        src={image}
        style={{ display: "none" }}
      />
      <Preview {...propsOriginais} />
    </>
  );
}

function Preview(props: Props) {
  const { title, description, url, image, type, themeColor, dimensions } =
    props;

  return (
    <section>
      <header class="px-10 py-8 text-primary">
        <h1 class="font-semibold text-xl pb-1">Preview</h1>
        <p class="text-[15px]">
          How your website is displayed on search engines and social media
        </p>
      </header>
      <div class="pl-10">
        <PreviewItem title="WhatsApp">
          <WhatsApp />
        </PreviewItem>
      </div>
    </section>
  );
}
