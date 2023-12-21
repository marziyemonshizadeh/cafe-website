export default function SectionTitle({ title }) {
  return (
    <div class="relative">
      <div class="absolute left-1/2 -ml-0.5 w-[1.5px] h-28 bg-amber-500 mt-10"></div>
      <p className="pt-40 text-amber-500 flex justify-center items-center font-mono text-lg font-bold">
        {title}
      </p>
    </div>
  );
}
