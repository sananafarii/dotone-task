// src/components/layout/Header.jsx
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Logo from '../../assets/Images/Logo.svg';

export default function Header() {
  return (
    <header
      className="fixed z-50 top-[24px] left-[108px] right-[108px] h-[60px]"
    >
      <div className="w-full h-full bg-surface rounded-xl-18 relative">
        {/* button */}
        <button className="absolute left-[10px] top-[10px] h-[40px] w-[162px] p-[10px] flex items-center justify-center gap-[4px] bg-brand text-brand-contrast rounded-lg-14 hover:bg-brand-dark transition-colors">
            <UserCircleIcon className="w-5 h-5" />
            <span className="text-[14px] leading-[100%] text-center">ورود/ثبت نام</span>
        </button>

        <nav className="absolute top-[16px] right-[127px] h-[29px] w-[458px] flex items-center justify-between">
          <a href="#" className="text-primary text-[16px] leading-[100%] hover:text-brand-dark transition-colors">
            جستجو بلیط
          </a>
          <a href="#" className="text-primary text-[16px] leading-[100%] hover:text-brand-dark transition-colors">
            درباره ما
          </a>
          <a href="#" className="text-primary text-[16px] leading-[100%] hover:text-brand-dark transition-colors whitespace-nowrap">
            پرسش‌های متداول
          </a>
          <a href="#" className="text-primary text-[16px] leading-[100%] hover:text-brand-dark transition-colors">
            تماس با ما
          </a>
        </nav>

        {/* logo */}
        <img
          src={Logo}
          alt="logo"
          className="absolute right-[8px] top-[8px] h-[44px] w-[58.7146px] object-contain"
        />
      </div>
    </header>
  );
}