import React, { useState } from 'react';
import Header from '../layout/Header';
import FAQImage from '../../assets/Images/FAQ.png';

const PlusIcon = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {open ? (
      <path d="M5 12h14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
    ) : (
      <>
        <path d="M5 12h14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 5v14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" />
      </>
    )}
  </svg>
);

const faqs = new Array(5).fill(0).map((_, i) => ({
  id: i + 1,
  q: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟',
  a: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
}));

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="w-[1224px] mx-[108px] pt-[124px]">
        {/* body */}
        <section className="mt-[40px] flex items-end justify-between">
          {/* gradiant */}
          <div className="relative w-[392px] h-[443px] rounded-[24px] overflow-hidden">
            <img src={FAQImage} alt="FAQ" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0) 12.59%, rgba(0, 0, 0, 0.2) 54.89%)',
              }}
            />
          </div>

          {/* FAQ list */}
          <div className="w-[808px] min-h-[369px]">
            <div className="text-right mb-[16px]">
              <div className="flex items-center justify-start gap-[12px]">
                <span className="w-[6px] h-[50px] bg-black rounded-l-[6px]"></span>
                <h2 className="text-[20px] font-extrabold leading-[100%]">پرسش های متداول</h2>
              </div>
              <div className="mt-[12px] flex items-center justify-start gap-[8px]">
                <span className="w-[8px] h-[8px] bg-black rounded-full"></span>
                <p className="w-[668px] text-[12px] leading-[160%] text-right text-black">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
            </div>
            {faqs.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="w-[808px]">
                  {/* question box */}
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className={`w-[808px] h-[50px] rounded-[14px] bg-surface flex items-center justify-between px-[16px] mb-[8px] ${index === 0 ? 'mt-[40px]' : 'mt-[16px]'}`}
                  >
                    <span className="text-[14px] font-semibold text-right text-black">
                      {item.q}
                    </span>
                    <PlusIcon open={isOpen} />
                  </button>

                  {/* answer box*/}
                  {isOpen && (
                    <div className="w-[808px] rounded-[14px] bg-black text-white px-[16px] pt-[14px] pb-[14px] mb-[10px]">
                      <div className="h-[1px] w-[768px] mx-[8px] bg-[#373737] mb-[10px]"></div>
                      <p className="w-[768px] text-[12px] leading-[160%] text-justify">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}


