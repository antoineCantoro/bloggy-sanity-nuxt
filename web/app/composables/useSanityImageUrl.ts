import { useSanity } from "#imports";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const useSanityImageUrl = () => {
  const { projectId, dataset } = useSanity().client.config();
  const builder = projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset })
    : null;

  return (source: SanityImageSource) => builder?.image(source) ?? null;
};
