export default function Comment({ img }) {
  return (
    <div className="my-3">
      <section className="flex items-center">
        <img src={img} alt="client image" className="w-32 h-32" />
        <div className="ms-4">
          <header>Client Name</header>
          <sub>Profession</sub>
        </div>
      </section>
      <p>
        Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod
        clita lorem. Dolor tempor ipsum sanct clita
      </p>
    </div>
  );
}
