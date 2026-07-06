import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Learnixa() {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28 overflow-hidden animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p className="font-inter text-xs font-bold text-secondary uppercase mb-4 tracking-[0.2em]">Learnixa Education</p>
              <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold leading-none mb-8 text-black">
                Study Abroad &amp; Career Guidance
              </h1>
              <p className="font-inter text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                At Learnixa Education, we are committed to helping students achieve their academic and career goals by providing trusted guidance for higher education in India and abroad.
              </p>
            </div>
            
            <div className="md:col-span-5 h-[300px] md:h-[500px] rounded-xl overflow-hidden relative shadow-xl">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5vszCUoxDw9oCRyn96l8gSGsGtMQAVQcB2kzUJ_tSsB0yoSJj62is5PMa1fNWXCrm-xXaA_LFogQNERGeAktPgyemUGvYEvS4UbZGdNVXERvGiHm4RKv3SzuNBx-90I0rq_hjQy_K30CdhLy6AQiD1hQmG1tLcYm4mDtmrgkBQjzMNg0IXn-Vm0tkAJMk7PEZtR9Mx-sp7zJxvRmQhaZTuDWGTwrcGrdEUjI5NTbbNK4vdUKLmAIu')",
                }}
              />
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="px-6 md:px-20 max-w-[1280px] mx-auto mb-20 md:mb-28">
          <div className="mb-16">
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-secondary"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-[#735b28] mb-6">school</span>
              <h3 className="font-plus-jakarta text-xl font-bold mb-4 text-black">MBBS in India &amp; Abroad</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Expert guidance for medical education seekers in premier domestic and international universities.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-[#735b28] mb-6">psychology</span>
              <h3 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Career Counseling &amp; Selection</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Personalized student guidance and counselor matchmaking based on academic performance and parameters.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-[#735b28] mb-6">assignment</span>
              <h3 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Admission Assistance</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Complete and trusted admissions processing with direct coordination from partner universities.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-[#735b28] mb-6">description</span>
              <h3 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Visa &amp; Documentation Support</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                End-to-end documentation preparation, translation, submission, and visa interview training.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-[#735b28] mb-6">payments</span>
              <h3 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Scholarship Guidance</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Identify and apply for financial aid, fellowships, and academic scholarship opportunities.
              </p>
            </div>
            <div className="bg-[#efeeeb] p-8 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-[#735b28] mb-6">flight_takeoff</span>
              <h3 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Pre &amp; Post Arrival Support</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Comprehensive orientation briefing, local accommodation, airport pickup, and campus integration.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Learnixa */}
        <section className="bg-[#efeeeb] py-20 md:py-28 px-6 md:px-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-16">
              <span className="font-inter text-xs text-[#735b28] font-bold uppercase tracking-[0.2em] mb-3 block">Why Us</span>
              <h2 className="font-plus-jakarta text-3xl md:text-4xl font-extrabold text-black">Why Choose Learnixa Education?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-black/5">
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Expert &amp; Experienced Counselors</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Guidance from industry veterans who understand global educational pathways.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-black/5">
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Personalized Student Guidance</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Individual profiling based on your score card, goals, and university preferences.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-black/5">
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Trusted Admission Process</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">100% transparent documentation, registration, and confirmation procedures.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-black/5">
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Wide Network of Universities</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Direct relationships with top-tier institutions across India and globally.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-black/5">
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">Complete End-to-End Support</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">From initial profile analysis to visa approvals and campus arrival assistance.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-black/5">
                <h4 className="font-plus-jakarta font-bold text-black text-lg mb-3">High Success Rate in Admissions</h4>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Consistent year-on-year placements in premier medical and tech universities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
