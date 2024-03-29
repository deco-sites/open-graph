import { Dimensions, PreviewProps, Props } from "../inteface.tsx";
import WhatsApp from "./WhatsApp.tsx";
import PreviewItem from "./PreviewItem.tsx";
import LinkedIn from "./LinkedIn.tsx";
import Discord from "./Discord.tsx";
import { useSignal } from "@preact/signals";
import Facebook from "./Facebook.tsx";
import Telegram from "./Telegram.tsx";
import Google from "./Google.tsx";
import Twitter from "./Twitter.tsx";
import Slack from "./Slack.tsx";
import instructions from "./instructions.json" assert { type: "json" };

export default function PreviewHandler(propsOriginais: Props) {
  const { image } = propsOriginais;
  const dimensions = useSignal<Dimensions>({ width: 0, height: 0 });

  const getMeta = async (url: string) => {
    if (typeof document !== "undefined") {
      const img = document.createElement("img");
      img.src = url;
      await img.decode();
      return img;
    }
  };

  const getPath = () => {
    if (typeof document !== "undefined") {
      const path = window.location.host;
      return path;
    }

    return "website.com";
  };

  getMeta(image).then((img) => {
    if (img !== undefined) {
      dimensions.value = {
        width: img.width,
        height: img.naturalHeight,
      };
    }
  });

  const pathName = getPath();

  return (
    <>
      <Preview
        props={propsOriginais}
        dimensions={dimensions.value}
        path={pathName}
      />
    </>
  );
}

function Preview({ props, dimensions, path }: PreviewProps) {
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
          <PreviewItem instructions={instructions.google} title="Google">
            <Google {...{ ...props, ...dimensions, path }} />
          </PreviewItem>
          <PreviewItem instructions={instructions.linkedin} title="Linkedin">
            <LinkedIn {...{ ...props, ...dimensions, path }} />
          </PreviewItem>
          <PreviewItem instructions={instructions.whatsapp} title="Whatsapp">
            <WhatsApp {...{ ...props, ...dimensions, path }} />
          </PreviewItem>
          <PreviewItem instructions={instructions.telegram} title="Telegram">
            <Telegram {...{ ...props, ...dimensions, path }} />
          </PreviewItem>
          <PreviewItem instructions={instructions.facebook} title="Facebook">
            <Facebook {...{ ...props, ...dimensions, path }} />
          </PreviewItem>
          <PreviewItem instructions={instructions.twitter} title="Twitter">
            <Twitter {...{ ...props, ...dimensions, path }} />
          </PreviewItem>
          <PreviewItem instructions={instructions.discord} title="Discord">
            <Discord {...{ ...props, ...dimensions, path }} />
          </PreviewItem>
          <PreviewItem instructions={instructions.slack} title="Slack">
            <Slack {...{ ...props, ...dimensions, path }} />
          </PreviewItem>
        </div>
      </div>
    </section>
  );
}
