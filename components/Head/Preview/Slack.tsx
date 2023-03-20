import Image from "$live/std/ui/components/Image.tsx";
import type { Props } from "../inteface.tsx";
import { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export function SlackArticle(props: Props) {
  const { title, description, url, image, type, themeColor } = props;
  return (
    <div class="flex text-[15px] ">
      <div class="flex flex-col w-[4px]  bg-divider rounded-lg    overflow-hidden box-border mr-3">
      </div>
      <div class="flex flex-col w-[363px] leading-[22px] gap-[4px]">
        <div class="flex ">
          <Image
            src="https://github.com/deco-sites/start/blob/main/static/favicon-32x32.png?raw=true"
            alt="Grogu"
            class="
                            object-contain mr-2
                        "
            width={16}
            height={16}
          />
          <h2 class="font-bold">deco.site</h2>
        </div>
        <h3 class="font-bold text-third">{title}</h3>
        <p class="">{description}</p>
        <Image
          src={image}
          alt="Grogu"
          class="rounded-lg "
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
export function SlackWebsite(props: Props) {
  const { title, description, url, image, type, themeColor } = props;
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
            alt="Grogu"
            class="
                            object-contain mr-2
                        "
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
            alt="Grogu"
            class="rounded-lg "
            width={80}
            height={42}
          />
        </div>
      </div>
    </div>
  );
}
