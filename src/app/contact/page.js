



const ContactPage = () => {

  return (
    <div className="hero min-h-screen bg-gray-100 py-24">
      <div className="hero-content grid md:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="py-3  text-orange-600">How can we help you sir?</p>{" "}
          <svg class="animate-bounce w-6 h-6 ...">help</svg>
          <h1 className="text-5xl font-bold text-black">Contact Us</h1>
          <p className="py-6 text-black">
            We are here to help and answer any questions you might have. We look
            forward to hearing from you!
          </p>
          <p className="text-black py-1">Ankersgade 12C, 1, 8000 Aaarhus</p>
          <p className="text-black py-1">+12 34 56 7890</p>
          <p className="text-black py-1">sakibalhasan@shanto.com</p>
        </div>

        <div className="card shrink-0 w-full max-w-lg shadow-2xl text-white bg-slate-900">
          <div className="animate-pulse text-center text-2xl text-teal-200  py-6">
            Fill Out The Form!{" "}
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered bg-gray-600 hover:bg-slate-900 text-center"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered bg-gray-600 hover:bg-slate-900 text-center"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Text</span>
              </label>
              <textarea
                type="text"
                className="input input-bordered bg-gray-600 hover:bg-slate-900 py-2 text-center"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Send Email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
