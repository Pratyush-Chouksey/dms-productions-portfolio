import { Link } from 'react-router-dom';
import FeaturedCard from '../components/portfolio/FeaturedCard';
import FilmCard from '../components/portfolio/FilmCard';
import ParallaxSection from '../components/common/ParallaxSection';

// Image Imports
import heroImg from '../assets/images/random-images/SID_1594-1-1-1-1536x1024.avif';
import parallaxImg from '../assets/images/random-images/MPP_9450-1536x1022.jpg';
import fashionImg from '../assets/images/random-images/Bridal-portrait-photoshoot-3-1536x1024.webp';
import portraitsImg from '../assets/images/random-images/W_SL1154-1536x1024.webp';
import automotiveImg from '../assets/images/random-images/DSC00186-scaled.jpg';
import film1Img from '../assets/images/random-images/wedding-varmala-photoshoot-in-Bhubaneswar-1-1536x1024.webp';
import film2Img from '../assets/images/random-images/pre-wedding-photoshoot-in-odisha-1-1536x1024.webp';
import film3Img from '../assets/images/random-images/157A9058-copy-2-1-1-scaled.avif';
import film4Img from '../assets/images/random-images/Garden-pre-wedding-shoot-1536x1024.webp';

const Home = () => {
    const featuredWorks = [
        { id: 'fashion', title: 'Fashion', color: 'bg-stone-800', image: fashionImg },
        { id: 'portraits', title: 'Portraits', color: 'bg-neutral-800', image: portraitsImg },
        { id: 'automotive', title: 'Automotive', color: 'bg-zinc-800', image: automotiveImg },
    ];

    return (

        <div className="flex flex-col items-center w-full">
            {/* Hero Section with Parallax */}
            <div
                className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 w-full px-4 bg-stone-900 bg-scroll md:bg-fixed bg-center bg-cover relative overflow-hidden"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                    <p className="text-neutral-300 uppercase tracking-[0.3em] text-xs md:text-sm animate-slide-up">
                        Photography Portfolio
                    </p>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tight text-white animate-fade-in-slow leading-tight">
                        Capturing <br /> <span className="italic font-serif text-neutral-400">Silence</span>
                    </h1>
                    <p className="text-base md:text-lg text-neutral-300 max-w-xs md:max-w-xl mx-auto font-light leading-relaxed pt-4">
                        A minimal collection of moments, light, and shadows.
                        Designed with purpose, built with precision.
                    </p>
                </div>

                <div className="pt-12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto relative z-10">
                    <Link to="/portfolio" className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs cursor-pointer w-full md:w-auto inline-block">
                        View Gallery
                    </Link>
                    <Link to="/contact" className="px-8 py-3 bg-white text-black border border-white hover:bg-transparent hover:text-white transition-all duration-500 uppercase tracking-widest text-xs cursor-pointer w-full md:w-auto inline-block">
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Featured Work Section - Added bg-black and relative z-10 to slide over hero */}
            <section className="w-full py-24 md:py-32 mb-12 bg-black relative z-10">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <h2 className="text-sm md:text-base text-neutral-500 uppercase tracking-[0.3em]">Selected Projects</h2>
                    <div className="w-px h-12 bg-white/20"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 w-full">
                    {featuredWorks.map((work) => (
                        <FeaturedCard
                            key={work.id}
                            title={work.title}
                            categoryId={work.id}
                            colorClass={work.color}
                            image={work.image}
                        />
                    ))}
                </div>
            </section>

            {/* Parallax Section - Moved here for cinematic flow */}
            <ParallaxSection
                backgroundImage={parallaxImg}
                subtitle="The Art of Observation"
                title='"Photography is the only language that can be understood anywhere in the world."'
                description="— Bruno Barbey"
            />

            {/* Films Section */}
            <section className="w-full py-24 md:py-32 bg-neutral-900/30 -mx-6 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-16 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-widest">Films</h2>
                        <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
                        <p className="text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Moving images that tell a story. We craft cinematic narratives that capture the essence of the moment, the emotion, and the atmosphere.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        <FilmCard
                            title="The Royal Union"
                            description="Cinematic Wedding Film"
                            link="#"
                            colorClass="bg-stone-800"
                            image={film1Img}
                        />
                        <FilmCard
                            title="Urban Rhythm"
                            description="Commercial Campaign"
                            link="#"
                            colorClass="bg-slate-800"
                            image={film2Img}
                        />
                        <FilmCard
                            title="Ethereal Beauty"
                            description="Fashion Film"
                            link="#"
                            colorClass="bg-zinc-800"
                            image={film3Img}
                        />
                        <FilmCard
                            title="Legacy"
                            description="Brand Story"
                            link="#"
                            colorClass="bg-neutral-800"
                            image={film4Img}
                        />
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/portfolio/films" className="inline-block px-10 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs">
                            View All Films
                        </Link>
                    </div>
                </div>
            </section>



            {/* Client Reviews Section */}
            <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-black text-center">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <h2 className="text-sm md:text-base text-neutral-500 uppercase tracking-[0.3em] animate-slide-up">Client Love</h2>
                    <div className="w-px h-12 bg-white/20"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {[
                        {
                            quote: "DMS captured moments we didn't even know happened. Pure magic.",
                            name: "Aditi & Rahul",
                            project: "Wedding Film"
                        },
                        {
                            quote: "Professional, distinct, and cinematically brilliant. Truly world-class.",
                            name: "Vogue India",
                            project: "Editorial"
                        },
                        {
                            quote: "They turned our brand story into visual poetry. Highly recommended.",
                            name: "Taj Hotels",
                            project: "Commercial"
                        }
                    ].map((review, index) => (
                        <div key={index} className="flex flex-col items-center space-y-6 group animate-fade-in-slow" style={{ animationDelay: `${index * 200}ms` }}>
                            <div className="text-4xl md:text-5xl text-neutral-700 font-serif leading-none">“</div>
                            <p className="text-lg md:text-xl text-neutral-200 font-light leading-relaxed italic">
                                {review.quote}
                            </p>
                            <div className="w-8 h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors duration-300"></div>
                            <div className="space-y-1">
                                <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                                    {review.name}
                                </h4>
                                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                                    {review.project}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section >
        </div >
    );
};

export default Home;
