import Image from "$live/std/ui/components/Image.tsx";
import { PreviewItens } from "../inteface.tsx";

function TwitterArticle(props: PreviewItens) {
  const { image, title, description, path } = props;

  return (
    <div class="border overflow-hidden rounded-[16px] border-light-border">
      <Image
        src={image}
        alt={title}
        class="w-full h-[210px] sm:h-[273px] w-[400px] sm:w-[552px] object-cover"
        decoding="async"
        loading="lazy"
        width={200}
        height={200}
      />
      <div class="text-[15px] flex flex-col justify-center gap-[2px] px-4 py-3 bg-white  ">
        <p class="font-normal text-common leading-[19px]">
          {path}
        </p>
        <p class="font-thin text-secondary leading-[19px] overflow-ellipsis 
        overflow-hidden max-w-full  whitespace-nowrap">
          {title}
        </p>
        <p class="text-common leading-[20px] ">
           {description.length > 150 ? description.slice(0, 150) + "..." : description}
        </p>
      </div>
    </div>
  );
}

function TwitterWebsite(props: PreviewItens) {
  const { image, title, description, path } = props;

  return (
    <div class="flex border overflow-hidden rounded-[16px] border-light-border">
      <Image
        src={image}
        alt={title}
        class="object-cover min-w-[150px]"
        decoding="async"
        loading="lazy"
        width={150}
        height={150}
      />
       <div class="text-[15px] flex flex-col justify-center gap-[2px] px-4 py-3 bg-white  ">
        <p class="font-normal text-common leading-[19px]">
          {path}
        </p>
        <p class="font-thin text-secondary leading-[19px] overflow-ellipsis 
        overflow-hidden max-w-[300px]  whitespace-nowrap">
          {title}
        </p>
        <p class="text-common leading-[20px] ">
           {description.length > 100 ? description.slice(0, 100) + "..." : description}
        </p>
      </div>
    </div>
  );
}

function Twitter(props: PreviewItens) {
  const { image, title, description, type, path } = props;
  if (type === "article") {
    return <TwitterArticle {...props} />;
  }

  if (type === "website") {
    return <TwitterWebsite {...props} />;
  }

  return <div></div>;
}

export default Twitter;
