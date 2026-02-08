const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">E</span>
          </div>
          <span className="font-semibold text-foreground">ExpoServe</span>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 southparc bv. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
};

export default Footer;
