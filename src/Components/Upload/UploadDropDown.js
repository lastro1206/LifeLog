import { NavDropdown } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const UploadDropdown = () => {
  const history = useHistory();

  const handleSnsClick = () => {
    history.push('/SnsUpload');
  }

  const handleTodoClick = () => {
    history.push('/SnsUpload');
  }

  return (
    <NavDropdown.Menu>
      <NavDropdown.Item onClick={handleSnsClick}>SNS 작성</NavDropdown.Item>
      <NavDropdown.Item onClick={handleTodoClick}>Todo 작성</NavDropdown.Item>
    </NavDropdown.Menu>
  );
};

export default UploadDropdown;
