import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-auto bg-surface-container-low border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 max-w-7xl mx-auto space-y-8 md:space-y-0 text-center md:text-right">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-bold text-on-surface text-lg">Hear-Me</div>
          <p className="text-[0.875rem] text-on-surface-variant">
            © 2026 هير-مي. الحوار الخالي من القيود.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
          <a
            className="text-[0.875rem] text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            سياسة الخصوصية
          </a>
          <a
            className="text-[0.875rem] text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            شروط الخدمة
          </a>
          <a
            className="text-[0.875rem] text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            اتصل بالدعم
          </a>
        </div>
      </div>
    </footer>
  );
}
