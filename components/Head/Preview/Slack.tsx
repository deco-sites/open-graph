import Image from "$live/std/ui/components/Image.tsx";
import type { PreviewItens } from "../inteface.tsx";

function SlackArticle(props: PreviewItens) {
  const { title, description, url, image, type, themeColor, width, height } =
    props;
  return (
    <div class="flex text-[15px] ">
      <div class="flex flex-col w-[4px]  bg-divider rounded-lg    overflow-hidden box-border mr-3">
      </div>
      <div class="flex flex-col w-[363px] leading-[22px] gap-[4px]">
        <div class="flex">
          <Image
            src="https://github.com/deco-sites/start/blob/main/static/favicon-32x32.png?raw=true"
            alt={title}
            class="object-contain mr-2"
            width={16}
            height={16}
          />
          <h2 class="font-bold">deco.site</h2>
        </div>
        <h3 class="font-bold text-third">{title}</h3>
        <p class="">{description}</p>
        <Image
          src={image}
          alt={title}
          class="object-contain rounded-lg max-h-[300px] max-w-[300px] min-h-[157px] min-w-[157px] w-min"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}
function SlackWebsite(props: PreviewItens) {
  const { title, description, url, image, type, themeColor, width, height } =
    props;
  return (
    <div class="flex w-[600px]">
      <div class="flex flex-col w-[4px] bg-divider 
            rounded-lg    
            overflow-hidden
            box-border 
            ">
      </div>

      <div class="flex flex-col  px-[12px] flex-grow ">
        <div class="flex">
          <Image
            src="https://github.com/deco-sites/start/blob/main/static/favicon-32x32.png?raw=true"
            alt={title}
            class=" object-contain mr-2 "
            width={16}
            height={16}
          />
          <h2 class="font-bold">deco.site</h2>
        </div>
        <div class="flex">
          <div class="flex-grow flex flex-col flex-shrink">
            <h3 class="font-bold text-third">{title}</h3>
            <p class="">{description}</p>
          </div>
          <Image
            src={image}
            alt={title}
            class="max-h-[80px] max-w-[80px] min-h-[42px] min-w-[42px] w-min object-contain  mt-[5px] rounded-lg"
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  );
}

export default function Slack(props: PreviewItens) {
  const { title, description, url, image, type, themeColor, width, height } =
    props;

  if (type === "website") {
    return <SlackWebsite {...props} />;
  }

  if (type === "article") {
    return <SlackArticle {...props} />;
  }

  return <div></div>;
}
