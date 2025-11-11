import React, { useState } from 'react';
import HeroImage from '../../assets/Images/homepage.png';

const Hero = () => {
  const [tripType, setTripType] = useState('داخلی'); // 'داخلی' | 'خارجی'
  const [wayType, setWayType] = useState('رفت'); // 'رفت' | 'رفت و برگشت'
  const [service, setService] = useState('پرواز'); // 'پرواز' | 'هتل' | 'قطار' | 'اتوبوس' | 'تور'
  return (
    <section className="relative w-[1223px] h-[562px] mt-[124px] mx-[109px]">
      {/* تصویر هرو */}
      <div className="relative rounded-[24px] overflow-hidden w-full h-full">
        <img
          src={HeroImage}
          alt="تصویر هوم"
          className="w-full h-full block object-cover"
        />

        {/* باکس ۱ روی تصویر: موقعیت و اندازه دقیق */}
        <div className="absolute top-[371px] right-[79px] w-[434px] h-[61px] rounded-[18px] bg-white flex items-center justify-between px-6">
          {/* پرواز */}
          <button onClick={() => setService('پرواز')} className="flex flex-col items-center justify-center gap-1">
            {/* airplane */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2 12l9-2 9-7 2 2-7 9-2 9-2-5-5-2 5-2-2-2z" stroke="#000" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
            </svg>
            <span className="text-[12px] leading-[100%] font-bold text-brand">پرواز</span>
            {service === 'پرواز' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
          </button>
          {/* هتل */}
          <button onClick={() => setService('هتل')} className="flex flex-col items-center justify-center gap-1">
            {/* building */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="3" width="14" height="18" rx="1.5" stroke="#000" strokeWidth="1.5" fill="none"/>
              <path d="M9 7h2M13 7h2M9 11h2M13 11h2M8 21v-3h8v3" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[12px] leading-[100%] font-normal text-brand">هتل</span>
            {service === 'هتل' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
          </button>
          {/* قطار */}
          <button onClick={() => setService('قطار')} className="flex flex-col items-center justify-center gap-1">
            {/* train */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="4" width="12" height="12" rx="2" stroke="#000" strokeWidth="1.5"/>
              <path d="M8 16l-2 3M16 16l2 3M9 9h6M9 12h6" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[12px] leading-[100%] font-normal text-brand">قطار</span>
            {service === 'قطار' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
          </button>
          {/* اتوبوس */}
          <button onClick={() => setService('اتوبوس')} className="flex flex-col items-center justify-center gap-1">
            {/* bus */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="5" width="16" height="10" rx="2" stroke="#000" strokeWidth="1.5"/>
              <circle cx="8" cy="18" r="1.5" stroke="#000" strokeWidth="1.5"/>
              <circle cx="16" cy="18" r="1.5" stroke="#000" strokeWidth="1.5"/>
              <path d="M6 9h12" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[12px] leading-[100%] font-normal text-brand">اتوبوس</span>
            {service === 'اتوبوس' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
          </button>
          {/* تور */}
          <button onClick={() => setService('تور')} className="flex flex-col items-center justify-center gap-1">
            {/* bank/tour */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 8l9-5 9 5v2H3V8z" stroke="#000" strokeWidth="1.5" fill="none"/>
              <path d="M5 10v7M9 10v7M15 10v7M19 10v7M3 17h18" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[12px] leading-[100%] font-normal text-brand">تور</span>
            {service === 'تور' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
          </button>
        </div>
        </div>

        {/* باکس ۴: فرم جستجو اصلی - خارج از تصویر تا نیمه بیرون باشد */}
        <div className="absolute top-[462px] right-[80px] w-[1064px] h-[120px] rounded-[30px] bg-surface z-20 flex items-center justify-center gap-[12px] px-[16px]">
          {/* تاریخ رفت */}
          <div className="w-[158px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              {/* calendar icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="#000" strokeWidth="1.5"/>
                <path d="M3 10h18M8 3v4M16 3v4" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-[12px] leading-[100%] text-brand">تاریخ رفت</span>
            </div>
            {/* arrow down */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* تاریخ برگشت */}
          <div className="w-[158px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              {/* calendar icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="#000" strokeWidth="1.5"/>
                <path d="M3 10h18M8 3v4M16 3v4" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-[12px] leading-[100%] text-brand">تاریخ برگشت</span>
            </div>
            {/* arrow down */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* مبدا */}
          <div className="w-[110px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              {/* location icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" stroke="#000" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="2.5" stroke="#000" strokeWidth="1.5"/>
              </svg>
              <span className="text-[12px] leading-[100%] text-brand">مبدا</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* مقصد */}
          <div className="w-[110px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              {/* location icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" stroke="#000" strokeWidth="1.5"/>
                <circle cx="12" cy="10" r="2.5" stroke="#000" strokeWidth="1.5"/>
              </svg>
              <span className="text-[12px] leading-[100%] text-brand">مقصد</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* تعداد مسافر */}
          <div className="w-[158px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              {/* user icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3.5" stroke="#000" strokeWidth="1.5"/>
                <path d="M5 20c1.5-3.5 5-5 7-5s5.5 1.5 7 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-[12px] leading-[100%] font-semibold text-[#999999]">تعداد مسافر</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* دکمه جستجو */}
          <button className="w-[139px] h-[40px] rounded-[14px] bg-brand text-brand-contrast flex items-center justify-center gap-2">
            {/* search icon */}
            <svg width="17" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="1.5"/>
              <path d="M20 20l-3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-[12px] leading-[100%] font-extrabold">جستجو</span>
          </button>
        </div>
        {/* باکس ۲: دکمه دوحالته داخلی/خارجی */}
        <div className="absolute top-[392px] left-[331px] w-[192px] h-[40px] rounded-[14px] bg-white p-[4px] flex items-center gap-[8px]">
          {['داخلی', 'خارجی'].map((label) => {
            const active = tripType === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setTripType(label)}
                className={`w-[92px] h-[32px] rounded-[14px] text-[12px] leading-[100%] transition-colors ${
                  active ? 'bg-brand text-brand-contrast' : 'bg-white text-brand'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* باکس ۳: دکمه دوحالته رفت / رفت و برگشت */}
        <div className="absolute top-[392px] left-[79px] w-[240px] h-[40px] rounded-[14px] bg-white p-[4px] flex items-center gap-[8px]">
          {['رفت', 'رفت و برگشت'].map((label) => {
            const active = wayType === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setWayType(label)}
                className={`w-[112px] h-[32px] rounded-[14px] text-[12px] leading-[100%] transition-colors flex items-center justify-center gap-[6px] ${
                  active ? 'bg-brand text-brand-contrast' : 'bg-white text-brand'
                }`}
              >
                {/* آیکن هواپیما فقط برای «رفت» */}
                {label === 'رفت' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12l9-2 9-7 2 2-7 9-2 9-2-5-5-2 5-2-2-2z" stroke={active ? '#fff' : '#000'} strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                  </svg>
                )}
                {label}
              </button>
            );
          })}
        </div>
      
    </section>
  );
};

export default Hero;


