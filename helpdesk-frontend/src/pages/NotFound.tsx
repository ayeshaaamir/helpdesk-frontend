import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-white">404</h1>
          <p className="mt-4 text-xl text-gray-400">
            Oops! The page you are looking for doesn't exist.
          </p>
          <a
            onClick={handleGoHome}
            className="cursor-pointer mt-6 inline-block px-6 py-2 text-lg font-medium text-black bg-white rounded hover:bg-gray-200 ml-4"
          >
            Home
          </a>
          <a
            onClick={handleGoBack}
            className="cursor-pointer mt-6 inline-block px-6 py-2 text-lg font-medium text-black bg-white rounded hover:bg-gray-200 ml-4"
          >
            Go Back
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
