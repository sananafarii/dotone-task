// src/pages/Contact.jsx
import React from 'react';
import CTU from '../../assets/Images/CTU.png';

const ArrowLeft = ({ stroke = '#fff', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 19l-7-7 7-7" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Contact() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[108px] mt-[120px]">
      {/* main */}
      <div className="flex items-start justify-between gap-[40px]">
        {/* contacts info */}
        <div className="w-[392px] flex-shrink-0">
          {/* title */}
          <div className="text-right">
            <div className="flex items-center justify-start gap-3">
              <span className="w-[6px] h-[50px] bg-black rounded-l-[6px]"></span>
              <h2 className="text-[20px] font-extrabold leading-[100%]">تماس با ما</h2>
            </div>
            <div className="mt-[12px] flex items-center justify-end gap-2">
              <span className="w-[8px] h-[8px] bg-black rounded-full"></span>
              <p className="text-[12px] leading-[160%] text-right text-black">
                متن "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم..." یک متن ساختگی است.
              </p>
            </div>
          </div>

          {/* list */}
          <div className="mt-[32px] space-y-[12px]">
            {/* address */}
            <div className="relative h-[52px] flex items-center">
              <div className="w-[329px] text-right text-[14px] pr-[72px]">تهران، جهان کودک</div>
              <div className="absolute right-0 w-[53px] h-[52px] rounded-[16px] bg-black flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="2.5" stroke="#fff" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* Email */}
            <div className="relative h-[52px] flex items-center">
              <div className="w-[329px] text-right text-[14px] pr-[72px]">johndoe@gmail.com</div>
              <div className="absolute right-0 w-[53px] h-[52px] rounded-[16px] bg-black flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 8l8 6 8-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="6" width="16" height="12" rx="2" stroke="#fff" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* phone */}
            <div className="relative h-[52px] flex items-center">
              <div className="w-[329px] text-right text-[14px] pr-[72px]">021-12345678</div>
              <div className="absolute right-0 w-[53px] h-[52px] rounded-[16px] bg-black flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l2-2c.2-.2.5-.3.8-.2l3 1c.3.1.5.4.5.7V19a1 1 0 01-1 1C10.6 20 4 13.4 4 5a1 1 0 011-1h3.1c.3 0 .6.2.7.5l1 3c.1.3 0 .6-.2.8l-2 2z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="flex-1 max-w-[808px] h-[388px] rounded-[24px] bg-surface p-[24px]">
          <div className="grid grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] text-primary">نام:</label>
              <input className="h-[40px] rounded-[14px] bg-white px-3 text-right placeholder:text-[#CFCFCF] text-[14px]" placeholder="وارد کنید..." />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] text-primary">نام خانوادگی:</label>
              <input className="h-[40px] rounded-[14px] bg-white px-3 text-right placeholder:text-[#CFCFCF] text-[14px]" placeholder="وارد کنید..." />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] text-primary">ایمیل:</label>
              <input className="h-[40px] rounded-[14px] bg-white px-3 text-right placeholder:text-[#CFCFCF] text-[14px]" placeholder="وارد کنید..." />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] text-primary">شماره تماس:</label>
              <input className="h-[40px] rounded-[14px] bg-white px-3 text-right placeholder:text-[#CFCFCF] text-[14px]" placeholder="وارد کنید..." />
            </div>
          </div>
          <div className="mt-[18px]">
            <label className="text-[12px] text-primary">توضیحات:</label>
            <textarea className="w-full h-[76px] rounded-[21px] bg-white px-3 py-3 text-right placeholder:text-[#CFCFCF] text-[14px] resize-none" placeholder="توضیحات..." />
          </div>
          <div className="mt-[16px] flex justify-end">
            <button className="w-[119px] h-[40px] rounded-[14px] bg-brand text-brand-contrast text-[14px] hover:bg-brand/90 transition-colors">
              ارسال
            </button>
          </div>
        </div>
      </div>

      {/* pic */}
      <div className="mt-[80px] flex items-stretch gap-0 rounded-[24px] overflow-hidden shadow-lg">
        <div className="w-[728px] px-[32px] pt-[40px] pb-[16px] flex flex-col justify-between" style={{ background: 'linear-gradient(270deg, #F5F5F5 8.1%, #0C0C0C 100%)' }}>
          <div className="text-right">
            <h3 className="text-[20px] font-bold text-black mb-[9px]">لورم ایپسوم متن ساختگی با تولید سادگی</h3>
            <div className="flex items-center justify-start gap-2">
              <span className="text-[20px] font-bold leading-[100%] text-[#424242]">مشاهده لینک دانلود</span>
              <ArrowLeft stroke="#424242" size={24} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[12px]">
            <button className="h-[40px] rounded-[10px] bg-black text-white text-[14px] flex items-center justify-center gap-[8px] px-[14px] hover:bg-black/90 transition-colors">
              <span>دانلود نسخه اندروید</span>
              <ArrowLeft stroke="#fff" />
            </button>
            <button className="h-[40px] rounded-[10px] bg-black text-white text-[14px] flex items-center justify-center gap-[8px] px-[14px] hover:bg-black/90 transition-colors">
              <span>دانلود نسخه ویندوز</span>
              <ArrowLeft stroke="#fff" />
            </button>
            <button className="h-[40px] rounded-[10px] bg-black text-white text-[14px] flex items-center justify-center gap-[8px] px-[14px] hover:bg-black/90 transition-colors">
              <span>دانلود نسخه iOS</span>
              <ArrowLeft stroke="#fff" />
            </button>
            <button className="h-[40px] rounded-[10px] bg-black text-white text-[14px] flex items-center justify-center gap-[8px] px-[14px] hover:bg-black/90 transition-colors">
              <span>وب اپلیکیشن</span>
              <ArrowLeft stroke="#fff" />
            </button>
          </div>
        </div>
        <div className="w-[496px] h-[340px] flex-shrink-0">
          <img src={CTU} alt="اپلیکیشن" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}