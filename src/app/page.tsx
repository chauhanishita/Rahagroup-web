import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ========================================================================= */}
      {/* 1. DESKTOP ONLY LAYOUT (hidden md:block)                                  */}
      {/* ========================================================================= */}
      <div className="hidden md:block">
        {/* Desktop Hero Section */}
        <section className="relative h-screen w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDgLAqbrRnD3ucM3h-ybXot8GCruUZzxG68G6jrYCDNqC7jy_iLkwT0Y7wtBrWZAKu68oszFdd0nofrSBO2iI8SsBOLI5G3-5N76TH-zwDG5j15rFiLiT2pmZqhyKLZF7m_jWU6oCcClKD2fPwC2kHwRiS9mXn1X2AvfpThRNqyH5OcMp6cuyjuoItmO_GrXFaXEAj5T2saT0BjyxYVhpTGm5iFnLvMpE4mrfctM5LH4Ji3gqT_8ju')",
              }}
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          
          <div className="relative z-10 px-20 w-full max-w-[1280px] mx-auto animate-fade-up">
            <div className="max-w-4xl">
              <p className="font-inter text-xs font-bold text-white uppercase mb-4 tracking-widest">
                Architectural Prestige
              </p>
              <h1 className="font-plus-jakarta text-7xl font-extrabold text-white mb-8 leading-tight">
                Building Businesses That <br />Shape Tomorrow
              </h1>
              <div className="flex gap-4">
                <Link 
                  href="/#verticals-desktop" 
                  className="bg-white text-black px-8 py-4 rounded-lg font-inter text-sm font-bold hover:scale-105 transition-all text-center"
                >
                  Explore Our Verticals
                </Link>
                <Link 
                  href="/#investor" 
                  className="border border-white text-white px-8 py-4 rounded-lg font-inter text-sm font-bold hover:bg-white/10 transition-all text-center"
                >
                  Investor Relations
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop About Section */}
        <section className="py-28 px-20 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-6">
              <p className="font-inter text-xs font-bold text-secondary mb-4 uppercase tracking-[0.2em]">About Our Company</p>
              <h2 className="font-plus-jakarta text-4xl font-extrabold mb-6 leading-tight text-black">
                Raha Group
              </h2>
              <p className="font-inter text-lg text-on-surface-variant leading-relaxed mb-8">
                Raha Group is a diversified business group committed to delivering innovative, reliable, and growth-oriented solutions across multiple industries. With a strong focus on technology, education, and real estate, Raha Group has established itself as a trusted partner for businesses and individuals seeking excellence. Our philosophy is built on innovation, integrity, customer satisfaction, and long-term value creation.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-plus-jakarta font-bold text-secondary text-base mb-2">Our Mission</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    To consistently deliver high-quality solutions through professionalism, transparency, and deep market understanding, enabling our clients to achieve their long-term goals.
                  </p>
                </div>
                <div>
                  <h4 className="font-plus-jakarta font-bold text-secondary text-base mb-2">Our Vision</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    To become one of India&apos;s most trusted multi-business organizations by delivering innovative solutions, empowering businesses, and creating opportunities across diverse industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6 col-start-7">
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLs2cer2pQMLX2YOJgM-q-gzTpIdmvmt1K8bORiryd59sVQkIZOFzzsvKnbgpyC7JpOuOy96eaxCKnE6L0i0BexN6CqiSKwPHR1Kd9WfmBdTRYTlMmjTsbElgc5QgVu3Seew57rYKd-jCE3Q6V9oFMd6xaAew4HbWfIGFaBaodvbXtc-pHFf1akjZR5OXnxorocO5Z3NWi90g4FN_LzViZLGw-vK63IMRGn0Jo64Njfgj52fWqGIcH')",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Desktop Stats */}
          <div className="mt-20 border-t border-black/5 pt-16">
            <div className="grid grid-cols-3 gap-12 text-left">
              <div>
                <div className="font-plus-jakarta text-5xl font-extrabold text-black mb-2">15,000+</div>
                <div className="font-inter text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Customers &amp; People Reached</div>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  Through our businesses in EV charging, education, and real estate, we have successfully connected with thousands of clients.
                </p>
              </div>
              <div>
                <div className="font-plus-jakarta text-5xl font-extrabold text-black mb-2">3+</div>
                <div className="font-inter text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Growing Business Verticals</div>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  Raha Group operates across multiple industries, including Big Think Technology, Learnixa Education, and Raha Infra.
                </p>
              </div>
              <div>
                <div className="font-plus-jakarta text-5xl font-extrabold text-black mb-2">100%</div>
                <div className="font-inter text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Commitment to Quality &amp; Trust</div>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  Customer satisfaction, transparency, and ethical business practices are at the core of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Verticals Section */}
        <section id="verticals-desktop" className="bg-[#efeeeb] py-28">
          <div className="px-20 max-w-[1280px] mx-auto space-y-32">
            {/* Raha Infra */}
            <div className="grid grid-cols-12 gap-12 items-center">
              <div className="col-span-6 rounded-xl overflow-hidden h-[450px]">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500" 
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIZYmeUprJUsZG-2NGPAoQdb5LMqFkcCWmMbN-bAQG9ShgHN7b8XxddHeNMT7keHm2As06ZjOE3-HnqGQ2W_ZPOdTPHUdMiXLf4fzvyNNovJocnBvx57Aj5aHkKKb_OkUuKKDKYB6FNctjJNvukpc3mOAN5ZpoUagPY2kUkCEMTpQg9XDwuZmkmdgC08cN6Eq1c___9vQb08S4FtJTxAjgT_gga-1oRbkH2BtoFDPfycNbcLPP-1Tg')",
                  }}
                />
              </div>
              <div className="col-span-5 col-start-8">
                <div className="font-inter text-xs text-secondary font-bold uppercase mb-2">Real Estate</div>
                <h3 className="font-plus-jakarta text-3xl font-extrabold text-black mb-4">Raha Infra</h3>
                <p className="font-inter text-base text-on-surface-variant mb-6 leading-relaxed">
                  Complete real estate solutions for residential and commercial properties, investment advisory, property consulting, and seamless buying &amp; selling assistance.
                </p>
                <Link href="/infra" className="group flex items-center font-inter text-sm font-bold text-black">
                  VIEW SECTOR 
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Learnixa Education */}
            <div className="grid grid-cols-12 gap-12 items-center">
              <div className="col-span-5">
                <div className="font-inter text-xs text-secondary font-bold uppercase mb-2">Education</div>
                <h3 className="font-plus-jakarta text-3xl font-extrabold text-black mb-4">Learnixa Education</h3>
                <p className="font-inter text-base text-on-surface-variant mb-6 leading-relaxed">
                  Expert guidance for MBBS in India &amp; Abroad, career counselling, university admissions, documentation, and visa support.
                </p>
                <Link href="/learnixa" className="group flex items-center font-inter text-sm font-bold text-black">
                  EXPLORE SECTOR
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <div className="col-span-6 col-start-7 rounded-xl overflow-hidden h-[450px]">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500" 
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3XJdE8jnE0-da5VxB7sDuoIhIRhWVHkdLm1VtsVzt-YShB64HL_TrQ3r21oQ0gkXRj5IySsNFK3KRnzScrukNhygOQWBdMGvQHCUVNgDhMOMde-R_sc-psgohB_sX6fUP77swkRRyqLD_7ACQGxsQceR_kffbvDf_F4QjVIMkuUI4Un_bxLuYjMqHq2857LQPcqYZ_IjlweuoRTMp6yzqQdvoaiEYfTqwyVFtMaisFuiWXymisoQ2')",
                  }}
                />
              </div>
            </div>

            {/* Big Think Technology */}
            <div className="grid grid-cols-12 gap-12 items-center">
              <div className="col-span-6 rounded-xl overflow-hidden h-[450px]">
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500" 
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAquu-YhuAMlVTfvM5vC8u2Jnis1EaQ8LPWI8LfUgt9vupCfzCCzX9k2dT5ixclK7rHBZfYzk_weIZ5oWky8q31wA8cUXj5LfD1rzQBaEF_qAHcZt6QyBIAagaoME35SQEPf-jYzJgcq3PIIHeczmymSwaOyFdOdd49qs__Kib1dAQLLdNntJsGPaHIaK3U_e5u6402-y4OBdqGE2ETsBiKc9UTdoa4GXbsKnVqSljCx0Y-K-wtQSHE')",
                  }}
                />
              </div>
              <div className="col-span-5 col-start-8">
                <div className="font-inter text-xs text-secondary font-bold uppercase mb-2">Technology</div>
                <h3 className="font-plus-jakarta text-3xl font-extrabold text-black mb-4">Big Think Technology</h3>
                <p className="font-inter text-base text-on-surface-variant mb-6 leading-relaxed">
                  Innovative digital marketing solutions including social media marketing, performance ads, branding, website development, and lead generation.
                </p>
                <Link href="/bigthink" className="group flex items-center font-inter text-sm font-bold text-black">
                  LEARN MORE
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Process Section */}
        <section className="py-28 px-20 max-w-[1280px] mx-auto overflow-hidden">
          <div className="text-center mb-24">
            <p className="font-inter text-xs font-bold text-secondary mb-4 uppercase tracking-[0.2em]">Our Methodology</p>
            <h2 className="font-plus-jakarta text-4xl font-extrabold text-black">The Process</h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/10 -translate-y-1/2" />
            <div className="grid grid-cols-3 gap-12 relative z-10">
              <div className="bg-[#faf9f6] pr-10">
                <div className="flex flex-col">
                  <span className="font-plus-jakarta text-[#735b28]/15 text-[100px] leading-none mb-4 font-extrabold">01</span>
                  <h4 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Understand</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    We begin by understanding your business needs, objectives, and expectations. Our team evaluates requirements carefully to design tailored solutions aligned with your long-term goals.
                  </p>
                </div>
              </div>
              <div className="bg-[#faf9f6] px-10">
                <div className="flex flex-col">
                  <span className="font-plus-jakarta text-[#735b28]/15 text-[100px] leading-none mb-4 font-extrabold">02</span>
                  <h4 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Strategize</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    Based on your requirements, we develop and implement well-defined strategies using industry insights, data-driven approaches, and best practices to ensure optimal outcomes.
                  </p>
                </div>
              </div>
              <div className="bg-[#faf9f6] pl-10">
                <div className="flex flex-col">
                  <span className="font-plus-jakarta text-[#735b28]/15 text-[100px] leading-none mb-4 font-extrabold">03</span>
                  <h4 className="font-plus-jakarta text-xl font-bold mb-4 text-black">Execute</h4>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                    We ensure smooth execution with complete transparency, continuous monitoring, and dedicated support, ensuring successful outcomes and long-term value creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Goals Section */}
        <section className="bg-black text-white py-28">
          <div className="px-20 max-w-[1280px] mx-auto grid grid-cols-12 gap-12">
            <div className="col-span-5 text-white">
              <p className="font-inter text-xs font-bold text-[#fedb9c] mb-4 uppercase tracking-[0.2em]">Our Goals</p>
              <h2 className="font-plus-jakarta text-4xl font-extrabold mb-8 leading-tight">
                Sustainable Conglomerate Goals
              </h2>
              <p className="font-inter text-lg opacity-80 mb-12 leading-relaxed">
                To establish Raha Group as a diversified business conglomerate delivering excellence in Education, Energy, Renewable Energy, Manpower, and emerging business sectors while contributing to India&apos;s sustainable growth. 🚀
              </p>
            </div>
            <div className="col-span-6 col-start-7 space-y-6">
              <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h4 className="font-plus-jakarta text-xl font-bold text-[#fedb9c]">Innovation &amp; Growth</h4>
                <p className="mt-2 text-white/60 font-inter text-sm leading-relaxed">
                  Continuously introduce new business opportunities and technology-driven solutions.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h4 className="font-plus-jakarta text-xl font-bold text-[#fedb9c]">Sustainable Development</h4>
                <p className="mt-2 text-white/60 font-inter text-sm leading-relaxed">
                  Create businesses that generate long-term value for customers, partners, employees, and society.
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h4 className="font-plus-jakarta text-xl font-bold text-[#fedb9c]">Customer Satisfaction</h4>
                <p className="mt-2 text-white/60 font-inter text-sm leading-relaxed">
                  Deliver high-quality services with transparency, trust, and long-term relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Market Analysis */}
        <section className="py-28 px-20 max-w-[1280px] mx-auto">
          <div className="text-center mb-24">
            <span className="font-inter text-xs font-bold text-secondary mb-4 uppercase tracking-[0.2em]">Market Research</span>
            <h2 className="font-plus-jakarta text-4xl font-extrabold text-black">Market Analysis</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-10 border border-black/5 bg-[#efeeeb] rounded-xl">
              <h4 className="font-plus-jakarta text-xl font-bold text-black mb-4">01. Growing Multi-Sector Opportunities</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                India&apos;s rapidly expanding economy is creating strong opportunities across Electric Mobility, Education, and Real Estate. Government initiatives, urban development, and digital transformation continue to drive demand.
              </p>
            </div>
            <div className="p-10 border border-black/5 bg-[#efeeeb] rounded-xl">
              <h4 className="font-plus-jakarta text-xl font-bold text-black mb-4">02. Rising Customer Demand</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Consumers today seek trusted companies that deliver quality, innovation, and long-term value. The increasing need for EV charging infrastructure, career-focused education, and premium real estate solutions reflects consistent demand.
              </p>
            </div>
            <div className="p-10 border border-black/5 bg-[#efeeeb] rounded-xl">
              <h4 className="font-plus-jakarta text-xl font-bold text-black mb-4">03. Strong Future Investment Potential</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                With rising infrastructure investments, expanding urbanization, and the shift towards sustainable technologies, the market offers exceptional long-term growth potential.
              </p>
            </div>
          </div>
        </section>

        {/* Desktop Future Section */}
        <section className="bg-[#0e1c30] text-white py-28 relative overflow-hidden">
          <div className="px-20 max-w-[1280px] mx-auto relative z-10">
            <div className="text-center mb-24">
              <p className="font-inter text-xs font-bold text-[#bac7e2] mb-4 uppercase tracking-[0.2em]">Future Roadmaps</p>
              <h2 className="font-plus-jakarta text-4xl font-extrabold text-white">Future Expansion</h2>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="glass-card p-10 rounded-xl">
                <span className="material-symbols-outlined text-[#fedb9c] text-4xl mb-6">bolt</span>
                <h4 className="font-plus-jakarta text-xl font-bold text-white mb-4">Raha Energy ⚡</h4>
                <p className="text-white/70 font-inter text-sm leading-relaxed">Expanding reliable energy solutions with a focus on innovation, efficiency, and nationwide accessibility.</p>
              </div>
              <div className="glass-card p-10 rounded-xl">
                <span className="material-symbols-outlined text-[#fedb9c] text-4xl mb-6">groups</span>
                <h4 className="font-plus-jakarta text-xl font-bold text-white mb-4">Raha Manpower 👷</h4>
                <p className="text-white/70 font-inter text-sm leading-relaxed">Building a trusted workforce solutions platform by connecting skilled professionals with leading organizations.</p>
              </div>
              <div className="glass-card p-10 rounded-xl">
                <span className="material-symbols-outlined text-[#fedb9c] text-4xl mb-6">wb_sunny</span>
                <h4 className="font-plus-jakarta text-xl font-bold text-white mb-4">Raha Solar ☀</h4>
                <p className="text-white/70 font-inter text-sm leading-relaxed">Driving India&apos;s clean energy transition through advanced solar solutions for residential and commercial sectors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Leadership Section */}
        <section className="py-28 px-20 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-5 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKSTblb7BTpjUSPbQN9j9Plxxr5T7uurqKGzCpZpLDB0GGkW2V2WmihvZ3wP_e5EBVFPTlRkPwxlexjd_jYOo8lgh1Ed4NUhlljnuqGjH90JQ7mioyQaDXjj0FXlj6Dtmuamv-ZER14RLbMF6mAtQwnoAHkd33hnUvdcrClZuODD0aCzqZCJf0rc-S_jVaqQv7xp_5z1nkP2wjkVsiqBSO60QQRGzmna63JmlN_KKGmJYOA2ip7wgw')",
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary px-6 py-3 text-white font-inter text-xs font-bold uppercase tracking-wider">
                CHAIRMAN &amp; CEO
              </div>
            </div>
            <div className="col-span-6 col-start-8">
              <span className="material-symbols-outlined text-6xl text-[#735b28] mb-6">format_quote</span>
              <blockquote className="font-plus-jakarta text-3xl font-bold leading-tight mb-8 text-black">
                &quot;Real excellence isn&apos;t just about the structure we build; it&apos;s about the standard we set for the entire industry. We build for the next century.&quot;
              </blockquote>
              <div className="h-px w-20 bg-black mb-4"></div>
              <p className="font-plus-jakarta text-xl font-bold text-black">Zeeshan Raha</p>
              <p className="font-inter text-xs text-on-surface-variant uppercase tracking-widest mt-1">Group Chairman &amp; CEO, Raha Group</p>
            </div>
          </div>
        </section>

        {/* Desktop CTA Banner */}
        <section className="bg-black text-white py-28 text-center">
          <div className="px-20 max-w-3xl mx-auto">
            <h2 className="font-plus-jakarta text-5xl font-extrabold text-white mb-8 leading-tight">
              Let&apos;s Build the Future Together
            </h2>
            <p className="font-inter text-lg text-white/70 mb-10 leading-relaxed">
              Whether you&apos;re looking to invest, partner, or join our global team, the journey starts here.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="mailto:info@rahagroup.co.in" 
                className="bg-[#fedb9c] text-black px-10 py-4 rounded-lg font-inter text-sm font-bold hover:scale-105 transition-all text-center"
              >
                Start a Conversation
              </a>
              <Link 
                href="/#presentation" 
                className="border border-white/30 text-white px-10 py-4 rounded-lg font-inter text-sm font-bold hover:bg-white/10 transition-all text-center"
              >
                Corporate Presentation
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE ONLY LAYOUT (block md:hidden)                                   */}
      {/* ========================================================================= */}
      <div className="block md:hidden">
        {/* Mobile Hero Section */}
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full opacity-60 bg-cover bg-center" 
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCn8BC2D81M9q0NYmEfTBnFS4eFiZxUFSJFnPOcmquRz9Id4bFEakcpQr7sTM-tVF8dwa51MQoyaCuSnR3_ZmFGFNVQn_wESClpTaXsqBmDVbZFhPY_FA6eEBU5GnzJZRPOJVfT6pd6gGN7mZWkihW7-5Lh27UCD4G7ZqKk3y2Ew1eTx8nq61O3y4TinACOgw1GzHDvsUHkeUn4TQ8G2Wncc2y3u6n9Ny_JOxpKYLCpkvN2EVu9zMO-')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>
          <div className="container mx-auto px-6 z-10 animate-fade-up">
            <div className="max-w-4xl">
              <span className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#fedb9c] mb-6 block">
                Legacy in the Making
              </span>
              <h1 className="font-plus-jakarta text-4xl font-extrabold text-white mb-12 leading-tight">
                Building Businesses That <br /> Shape Tomorrow
              </h1>
              <div className="flex flex-col gap-4">
                <Link 
                  href="/#verticals-mobile" 
                  className="bg-[#735b28] text-white px-8 py-4 rounded-lg font-inter text-sm uppercase font-bold text-center hover:scale-105 transition-transform duration-300"
                >
                  Explore Our Companies
                </Link>
                <a 
                  href="mailto:info@rahagroup.co.in" 
                  className="border border-white/30 text-white px-8 py-4 rounded-lg font-inter text-sm uppercase text-center hover:bg-white/10 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile About Section (Asymmetric) */}
        <section className="py-12 bg-white" id="about-mobile">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <div 
                  className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx-d1WoR-YbUPWuCn_MWy8tIwior4uPTTGoho1H2SVUh9e_WEAj9-ksKy2Ck8Yj8KqNQCpDZLSdisa2XoUvC5GZgR8xv3ytZk55MGvM9Nniqerkq7PBvcEyk9KpdsO9DB6iTBw7LYh7R8iG2WyaflCxsHOrYjKelUvgGcd37S3t0OwUNB9Z6m4eukcJDhwra34N-L1QoXapC5lTNxGYGiEKSNPXBPS8QS9oiDtQQ42qISze_e4NUEi')",
                  }}
                />
              </div>
              <div>
                <span className="font-inter text-xs text-[#735b28] font-bold uppercase tracking-widest mb-4 block gold-underline">
                  About Our Company
                </span>
                <h2 className="font-plus-jakarta text-2xl font-extrabold text-black mb-6 leading-tight">
                  Raha Group
                </h2>
                <p className="font-inter text-sm text-on-surface-variant mb-8 leading-relaxed">
                  Raha Group is a diversified business group committed to delivering innovative, reliable, and growth-oriented solutions across multiple industries. With a strong focus on technology, education, and real estate, Raha Group has established itself as a trusted partner for businesses and individuals seeking excellence. Our philosophy is built on innovation, integrity, customer satisfaction, and long-term value creation.
                </p>
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="text-[#735b28] font-bold text-2xl mb-1">15,000+</div>
                    <div className="font-inter text-xs uppercase tracking-wider text-on-surface-variant">Customers &amp; People Reached</div>
                    <p className="font-inter text-xs text-on-surface-variant leading-relaxed mt-1">
                      Through our businesses in EV charging, education, and real estate, we connect thousands of users.
                    </p>
                  </div>
                  <div>
                    <div className="text-[#735b28] font-bold text-2xl mb-1">3+</div>
                    <div className="font-inter text-xs uppercase tracking-wider text-on-surface-variant">Business Verticals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Business Verticals */}
        <section id="verticals-mobile" className="py-12 bg-[#efeeeb]">
          <div className="container mx-auto px-6 text-center mb-10">
            <span className="font-inter text-xs text-[#735b28] font-bold uppercase tracking-[0.2em] mb-3 block">Our Portfolio</span>
            <h2 className="font-plus-jakarta text-2xl font-extrabold text-black">Strategic Business Verticals</h2>
          </div>
          <div className="container mx-auto px-6 flex flex-col gap-8">
            {/* Raha Infra */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkQjLSgBFtZJ-reWbzWM6t7g51LKWmk1eQ7WOp0RJpaRYuUKvhOqiMclk1GRWoXWgI8j9s9YRboJBeYr0qmNup4UtX2xsAncE8wa_c8ZRGbYubAjwvqytzyxl0GUwwGcVAIgSASyD3LsdZJtZ1Mru74TbDdGMypcpW-5ObYTz7ID5BD4qnucp5hKSmzl-Wk-y8S0AIjn8i_3G0WnDVy8XeoP_ozUmXIrBiayzxxsRQrSVx8_wffq9I')",
                }}
              />
              <div className="p-8">
                <div className="font-inter text-xs text-[#735b28] font-bold uppercase mb-2">Real Estate</div>
                <h3 className="font-plus-jakarta text-xl font-bold text-black mb-3">Raha Infra</h3>
                <p className="font-inter text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Complete real estate solutions for residential and commercial properties, investment advisory, property consulting, and seamless buying &amp; selling assistance.
                </p>
                <Link href="/infra" className="inline-flex items-center gap-2 text-[#735b28] font-bold font-inter uppercase text-xs tracking-widest">
                  View Sector <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Learnixa */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9BOs5AyrHTq1PaRKriYimjLTU4TrXFjILlTBNlc-dkaV1QA5JaHSZNsv6GrUdrsTSvil7oAGyrRm7cC6s4isGRpZjj9doAyOkkLOEc39MNgcODKW71v9r2gqvO3-PUom_laqk7Xmq4mdPCc8L59YMxnME-ikBlM0MJPTFyqGIBbBidDIDFe2k2slFZlMKyjicVtNo_aScw3tV8rBPnuibbtDAidyGzvHWPpnYPV6x89KkMASGZlmo')",
                }}
              />
              <div className="p-8">
                <div className="font-inter text-xs text-[#735b28] font-bold uppercase mb-2">Education</div>
                <h3 className="font-plus-jakarta text-xl font-bold text-black mb-3">Learnixa</h3>
                <p className="font-inter text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Expert guidance for MBBS in India &amp; Abroad, career counselling, university admissions, documentation, and visa support.
                </p>
                <Link href="/learnixa" className="inline-flex items-center gap-2 text-[#735b28] font-bold font-inter uppercase text-xs tracking-widest">
                  View Sector <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Big Think */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCj7nt1BxqH3FFzypEuD_Xzi5vntncdE8hu5Hhl6rfmmPHuqY14U09b64FSjjWgfGyilEdlGX-rLwnMwE92AbQkqxN4zQevUCxjbLvMyQ6O328CBTmDXoyFifyRrJGUDvtsWJzIuyIDvjGGhs6r9azJV6hCffKdRL4urdgpGQdJCUtsioM3kzjDcMUdjSIgVAs-vBA5GNjv2KkBAPAf1K5MpfsaysHSCx5VRQUXTmu9_S6NDo5Jyzi0')",
                }}
              />
              <div className="p-8">
                <div className="font-inter text-xs text-[#735b28] font-bold uppercase mb-2">Technology</div>
                <h3 className="font-plus-jakarta text-xl font-bold text-black mb-3">Big Think</h3>
                <p className="font-inter text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Innovative digital marketing solutions including social media marketing, performance ads, branding, website development, and lead generation.
                </p>
                <Link href="/bigthink" className="inline-flex items-center gap-2 text-[#735b28] font-bold font-inter uppercase text-xs tracking-widest">
                  View Sector <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Why Raha Group (Values) */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 flex flex-col gap-10">
            <div>
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-4">workspace_premium</span>
              <h3 className="font-plus-jakarta text-lg font-bold mb-3 text-black">Innovation &amp; Growth</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Continuously introduce new business opportunities and technology-driven solutions.
              </p>
            </div>
            <div>
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-4">visibility</span>
              <h3 className="font-plus-jakarta text-lg font-bold mb-3 text-black">Sustainable Development</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Create businesses that generate long-term value for customers, partners, employees, and society.
              </p>
            </div>
            <div>
              <span className="material-symbols-outlined text-[#735b28] text-4xl mb-4">diversity_3</span>
              <h3 className="font-plus-jakarta text-lg font-bold mb-3 text-black">Customer Satisfaction</h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Deliver high-quality services with transparency, trust, and long-term relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Methodology/Process */}
        <section className="py-12 bg-[#efeeeb]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-10">
              <div>
                <span className="font-inter text-xs text-[#735b28] font-bold uppercase tracking-[0.2em] mb-3 block">Our Methodology</span>
                <h2 className="font-plus-jakarta text-2xl font-extrabold text-black mb-4">The Process</h2>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-6">
                  At Raha Group, we follow a simple, transparent, and client-focused approach to ensure a smooth and secure investment journey.
                </p>
                <div 
                  className="w-full aspect-square rounded-xl bg-cover bg-center shadow-md"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCikymPv3NEcctPxjzAYTPKxe5pZi_bkXTxV5qDeMhMr0v6JqnmE7nwlFw9jcfGxyGygG3ivmD0LNWiXyssoWDnrBPjurDdJsbfq7QraiP7yTAtlUrHjfqXNkgn3rOtiHzUDX5-XC_aZPF6ezG0bzNA4l_g_qvZFtxvZoN7dOdLRZqBpqVAKLqS_o5M7WtyKfZTtse1zy9jMi-EwxVRsB99LFzpRaIAoJq_Mwx8rXEZFv9CYx6v0VvB')",
                  }}
                />
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="font-plus-jakarta text-[#735b28] opacity-35 text-4xl font-extrabold leading-none">01</div>
                  <div>
                    <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-black">Understand</h4>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                      We begin by understanding your business needs, objectives, and expectations. Our team evaluates requirements carefully to design tailored solutions aligned with your long-term goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="font-plus-jakarta text-[#735b28] opacity-35 text-4xl font-extrabold leading-none">02</div>
                  <div>
                    <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-black">Strategize</h4>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                      Based on your requirements, we develop and implement well-defined strategies using industry insights, data-driven approaches, and best practices to ensure optimal outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="font-plus-jakarta text-[#735b28] opacity-35 text-4xl font-extrabold leading-none">03</div>
                  <div>
                    <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-black">Execute</h4>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                      We ensure smooth execution with complete transparency, continuous monitoring, and dedicated support, ensuring successful outcomes and long-term value creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile The Raha Alpha (Market Insights) */}
        <section className="py-12 bg-black text-white" id="investment-mobile">
          <div className="container mx-auto px-6">
            <div className="mb-10">
              <span className="font-inter text-xs text-[#fedb9c] font-bold uppercase tracking-widest mb-3 block">Market Insight</span>
              <h2 className="font-plus-jakarta text-3xl font-extrabold text-white leading-tight">Market Analysis</h2>
              <p className="font-inter text-sm text-white/70 leading-relaxed mt-4">
                Strategic conglomerate position capitalization in modern multi-sector spaces.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-8 border border-white/10 rounded-xl hover:bg-[#735b28]/10 transition-colors">
                <h4 className="font-plus-jakarta text-lg font-bold mb-4 text-white">Growing Multi-Sector Opportunities</h4>
                <p className="font-inter text-sm text-white/60 mb-6">India&apos;s rapidly expanding economy is creating strong opportunities across Electric Mobility, Education, and Real Estate.</p>
                <div className="h-1 bg-[#735b28] w-12" />
              </div>
              <div className="p-8 border border-white/10 rounded-xl hover:bg-[#735b28]/10 transition-colors">
                <h4 className="font-plus-jakarta text-lg font-bold mb-4 text-white">Rising Customer Demand</h4>
                <p className="font-inter text-sm text-white/60 mb-6">Consumers seek trusted companies that deliver quality, innovation, and long-term value (such as EV charging and real estate solutions).</p>
                <div className="h-1 bg-[#735b28] w-12" />
              </div>
              <div className="p-8 border border-white/10 rounded-xl hover:bg-[#735b28]/10 transition-colors">
                <h4 className="font-plus-jakarta text-lg font-bold mb-4 text-white">Strong Future Investment Potential</h4>
                <p className="font-inter text-sm text-white/60 mb-6">With rising infrastructure investments, urbanization, and shift towards sustainable tech, the market offers exceptional growth potential.</p>
                <div className="h-1 bg-[#735b28] w-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Future Frontiers (Roadmaps) */}
        <section className="py-12 bg-[#0a1120] text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-plus-jakarta text-2xl font-bold text-white mb-2">Future Frontiers</h2>
              <p className="font-inter text-sm text-white/60">Exploring the next wave of roadmaps.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl text-center">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">bolt</span>
                <h5 className="font-inter text-xs font-bold uppercase tracking-wider text-white">Raha Energy ⚡</h5>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">groups_3</span>
                <h5 className="font-inter text-xs font-bold uppercase tracking-wider text-white">Raha Manpower 👷</h5>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">solar_power</span>
                <h5 className="font-inter text-xs font-bold uppercase tracking-wider text-white">Raha Solar ☀</h5>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Leadership Section */}
        <section className="py-12 bg-[#efeeeb]" id="leadership-mobile">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <div 
                  className="w-full aspect-[4/5] bg-cover bg-center rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-lg"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKSTblb7BTpjUSPbQN9j9Plxxr5T7uurqKGzCpZpLDB0GGkW2V2WmihvZ3wP_e5EBVFPTlRkPwxlexjd_jYOo8lgh1Ed4NUhlljnuqGjH90JQ7mioyQaDXjj0FXlj6Dtmuamv-ZER14RLbMF6mAtQwnoAHkd33hnUvdcrClZuODD0aCzqZCJf0rc-S_jVaqQv7xp_5z1nkP2wjkVsiqBSO60QQRGzmna63JmlN_KKGmJYOA2ip7wgw')",
                  }}
                />
              </div>
              <div>
                <span className="material-symbols-outlined text-[#735b28] text-5xl mb-4 opacity-25">format_quote</span>
                <blockquote className="font-plus-jakarta text-xl font-extrabold text-black mb-6 italic leading-tight">
                  &quot;Real excellence isn&apos;t just about the structure we build; it&apos;s about the standard we set for the entire industry. We build for the next century.&quot;
                </blockquote>
                <div className="h-px w-20 bg-[#735b28] mb-4" />
                <h4 className="font-plus-jakarta text-lg font-bold text-black">Zeeshan Raha</h4>
                <p className="text-[#735b28] font-inter text-xs uppercase tracking-widest mt-1">Group Chairman &amp; CEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile CTA Banner */}
        <section className="py-12 bg-black text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-plus-jakarta text-2xl font-extrabold mb-6 leading-tight">Let&apos;s Build the Future Together</h2>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:info@rahagroup.co.in" 
                className="bg-[#735b28] text-white px-8 py-4 rounded-lg font-bold font-inter uppercase text-xs tracking-widest text-center"
              >
                Start a Conversation
              </a>
              <Link 
                href="/#report" 
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-bold font-inter uppercase text-xs tracking-widest text-center"
              >
                Download Annual Report
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
