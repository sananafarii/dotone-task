// src/pages/About.jsx
import React from "react";
import OneSVG from "../../assets/Images/one.svg";
import TwoSVG from "../../assets/Images/two.svg";
import ThreeSVG from "../../assets/Images/three.svg";

export default function About() {
  return (
    <section className="pt-[100px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[108px]">
        <div className="relative">
          {/* Main block */}
          <section className="relative w-[1224px] h-[268px] mt-[16px] rounded-[6px] overflow-hidden">
            <div className="absolute top-0 right-0 w-[496px] h-full bg-white rounded-l-[6px] p-[20px] z-10">
              <h3 className="text-[24px] font-extrabold text-black mb-[16px]">
                درباره ما
              </h3>
              <p className="text-[14px] font-bold text-black text-right mb-[12px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
              <p className="text-[12px] leading-[160%] text-black text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد
              </p>
              <div className="mt-[16px]">
                <p className="text-[14px] font-bold text-black text-right mb-[12px]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
                <p className="text-[12px] leading-[160%] text-black text-justify">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                  در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                  نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد
                </p>
              </div>
            </div>

            {/* map and icons */}
            <div className="absolute left-0 top-[35px] w-[696px] h-[193px]">
              {/* خطوط */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <img
                  src={OneSVG}
                  alt="line"
                  className="absolute"
                  style={{ right: "60px", top: "30px", width: "90px", height: "141px" }}
                />
                <img
                  src={TwoSVG}
                  alt="line"
                  className="absolute"
                  style={{ right: "240px", top: "42px", width: "90px", height: "141px" }}
                />
                <img
                  src={ThreeSVG}
                  alt="line"
                  className="absolute"
                  style={{ right: "130px", top: "26px", width: "136px", height: "26px" }}
                />
              </div>

              {/* ردیف بالا */}
              <div className="absolute right-[0px] top-0 flex items-center gap-[12px] z-10">
                <div className="w-[118px] h-[52px] rounded-[14px] bg-surface flex items-center justify-center text-[14px] text-black">
                  تجربه سفر
                </div>
                <div className="w-[51px] h-[52px] rounded-[16px] bg-surface flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12l9-2 9-7 2 2-7 9-2 9-2-5-5-2 5-2-2-2z" stroke="#292D32" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* ردیف وسط */}
              <div className="absolute right-[240px] top-0 flex items-center gap-[12px] z-10">
                <div className="w-[53px] h-[52px] rounded-[16px] bg-surface flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7h10a3 3 0 013 3v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5a3 3 0 013-3z" stroke="#292D32" strokeWidth="1.5" />
                    <path d="M9 7V6a3 3 0 013-3 3 3 0 013 3v1" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="w-[118px] h-[52px] rounded-[14px] bg-surface flex items-center justify-center text-[14px] text-black">
                  خدمات سفر
                </div>
              </div>

              {/* ردیف پایین */}
              <div className="absolute right-[40px] bottom-0 flex items-center gap-[24px] z-10">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[51px] h-[52px] rounded-[16px] bg-surface flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="7" width="16" height="13" rx="2" stroke="#292D32" strokeWidth="1.5" />
                      <path d="M8 3v4M16 3v4M4 11h16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="w-[118px] h-[52px] rounded-[14px] bg-surface flex items-center justify-center text-[14px] text-black">
                    رزرو سفر
                  </div>
                </div>

                <div className="flex items-center gap-[12px]">
                  <div className="w-[51px] h-[52px] rounded-[16px] bg-surface flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="6" cy="18" r="2" stroke="#292D32" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="2" stroke="#292D32" strokeWidth="1.5" />
                      <circle cx="18" cy="6" r="2" stroke="#292D32" strokeWidth="1.5" />
                      <path d="M7.5 16.5L10.5 13.5L13.5 10.5L16.5 7.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="w-[140px] h-[52px] rounded-[14px] bg-surface flex items-center justify-center text-[14px] text-black">
                    برنامه‌ریزی سفر
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}