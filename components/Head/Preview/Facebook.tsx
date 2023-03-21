import Image from "$live/std/ui/components/Image.tsx";
import { PreviewItens, Props } from "../inteface.tsx";

function FacebookBigOpenGraph(props: PreviewItens) {
  const { image, title, description } = props;
  return (
    <div>
      <Image
        src={image}
        alt={title}
        class="w-full h-[210px] sm:h-[273px] w-[400px] sm:w-[552px] object-cover"
        decoding="async"
        loading="lazy"
        width={200}
        height={200}
      />
      <div class="px-4 py-3 flex flex-col gap-[3px] bg-facebook-bg ">
        <p class="text-xs uppercase font-normal text-common leading-[15px]">
          website.com
        </p>
        <p class="text-base  font-thin text-secondary leading-[19px]">
          {title}
        </p>
        <p class="text-sm text-common leading-[19px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function FacebookMediumOpenGraph(props: PreviewItens) {
  const { image, title, description } = props;
  return (
    <div class="flex w-full">
      <Image
        src={image}
        alt={title}
        class=" object-cover"
        decoding="async"
        loading="lazy"
        width={100}
        height={150}
      />
      <div class="px-4 justify-center flex flex-col gap-[3px] bg-facebook-bg ">
        <p class="text-xs uppercase font-normal text-common leading-[15px]">
          website.com
        </p>
        <p class="text-base  font-thin  text-secondary leading-[19px]">
          {title}
        </p>
        <p class="text-sm text-common leading-[19px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function FacebookSmallOpenGraph(props: PreviewItens) {
  const { image, title, description } = props;
  return (
    <div class="flex w-full">
      <Image
        src={image}
        alt={title}
        class=" object-cover"
        decoding="async"
        loading="lazy"
        width={106}
        height={106}
      />
      <div class="px-4 justify-center flex flex-col gap-[3px] bg-facebook-bg ">
        <p class="text-xs uppercase font-normal text-common leading-[15px]">
          website.com
        </p>
        <p class="text-base  font-thin text-secondary leading-[19px]">
          {title}
        </p>
        <p class="text-sm text-common leading-[19px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function Facebook(props: PreviewItens) {
  const { image, title, description, width, height } = props;

  if (width > 600) {
    return <FacebookBigOpenGraph {...props} />;
  }

  if (width <= 600 && width >= 300) {
    return <FacebookMediumOpenGraph {...props} />;
  }

  if (width < 300 && width !== 0) {
    return <FacebookSmallOpenGraph {...props} />;
  }

  return <div></div>;
}

export default Facebook;
