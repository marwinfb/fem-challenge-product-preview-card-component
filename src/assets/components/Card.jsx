import Button from "./Button";
import Picture from "./Picture";

const Card = () => {
  return (
    <article className="rounded-lg overflow-hidden max-w-150 bg-neutral-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
          <Picture />

        <div className="p-8 space-y-6">
          <span className="font-medium text-preset-400 uppercase tracking-[5px] text-neutral-grey inline-block">
            Perfume
          </span>
          <h2 className="font-bold text-preset-100 leading-tight font-secondary text-neutral-black">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="font-medium text-preset-200 leading-[1.6]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <span className="font-bold text-preset-100 font-secondary text-primary-green-500">
                $149.99
              </span>
              <span className="font-medium text-preset-500 leading-[1.2] line-through text-neutral-grey">
                $169.99
              </span>
            </div>

            <Button />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
