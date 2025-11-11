import React from 'react';
import Header from '../layout/Header';
import A1 from '../../assets/Images/Article1.png';
import A2 from '../../assets/Images/Article2.png';
import A3 from '../../assets/Images/Article3.png';
import A4 from '../../assets/Images/Article4.png';
import A5 from '../../assets/Images/Article5.png';

const ArrowLeft = ({ stroke = '#000', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 19l-7-7 7-7" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LargeArticle = ({ image, title, date }) => {
  return (
    <div className="w-[392px] h-[520px] rounded-[24px] bg-surface p-[16px]">
      <div className="w-[360px] h-[298px] rounded-[18px] overflow-hidden bg-[#E9E9E9] mx-auto">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-[12px]">
        <p className="w-[360px] text-[14px] font-bold leading-[100%] text-right text-black">
          {title}
        </p>
      </div>
      <p className="mt-[12px] w-[360px] text-[12px] leading-[160%] text-right text-[#4A4A4A]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
      </p>
      <div className="mt-[24px] flex items-center justify-between">
        <span className="text-[12px] text-[#727272]">{date}</span>
        <button className="w-[133px] h-[40px] rounded-[14px] bg-white text-black text-[14px] flex items-center justify-center gap-[4px]">
          مشاهده بیشتر
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
};

const SmallArticle = ({ image, title }) => {
  return (
    <div className="w-[392px] h-[152px] rounded-[24px] bg-surface p-[14px] flex items-center gap-[16px]">
      <div className="w-[124px] h-[124px] rounded-[8px] overflow-hidden bg-[#E9E9E9]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between h-full">
        <p className="w-[226px] text-[12px] font-bold leading-[100%] text-right text-black">
          {title}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[12px] text-[#727272]">24 خرداد ۱۴۰۳</span>
          <button className="w-[123px] h-[32px] rounded-[10px] bg-white text-black text-[12px] flex items-center justify-center gap-[4px]">
            مشاهده بیشتر
            <ArrowLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Articles() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="w-[1224px] mx-[108px] pt-[64px]">
        <section className="mt-[-40px]">
          {/*  title */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
            <span className="w-[6px] h-[50px] bg-black rounded-l-[6px]"></span>
              <h2 className="text-[20px] font-extrabold leading-[100%]">مقالات ما</h2>
            </div>
            <div className="mt-[6px] flex items-center justify-start gap-[8px]">
              <span className="w-[8px] h-[8px] bg-black rounded-full"></span>
              <p className="w-[797px] text-[12px] leading-[160%] text-right text-black">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
            </div>
            <button className="flex items-center gap-[4px] h-[40px] rounded-[14px] px-[10px] bg-brand text-brand-contrast text-[14px]">
              مشاهده بیشتر
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 19l-7-7 7-7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-[20px]">
            <div className="col-span-2 grid grid-cols-2 gap-[20px] justify-items-end">
              <LargeArticle image={A1} title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" date="24 خرداد ۱۴۰۳" />
              <LargeArticle image={A2} title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است" date="24 خرداد ۱۴۰۳" />
            </div>
            <div className="flex flex-col gap-[16px]">
              <SmallArticle image={A3} title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" />
              <SmallArticle image={A4} title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" />
              <SmallArticle image={A5} title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


