import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: '', message: '' });

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus({ type: 'success', message: 'Message sent successfully' });
                form.current.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className="w-full animate-fade-in py-12 md:py-24">
            <div className="flex flex-col mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight uppercase mb-6">
                    Contact Us
                </h1>
                <p className="text-neutral-400 max-w-xl mx-auto font-light">
                    For inquiries regarding weddings, editorials, or commercial projects, please contact us directly or use the form below.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                {/* Contact Info */}
                <div className="space-y-12 text-center md:text-left order-2 md:order-1">
                    <div className="space-y-6">
                        <h2 className="text-xs text-neutral-500 uppercase tracking-[0.3em]">Studio</h2>
                        <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                            DMS Productions & Films<br />
                            Mumbai, India
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xs text-neutral-500 uppercase tracking-[0.3em]">Direct Contact</h2>
                        <div className="flex flex-col space-y-2">
                            <a href="mailto:hello@dmsphotography.in" className="text-lg text-white hover:text-neutral-400 transition-colors">
                                hello@dmsphotography.in
                            </a>
                            <a href="tel:+919876543210" className="text-lg text-white hover:text-neutral-400 transition-colors">
                                +91 98765 43210
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="order-1 md:order-2">
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <input type="hidden" name="to_email" value="pratyushchouksey1983@gmail.com" />

                        <div className="group relative">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="peer block w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white placeholder-transparent"
                                placeholder="Name"
                            />
                            <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-neutral-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-xs uppercase tracking-widest">
                                Name
                            </label>
                        </div>

                        <div className="group relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="peer block w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white placeholder-transparent"
                                placeholder="Email"
                            />
                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-neutral-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-xs uppercase tracking-widest">
                                Email
                            </label>
                        </div>

                        <div className="group relative">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                required
                                className="peer block w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white placeholder-transparent"
                                placeholder="Subject"
                            />
                            <label htmlFor="subject" className="absolute left-0 -top-3.5 text-xs text-neutral-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-xs uppercase tracking-widest">
                                Subject
                            </label>
                        </div>

                        <div className="group relative">
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                required
                                className="peer block w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white placeholder-transparent resize-none"
                                placeholder="Message"
                            />
                            <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-neutral-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-xs uppercase tracking-widest">
                                Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="w-full md:w-auto px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs disabled:opacity-50"
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>

                        {status.message && (
                            <p className={`mt-4 text-xs tracking-widest ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
