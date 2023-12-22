import AboutUs from "@/components/template/index/AboutUs/AboutUs";

export default function aboutUs() {
  return (
    <>
      <AboutUs />
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: {},
    revalidate: 60 * 60 * 12,
  };
}
