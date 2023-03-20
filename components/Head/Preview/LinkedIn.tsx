import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";

interface LinkedInProps {
  image: LiveImage;
  title: string;
}

export default function LinkedIn(props: LinkedInProps) {
  const { image, title } = props;

  return (
    <div>
      <Image
        src={image}
        alt="Grogu"
        class="w-full h-[210px] sm:h-[273px] w-[400px] sm:w-[552px] object-cover"
        decoding="async"
        loading="lazy"
        width={200}
        height={200}
      />
      <div class="px-4 py-3 bg-linkedin-bg ">
        <p class="text-sm font-thin  text-secondary leading-[19px]">
          {title}
        </p>
        <p class="text-xs font-normal text-common leading-[19px]">
          website.com
        </p>
      </div>
    </div>
  );
}
