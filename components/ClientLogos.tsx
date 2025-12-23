
import React from 'react';

const ClientLogos: React.FC = () => {
  const logos = [
    { name: "Shero", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI6bv8UX6O958e75UcNzpT6Q0IbOHnf31HFZfLscAJzZjBdZEUexRCXUiJQWIa1c1iCiTo569mzgkBJ9EzK5jEVSZeYPRpOXIUI2jwQXwpFLLJyPPEKuUM4cXMKOCkv-bqoyRvXjzYAXYgdnO3jBoo0WWXmOy9HQLyv1aTDKBkgD8hPumhq0-BHNo-VeTchNYBxdMU4ORC_P1tmVBN0KoUwsCXNVtYHaQKkR4ZYq7Wrk99M9G7ZWgYMlylbNmB5EttgJ-xhEkpxw", height: "h-10" },
    { name: "Moore", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBarkviJTMHD09V08hMnd4vl8_S2I44TAw_BSjCpbEyX7-bgniU3GkphMTvWXnC5QC_ctMW7DuO4hScp9KZwaJtfyjC_382yKgHwKUrSnK9e6i9Em2HMKZnnv6wLzkDhuyr25vrhmr9CFbjr4vPFK7NiLPc-YJ5AVKAFDcxVSIBQyVwpn_SLaqBhia8G77AUwZUEHQk5dj6w0-8Aam-rwgO0T-mugmMqeeIImnN1ahzWJrhZErdanFkk18CWUBtjUP71la3ch5J3g", height: "h-12" },
    { name: "Beez", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQMI8XtYJy7m4ISBnRXHFiiKitwU4DDlGomajETQiQU39LzH3XjTHN7UKMxEUkalR84UibOYt2JjKXsfPi1esoACWBiV_ERnEz8x-jF7GwroFQVvXpX1NBjwm06p9REYBvbHZyW8iL_5SEFgIwwR4O4PlCiq3bkHdy24SMZfMrFsQZ64JmWO-8Ei8vv1nKtGiLsDlzQFVyx-SvOJMrR6hnzShjsrnZsdXnl5hDlq5bYTxQ2R2HgvV7EUgSKjHRHA7C-Pd8kcyXrw", height: "h-10" },
    { name: "Yelzhim", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6t3qE09S0365LaSMRZnfFGTly0CIfETnrSvMDL40wqFoHD8iZ2f-jtEk_KVmENZDUSeH3Qw70bYuVwBF5ueBX-mVfZ3jzXc04HRk1kGKIeOahmbadVkxrn3xifeojnDzCjRuflAJARv2yJGTmkI6_7aS3IxlbrzUmAOJKuKlb3pu8iwHmmy_SCErdlbijeTnCmHrVygn1V95tcuVyebOfXI1_mNw1dZ0beJpaPmUIf_-z64qrJbgW7ycLbLObjrhajcPC8HTRBA", height: "h-8" },
    { name: "Elnomalie", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7VZiB2GzcpTRrSHWXY3cuOrsxI6ekxJaCQsKdtrqBI4Lacol2vXKwAeJI7c40P2NKSm7Xmv_osa01iu_1gtlF0ScrMQxbECzrdUEO2qdDP8oRYCkQ1VcKA5Dc6oUQ_t7HC7Gl63RhcJewJuPkubB4VRgrlBHMJC5kK-LfGs0orHS9MckwOn0bOdj1kgC_m3ik215Lx_eJq9uajB-BsehKkIZ0MGWSDP5ijMQ1FS8Dg80m5iQ2RBlZPTfEs54RSGWX0LZe2bEc_A", height: "h-6" }
  ];

  return (
    <section className="py-24 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Previous & current clients include
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-24">
          {logos.map((logo, idx) => (
            <div key={idx} className="w-32 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0">
              <img alt={logo.name} className={`${logo.height} object-contain invert`} src={logo.url} />
            </div>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto bg-card-dark border border-accent/20 rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-300 hover:border-accent/50 hover:shadow-accent/5">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-800 shadow-lg">
                <img 
                  alt="Client portrait" 
                  className="w-full h-full object-cover" 
                  src="https://picsum.photos/seed/portrait/400/400" 
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
                "$75,000 Cost Savings in Year One Through A.I Automation"
              </h3>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                "We went from missing 40% of our leads to capturing 96% of them. That translated to an additional $47,000 in revenue in just the first quarter alone. The ROI was instant."
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                 <span className="w-8 h-[1px] bg-primary"></span>
                 <p className="text-sm font-bold text-primary uppercase tracking-widest">
                  Tech Consulting Co.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
