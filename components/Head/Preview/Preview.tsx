import { Dimensions, PreviewProps, Props } from "../inteface.tsx";
import WhatsApp from "./WhatsApp.tsx";
import PreviewItem from "./PreviewItem.tsx";
import LinkedIn from "./LinkedIn.tsx";
import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";
import Facebook from "./Facebook.tsx";
import Telegram from "./Telegram.tsx";
import Google from "./Google.tsx";
import Twitter from "./Twitter.tsx";
import Slack from "./Slack.tsx";

export default function PreviewHandler(propsOriginais: Props) {
  const { title, description, url, image, type, themeColor } = propsOriginais;
  const dimensions = useSignal<Dimensions>({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const getMeta = async (url: string) => {
    if (typeof document !== "undefined") {
      const img = document.createElement("img");
      img.src = url;
      await img.decode();
      return img;
    }
  };

  getMeta(image).then((img) => {
    if (img !== undefined) {
      dimensions.value = {
        width: img.width,
        height: img.naturalHeight,
      };
    }
  });

  return (
    <>
      <Preview props={propsOriginais} dimensions={dimensions.value} />
    </>
  );
}

function Preview({ props, dimensions }: PreviewProps) {
  const { title, description, url, image, type, themeColor } = props;
  const { width, height } = dimensions;

  return (
    <section class="flex flex-col items-center">
      <header class="px-10 w-full max-w-[1156px] py-8 text-primary">
        <h1 class="font-semibold text-xl pb-1">Preview</h1>
        <p class="text-[15px]">
          How your website is displayed on search engines and social media
        </p>
      </header>
      <div class="flex flex-col max-w-[1156px] items-center">
        <div class="flex flex-col items-center gap-[32px] mb-[20px] lg:(grid grid-cols-2 items-start justify-center)">
          <PreviewItem title="Goggle">
            <Google {...{ ...props, ...dimensions }} />
          </PreviewItem>
          <PreviewItem title="Linkedin">
            <LinkedIn {...{ ...props, ...dimensions }} />
          </PreviewItem>
          <PreviewItem title="Whatsapp">
            <WhatsApp {...{ ...props, ...dimensions }} />
          </PreviewItem>
          <PreviewItem title="Telegram">
            <Telegram {...{ ...props, ...dimensions }} />
          </PreviewItem>
          <PreviewItem title="Facebook">
            <Facebook {...{ ...props, ...dimensions }} />
          </PreviewItem>
          <PreviewItem title="Twitter">
            <Twitter {...{ ...props, ...dimensions }} />
          </PreviewItem>
          <PreviewItem title="Slack">
            <Slack {...{ ...props, ...dimensions }} />
          </PreviewItem>
        </div>
      </div>
    </section>
  );
}
