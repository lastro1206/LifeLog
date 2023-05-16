import React, { useState } from "react";
import { firebaseAuth, signInWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ButtonBox, InputBox, RegisterLink } from "../Styled/Styled";


const Login = () => {
    const [typingEmail, setLoginEmail] = useState("");
    const [typingPassword, setLoginPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");   

    const navi = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); //페이지 새로고침 막음
        try {
            // 비동기 처리 기다림 
            // 비밀번호 검증과 같은 중요한 프로세스가 완료될 때까지 다음 단계로 넘어가지 않고, 정확한 결과를 기다리기 위해
            await signInWithEmailAndPassword(firebaseAuth, typingEmail, typingPassword);
        
            // 로그인 성공한 경우
            console.log("로그인 성공!");
            navi("/main"); // 로그인이 성공하면 홈화면 이동
        } catch (error) {
            // 로그인 실패한 경우
            console.error(error.message);
            switch (error.code) { // 에러에 맞는 오류 메세지
                case "auth/user-not-found":
                    setErrorMsg("존재하지 않는 사용자입니다.");
                    break;
                case "auth/wrong-password":
                    setErrorMsg("잘못된 비밀번호입니다.");
                    break;
                default:
                    setErrorMsg("정보를 확인해주세요.");
            }
        }
    };    

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px", marginRight: "30px", color: '#57CDF2' }}>LifeLog Login</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ marginBottom: "10px" }}>
                        <InputBox
                            type="text"
                            placeholder="이메일을 입력해주세요."
                            onChange={(e) => setLoginEmail(e.target.value)} // typingEmail 상태 변수 업데이트
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <InputBox
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            onChange={(e) => setLoginPassword(e.target.value)} // // typingPassword 상태 변수 업데이트
                        />
                    </div>

                </div>
                <div>
                    <ButtonBox onClick={handleLogin}>로그인</ButtonBox>
                    <RegisterLink to="/register">회원가입</RegisterLink>
                </div>
                {errorMsg && <div>{errorMsg}</div>}
            </form>
        </div>
    );
};


export default Login;