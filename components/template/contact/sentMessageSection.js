export default function SentMessageSection() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 m-16">
      <iframe
        style={{ width: "100%", height: "443px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>

      <div className="text-start">
        <input
          type="text"
          className="p-2.5 mb-2 w-full outline-none border-2 border-slate-200 text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          placeholder="Name"
        />
        <input
          type="text"
          className="p-2.5 my-2 w-full outline-none border-2 border-slate-200 text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          placeholder="Email"
        />
        <input
          type="text"
          className="p-2.5 my-2 w-full outline-none border-2 border-slate-200 text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          placeholder="Date"
        />
        <textarea
          className="p-2.5 my-2 w-full outline-none border-2 border-slate-200 text-slate-700 bg-gray-50 focus:ring-white focus:border-amber-700 "
          rows="5"
          id="message"
          placeholder="Message"
          required="required"
          data-validation-required-message="Please enter your message"
        ></textarea>
        <button
          type="text"
          className="bg-yellow-600 hover:bg-yellow-700 text-black p-2 font-medium  my-3"
        >
          Sent Message
        </button>
      </div>
    </div>
  );
}
