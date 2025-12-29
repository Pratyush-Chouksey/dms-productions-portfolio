import { Link } from 'react-router-dom';

const FeaturedCard = ({ title, categoryId, colorClass, image }) => {
    return (
        <Link to={`/portfolio/${categoryId}`} className="group relative block w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            {/* Background Image */}
            <div
                className={`w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 ${colorClass}`}
                style={image ? { backgroundImage: `url(${image})` } : {}}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="overflow-hidden mb-2">
                    <h3 className="text-2xl md:text-3xl font-light text-white uppercase tracking-[0.2em] transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        {title}
                    </h3>
                </div>
                <span className="w-12 h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></span>
            </div>
        </Link>
    );
};

export default FeaturedCard;
