import React from "react";

import NavBar from "../NavBar/NavBar";

function Error() {
  return (
    <div>
      <NavBar />
    <section className="bg-gradient-to-t from-primary-300 to-primary flex items-center h-screen p-16 ">
   
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a className="w-full text-center py-3 rounded bg-primary-400 text-white hover:bg-primary-300 focus:outline-none my-1"
            rel="noopener noreferrer"
            href="http://localhost:3000/"
            
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Error;
