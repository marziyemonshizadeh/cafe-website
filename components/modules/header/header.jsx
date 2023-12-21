import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../navbar/navbar";

export default function Header() {
  return (
    <div className="relative">
      <Navbar />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="w-full h-screen"
      >
        <SwiperSlide
          style={{
            backgroundImage:
              'url("https://www.gcrmag.com/wp-content/uploads/2022/05/AdobeStock_92994437-scaled.jpeg")',
          }}
          className="bg-no-repeat bg-cover z-10"
        >
          {/* <div className="flex flex-col  items-center justify-center my-auto text-black text-2xl font-bold ">
            <p className="text-yellow-600">We Have Been Serving</p>
            <h2 className="text-7xl">COFFEE</h2>
            <div>*SINCE 1950*</div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              'url("https://www.thespruceeats.com/thmb/0CK65lVOSHILEZXSh1dVJ_Hl4Hc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-caffe-latte-765372-hero-01-2417e49c4a9c4789b3abdd36885f06ab.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              'url("https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2c/f0/92/hot-number-coffee-croissant.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              'url("https://d2dyh47stel7w4.cloudfront.net/Pictures/1024x536/4/1/7/250417_gettyimages1257462020_638621_crop.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        ></SwiperSlide>
      </Swiper>
    </div>
  );
}
