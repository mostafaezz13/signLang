import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const TEAM = [
  {
    name: "Dr. Omar Al-Fayed",
    role: "Lead AI Researcher",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Q31b4UO5qIQ2R6m1QujfJIf3fQMh1wFZWafS0nHeMlng-fN5zWuQ-VLFsBBbqzDMF9BggyeqQ4rCwnESlFO1GeCLIWwtPAbLLoTTiMPSYBEye13AxqCEd3Hka6LtbsmwgGBlwKX2qgyzrA_AeUH-CApZCeqtXwLepazGMd55XKYzpLfI-_MODa-V6uJTlGF9ZomRJwxNiYtwpgo4lmjmoM55TN2yF0AFZ40lACmYeQxVUew5A95WSxnez8hL-G6WWsF91Xry5uc",
  },
  {
    name: "Laila Mansour",
    role: "Accessibility Lead",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO9alNSFwyJgNNeHfpHtJRXWrJxG9eJ7Z7ErDsA8fx_5kDk0kATdPbPMU_G22hSnZIlEXk8BxUJiRn1K80-oABhEa1TMxgwfhbtmAAm8o3ezSjpocfSBTd7Cgt5HZG69Cx788nHIdN4fvUiV5wm21E0AfodfR8HgBirjBKKECDlEIL7yJZRAu0fVJL7sV7OHek-AXtYWcAbmzPHatI-ur86DEKq1nDtMv13QJ43QcyXG_P8HsIzbQEIGBiRguQBT3c1Y13rEzKQ4M",
  },
  {
    name: "Karim Zeid",
    role: "Product Design",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtxfZR-ByLo90XPGXwDyBkNzmvMRzt5qzDaFjt3h_Vaz_evT-ULn1kvHiajbHZSOqCr94lzxVGHD3womTXt0FoGhVT0XCXsAO0gZd_sPLlm8gBYYKOvCEyw0K845mshpZyUTAuv5SA-luy-uTaeIi5GdDSNGcXPX1hf7-6cNbC6Zot-WdnUaFHFsWVQYPsgMcENyrPVupBSNxqsVW6lthuUMDMR20a-wWhDbIrhQFW8jTWv04kRj0HCIPiFc2JkQbpalDMiAVu1nM",
  },
  {
    name: "Fatima El-Amin",
    role: "Linguistic Consultant",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmKrixopWT2ufjHbz74IbCbseFLUBcWtleQKJiPQqU7Zqg-M6DHl1kiTxdHMCKCA2zo6shg01TOVwyN5F1NZM5KZ0Ip1Nj7AEBtQEDX4W4fpV-yuCRRyl7Mm0APpRHFFCZqKCWY7ji35l3AL0EaFqonMfb1T7AC9xVkIy5vIvZyV1QoYRtqqijOUySuRG0tjBlF1W1CFK8mIuSl9XWf1gnTcfnYjvZmXWNuQ1yrCWALYbSS1YaPLJQewtco_ruec4uTSf7rfVwKU8",
  },
];

const IMPACT = [
  {
    icon: "school",
    title: "إتاحة التعليم",
    desc: "توفير ترجمة فورية داخل الفصول الدراسية للطلاب في المعاهد المتخصصة عبر منطقة الشرق الأوسط وشمال إفريقيا.",
  },
  {
    icon: "medical_services",
    title: "الاستقلالية في الرعاية الصحية",
    desc: "تمكين تواصل خاص ومباشر بين المرضى الصم والأطباء دون الحاجة إلى وسيط.",
  },
  {
    icon: "groups",
    title: "بناء المجتمع",
    desc: "تعزيز المساحات العامة الشاملة من خلال تركيب مراكز ترجمة Hear-Me.",
  },
];

export default function About() {
  return (
    <div 
      className="bg-surface text-on-surface min-h-screen flex flex-col" 
      dir="rtl" 
      lang="ar"
    >
      <Header activePage="about" />

      <main>
        {/* Hero Section */}
        <section className="relative px-6 pt-20 pb-32 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary-container/30 rounded-full">
              هدفنا{" "}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-on-surface tracking-tight leading-[1.1] mb-8">
              الحوار بلا <span className="text-primary italic">قيود</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              مشروع هير-مي هو جسر مُصمم بالتكنولوجيا والتعاطف، يهدف إلى إزالة
              حواجز التواصل لمجتمع الصم في الدول الناطقة بالعربية.
            </p>
          </div>
          {/* Decorative blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary-container rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-container rounded-full blur-[120px]" />
          </div>
        </section>

        {/* Mission Bento Grid */}
        <section className="px-6 py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-on-surface">
                رسالتنا{" "}
              </h2>
              <div className="w-12 h-1 bg-primary mt-4 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large Feature Card */}
              <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-lg ambient-shadow flex flex-col justify-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  إبداع تلقائي
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  إعطاء القوة للصوت الخفي{" "}
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  بالنسبة لملايين الأشخاص في العالم العربي، تُعتبر لغة الإشارة
                  اللغة الأساسية للروح. ومع ذلك، فإن غياب أدوات الترجمة الفورية
                  يخلق صمتًا لم يُختَر. يستخدم مشروع هير-مي تقنيات رؤية متقدمة
                  لترجمة لغة الإشارة العربية إلى العربية المنطوقة والمكتوبة
                  فورًا، مما يعيد السيطرة والتواصل للمتحدث.
                </p>
              </div>
              {/* Stat Card */}
              <div className="md:col-span-4 bg-primary text-on-primary p-10 rounded-lg ambient-shadow flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <span className="material-symbols-outlined text-8xl">
                    اللغة{" "}
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-extrabold mb-2">22+</div>
                  <div className="text-sm uppercase tracking-widest font-bold opacity-80">
                    دعم اللهجات العربية{" "}
                  </div>
                </div>
              </div>
              {/* Impact Card */}
              <div className="md:col-span-4 bg-secondary-container p-5 rounded-lg shadow-lg shadow-secondary/5">
                <span className="material-symbols-outlined text-primary-dim text-4xl mb-6">
                  volunteer_activism
                </span>
                <h3 className="text-xl font-bold mb-3 text-on-secondary-container">
                  محوري حول الإنسان{" "}
                </h3>
                <p className="text-on-secondary-container opacity-80">
                  نحن لا نصنع البرمجيات فحسب؛ بل نبتكر أدوات لتعزيز التواصل
                  الإنساني، مع التركيز على تفاصيل تعابير الوجه ولغة الجسد.
                </p>
              </div>
              {/* Tech Card */}
              <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-lg ambient-shadow border border-outline-variant/10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">
                      الذكاء الاصطناعي لخدمة المجتمع{" "}
                    </h3>
                    <p className="text-on-surface-variant">
                      تم تدريب نماذجنا خصيصًا على التنوع الإقليمي للغة الإشارة
                      العربية، لضمان أن يفهم المستخدم في القاهرة بنفس الوضوح
                      الذي يفهم به المستخدم في مسقط.
                    </p>
                  </div>
                  <div className="w-full md:w-48 h-32 bg-surface-container rounded-md overflow-hidden">
                    <img
                      className="w-full h-full object-cover dark:opacity-80"
                      alt="Neural network visualization for sign language recognition"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdYwMpZSO5DQq1t19taVBB4bezEKY5mbCGiSBopAvDNTRcIEPT_hKq6r-4mTcdNenD6GHC9hWfdcMLpjSiLse49XZloTxYzqOku2L_5rtF2H8XaX1FIzMR_TgsAZAt2RU2tR92Ef4JjJgE1A-XkE6a0gRwY_ThnFQ0snKWkTqqCCwxcJOhrkjmAyFa-17wkUBDM-I8VF9aEB7KG3vVyeMSx84pc9I4HlR9zLfHQBLz7lyYIT_6x80SIlXeIWQx0MJuJQ2KDD4iniU"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="px-6 py-32 bg-surface">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              قياس الأثر
            </h2>
            <p className="text-on-surface-variant">
              كسر الصمت ليس مجرد رقم أو مؤشر. إنه يتعلق بإتاحة الوصول إلى
              التعليم، والرعاية الصحية، والمجتمع.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {IMPACT.map(({ icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="w-20 h-20 bg-primary-container/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">
                    {icon}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2">{title}</h4>
                <p className="text-sm text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-32 text-center">
          <div className="max-w-2xl mx-auto p-12 bg-primary-container/20 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">إبدأ المحادثة</h2>
            <p className="text-on-surface-variant mb-10">
              اختبر اليوم أول مترجم حقيقي وسلس للغة الإشارة العربية في العالم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all"
              >
                بدء الترجمة
              </Link>
              <button className="px-8 py-4 bg-surface-container-lowest text-primary rounded-full font-bold border border-primary/10 hover:bg-surface-container transition-colors">
                التواصل مع الدعم
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
