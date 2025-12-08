import ContactForm from "./ContactForm";
import FeaturesSection from "./FeaturesSection";

const Hero = () => {
    return (
        <>
            <section className="px-4 pt-20 pb-10 bg-orange-100 text-center mt-18">
                <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900">Welcome to Our Learning Platform</h1>
                <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">Explore a wide range of courses and resources to enhance your skills.</p>
                <div className="gap-3 flex flex-col md:flex-row justify-center">
                    <button className="mt-5 rounded-lg px-8 py-4 text-2xl bg-blue-400 hover:bg-blue-500 transition-all duration-200 text-white">Explore</button>
                    <button className="mt-5 rounded-lg px-6 py-4 text-2xl text-black border">Learn More</button>
                </div>
            </section>
            <FeaturesSection />
            <ContactForm />

        </>
    );

}
export default Hero;