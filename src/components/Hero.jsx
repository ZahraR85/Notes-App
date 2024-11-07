import { Link , useNavigate} from "react-router-dom";
const Hero = ({ token }) => {
  const navigate = useNavigate();
  return (
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
        //margin: '0px 20px',
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
           // <Link to="/signin" className="btn btn-primary text-xl">
              <button  onClick={() => navigate('/signin')} className="bg-customBgGreen text-white p-2 text-lg rounded "> 
              Get Started</button>
           // </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;