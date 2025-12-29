import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-primary)] selection:bg-white selection:text-black font-sans">
            <Navbar />

            <main className="flex-grow pt-28 px-6 md:px-12 animate-fade-in w-full">
                <div className="container mx-auto max-w-7xl h-full flex flex-col justify-center">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
