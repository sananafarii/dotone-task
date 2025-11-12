// src/components/Hero.jsx
import React, { useState } from 'react';
import HeroImage from '../../assets/Images/homepage.png';

const Hero = () => {
  const [tripType, setTripType] = useState('داخلی');
  const [wayType, setWayType] = useState('رفت');
  const [service, setService] = useState('پرواز');

  return (
    <section className="relative mt-[124px]">
      {/* کانتینر وسط‌چین فقط برای پدینگ */}
      <div className="max-w-[1440px] mx-auto px-[108px]">
        
        {/* تصویر هرو */}
        <div className="relative rounded-[24px] overflow-hidden w-full h-[562px]">
          <img
            src={HeroImage}
            alt="تصویر هوم"
            className="w-full h-full block object-cover"
          />

          {/* باکس ۱: انتخاب سرویس */}
          <div className="absolute top-[371px] right-[79px] w-[434px] h-[61px] rounded-[18px] bg-white flex items-center justify-between px-6 shadow-lg">
            {/* پرواز */}
            <button onClick={() => setService('پرواز')} className="flex flex-col items-center justify-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 12l9-2 9-7 2 2-7 9-2 9-2-5-5-2 5-2-2-2z" stroke="#000" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span className={`text-[12px] leading-[100%] font-bold ${service === 'پرواز' ? 'text-brand' : 'text-brand/60'}`}>پرواز</span>
              {service === 'پرواز' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
            </button>
            {/* هتل */}
            <button onClick={() => setService('هتل')} className="flex flex-col items-center justify-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="3" width="14" height="18" rx="1.5" stroke="#000" strokeWidth="1.5"/>
                <path d="M9 7h2M13 7h2M9 11h2M13 11h2M8 21v-3h8v3" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className={`text-[12px] leading-[100%] ${service === 'هتل' ? 'text-brand font-bold' : 'text-brand/60'}`}>هتل</span>
              {service === 'هتل' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
            </button>
            {/* قطار */}
            <button onClick={() => setService('قطار')} className="flex flex-col items-center justify-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="4" width="12" height="12" rx="2" stroke="#000" strokeWidth="1.5"/>
                <path d="M8 16l-2 3M16 16l2 3M9 9h6M9 12h6" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className={`text-[12px] leading-[100%] ${service === 'قطار' ? 'text-brand font-bold' : 'text-brand/60'}`}>قطار</span>
              {service === 'قطار' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
            </button>
            {/* اتوبوس */}
            <button onClick={() => setService('اتوبوس')} className="flex flex-col items-center justify-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="5" width="16" height="10" rx="2" stroke="#000" strokeWidth="1.5"/>
                <circle cx="8" cy="18" r="1.5" stroke="#000" strokeWidth="1.5"/>
                <circle cx="16" cy="18" r="1.5" stroke="#000" strokeWidth="1.5"/>
                <path d="M6 9h12" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className={`text-[12px] leading-[100%] ${service === 'اتوبوس' ? 'text-brand font-bold' : 'text-brand/60'}`}>اتوبوس</span>
              {service === 'اتوبوس' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
            </button>
            {/* تور */}
            <button onClick={() => setService('تور')} className="flex flex-col items-center justify-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 8l9-5 9 5v2H3V8z" stroke="#000" strokeWidth="1.5"/>
                <path d="M5 10v7M9 10v7M15 10v7M19 10v7M3 17h18" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className={`text-[12px] leading-[100%] ${service === 'تور' ? 'text-brand font-bold' : 'text-brand/60'}`}>تور</span>
              {service === 'تور' && <span className="w-[16px] h-[4px] rounded-[2px] bg-brand mt-[2px]"></span>}
            </button>
          </div>

          {/* باکس ۴: فرم جستجو — دقیقاً مثل فیگما، نصف بیرون */}
        <div className="absolute top-[462px] right-[80px] w-[1064px] h-[120px] rounded-[30px] bg-surface z-20 flex items-center justify-center gap-[12px] px-[16px]">
            {/* همون کد قبلی فیلدها */}
            <div className="w-[158px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="#000" strokeWidth="1.5"/>
                  <path d="M3 10h18M8 3v4M16 3v4" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="text-[12px] leading-[100%] text-brand">تاریخ رفت</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="w-[158px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="#000" strokeWidth="1.5"/>
                  <path d="M3 10h18M8 3v4M16 3v4" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="text-[12px] leading-[100%] text-brand">تاریخ برگشت</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="w-[110px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
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

            <div className="w-[110px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
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

            <div className="w-[158px] h-[40px] rounded-[14px] bg-white flex items-center justify-between px-3 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
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

            <button className="w-[139px] h-[40px] rounded-[14px] bg-brand text-brand-contrast flex items-center justify-center gap-2 hover:bg-brand/90 transition-colors">
              <svg width="17" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="1.5"/>
                <path d="M20 20l-3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-[12px] leading-[100%] font-extrabold">جستجو</span>
            </button>
          </div>

          {/* باکس داخلی/خارجی */}
          <div className="absolute top-[392px] left-[331px] w-[192px] h-[40px] rounded-[14px] bg-white p-[4px] flex items-center gap-[8px] shadow-md">
            {['داخلی', 'خارجی'].map((label) => {
              const active = tripType === label;
              return (
                <button
                  key={label}
                  onClick={() => setTripType(label)}
                  className={`w-[92px] h-[32px] rounded-[14px] text-[12px] leading-[100%] transition-all ${
                    active ? 'bg-brand text-brand-contrast shadow-sm' : 'bg-white text-brand'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* باکس رفت و برگشت */}
          <div className="absolute top-[392px] left-[79px] w-[240px] h-[40px] rounded-[14px] bg-white p-[4px] flex items-center gap-[8px] shadow-md">
            {['رفت', 'رفت و برگشت'].map((label) => {
              const active = wayType === label;
              return (
                <button
                  key={label}
                  onClick={() => setWayType(label)}
                  className={`w-[112px] h-[32px] rounded-[14px] text-[12px] leading-[100%] transition-all flex items-center justify-center gap-[6px] ${
                    active ? 'bg-brand text-brand-contrast shadow-sm' : 'bg-white text-brand'
                  }`}
                >
                  {label === 'رفت' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M2 12l9-2 9-7 2 2-7 9-2 9-2-5-5-2 5-2-2-2z" stroke={active ? '#fff' : '#000'} strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;