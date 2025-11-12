import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-black mb-4">
              <span className="bg-gradient-to-r from-white via-primary-foreground to-white bg-clip-text text-transparent">
                Alternative Energy Summit & Award
              </span>
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Empowering the Future of Clean Energy & Sustainable Growth
            </p>
            <p className="text-primary-foreground/80 text-sm mt-2">
              Date: TBD • Venue: TBD
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/" className="hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/happenings" className="hover:text-primary-foreground transition-colors">
                  Happenings
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="hover:text-primary-foreground transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-primary-foreground transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-primary-foreground transition-colors">
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-primary-foreground transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <p className="text-sm text-primary-foreground/80">
              Abu Dhabi, UAE
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2026 Alternative Energy Summit & Award. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">
            Website developed by <a href="https://aiems.ae" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary-foreground transition-colors underline">AIeMS</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
