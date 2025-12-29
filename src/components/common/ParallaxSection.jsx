const ParallaxSection = ({
    backgroundImage,
    title,
    subtitle,
    description,
    height = "h-[60vh]"
}) => {
    return (
        <div
            className={`w-full ${height} bg-stone-900 bg-scroll md:bg-fixed bg-center bg-cover relative flex items-center justify-center overflow-hidden my-12`}
            style={{ backgroundImage: `url("${backgroundImage || '/parallax-placeholder.jpg'}")` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/50 via-neutral-900/80 to-black/90"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
                {subtitle && (
                    <p className="text-sm md:text-base text-white/80 uppercase tracking-[0.4em] font-light animate-slide-up">
                        {subtitle}
                    </p>
                )}

                {title && (
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight uppercase tracking-wide">
                        {title}
                    </h2>
                )}

                {description && (
                    <p className="text-xs text-neutral-500 uppercase tracking-widest pt-4">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ParallaxSection;
