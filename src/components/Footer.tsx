import logo from "@/assets/exposerve-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="ExpoServe logo" className="w-7 h-7 object-contain" />
          <span className="font-semibold text-foreground">ExpoServe</span>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 southparc bv. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
};

export default Footer;
