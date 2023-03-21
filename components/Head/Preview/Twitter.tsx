import Image from "$live/std/ui/components/Image.tsx";
import { Props } from "../inteface.tsx";

function TwitterArticle(props: Props) {
  const { image, title, description } = props;

  return (
    <div class="border overflow-hidden rounded-[16px] border-light-border">
      <Image
        src={image}
        alt="Grogu"
        class="w-full h-[210px] sm:h-[273px] w-[400px] sm:w-[552px] object-cover"
        decoding="async"
        loading="lazy"
        width={200}
        height={200}
      />
      <div class="text-[15px] flex flex-col justify-center gap-[2px] px-4 py-3 bg-white  ">
        <p class="font-normal text-common leading-[19px]">
          website.com
        </p>
        <p class="font-thin text-secondary leading-[19px]">
          {title}
        </p>
        <p class="text-common leading-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function TwitterWebsite(props: Props) {
  const { image, title, description } = props;

  return (
    <div class="flex border overflow-hidden rounded-[16px] border-light-border">
      <Image
        src={image}
        alt="Grogu"
        class="object-cover min-w-[150px]"
        decoding="async"
        loading="lazy"
        width={150}
        height={150}
      />
      <div class="text-[15px] px-4 w-full flex flex-col justify-center gap-[2px] py-3 bg-white  ">
        <p class="font-normal text-common leading-[19px]">
          website.com
        </p>
        <p class="font-thin text-secondary leading-[19px]">
          {title}
        </p>
        <p class="text-common leading-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function Twitter(props: Props) {
  const { image, title, description, type } = props;
  if (type === "article") {
    return <TwitterArticle {...props} />;
  }

  if (type === "website") {
    return <TwitterWebsite {...props} />;
  }

  return <div></div>;
}

export default Twitter;
