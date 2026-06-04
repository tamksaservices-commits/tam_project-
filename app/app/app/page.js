import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#03101F] text-white font-sans selection:bg-[#007A3D]">
      {/* الهيدر الزجاجي */}
      <header className="fixed top-0 w-full z-50 bg-[#03101F]/70 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">تـم</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="#services" className="hover:text-white transition">خدماتنا</Link>
          <Link href="#about" className="hover:text-white transition">من نحن</Link>
        </nav>
        <a href="https://wa.me/966579484771" target="_blank" className="bg-[#007A3D] hover:bg-[#00994C] text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-lg shadow-[#007A3D]/20">اطلب خدمة</a>
      </header>

      {/* قسم الـ Hero الرئيسي */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center relative overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">خدمات طلابية وتصاميم<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007A3D] to-[#00994C]">تنجزها باحترافية مطلقة</span></h1>
        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">نحوّل أفكارك وملفاتك إلى أعمال مرتبة، فاخرة، وجاهزة للعرض بأعلى معايير الجودة والدقة الإملائية والتنسيقية.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/966579484771" target="_blank" className="bg-[#007A3D] hover:bg-[#00994C] text-white px-8 py-4 rounded-xl font-bold transition transform hover:-translate-y-0.5">ابدأ مشروعك الآن</a>
          <a href="#services" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition">شاهد خدماتنا</a>
        </div>
      </section>

      {/* شبكة الخدمات مصفوفة Bento Grid */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">خدمات متكاملة في مكان واحد</h2>
          <p className="text-gray-400">كل ما تحتاجه لإبهار أساتذتك وحضورك مجهز بأيدي خبراء</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "عروض PowerPoint", desc: "تصميم شرائح تفاعلية ومبهرة متوافقة مع الهوية البصرية لمشروعك.", icon: "💻" },
            { title: "تنسيق ملفات Word", desc: "ترتيب الجداول، الخطوط، والمراجع وفق المعايير الأكاديمية الدقيقة.", icon: "📄" },
            { title: "سيرة ذاتية ATS", desc: "كتابة وتصميم سيرة ذاتية تتخطى فلاتر التوظيف الذكية وتبرز مهاراتك.", icon: "🪪" },
            { title: "تهنئات وتخرج", desc: "صياغة وتصميم بطاقات عبارات تهنئة ومناسبات فريدة وفاخرة.", icon: "🎓" }
          ].map((srv, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:border-[#007A3D]/50 transition group flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4 bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl">{srv.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#007A3D] transition">{srv.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{srv.desc}</p>
              </div>
              <a href="https://wa.me/966579484771" target="_blank" className="mt-6 text-sm font-semibold text-[#007A3D] flex items-center gap-1 hover:underline">اطلب الخدمة ←</a>
            </div>
          ))}
        </div>
      </section>

      {/* الفوتر */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} تم للخدمات الطلابية والتصميم. جميع الحقوق محفوظة.</p>
        <p className="mt-2 text-xs">تواصل معنا: tamksaservices@gmail.com | Instagram: @i.ss5</p>
      </footer>
    </div>
  );
}
