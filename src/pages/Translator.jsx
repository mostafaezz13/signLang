import { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const QUICK_PHRASES = ["السلام عليكم", "شكراً", "مساعدة" , "اين الحمام"];

const PHRASE_IMAGES = {
  "السلام عليكم": "/sign-salam.png",
  "شكراً": "/sign-thanks.png",
  "مساعدة": "/sign-help.png",
  "اين الحمام": "/sign-bathroom.png"
};

export default function Translator() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [activePhrase, setActivePhrase] = useState(null);
  const [phraseImage, setPhraseImage] = useState(null);
  const [notFound, setNotFound] = useState(false);
  
  const placeholderRef = useRef(null);

  function triggerAnimation(phrase) {
    setActivePhrase(phrase);
    setIsLoading(true);
    setPhraseImage(null);
    setNotFound(false);

    // Simulate a loading delay for "processing"
    setTimeout(() => {
      setIsLoading(false);
      // Check if it's a quick phrase with a dedicated image
      if (PHRASE_IMAGES[phrase]) {
        setPhraseImage(PHRASE_IMAGES[phrase]);
        setNotFound(false);
      } else {
        setPhraseImage(null);
        setNotFound(true);
      }
    }, 800); // 0.8s loading delay
  }

  function handleTranslate() {
    if (inputText.trim()) triggerAnimation(inputText.trim());
  }

  function handleQuickTranslate(phrase) {
    setInputText(phrase);
    triggerAnimation(phrase);
  }
  
  const isTranslating = activePhrase !== null;

  return (
    <div
      className="bg-surface text-on-surface min-h-screen flex flex-col"
      dir="rtl"
      lang="ar"
    >
      <Header activePage="translator" />
      <main className="flex-grow pt-32 pb-20 px-6">
        <section
          className="max-w-4xl mx-auto text-center mb-16"
          id="translator"
        >
          <h1 className="font-extrabold text-4xl md:text-5xl text-on-surface tracking-tight mb-6">
            مُترجِم الإشارة
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
            تمكين التواصل الحُر لمجتمع الصم من خلال أحدث تقنيات الترجمة الفورية.
          </p>
        </section>

        <section className="max-w-[700px] mx-auto px-4">
          <div className="bg-surface-container-lowest rounded-[1.5rem] p-5 md:p-10 shadow-2xl shadow-primary/5 transition-all duration-300 border border-outline-variant/10">
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="text-input"
                  className="block text-sm font-semibold text-primary uppercase tracking-widest text-[0.7rem]"
                >
                  أدخل النص
                </label>
                <textarea
                  id="text-input"
                  dir="rtl"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="أدخل الجملة أو الكلمة هنا للترجمة..."
                  className="w-full min-h-[140px] p-5 bg-surface-container-low border border-transparent rounded-[1rem] focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 text-xl font-body placeholder:text-outline/50 resize-none transition-all outline-none"
                />
              </div>

              {/* Action Button */}
              <button
                id="translate-btn"
                onClick={handleTranslate}
                disabled={isLoading || !inputText.trim()}
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:active:scale-100"
              >
                <span className="material-symbols-outlined text-[24px]">
                  sign_language
                </span>
                {isLoading ? "جاري المعالجة..." : "ترجمة للإشارة"}
              </button>

              {/* Result Display / Sequence Player */}
              <div className="mt-8 pt-8 border-t border-outline-variant/15">
                <div
                  id="display-container"
                  className={`bg-surface-container-low rounded-2xl min-h-[320px] md:aspect-video flex flex-col items-center justify-center text-center p-4 md:p-8 relative overflow-hidden transition-colors ${
                    isTranslating ? "border border-primary/20 shadow-inner" : ""
                  }`}
                >
                  {!isTranslating ? (
                    /* Empty State */
                    <div className="empty-state relative z-10 space-y-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="material-symbols-outlined text-3xl md:text-4xl text-primary/60">
                          motion_photos_on
                        </span>
                      </div>
                      <p className="text-on-surface-variant font-medium leading-relaxed px-4">
                        الترجمة ستظهر هنا
                        <br />
                        <span className="text-xs md:text-sm opacity-60">
                          أدخل نصاً أو اختر إحدى الجمل السريعة للبدء
                        </span>
                      </p>
                    </div>
                  ) : isLoading ? (
                    /* Loading State */
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-300">
                      <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                      <p className="text-primary font-bold animate-pulse text-sm md:text-base">جاري تحويل النص...</p>
                    </div>
                  ) : phraseImage ? (
                    /* Static Phrase Image Display */
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full animate-in fade-in duration-500">
                      <div className="relative bg-white w-44 h-44 md:w-60 md:h-60 rounded-2xl shadow-xl border border-primary/20 flex items-center justify-center mb-6 overflow-hidden transform transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary-container/20" />
                        <img 
                          src={phraseImage} 
                          alt={activePhrase}
                          className="relative z-10 w-full h-full object-contain p-2 animate-in zoom-in-50 duration-300"
                        />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-on-surface mb-2" dir="rtl">
                        {activePhrase}
                      </div>
                      <div className="text-[10px] md:text-xs text-primary font-semibold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                        ترجمة الجملة
                      </div>
                    </div>
                  ) : notFound ? (
                    /* Not Found State */
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-300 p-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-error-container/20 text-error rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl md:text-4xl">
                          info
                        </span>
                      </div>
                      <div>
                        <p className="text-on-surface font-bold text-base md:text-lg">عذراً، الترجمة غير متوفرة</p>
                        <p className="text-on-surface-variant text-xs md:text-sm px-4 md:px-10">
                          هذه الجملة غير موجودة في قاعدة بياناتنا حالياً. جرب استخدام الجمل السريعة.
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {/* Decorative background image for empty state */}
                  {!isTranslating && (
                    <img
                      alt="Sign Language Illustration"
                      className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none dark:invert"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFXP_xggpEaLMf_ny-1Qkzgg2BvaWf-LaB87_g0REY3rNdEz_P9glE2vadcbVBV1bAIianXlF8pGcaqX5y2zeJae1z2YHvwOfTYjeDhUd7cQdgpSnqfF4c7NcIHgHC17BfeGMqDj7BL8Jdsd9qUGYHe7J405xbSmCnBPoJ_f7lupLLibZfPL4TXNz338Ou8DAgJ-sW-oAZ400LM79Nv_0ykW7zapLI7_-NJ3UkKatFQHQOedNZuhhjbx1kdInfb8vxueQNpumugGY"
                    />
                  )}
                </div>

                {/* Quick-translate Chips */}
                <div className="mt-6 flex flex-col items-center">
                  <p className="text-xs text-on-surface-variant mb-3 font-semibold uppercase tracking-widest">
                    أو اختر من الجمل السريعة
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {QUICK_PHRASES.map((phrase) => (
                      <button
                        key={phrase}
                        disabled={isLoading}
                        onClick={() => handleQuickTranslate(phrase)}
                        className="px-5 py-2 bg-surface-container-lowest text-primary border border-outline-variant/20 rounded-full text-sm font-bold shadow-sm hover:bg-primary/5 hover:border-primary/40 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                      >
                        {phrase}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="max-w-4xl mx-auto mt-32 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-primary-container/30 text-primary-dim rounded-full text-xs font-bold uppercase tracking-widest">
              مهمتنا
            </div>
            <h2 className="font-headline text-3xl font-bold text-on-surface">
              الحوار الخالي من القيود
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              هذه الأداة تساعد على سد فجوات التواصل لدى مجتمع الصم في الدول
              الناطقة بالعربية. من خلال تحويل النصوص المكتوبة إلى حركات مرئية
              بلغة الإشارة، نوفّر بيئة داعمة يُسمَع فيها كل صوت وتُفهم فيها كل
              إشارة.
            </p>
            <div className="flex gap-4">
              {["دعم اللغة العربية", "ترجمة فورية"].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container/20 rounded-xl blur-2xl group-hover:bg-primary-container/30 transition-all" />
            <div className="relative rounded-lg overflow-hidden aspect-square shadow-xl">
              <img
                alt="Person performing sign language"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtFJ79Z35M67W0hA5bpM_-pGH9lWMwnM3J2AeFuI5nbekMrqUdadqy9I734eA8fP0Lr-_fs96o4OxCg23ygg_oVV0Sr0Hb3STwt3stF0JYCtgXbwa3HTez9oGDsbnqjeYENR6a5xiz0zokcSUVzyTm2WyMBA0fWHGWCO4fk6jY39Cn4dR187_5O8POGI0IFw8_uJucElVVwvxc42mfhcMZdBrbp5xXFsxMhJtDJ0kcStVh-L6DftNBw_RXLRmOI8TvfgUtYE_bUQQ"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
