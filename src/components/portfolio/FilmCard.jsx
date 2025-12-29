import { Link } from 'react-router-dom';

const FilmCard = ({ title, description, link, colorClass, image }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group relative block w-full aspect-video overflow-hidden bg-neutral-900">
            {/* Background Image */}
            <div
                className={`w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 ${colorClass}`}
                style={image ? { backgroundImage: `url(${image})` } : {}}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500"></div>

            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:border-white transition-all duration-300 transform group-hover:scale-110">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1 group-hover:border-l-black transition-colors duration-300"></div>
                </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-light text-white uppercase tracking-widest transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {title}
                </h3>
                <p className="text-xs text-neutral-400 mt-2 uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {description}
                </p>
            </div>
        </a>
    );
};

export default FilmCard;
