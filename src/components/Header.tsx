import mmLogo from "@/assets/mm-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-[#EEEEEE]">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={mmLogo} alt="Mattress Media" className="h-14 w-auto" />
          </div>

          {/* CTA */}
          <a
            href="https://calendly.com/mike-mattressmedia/30min"
            target="_blank"
            rel="noopener noreferrer"
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
