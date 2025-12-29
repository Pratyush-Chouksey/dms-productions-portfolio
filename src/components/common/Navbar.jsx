import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (

        <header
            className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${isOpen ? 'bg-black border-transparent' : 'bg-[var(--color-background)]/90 backdrop-blur-sm border-white/5'
                }`}
        >
            <div className="container mx-auto px-6 py-6 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link to="/" className="text-lg md:text-2xl font-light tracking-[0.1em] uppercase hover:opacity-70 transition-opacity z-50 max-w-[70%] leading-tight">
                    DMS Productions <span className="hidden sm:inline">& Films</span><span className="sm:hidden">& Films</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`text-sm uppercase tracking-widest transition-colors duration-300 relative group py-2 ${isActive(item.href) ? 'text-white' : 'text-neutral-500 hover:text-white'
                                }`}
                        >
                            {item.name}
                            <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}></span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-end w-8 h-8 space-y-1.5 focus:outline-none z-50 p-1"
                    aria-label="Toggle Menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-4 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Full-screen Overlay */}
            <div
                className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
                    }`}
                style={{ top: 0, height: '100dvh' }} /* Force full viewport height including mobile URL bars */
            >
                <nav className="flex flex-col items-center space-y-8">
                    {navigation.map((item, index) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`text-2xl font-light uppercase tracking-widest text-neutral-400 hover:text-white transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => setIsOpen(false)} // Close menu on click
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
