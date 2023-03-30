import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="flex lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col lg:p-20 sm:p-2 min-[320px]:p-1 bg-amber-600 m-10">
        <div className="lg:w-1/2 sm:w-[95%] min-[320px]:w-[95%] p-3">
          <div className="border-2 p-4 rounded-lg">
            {/* <img src={ } alt=''/> */}
            images
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-[95%] min-[320px]:w-[95%] p-3">
          <div className="border-2 p-4 rounded-lg">
            <h3 className="my-10">Need to making some cocktails.. </h3>
            <Link
              className="bg-lime-200 p-3 rounded-lg hover:bg-lime-400 hover:shadow-md hover:shadow-black"
              to="/cocktails"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Home;