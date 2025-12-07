const Hero = () => {
    return (
        <>
            <section className="px-4 py-20 bg-orange-100 text-center">
                <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900">Welcome to Our Learning Platform</h1>
                <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">Explore a wide range of courses and resources to enhance your skills.</p>
                <div className="gap-3 flex justify-center">
                    <button className="mt-5 rounded-lg px-4 py-3 bg-blue-400 text-white">Explore</button>
                    <button className="mt-5 rounded-lg px-4 py-3  text-black border">Learn More</button>
                </div>
            </section>

        </>
    );

}
export default Hero;