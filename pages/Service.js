import OurServices from "@/components/template/index/OurServices/OurServices";

export default function Service() {
  return (
    <>
      <OurServices />
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: {},
    revalidate: 60 * 60 * 12,
  };
}
