const Contact = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-6">
        <h2 className="text-4xl font-extrabold text-white mb-6">Contact Us</h2>
  
        <div className="flex flex-col bg-white shadow-xl rounded-2xl p-8 sm:flex-row sm:items-center sm:p-10 w-full max-w-3xl">
          {/* Profile Image */}
          <img
            className="mx-auto block h-49 w-49 rounded-full border-9"
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="User"
          />
  
          {/* User Info */}
          <div className="space-y-4 text-center sm:text-left sm:ml-8 flex-1">
            <p className="text-2xl font-bold text-gray-900">John Doe</p>
            <p className="text-gray-600 text-lg">Senior Software Engineer</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Have a question or collaboration idea? Feel free to reach out!
            </p>
  
            <button className="mt-1 p-10 px-6 py-3 bg-indigo-600 text-black font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
              Send a Message
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  