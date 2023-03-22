import type { PreviewItens } from "../inteface.tsx";
import Image from "$live/std/ui/components/Image.tsx";

function DiscordArticle(props: PreviewItens) {
  const { title, description, image, width, height } = props;
  return (
    <div class="flex  w-min">
      <div class="flex flex-col w-[4px]  bg-divider rounded-l-lg    overflow-hidden box-border ">
      </div>
      <div class="bg-discord-bg pt-2 pb-4 pl-3 pr-4 rounded-r-md max-w-[428px] ">
        <h2 class="font-bold leading-[22px] mt-2 text-third whitespace-nowrap">
          {title}
        </h2>
        <p class="leading-[1.125rem] mt-2 text-sm text-secondary">
          {description}
        </p>
        <Image
          src={image}
          alt={title}
          class="object-contain rounded-lg max-h-[300px] max-w-[400px] min-h-[157px] min-w-[157px] w-min mt-4"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}

function DiscordWebsite(props: PreviewItens) {
  const { title, description, image, width, height } = props;
  return (
    <div class="flex  w-min">
      <div class="flex flex-col w-[4px]  bg-divider rounded-l-lg    overflow-hidden box-border ">
      </div>
      <div class="bg-discord-bg flex pt-2 pb-4 pl-3 pr-4 rounded-r-md">
        <div class=" rounded-r-md max-w-[428px] ">
          <h2 class="font-bold leading-[22px] mt-2 text-third whitespace-nowrap">
            {title}
          </h2>
          <p class="leading-[1.125rem] mt-2 text-sm text-secondary">
            {description}
          </p>
        </div>
        <Image
          src={image}
          alt={title}
          class="object-contain max-h-[80px] max-w-[80px] min-h-[40px] min-w-[40px] w-min mt-2 ml-4 rounded-lg"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}



export default function Discord(props: PreviewItens) {
    const { title, description, url, image, type, themeColor, width, height } =
      props;
  
    if (type === "website") {
      return <DiscordWebsite {...props} />;
    }
  
    if (type === "article") {
      return <DiscordArticle {...props} />;
    }
  
    return <div></div>;
  }
  