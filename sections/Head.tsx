import { Head } from "$fresh/runtime.ts";
import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Header from "../components/Header.tsx";
import ViewOpenGraph from "../components/ViewOpenGraph.tsx";
export interface Props {
  title: string;
  description: string;
  url: string;
  image: LiveImage;
  type: string;
  themeColor: string;
}

export default function HeadComponent({
  title = "deco.cx — starter site",
  description = "Deliver complete commerce experiences — start here!",
  url = "https://start.deco.site",
  image = "https://deco.cx/images/deco-logo-light.png",
  type = "website",
  themeColor = "#003232",
}: Props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} /> 

        <title>{title}</title>
        <meta name="theme-color" content={themeColor} />
        <meta name="description" content={description} />      
      </Head>
      
      <Header />
      <ViewOpenGraph />
    </>
  );
}
