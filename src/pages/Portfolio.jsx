import { Link } from 'react-router-dom';

// Image Imports
import weddingImg from '../assets/images/random-images/wedding-varmala-photoshoot-in-Bhubaneswar-2-1536x1024.webp';
import preweddingImg from '../assets/images/random-images/Garden-pre-wedding-shoot-1536x1024.webp';
import fashionImg from '../assets/images/random-images/Bridal-portrait-photoshoot-3-1536x1024.webp';
import commercialImg from '../assets/images/random-images/W_SL1154-1536x1024.webp';
import filmsImg from '../assets/images/random-images/157A9058-copy-2-1-1-scaled.avif';

const Portfolio = () => {
    const categories = [
        { id: 'weddings', title: 'Weddings', subtitle: 'Eternal Moments', color: 'bg-stone-900', image: weddingImg },
        { id: 'prewedding', title: 'Pre-wedding', subtitle: 'The Beginning', color: 'bg-zinc-900', image: preweddingImg },
        { id: 'fashion', title: 'Fashion', subtitle: 'Style & Elegance', color: 'bg-neutral-900', image: fashionImg },
        { id: 'commercial', title: 'Commercial', subtitle: 'Brand Stories', color: 'bg-slate-900', image: commercialImg },
        { id: 'films', title: 'Films / Cinematic', subtitle: 'Motion Pictures', color: 'bg-gray-900', image: filmsImg },
    ];

    return (
        <div className="w-full animate-fade-in py-12 flex flex-col items-center">
            <div className="mb-16 text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide">Selected Works</h1>
                <div className="w-px h-12 bg-white/20 mx-auto"></div>
            </div>

            <div className="w-full flex flex-col space-y-1">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        to={`/portfolio/${cat.id}`}
                        className="group relative h-[40vh] md:h-[60vh] w-full overflow-hidden block"
                    >
                        {/* Background Image */}
                        <div
                            className={`w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 ${cat.color}`}
                            style={{ backgroundImage: `url(${cat.image})` }}
                        ></div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-6">
                            <div className="overflow-hidden">
                                <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-[0.1em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    {cat.title}
                                </h2>
                            </div>
                            <div className="overflow-hidden mt-2">
                                <p className="text-sm md:text-base text-neutral-400 uppercase tracking-[0.3em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
                                    {cat.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Border Lines (optional aesthetic touch) */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></div>
                        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
