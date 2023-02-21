import React from "react";

const Jumbotron = () => {
  return (
    <>
      <section className="py-3 container mt-2">
        <div className="row py-lg-5 bg-light">
          <div className="col-12 mx-auto ms-3">
            <h1 className="display-1">A warm welcome!</h1>
            <p className="lead me-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="lead">
              <a href="#" className="btn btn-primary my-2">
                Call to action!
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
