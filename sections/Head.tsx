import { asset, Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import ViewOpenGraph from "../components/ViewOpenGraph.tsx";
export interface Props {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  type: string;
  twitterCard: string;
  twitterSite: string;
  themeColor: string;
}

export default function HeadComponent({
  title = "deco.cx — starter site",
  description = "Deliver complete commerce experiences — start here!",
  url = "https://start.deco.site",
  imageUrl = "https://deco.cx/images/deco-logo-light.png",
  type = "website",
  twitterCard = "summary_large_image",
  twitterSite = "loliveirawebdev",
  themeColor = "#003232",
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content={themeColor} />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />

        <meta property="slack:title" content={title} />
        <meta property="slack:text" content={description} />
        <meta property="slack:card" content={type} />
        <meta property="slack:url" content={url} />
        <meta property="slack:image" content={imageUrl} />

        <meta property="twitter:title" content={title} />
        <meta property="twitter:card" content={twitterCard} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:site" content={twitterSite} />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:image" content={imageUrl} />
      </Head>
      <Header />
      <ViewOpenGraph />
    </>
  );
}
