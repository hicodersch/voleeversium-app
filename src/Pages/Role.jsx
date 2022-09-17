import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function TypesExample() {
    const navigate = useNavigate();

    const navigateToRole = ()=> navigate("signup");

  return (
    <>
      <Button variant="success" onClick={navigateToRole}>Volee</Button>{' '}
      <Button variant="warning" onClick={navigateToRole}>NonPro</Button>{' '}
    </>
  );
}

export default TypesExample;