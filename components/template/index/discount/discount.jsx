export default function Discount() {
  return (
    <div
      className="text-slate-50 text-center p-16 bg-cover"
      style={{
        backgroundImage:
          'url("https://png.pngtree.com/background/20210711/original/pngtree-coffee-fresh-brown-poster-banner-background-picture-image_1069397.jpg")',
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="my-6">
        <h2 className="text-amber-400 text-center font-mono text-3xl font-bold">
          50% OFF
        </h2>
        <p className="font-bold text-xl">Sunday Special Offer</p>
        <p className="text-lg">Only for Sunday from 1st Jan to 30th Jan 2045</p>
      </div>
      <input
        type="search"
        className="p-2.5 outline-none border-none text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
        placeholder="Your Email"
        // required
      />
      <button type="submit" className="p-2.5 text-black bg-amber-400">
        Sign Up
      </button>
    </div>
  );
}
