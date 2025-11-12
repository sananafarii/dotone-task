import React from 'react';
import Logo from '../../assets/Images/Logo.svg';

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto px-[108px] mt-[48px] mb-[24px]">
      {/* logo */}
      <div className="w-full flex justify-center">
        <img src={Logo} alt="logo" className="w-[118.76px] h-[89px] object-contain" />
      </div>

      {/* paragraph */}
      <p className="mt-[16px] mx-auto text-center text-[14px] leading-[100%] text-black w-[512.42px]">
        متن "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم..." یک متن ساختگی است که معمولاً در طراحی صفحات وب و متون چاپی به عنوان جایگزین موقت .
      </p>

      {/* box */}
      <div className="mt-[24px] w-full flex justify-center">
        <div className="w-[483.39px] h-[40px] bg-[#F5F5F5] rounded-[12px] px-[12px] flex items-center justify-between flex-row-reverse">
          <button className="w-[133.1px] h-[32px] rounded-[10px] bg-black text-white text-[12px] font-bold flex items-center justify-center">
            عضویت در خبرنامه
          </button>
          <input
            className="flex-1 h-[32px] bg-transparent text-[12px] text-right placeholder:text-[#CFCFCF] outline-none"
            placeholder="johndoe@gmail.com"
          />
        </div>
      </div>

      {/* titles */}
      <div className="mt-[28px] w-[516.42px] mx-auto flex items-center justify-between text-[16px] text-[#424242]">
        <a href="#" className="hover:text-black">جستجوی بلیط</a>
        <a href="#" className="hover:text-black">درباره ما</a>
        <a href="#" className="hover:text-black">پرسش های متداول</a>
        <a href="#" className="hover:text-black">تماس با ما</a>
      </div>

      {/* line — کاملاً عرض صفحه */}
      <div className="mt-[14px] w-full h-px bg-[#DCDCDC]" />

      {/* copyright and policies — وسط‌چین */}
      <div className="mt-[16px] w-full flex items-center justify-center gap-[40px]">
        <span className="text-[12px] text-black">قوانین و مقررات</span>
        <span className="text-[12px] text-black">کلیه حقوق محفوظ و متعلق به دات وان می‌باشد.</span>
      </div>
    </footer>
  );
};

export default Footer;