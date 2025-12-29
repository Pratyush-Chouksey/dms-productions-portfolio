import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';

const Gallery = () => {
    const { category } = useParams();

    // Vite's glob import to get all images from category folders
    // This assumes images are stored as src/assets/images/[category]/[filename]
    const imageModules = import.meta.glob('/src/assets/images/**/*.{jpg,jpeg,png,webp}', { eager: true });

    // Filter and process images for the current category
    const images = useMemo(() => {
        const categoryImages = [];

        for (const path in imageModules) {
            // Check if path contains the category folder
            // e.g., /src/assets/images/fashion/img1.jpg
            if (path.includes(`/src/assets/images/${category}/`)) {
                categoryImages.push({
                    src: imageModules[path].default,
                    alt: path.split('/').pop().split('.')[0] // filename as alt
                });
            }
        }
        return categoryImages;
    }, [category, imageModules]);

    // Load fallback images from random-images folder
    const fallbackModules = import.meta.glob('/src/assets/images/random-images/*.{jpg,jpeg,png,webp}', { eager: true });
    const fallbackImages = Object.values(fallbackModules).map(mod => mod.default);

    // Fallback if no images exist (for demo purposes)
    const placeholders = Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        // Cycle through available fallback images
        src: fallbackImages[i % fallbackImages.length],
        aspect: ['aspect-[3/4]', 'aspect-square', 'aspect-[4/3]'][i % 3]
    }));

    return (
        <div className="w-full animate-fade-in py-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 border-b border-white/5 pb-6">
                <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-[0.3em] mb-2">Portfolio</p>
                    <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
                        {category?.replace('-', ' ')}
                    </h1>
                </div>
                <Link to="/portfolio" className="mt-4 md:mt-0 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
                    Back to Categories
                </Link>
            </div>

            {/* Masonry Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 px-4 space-y-8">
                {images.length > 0 ? (
                    images.map((img, index) => (
                        <div key={index} className="break-inside-avoid group overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    ))
                ) : (
                    // Show fallback images from random folder if no specific category images found
                    placeholders.map((item) => (
                        <div key={item.id} className={`break-inside-avoid w-full group overflow-hidden relative`}>
                            <img
                                src={item.src}
                                alt={`Gallery placeholder ${item.id}`}
                                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Label for Demo clarity */}
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-[10px] text-white/50 uppercase tracking-widest bg-black/50 px-2 py-1">
                                    {category} {item.id + 1}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {images.length === 0 && (
                <p className="text-center text-neutral-600 text-xs mt-12 uppercase tracking-widest">
                    No images found in /src/assets/images/{category}/
                </p>
            )}
        </div>
    );
};

export default Gallery;
