export default function Footer() {
  return (
    <div
      className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-12 leading-10 bg-cover text-slate-100"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/abstract-smooth-brown-wall-background-layout-design-studio-room-web-template-business-report-with-smooth-circle-gradient-color_1258-54397.jpg")',
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h2 className="font-mono text-2xl font-bold">GET IN TOUCH</h2>
        <div>123 Street, New York, USA</div>
        <div>+012 345 67890</div>
        <div>info@example.com</div>
      </div>
      <div>
        <h2 className="font-mono text-2xl font-bold">FOLLOW US</h2>
        <div>
          Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
        </div>
        <div>social media</div>
      </div>
      <div>
        <h2 className="font-mono text-2xl font-bold">OPEN HOURS</h2>
        <div>MONDAY - FRIDAY</div>
        <div>8.00 AM - 8.00 PM</div>
        <div>SATURDAY - SUNDAY</div>
        <div>2.00 PM - 8.00 PM</div>
      </div>
      <div>
        <h2 className="font-mono text-2xl font-bold">NEWSLETTER</h2>
        <div>
          Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
        </div>
        <input
          type="search"
          className="p-2 outline-none border-none leading-none text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          placeholder="Your Email"
          required
        />
        <button
          type="submit"
          className="p-3 text-black leading-none bg-amber-400"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
