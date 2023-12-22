export default function Product({ name, img }) {
  return (
    <div className="flex justify-center items-center p-3 m-8">
      <img src={img} alt="cafe" className="rounded-full h-40" />
      <div className="w-64">
        <div className="text-orange-950 text-3xl font-bold">{name}</div>
        <p className="p-5">
          Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem
          dolor
        </p>
      </div>
    </div>
  );
}
