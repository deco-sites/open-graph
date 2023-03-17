import WhatsApp from "./WhatsApp.tsx";
import PreviewItem from "./PreviewItem.tsx";

export default function Preview() {
  return (
    <section>
      <header class="px-10 py-8 text-primary">
        <h1 class="font-semibold text-xl pb-1">Preview</h1>
        <p class="text-[15px]">
          How your website is displayed on search engines and social media
        </p>
      </header>

      <PreviewItem title="WhatsApp">
        <WhatsApp />
      </PreviewItem>
    </section>
  );
}
