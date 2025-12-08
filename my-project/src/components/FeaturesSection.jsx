const FeaturesSection = () => {
  return (
    

      <section className="bg-orange-100 py-20 px-4" id="course">
      <div className="max-w-7xl mx-auto text-center ">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Our Top Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">Learn from industry experts and boost your career with our popular, high-demand courses.</p>
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 rounded-xl">
          <div className="p-8 bg-white shadow md:shadow-xl rounded-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
            <div className="mb-4 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" className="rounded-full object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Machine Learning</h3>
            <p className="text-gray-600 mb-4">
              Master ML algorithms, projects, and real-time applications.
            </p>
             <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Enroll Now
            </button>
          </div>
          <div className="p-8 bg-white shadow md:shadow-xl rounded-xl hover:translate-y-2 transition-all duration-300 flex flex-col items-center justify-center">
            <div className="mb-4 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
              <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="B" className="w-full h-full rounded-full object-cover"/>
              </div>
              <h3 className="text-2xl font-bold mb-2">Full Stack Development</h3>
              <p className="text-gray-600 mb-4">Become a pro in front-end and back-end web development.</p>
              <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Enroll Now
            </button>
          </div>
            <div className="p-8 bg-white shadow md:shadow-xl rounded-xl hover:translate-y-2 transition-all duration-300 flex flex-col items-center justify-center">
            <div className="mb-4 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
              <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="B" className="w-full h-full rounded-full object-cover"/>
              </div>
              <h3 className="text-2xl font-bold mb-2">Full Stack Development</h3>
              <p className="text-gray-600 mb-4">Become a pro in front-end and back-end web development.</p>
              <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
