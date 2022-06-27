import React from "react";
import NavBar from "../NavBar/NavBar";
import Amd from "../../images/AMD.png";
import Intel from "../../images/INTEL.png";
import { Link } from "react-router-dom";

function BuildPc() {
  return (
    <div className="h-screen bg-gradient-to-t from-primary-300 to-primary ">
      <NavBar />
      <p>First, choose your socket</p>
      <section className="w-full flex items-center justify-center">
        <div>
        
          <Link to="/arma-tu-pc/intel">
            <a href="#" className="relative">
              <img className="object-cover" src={Intel} alt="Intel Logo" />
            </a>
          </Link>
        </div>
        <div>
          <Link to="/arma-tu-pc/amd">
            <a href="#">
              <img className="object-cover" src={Amd} alt="Amd Logo" />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default BuildPc;
