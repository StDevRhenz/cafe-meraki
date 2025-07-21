import Image, { StaticImageData } from "next/image";

interface BoxLayoutProps {
  image: string | StaticImageData;
  name: string;
  price: string;
  onOrder?: () => void;
}

export default function BoxLayout({ image, name, price, onOrder }: BoxLayoutProps) {
  return (
    <div className="border border-gray-300 rounded-2xl p-5 h-[310px] text-center bg-[#C7B88F] flex flex-col items-center justify-between">
      <Image src={image} alt={name} width={128} height={128} className="w-32 h-32 object-cover mb-4" />
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold text-lg">{name}</span>
        <span className="text-base">{price}</span>
        <button className="bg-yellow-700 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 transition" onClick={onOrder}>ORDER</button>
      </div>
    </div>
  );
}
