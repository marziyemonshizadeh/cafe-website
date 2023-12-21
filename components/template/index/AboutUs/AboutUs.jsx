import OurVision from "@/components/modules/OurVision/OurVision";
import OurStory from "@/components/modules/ourStory/ourStory";
import SectionTitle from "@/components/modules/sectionTitle/sectionTitle";

export default function AboutUs() {
  return (
    <div>
      <SectionTitle title="ABOUT US" />
      <div className="text-center text-orange-950 text-3xl font-bold">
        Serving Since 1950
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 mx-16 my-5">
        <OurStory />
        <img
          alt="ourVisionImg"
          src="https://static.vecteezy.com/system/resources/previews/021/049/268/non_2x/3d-realistic-coffee-cup-coffee-cup-cartoon-free-png.png"
          className="w-72 h-72 col-span-1"
        />
        <OurVision />
      </div>
    </div>
  );
}
