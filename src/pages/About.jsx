import philosophyImg from '../assets/images/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg';
import servicesImg from '../assets/images/erik-mclean-aielvGxZB0g-unsplash.jpg';

const About = () => {
    return (
        <div className="w-full animate-fade-in divide-y divide-white/5">
            {/* Header Section */}
            <section className="py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide uppercase mb-6">
                    DMS Productions <span className="opacity-50">&</span> Films
                </h1>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Visual storytellers documenting life's most fleeting moments.
                </p>
            </section>

            {/* Philosophy Section - Image Left, Text Right */}
            <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 h-[500px] bg-stone-900 overflow-hidden relative group">
                    {/* Real Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                        style={{ backgroundImage: `url(${philosophyImg})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="order-1 md:order-2 space-y-8 px-4 md:px-0 text-center md:text-left">
                    <h2 className="text-2xl font-light text-white uppercase tracking-widest">Our Philosophy</h2>
                    <p className="text-neutral-400 font-light leading-relaxed">
                        We believe that photography is more than just capturing an image; it is about preserving a feeling. Our approach is rooted in silence and observation. We let moments unfold naturally, intervening only to shape the light, not the emotions.
                    </p>
                    <p className="text-neutral-400 font-light leading-relaxed">
                        Every frame we compose is a testament to the beauty of the present moment, designed to be timeless and evocative.
                    </p>
                </div>
            </section>

            {/* Experience & Services - Text Left, Image Right */}
            <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 px-4 md:px-0 text-center md:text-left">
                    <h2 className="text-2xl font-light text-white uppercase tracking-widest">Experience & Services</h2>
                    <p className="text-neutral-400 font-light leading-relaxed">
                        With over a decade of experience in the visual arts, we have had the privilege of documenting hundreds of stories across the globe. From intimate weddings to large-scale commercial campaigns, our expertise is diverse yet focused.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                        {[
                            "Wedding Photography", "Cinematic Films", "Fashion Editorials", "Commercial Campaigns", "Portraiture", "Brand Identity"
                        ].map((service) => (
                            <div key={service} className="flex items-center space-x-3 text-sm text-neutral-300 uppercase tracking-wide justify-center md:justify-start">
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <span>{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[500px] bg-zinc-900 overflow-hidden relative group">
                    {/* Real Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                        style={{ backgroundImage: `url(${servicesImg})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="py-24 text-center max-w-3xl mx-auto px-4">
                <p className="text-xl md:text-2xl font-light text-white italic leading-relaxed">
                    "We don't just take photographs with a camera. We bring to the act of photography all the pictures we have seen, the books we have read, the music we have heard, the people we have loved."
                </p>
                <div className="mt-8 w-12 h-[1px] bg-white/20 mx-auto"></div>
            </section>
        </div>
    );
};

export default About;
