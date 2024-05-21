import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className=" flex justify-center items-center flex-col text-center min-h-screen m-auto bg-slate-300">
      <h1 className="text-red-500 text-6xl md:text-7xl lg:text-9xl font-extrabold mb-10">
        404
      </h1>
      <Link className='p-2 border bg-gray-500 rounded-lg shadow-2xl shadow-red-800 text-white hover:text-red-600' href="/">Go Home</Link>
      <h3 className="text-xl md:text-2xl lg:text-3xl mb-5 font-bold">
        OOPS! NOTHING WAS FOUND
      </h3>
      
    </div>
    );
};

export default NotFoundPage;