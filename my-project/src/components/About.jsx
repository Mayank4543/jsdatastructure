const About = () => {
  return (
    <section className="bg-orange-100 py-20 px-4 mt-24 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          We are committed to providing high-quality education and empowering learners worldwide.
        </p>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To make quality education accessible to everyone, regardless of their background or location. We believe in empowering individuals through knowledge and skills.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the leading platform for online learning, fostering a global community of lifelong learners and industry experts.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                Building a supportive learning community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our teaching methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
