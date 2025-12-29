const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 py-12 mt-auto bg-[var(--color-background)]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-neutral-500 text-xs tracking-[0.2em] uppercase">
                        &copy; {new Date().getFullYear()} DMS Productions & Films
                    </p>
                </div>

                <div className="flex space-x-8">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors duration-300 text-xs tracking-widest uppercase"
                    >
                        Instagram
                    </a>
                    <a
                        href="mailto:hello@dmsproductions.com"
                        className="text-neutral-500 hover:text-white transition-colors duration-300 text-xs tracking-widest uppercase"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
