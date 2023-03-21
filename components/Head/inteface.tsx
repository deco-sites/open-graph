import { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export type OGType = "website" | "article";

export interface Dimensions {
  width: number;
  height: number;
}

export interface Props {
  title: string;
  description: string;
  url: string;
  image: LiveImage;
  type: OGType;
  themeColor: string;
}

export interface PreviewProps {
  props: Props;
  dimensions: Dimensions;
}

export interface PreviewItens {
  title: string;
  description: string;
  url: string;
  image: LiveImage;
  type: OGType;
  themeColor: string;
  width: number;
  height: number;
}
