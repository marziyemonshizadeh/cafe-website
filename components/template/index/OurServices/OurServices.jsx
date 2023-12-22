import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import SectionTitle from "@/components/modules/sectionTitle/sectionTitle";

export default function OurServices() {
  return (
    <>
      <SectionTitle title="OUR SERVICES" />
      <div className="text-center text-orange-950 text-4xl font-bold">
        Fresh & Organic Beans
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 m-16">
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    </>
  );
}
