export default function Home() {

  return (
   <div className="flex flex-col  bg-blue-100 h-screen " >
       <div className = "h-25 w-24 p-2 ">
       <img src = "https://images.unsplash.com/photo-1693834048060-fd24bfa399ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80" alt = "IITM - Logo" />
       </div>
       <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-2">Inter IIT Tech Meet 12.0</h1>
      <p className="text-2xl mb-4">Hosted by IIT Madras</p>

      <form className="bg-gray border border-black shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">  
      {/*px - horizontal padding */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow-lg border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow-lg  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            <a href='/registration'>Login</a>
          </button>
        </div>
      </form>
    </div>
   </div>


  );
}
