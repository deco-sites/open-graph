import { Props } from "./inteface.tsx";
import { Head } from "$fresh/runtime.ts";
import Preview from "./Preview/Preview.tsx";

export default function HeadComponent(props: Props) {
  const { title, description, url, image, type, themeColor } = props;
  const twitterCard = type === "website" ? "summary" : "summary_large_image";

  return (
    <>
      <Head>
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:card" content={twitterCard} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <title>{title}</title>
        <meta name="theme-color" content={themeColor} />
        <meta name="description" content={description} />
      </Head>

      <Preview />
    </>
  );
}
