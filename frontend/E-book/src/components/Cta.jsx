import React from 'react'

const Cta = () => {
  return (
          <section className="py-10 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Ready to Transform Your Digital Marketing?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of successful marketers who have already benefited from our comprehensive guide.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity duration-200 flex items-center mx-auto">
            Get Started Now
            {/* <ArrowRight size={20} className="ml-2" /> */}
          </button>
        </div>
      </section>
  )
}

export default Cta
