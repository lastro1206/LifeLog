import { Navbar, Container, Form, NavDropdown, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import React, { useState } from "react";
import { firebaseAuth, signOut } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ButtonBox } from '../Styled/Styled';

const MainContainer = styled(Navbar)`
  background-color: #fff;
  padding: 1rem 2rem;
  justify-content: space-between;

  #logo {
    font-size: 2rem;
    font-weight: bold;
  }

  .topBar {
    display: flex;
    align-items: center;
  }

  .searchInput {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    margin-left: 1rem;
    flex: 1;
  }

  #navbarScrollingDropdown {
    margin-left: auto;
  }
`;

const Logout = ({ handleLogout }) => {
    return (
        <div>
            <ButtonBox className="logout-btn" onClick={handleLogout}>로그아웃</ButtonBox>
        </div>
    );
};

function Main() {
    const [showDropdown, setShowDropdown] = useState(false);
    const navi = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(firebaseAuth);
            // 로그아웃 성공한 경우
            console.log("로그아웃 성공!");
            navi("/"); // 로그아웃이 성공하면 로그인 화면으로 이동
        } catch (error) {
            // 로그아웃 실패한 경우
            console.error(error.message);
        }
        setShowDropdown(false);
    };

    return (
        <MainContainer bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav>
                        <Nav.Link href="logo" id="logo">
                            LIFELOG
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="검색어를 입력해주세요."
                            className="searchInput"
                            aria-label="Search"
                            style={{ width: '400px' }}
                        />
                    </Form>
                    <Nav className="topBar" navbarScroll>
                        <NavDropdown
                            title="업로드"
                            id="navbarScrollingDropdown"
                            show={showDropdown}
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <NavDropdown.Item href="SnsUpload">
                                SNS 작성
                            </NavDropdown.Item>
                            <NavDropdown.Item href="TodoUpload">
                                Todo 작성
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="myProfile">
                            마이페이지
                        </Nav.Link>
                        <NavDropdown
                            title={<i className="fas fa-cog"></i>}
                            id="navbarScrollingDropdown2"
                            show={showDropdown}
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <NavDropdown.Item href="setAccount">
                                계정관리
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Logout className="logout-btn" handleLogout={handleLogout} />
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </MainContainer>
    );
}

export default Main;
