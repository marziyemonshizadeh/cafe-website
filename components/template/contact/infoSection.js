import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoSection({ icon, title, sub }) {
  return (
    <section className="flex flex-col text-2xl leading-10 m-8">
      <div className="text-amber-500">
        <FontAwesomeIcon
          // icon={faTruck}
          icon={Icons[icon]}
          style={{ fontSize: "2rem", margin: "0,auto" }}
        />
      </div>
      <h2 className="text-orange-950 font-bold">{title}</h2>
      <sub className="text-orange-900">{sub}</sub>
    </section>
  );
}
