import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import ViewOpenGraph from "../components/ViewOpenGraph.tsx";
import { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export type OGType = "website" | "article";

export interface Props {
  title: string;
  description: string;
  url: string;
  image: LiveImage;
  type: OGType;
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
  function getTwitterCardValue() {
    return type === "website" ? "summary" : "summary_large_image";
  }

  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:card" content={getTwitterCardValue()} />

        <title>{title}</title>
        <meta name="theme-color" content={themeColor} />
        <meta name="description" content={description} />
      </Head>

      <Header />
      <ViewOpenGraph />
    </>
  );
}
