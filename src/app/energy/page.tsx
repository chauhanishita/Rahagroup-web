import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Energy() {
  return (
    <>
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center brightness-[0.4]" 
              style={{
                backgroundImage: "url('/images/energy_hero.png')",
              }}
            />
          </div>
          <div className="relative z-10 text-center px-6 md:px-20 max-w-5xl animate-fade-up">
            <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase mb-6 block tracking-[0.2em]">Raha Energy Division</span>
            <h1 className="font-plus-jakarta text-4xl md:text-6xl font-extrabold text-white mb-8">
              Powering the Future with <br className="hidden md:block"/>Clean Integrity
            </h1>
            <p className="font-inter text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12">
              Leading the global transition through architectural precision in renewable infrastructure and grid intelligence.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/#contact" className="bg-[#735b28] text-white font-inter text-sm font-bold uppercase tracking-widest px-12 py-5 rounded-lg hover:scale-105 transition-all text-center">
                Explore Our Portfolio
              </Link>
              <Link href="/about" className="border border-white text-white font-inter text-sm font-bold uppercase tracking-widest px-12 py-5 rounded-lg hover:bg-white/10 transition-all text-center">
                Download Vision Paper
              </Link>
            </div>
          </div>
        </section>

        {/* Core Verticals */}
        <section className="py-28 px-6 md:px-20 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Solar Energy */}
            <div className="flex flex-col group">
              <div className="overflow-hidden mb-8 rounded-xl h-[450px]">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{
                    backgroundImage: "url('/images/solar_cell.png')",
                  }}
                />
              </div>
              <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest mb-4">Vertical 01</span>
              <h2 className="font-plus-jakarta text-3xl font-extrabold text-black mb-6">Solar Energy</h2>
              <p className="font-inter text-base text-on-surface-variant mb-8 max-w-lg leading-relaxed">
                We deploy utility-scale solar installations that redefine energy landscapes. From massive desert arrays to integrated residential ecosystems, our solar division merges structural beauty with maximum yield.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Utility-Scale Plants
                </li>
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Residential Smart Solutions
                </li>
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Photovoltaic Innovation Hub
                </li>
              </ul>
            </div>

            {/* Conventional Energy */}
            <div className="flex flex-col group md:mt-24">
              <div className="overflow-hidden mb-8 rounded-xl h-[450px]">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{
                    backgroundImage: "url('/images/control_room.png')",
                  }}
                />
              </div>
              <span className="font-inter text-xs text-secondary font-bold uppercase tracking-widest mb-4">Vertical 02</span>
              <h2 className="font-plus-jakarta text-3xl font-extrabold text-black mb-6">Conventional Energy</h2>
              <p className="font-inter text-base text-on-surface-variant mb-8 max-w-lg leading-relaxed">
                Stability meets sustainability. We optimize existing grid infrastructures and transitional power systems to ensure the world remains powered as we bridge the gap to a fully carbon-neutral future.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Grid Optimization Systems
                </li>
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Transitional Hybrid Power
                </li>
                <li className="flex items-center gap-4 text-on-surface font-inter text-sm">
                  <span className="w-1.5 h-1.5 bg-[#735b28] rounded-full"></span> Distribution Efficiency
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Strategic Impact */}
        <section className="bg-black text-white py-28 overflow-hidden">
          <div className="px-6 md:px-20 max-w-[1280px] mx-auto">
            <div className="text-center mb-20">
              <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase tracking-[0.25em] mb-4 block">Proven Performance</span>
              <h2 className="font-plus-jakarta text-4xl font-extrabold text-white">Our Strategic Impact</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center py-8 border-b md:border-b-0 md:border-r border-white/10 last:border-0">
                <div className="font-plus-jakarta text-5xl font-extrabold text-[#fedb9c] mb-4">12.8 GW</div>
                <div className="font-inter text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Total Managed Capacity</div>
                <p className="font-inter text-xs text-white/50 max-w-xs mx-auto">Utility-scale deployments operating at peak efficiencies across multiple international energy corridors.</p>
              </div>
              <div className="text-center py-8 border-b md:border-b-0 md:border-r border-white/10 last:border-0">
                <div className="font-plus-jakarta text-5xl font-extrabold text-[#fedb9c] mb-4">99.98%</div>
                <div className="font-inter text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Grid Uptime &amp; Reliability</div>
                <p className="font-inter text-xs text-white/50 max-w-xs mx-auto">Constant delivery through advanced automated optimization and smart substations.</p>
              </div>
              <div className="text-center py-8 last:border-0">
                <div className="font-plus-jakarta text-5xl font-extrabold text-[#fedb9c] mb-4">-35%</div>
                <div className="font-inter text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Carbon Footprint Reduction</div>
                <p className="font-inter text-xs text-white/50 max-w-xs mx-auto">Driving absolute emission offsets for our commercial and sovereign partners.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-28 px-6 md:px-20 max-w-[1280px] mx-auto">
          <div className="text-center mb-24">
            <span className="font-inter text-xs font-bold text-secondary uppercase block mb-4 tracking-[0.2em]">Engineering Detail</span>
            <h2 className="font-plus-jakarta text-4xl font-extrabold text-black">Technical Excellence</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#efeeeb]/50 p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">battery_charging_full</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Storage Solutions</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Integrated lithium-ion and flow battery facilities providing grid resilience during low peak solar hours.</p>
            </div>
            <div className="bg-[#efeeeb]/50 p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">grid_on</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Smart Grids</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Automated grid stabilization using predictive AI workloads to map load requirements instantly.</p>
            </div>
            <div className="bg-[#efeeeb]/50 p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">source</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Sourcing</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">Highly ethical supply chain integration procurement mapping back to verified suppliers.</p>
            </div>
            <div className="bg-[#efeeeb]/50 p-8 rounded-xl border border-black/5">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4">account_tree</span>
              <h4 className="font-plus-jakarta font-bold text-black text-lg mb-2">Distribution</h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">High-voltage transmission engineering designed for minimal loss and maximum reach.</p>
            </div>
          </div>
        </section>

        {/* EV Charging Section */}
        <section className="py-28 px-6 md:px-20 max-w-[1280px] mx-auto bg-white rounded-2xl mb-12 border border-black/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-6 flex flex-col justify-between">
              <div>
                <span className="font-inter text-xs text-secondary font-bold uppercase mb-4 tracking-[0.2em] block">EV Infrastructure</span>
                <h2 className="font-plus-jakarta text-4xl font-extrabold text-black mb-6 leading-tight">
                  Powering the Future of <br/>Electric Mobility
                </h2>
                <p className="font-inter text-base text-on-surface-variant mb-8 leading-relaxed">
                  Fast, reliable, and smart EV charging solutions for homes, businesses, fleets, and public spaces. Charge with confidence anytime, anywhere.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link href="/#contact" className="bg-black text-white px-6 py-3 rounded-lg font-inter text-xs font-bold uppercase tracking-wider hover:bg-[#735b28] transition-colors text-center">
                  Find a Charging Station
                </Link>
                <Link href="/#contact" className="border border-black text-black px-6 py-3 rounded-lg font-inter text-xs font-bold uppercase tracking-wider hover:bg-black/5 transition-colors text-center">
                  Become a Partner
                </Link>
                <Link href="/about" className="border border-black/20 text-black/60 px-6 py-3 rounded-lg font-inter text-xs font-bold uppercase tracking-wider hover:bg-black/5 transition-colors text-center">
                  About Us
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 flex flex-col justify-center bg-[#efeeeb]/50 p-10 rounded-2xl border border-black/5">
              <h3 className="font-plus-jakarta text-2xl font-bold text-black mb-6">
                Driving the Future with Clean Energy
              </h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-6">
                We are committed to accelerating the adoption of electric vehicles by providing safe, efficient, and reliable EV charging infrastructure. Our advanced charging solutions are designed to meet the growing needs of EV owners while supporting a cleaner, greener, and more sustainable future.
              </p>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Whether you&apos;re an individual EV owner, a business, or a fleet operator, we deliver seamless charging experiences backed by cutting-edge technology and exceptional customer support.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-black text-white py-28">
          <div className="px-6 md:px-20 max-w-[1280px] mx-auto">
            <div className="text-center mb-20">
              <span className="font-inter text-xs font-bold text-[#fedb9c] uppercase tracking-[0.25em] mb-4 block">Benefits &amp; Advantage</span>
              <h2 className="font-plus-jakarta text-4xl font-extrabold text-white">Why Choose Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">bolt</span>
                <h4 className="font-plus-jakarta font-bold text-white text-lg mb-2">Ultra-Fast Charging</h4>
                <p className="font-inter text-xs text-white/60 leading-relaxed">High-power charging systems designed to get you back on the road in minutes.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">support_agent</span>
                <h4 className="font-plus-jakarta font-bold text-white text-lg mb-2">24/7 Support</h4>
                <p className="font-inter text-xs text-white/60 leading-relaxed">Dedicated assistance around the clock for seamless operation and peace of mind.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">verified_user</span>
                <h4 className="font-plus-jakarta font-bold text-white text-lg mb-2">Safe &amp; Certified</h4>
                <p className="font-inter text-xs text-white/60 leading-relaxed">Equipment tested and certified to meet the highest safety and international standards.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">monitoring</span>
                <h4 className="font-plus-jakarta font-bold text-white text-lg mb-2">Smart Monitoring</h4>
                <p className="font-inter text-xs text-white/60 leading-relaxed">Real-time tracking, usage analytics, and intelligent power management systems.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">payments</span>
                <h4 className="font-plus-jakarta font-bold text-white text-lg mb-2">Affordable Pricing</h4>
                <p className="font-inter text-xs text-white/60 leading-relaxed">Transparent cost structures and competitive rates for all charging tiers.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">eco</span>
                <h4 className="font-plus-jakarta font-bold text-white text-lg mb-2">Eco-Friendly Energy</h4>
                <p className="font-inter text-xs text-white/60 leading-relaxed">Power sourced from clean, renewable utility integrations to minimize footprint.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">engineering</span>
                <h4 className="font-plus-jakarta font-bold text-white text-lg mb-2">Experienced Installation</h4>
                <p className="font-inter text-xs text-white/60 leading-relaxed">Certified technicians ensuring clean, secure, and optimal hardware setup.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <span className="material-symbols-outlined text-[#fedb9c] text-3xl mb-4">settings_input_component</span>
                <h4 className="font-plus-jakarta font-bold text-white text-lg mb-2">Reliable Network</h4>
                <p className="font-inter text-xs text-white/60 leading-relaxed">Consistent high uptime network ensuring availability when you need it most.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
