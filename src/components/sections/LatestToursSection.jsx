import React from 'react';
import Img1 from '../../assets/Images/Tour1.png';
import Img2 from '../../assets/Images/Tour2.png';
import Img3 from '../../assets/Images/Tour3.png';
import Img4 from '../../assets/Images/Tour4.png';

const Card = ({ title = 'تور شیراز', price = '۹,۸۷۰,۰۰۰', image }) => {
  return (
    <div className="relative w-[288px] h-[333px] rounded-[28px] overflow-hidden shadow-sm">
      {/* تصویر اصلی */}
      <img src={image} alt={title} className="w-full h-full object-cover absolute inset-0" />

      {/* تقویم بالا راست */}
      <div className="absolute top-[11px] right-[11px] flex items-center gap-[6px] px-[8px] h-[24px] bg-[#C7C7C7CC] backdrop-blur-[1px] rounded-[15px] text-[10px] text-black">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
        </svg>
        خرداد ۱۵ تا ۲۵
      </div>

      {/* نوار قیمت — دقیقاً مثل فیگما */}
      <div className="absolute top-[238px] right-[118px] w-[170px] h-[39px] rounded-tr-[18px] rounded-br-[18px] bg-[rgba(0,0,0,0.8)] flex items-center justify-center gap-1 text-white z-20">
        <span className="text-[12px]">تومان</span>
        <span className="text-[12px] font-extrabold">{price}</span>
      </div>

      {/* نوار پایین — دقیقاً مثل فیگما */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center z-10">
        <div className="relative w-[287px] h-[95px] rounded-[26px] bg-[rgba(0,0,0,0.8)] text-white px-4 py-3">
          {/* عنوان */}
          <div className="flex items-center justify-between pr-1">
            <span className="text-[18px] font-extrabold">{title}</span>
          </div>

          {/* خط جداکننده */}
          <div className="mt-2 h-[1px] w-full bg-white/30"></div>

          {/* متن + دکمه */}
          <div className="mt-2 flex items-center justify-between">
            <p className="text-[12px] leading-[160%] opacity-90 max-w-[70%] truncate">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...
            </p>
            <button className="flex items-center gap-2 text-[14px]">
              مشاهده
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LatestToursSection = () => {
  return (
    <section className="w-[1224px] mx-[108px] mt-[48px]">
      {/* هدر */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-[6px] h-[50px] bg-black rounded-l-[6px]"></span>
          <h2 className="text-[20px] font-extrabold leading-[100%]">جدیدترین تورها</h2>
          <span className="w-[8px] h-[8px] bg-black rounded-full mt-[10px]"></span>
        </div>
        <p className="w-[797px] text-[12px] leading-[100%] text-black text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <button className="flex items-center gap-[4px] h-[40px] rounded-[14px] px-[10px] bg-brand text-brand-contrast text-[14px]">
          مشاهده بیشتر
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* کارت‌ها */}
      <div className="mt-6 grid grid-cols-4 gap-[16px]">
        <Card image={Img1} />
        <Card image={Img2} />
        <Card image={Img3} />
        <Card image={Img4} />
      </div>
    </section>
  );
};

export default LatestToursSection;