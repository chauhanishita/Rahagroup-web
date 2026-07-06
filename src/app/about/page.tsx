import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="font-inter text-xs font-bold text-secondary uppercase block mb-4 tracking-[0.2em]">Our Legacy &amp; Future</span>
              <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold leading-tight mb-8 text-black">
                Architecting Tomorrow through Institutional Wisdom.
              </h1>
            </div>
            <div className="md:col-span-4 pb-4">
              <p className="font-inter text-base md:text-lg text-on-surface-variant italic leading-relaxed">
                &quot;Precision is not just a standard; it&apos;s our heritage. We build environments where vision takes structural form.&quot;
              </p>
            </div>
          </div>
          <div className="mt-12 w-full h-[350px] md:h-[600px] overflow-hidden rounded-xl shadow-xl">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzIsvasygX1BTe4mUJntbKrCZK6VMQG3Nr8vU6ucuff4lqHioao-OfLXvYopDzrQvKpuixPH-c7MPXeC3iTqFbKYvX_NkVgR5SNR01uiALP-bkqYYv-BhC0RcvfdRqXupnve5YoT_OfFMKm__yFo_PcGe8Cp98HT9OFHAYiREwLmdgk4yxs9HkP6tIFaj6RAdaT6xsLHfIHexbbRtd0mcrw1TfDXEowxh9hAXb8sGGneDdUFuzk_vI')",
              }}
            />
          </div>
        </section>

        {/* Our Story Editorial */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28 py-16 md:py-24 bg-[#efeeeb]/50 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-start-3 md:col-span-8">
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold mb-8 text-black">About Our Company</h2>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-on-surface-variant">
                <p>
                  Raha Group is a diversified business group committed to delivering innovative, reliable, and growth-oriented solutions across multiple industries. With a strong focus on technology, education, and real estate, Raha Group has established itself as a trusted partner for businesses and individuals seeking excellence.
                </p>
                <p>
                  Our philosophy is built on innovation, integrity, customer satisfaction, and long-term value creation. Every company under the Raha Group umbrella operates with a common vision—to provide high-quality services while building lasting relationships with clients and partners.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-black/10 my-8">
                  <div>
                    <div className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">1994</div>
                    <div className="font-inter text-xs font-bold text-on-surface-variant mt-2 uppercase tracking-wider">Inception in Infrastructure</div>
                  </div>
                  <div>
                    <div className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">450+</div>
                    <div className="font-inter text-xs font-bold text-on-surface-variant mt-2 uppercase tracking-wider">Global Projects Delivered</div>
                  </div>
                  <div>
                    <div className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">12</div>
                    <div className="font-inter text-xs font-bold text-on-surface-variant mt-2 uppercase tracking-wider">Industry Leading Subsidiaries</div>
                  </div>
                </div>
                
                <p>
                  As we continue to expand our portfolio, Raha Group remains dedicated to identifying emerging opportunities and creating sustainable businesses that contribute to economic and social development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-black/5 bg-[#efeeeb] rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">foundation</span>
              <h4 className="font-plus-jakarta text-2xl font-bold text-black mb-4">Our Mission</h4>
              <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                To consistently deliver high-quality solutions through professionalism, transparency, and deep market understanding, enabling our clients to achieve their long-term goals.
              </p>
            </div>
            <div className="p-8 border border-black/5 bg-[#efeeeb] rounded-xl shadow-sm">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">explore</span>
              <h4 className="font-plus-jakarta text-2xl font-bold text-black mb-4">Our Vision</h4>
              <p className="font-inter text-base text-on-surface-variant leading-relaxed">
                To become one of India&apos;s most trusted multi-business organizations by delivering innovative solutions, empowering businesses, and creating opportunities across diverse industries.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
