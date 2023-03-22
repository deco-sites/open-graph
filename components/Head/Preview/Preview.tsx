import { Dimensions, PreviewProps, Props } from "../inteface.tsx";
import WhatsApp from "./WhatsApp.tsx";
import { SlackArticle, SlackWebsite } from "./Slack.tsx";
import PreviewItem from "./PreviewItem.tsx";
import LinkedIn from "./LinkedIn.tsx";
import { DiscordWebsite } from "./Discord.tsx";
import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";
import Facebook from "./Facebook.tsx";

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
    <section>
      <header class="px-10 py-8 text-primary">
        <h1 class="font-semibold text-xl pb-1">Preview</h1>
        <p class="text-[15px]">
          How your website is displayed on search engines and social media
        </p>
      </header>
      <div class="pl-10">
        <PreviewItem title="Discord">
          <DiscordWebsite {...{ ...props, ...dimensions }} />
        </PreviewItem>
      </div>
    </section>
  );
}
