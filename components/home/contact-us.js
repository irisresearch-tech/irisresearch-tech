

export default function Example() {
  return (
    <><div className="bg-red-50 py-6 " id='contact'>

     
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className='text-center  pb-6 '>
    <span class=" text-4xl lg:text-5xl font-bold font-heading font-serif" >Contact Us</span>
    </div>

        <div className="relative bg-white shadow-xl">
          

          <diav className="grid ">
            {/* Contact information */}


            {/* Contact form */}
            <div className="py-10 px-6 max-w-7xl sm:px-10 lg:col-span-2 xl:p-12 ">
              <h3 className="text-xl font-semibold text-center text-gray-900 font-serif">Feel free to drop a message if you are looking for partnership, joining our
team, discussing crypto or any opportunity.</h3>
              <form name="form" action="" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 pageclip-form">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-900">
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                      Phone (Optional)
                    </label>
                    {/* <span id="phone-optional" className="text-sm text-gray-500">
      Optional
    </span> */}
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="phone-optional" />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                    Your Business Details (Optional)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Subject 
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Message 
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      aria-describedby="message-max"
                      placeholder="Write your notes or questions here"
                      defaultValue={''} />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-start">
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-100 hover:bg-dark-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </diav>
        </div>
      </div>
    </div>
    
    </>
  )
}
