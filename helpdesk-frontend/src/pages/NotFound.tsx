import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  const handleGoHome = () => {
    navigate('/');
  }
  return (
    <>
      <div className={styles.noise}></div>
      <div className={styles.overlay}></div>
      <div className={styles.terminal}>
        <h1>
          Error <span className={styles.errorcode}>404</span>
        </h1>
        <p className={styles.output}>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p className={styles.output}>
          Please try to <a className="cursor-pointer" onClick={handleGoBack}>go back</a> or{" "}
          <a className="cursor-pointer" onClick={handleGoHome}>return to the homepage</a>.
        </p>
        <p className={styles.output}>Good luck.</p>
      </div>
    </>
  );
};

export default NotFound;
