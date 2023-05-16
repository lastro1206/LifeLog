import { Navbar, Container, Form, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-left: 1rem;
  flex: 1;
`;

const HeaderContainer = styled(Navbar)`
  background-color: #fff;
  padding: 1rem 2rem;

  #logo {
    font-size: 2rem;
    font-weight: bold;
  }

  #login,
  #register {
    margin-right: 1rem;
  }
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <HeaderNav>
            <Nav>
              <Nav.Link id="logo">LIFELOG</Nav.Link>
            </Nav>
            <Form>
            <SearchInput
              type="search"
              placeholder="검색어를 입력해주세요."
              aria-label="Search"
            />
            </Form>
          </HeaderNav>
          <HeaderNav>
            <Nav className="ml-auto">
              <Nav.Link href="Login" id="login">로그인</Nav.Link>
              <Nav.Link href="Register" id="register">회원가입</Nav.Link>
            </Nav>
          </HeaderNav>
        </Navbar.Collapse>
      </Container>
    </HeaderContainer>
  )
}

export default Header;
