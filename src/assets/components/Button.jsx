import CartIcon from "./CartIcon"

const Button = () => {
  return (
    <a href="#" aria-label="Add to cart" className="text-preset-200 font-bold py-4 px-[62.5px] rounded-lg bg-primary-green-500 text-neutral-white hover:bg-primary-green-700 whitespace-nowrap cursor-pointer transition-colors duration-300 inline-flex items-center justify-center gap-2 w-full">
      <CartIcon /> Add to Cart
    </a>
  )
}

export default Button