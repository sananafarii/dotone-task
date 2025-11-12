// src/pages/Articles.jsx
import React from "react";
import A1 from "../../assets/Images/Article1.png";
import A2 from "../../assets/Images/Article2.png";
import A3 from "../../assets/Images/Article3.png";
import A4 from "../../assets/Images/Article4.png";
import A5 from "../../assets/Images/Article5.png";

const ArrowLeft = ({ stroke = "#000", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 19l-7-7 7-7" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LargeArticle = ({ image, title, date }) => {
  return (
    <div className="w-[392px] h-[520px] rounded-[24px] bg-surface p-[16px] hover:shadow-xl transition-shadow duration-300">
      <div className="w-[360px] h-[298px] rounded-[18px] overflow-hidden bg-[#E9E9E9] mx-auto">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-[12px]">
        <p className="text-[14px] font-bold leading-[140%] text-right text-black line-clamp-2">
          {title}
        </p>
      </div>
      <p className="mt-[12px] text-[12px] leading-[160%] text-right text-[#4A4A4A] line-clamp-3">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
      </p>
      <div className="mt-[24px] flex items-center justify-between">
        <span className="text-[12px] text-[#727272]">{date}</span>
        <button className="w-[133px] h-[40px] rounded-[14px] bg-white text-black text-[14px] flex items-center justify-center gap-[4px] hover:bg-gray-50 transition-colors">
          مشاهده بیشتر
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
};

const SmallArticle = ({ image, title }) => {
  return (
    <div className="w-[392px] h-[152px] rounded-[24px] bg-surface p-[14px] flex items-center gap-[16px] hover:shadow-lg transition-shadow duration-300">
      <div className="w-[124px] h-[124px] rounded-[8px] overflow-hidden bg-[#E9E9E9] flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between h-full">
        <p className="text-[12px] font-bold leading-[140%] text-right text-black line-clamp-2">
          {title}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-[#727272]">۲۴ خرداد ۱۴۰۳</span>
          <button className="w-[123px] h-[32px] rounded-[10px] bg-white text-black text-[12px] flex items-center justify-center gap-[4px] hover:bg-gray-50 transition-colors">
            مشاهده بیشتر
            <ArrowLeft size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Articles() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[108px] mt-[120px]">
      {/* عنوان و توضیحات */}
      <div className="flex items-center justify-between mb-[40px]">
        <div className="flex items-center gap-3">
          <span className="w-[6px] h-[50px] bg-black rounded-l-[6px]"></span>
          <h2 className="text-[20px] font-extrabold leading-[100%]">مقالات ما</h2>
        </div>

        <div className="flex items-center justify-start gap-[8px] max-w-[797px]">
          <span className="w-[8px] h-[8px] bg-black rounded-full"></span>
          <p className="text-[12px] leading-[160%] text-right text-black">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد
          </p>
        </div>

        <button className="flex items-center gap-[4px] h-[40px] rounded-[14px] px-[10px] bg-brand text-brand-contrast text-[14px] hover:bg-brand/90 transition-colors whitespace-nowrap">
          مشاهده بیشتر
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* کارت‌ها */}
      <div className="grid grid-cols-3 gap-[20px]">
        {/* ستون بزرگ سمت راست */}
        <div className="col-span-2 grid grid-cols-2 gap-[20px] justify-items-end">
          <LargeArticle
            image={A1}
            title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
            date="۲۴ خرداد ۱۴۰۳"
          />
          <LargeArticle
            image={A2}
            title="بهترین مقاصد گردشگری داخلی برای تابستان ۱۴۰۳"
            date="۲۳ خرداد ۱۴۰۳"
          />
        </div>

        {/* ستون کوچک سمت چپ */}
        <div className="flex flex-col gap-[16px]">
          <SmallArticle
            image={A3}
            title="راهنمای کامل خرید بلیط هواپیما با کمترین هزینه"
          />
          <SmallArticle
            image={A4}
            title="۱۰ هتل لوکس کیش که باید تجربه کنید"
          />
          <SmallArticle
            image={A5}
            title="چگونه تور لحظه آخری واقعی پیدا کنیم؟"
          />
        </div>
      </div>
    </section>
  );
}