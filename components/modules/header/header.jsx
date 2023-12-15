import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Header() {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="w-full h-screen"
      >
        <SwiperSlide
          style={{
            backgroundImage:
              'url("https://assets.architecturaldigest.in/photos/60083ed208ae763b9ae8542d/16:9/w_2560%2Cc_limit/fermented-coffee-beverage-brew-1366x768.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        >
          <div className="flex flex-col justify-center items-center text-slate-100 text-2xl font-bold leading-10">
            <p className="text-yellow-600">We Have Been Serving</p>
            <h2 className="text-7xl">COFFEE</h2>
            <div>*SINCE 1950*</div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              'url("https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Caramel-iced-coffee-f73307b.png?resize=960%2C503")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        >
          <div className="flex flex-col justify-center items-center text-slate-100 text-7xl">
            slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              'url("https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2c/f0/92/hot-number-coffee-croissant.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        >
          <div className="flex flex-col justify-center items-center text-slate-100 text-7xl">
            slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              'url("https://d2dyh47stel7w4.cloudfront.net/Pictures/1024x536/4/1/7/250417_gettyimages1257462020_638621_crop.jpg")',
          }}
          className="bg-no-repeat text-lg flex items-center justify-center bg-cover"
        >
          <div className="flex flex-col justify-center items-center text-orange-950 text-7xl">
            slide 4
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
