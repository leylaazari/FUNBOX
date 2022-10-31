import { CustomImageType } from "src/common/types/CustomImageType";
import { Image_SERVER_ADDRESS } from "src/constants/configs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomImageFromApi = (items: CustomImageType) => {
  return (
    <LazyLoadImage
      data-testid={items["data-testid"]}
      src={`${Image_SERVER_ADDRESS}/w500${items.src}`}
      alt={items.alt}
      className={items.className}
      effect="blur"
      width="100%"
      height="100%"
    />
  );
};

export default CustomImageFromApi;
