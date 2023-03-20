import { Props } from "../inteface.tsx";
import WhatsApp from "./WhatsApp.tsx";
import {SlackArticle, SlackWebsite} from "./Slack.tsx";
import PreviewItem from "./PreviewItem.tsx";
import LinkedIn from "./LinkedIn.tsx";

export default function Preview(props: Props) {
  const { title, description, url, image, type, themeColor } = props;

  return (
    <section>
      <header class="px-10 py-8 text-primary">
        <h1 class="font-semibold text-xl pb-1">Preview</h1>
        <p class="text-[15px]">
          How your website is displayed on search engines and social media
        </p>
      </header>
      <div class="pl-10">
        <PreviewItem title="Slack">

          <SlackWebsite {...props} />
          
        </PreviewItem>
      </div>
    </section>
  );
}
