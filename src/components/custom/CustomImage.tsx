import { CustomImageType } from "src/common/types/CustomImageType";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomImage = (items: CustomImageType) => {
  return (
    <LazyLoadImage
      src={items.src}
      alt={items.alt}
      className={items.className}
      effect="blur"
      width="100%"
      height="100%"
      data-testid={items["data-testid"]}
    />
  );
};

export default CustomImage;
