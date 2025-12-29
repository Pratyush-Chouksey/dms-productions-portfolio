import FilmCard from '../components/portfolio/FilmCard';

// Image Imports
import film1Img from '../assets/images/random-images/wedding-varmala-photoshoot-in-Bhubaneswar-1-1536x1024.webp';
import film2Img from '../assets/images/random-images/pre-wedding-photoshoot-in-odisha-1-1536x1024.webp';
import film3Img from '../assets/images/random-images/157A9058-copy-2-1-1-scaled.avif';
import film4Img from '../assets/images/random-images/Garden-pre-wedding-shoot-1536x1024.webp';
import film5Img from '../assets/images/random-images/dhauli-giri-pre-wedding-1536x1024.webp';
import film6Img from '../assets/images/random-images/3-2-1-1536x1024.avif';

const Films = () => {
    const films = [
        { id: 1, title: 'The Royal Union', category: 'Wedding Film', color: 'bg-stone-800', image: film1Img },
        { id: 2, title: 'Urban Rhythm', category: 'Commercial', color: 'bg-slate-800', image: film2Img },
        { id: 3, title: 'Ethereal Beauty', category: 'Fashion Film', color: 'bg-zinc-800', image: film3Img },
        { id: 4, title: 'Legacy', category: 'Brand Story', color: 'bg-neutral-800', image: film4Img },
        { id: 5, title: 'Mountain Echoes', category: 'Travel', color: 'bg-gray-800', image: film5Img },
        { id: 6, title: 'Midnight City', category: 'Experimental', color: 'bg-stone-900', image: film6Img },
    ];

    return (
        <div className="w-full animate-fade-in py-12 md:py-24">
            {/* Editorial Intro */}
            <div className="flex flex-col items-center mb-20 text-center space-y-6 px-4">
                <p className="text-xs text-neutral-500 uppercase tracking-[0.3em] animate-slide-up">
                    Cinematography
                </p>
                <h1 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tight animate-fade-in-slow">
                    Motion Pictures
                </h1>
                <div className="w-12 h-[1px] bg-white/20 mx-auto my-6"></div>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A curated selection of our cinematic work. From intimate weddings into large-scale commercials, we treat every frame as a painting in motion.
                </p>
            </div>

            {/* Films Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0">
                {films.map((film) => (
                    <div key={film.id} className="w-full">
                        <FilmCard
                            title={film.title}
                            description={film.category}
                            link="#"
                            colorClass={film.color}
                            image={film.image}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <p className="text-neutral-500 text-xs uppercase tracking-widest">
                    More projects available on request.
                </p>
            </div>
        </div>
    );
};

export default Films;
