import SectionTitle from "@/components/modules/sectionTitle/sectionTitle";
import InfoSection from "@/components/template/contact/infoSection";
import SentMessageSection from "@/components/template/contact/sentMessageSection";

export default function contact() {
  return (
    <div className="text-center m-16">
      <SectionTitle title="CONTACT US" />
      <header className="text-orange-950 text-3xl font-bold">
        Feel Free To Contact
      </header>
      <div className="flex md:flex-row flex-col justify-center gap-12">
        <InfoSection
          icon="faMapMarkerAlt"
          title="Address"
          sub="123 Street, New York, USA"
        />
        <InfoSection icon="faPhone" title="Phone" sub="+012 345 6789" />
        <InfoSection icon="faEnvelope" title="Email" sub="info@example.com" />
      </div>
      <SentMessageSection />
    </div>
  );
}
export async function getStaticProps(context) {
  return {
    props: {},
    revalidate: 60 * 60 * 12,
  };
}
