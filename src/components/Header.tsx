import { Bed } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-[#EEEEEE]">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-primary rounded-md">
              <Bed className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-700 text-foreground tracking-tight font-bold">
              Mattress Media
            </span>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold text-sm rounded-[6px] px-5 py-2.5 hover:bg-primary-hover transition-colors duration-200"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
