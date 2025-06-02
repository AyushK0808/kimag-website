const Page = () => {
    return (  
        <div>
            {/* Contact Form Section */}
        <div className="bg-white/95 backdrop-blur-sm p-12 md:p-16 rounded-3xl mb-16 shadow-2xl transition-all duration-1000 delay-1100">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2d6389] text-center mb-12">
            Send Us a Message
          </h2>
          <div className="max-w-4xl mx-auto">
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2d6389] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2d6389] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2d6389] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2d6389] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2d6389] focus:border-transparent transition-all duration-300">
                    <option>Select Service</option>
                    <option>Public Relations</option>
                    <option>Digital Marketing</option>
                    <option>Brand Strategy</option>
                    <option>Content Creation</option>
                    <option>Event Management</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2d6389] focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#2d6389] to-[#348992] hover:from-[#348992] hover:to-[#d73c77] text-white font-semibold py-4 px-12 rounded-2xl transition-all duration-500 hover:transform hover:translateY(-2px) hover:shadow-2xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
    );
}
 
export default Page;