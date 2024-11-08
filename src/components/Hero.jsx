import { useNavigate } from "react-router-dom";

const Hero = ({ token }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="hero"
        style={{
          height: '600px',
          backgroundImage: "url(https://i.etsystatic.com/6237548/r/il/532b92/363229569/il_fullxfull.363229569_84zv.jpg)",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-x',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          textAlign: 'center'
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-green-800">Welcome To My Website</h1>
            <p className="mb-5 text-2xl text-green-800">Join us in our important dates and events</p>
            {token ? (
              <h2 className="text-3xl">Welcome back!</h2>
            ) : (
              <button
                onClick={() => navigate('/signin')}
                className="bg-customBgGreen text-white p-2 text-lg rounded"
              >
                Get Started & Login to Read more
              </button>
            )}
          </div>
        </div>
      </div>

      <section className="features-preview py-10 mb-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Features You’ll Love</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="feature-item w-72 bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-semibold mb-2">Diary Entries with Mood Analysis</h3>
            <p className="text-gray-600">
              Capture your emotions daily and gain insights with AI-powered mood analysis to better understand yourself over time.
            </p>
          </div>
          <div className="feature-item w-72 bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-semibold mb-2">School Notes with Summaries</h3>
            <p className="text-gray-600">
              Keep your school notes organized and let AI provide summaries for quick revision. Great for staying on top of your studies!
            </p>
          </div>
          <div className="feature-item w-72 bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
            <p className="text-gray-600">
              All your entries are stored securely and are accessible only to you. We prioritize your privacy and ensure your data is protected.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
