export default function Reservation() {
  return (
    <div
      className="text-slate-100 bg-cover flex md:flex-row flex-col justify-between gap-5 p-9 h-full"
      style={{
        backgroundImage:
          'url("https://cdn.sanity.io/images/0cvyr85o/ca/7c418ba8d032603e0b8450efddc18878f181125b-3600x2000.jpg?w=3600&h=2000&auto=format")',
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bolck md:w-1/2">
        <h2 className="text-amber-400 font-mono text-4xl font-bold">
          30 % OFF
        </h2>
        <p className="font-mono text-3xl font-bold my-5">
          For Online Reservation
        </p>
        <p>
          Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed
          eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et
          erat ut sed diam sea
        </p>
        <ul className="font-medium text-lg my-5">
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              dataSlot="icon"
              className="w-8 h-8 text-amber-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              dataSlot="icon"
              className="w-8 h-8 text-amber-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              dataSlot="icon"
              className="w-8 h-8 text-amber-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span>Lorem ipsum dolor sit amet</span>
          </li>
        </ul>
      </div>
      <div className="bolck md:w-1/2">
        <h2 className="font-mono text-3xl font-bold mb-5">BOOK YOUR TABLE</h2>
        <input
          type="text"
          className="p-2.5 my-2 w-full outline-none border-none text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          placeholder="Name"
        />
        <input
          type="text"
          className="p-2.5 my-2 w-full outline-none border-none text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          placeholder="Email"
        />
        <input
          type="text"
          className="p-2.5 my-2 w-full outline-none border-none text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          placeholder="Date"
        />
        <input
          type="text"
          className="p-2.5 my-2 w-full outline-none border-none text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          placeholder="Time"
        />
        <input
          type="text"
          className="p-2.5 my-2 w-full outline-none border-none text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          placeholder="Person"
        />
        <button
          type="text"
          className="bg-yellow-600 hover:bg-yellow-700 text-black p-2 font-medium  my-3"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
