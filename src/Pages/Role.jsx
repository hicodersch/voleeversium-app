import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function TypesExample() {
    const navigate = useNavigate();

    const navigateToNonproLogin = ()=> navigate("/nonpro-login");
    const navigateToVoleeLogin = ()=> navigate("/volee-login");


  return (
    <>
      <Button variant="success" onClick={navigateToVoleeLogin}>Volee</Button>{' '}
      <Button variant="warning" onClick={navigateToNonproLogin}>NonPro</Button>{' '}
    </>
  );
}

export default TypesExample;