import ProductImageDesktop from "../../assets/image-product-desktop.jpg";
import ProductImageMobile from "../../assets/image-product-mobile.jpg";

const Picture = () => {
  return (
    <picture className="h-full">
      <source media="(min-width:768px)" srcSet={ProductImageDesktop} />
      <img src={ProductImageMobile} alt="Gabrielle Essence Eau De Parfum" className="w-full h-full object-cover object-center"/>
    </picture>
  );
};

export default Picture;
