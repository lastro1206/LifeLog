import React, { useState } from "react";
import { firebaseAuth, createUserWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ButtonBox, InputBox } from "../Styled/Styled";

const Register = () => {
    const [typingEmail, setRegisterEmail] = useState("");
    const [typingPassword, setRegisterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const navi = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (typingPassword !== confirmPassword) {
            setErrorMsg("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }
        try {
            await createUserWithEmailAndPassword(firebaseAuth, typingEmail, typingPassword); // 비동기 처리 기다림
            // 회원가입 성공한 경우
            console.log("회원가입 성공!");
            navi("/Login"); // 회원가입이 성공하면 로그인화면 이동
        } catch (error) {
            // 회원가입 실패한 경우
            console.error(error.message);
            if (error.code === "auth/invalid-email") {
                setErrorMsg("이메일 주소가 유효하지 않습니다.");
            } else if (error.code === "auth/weak-password") {
                setErrorMsg("비밀번호는 6자 이상이어야 합니다.");
            } else if (error.code === "auth/email-already-in-use") {
                setErrorMsg("이미 등록된 이메일 주소입니다.");
            } else {
                setErrorMsg("정보를 올바르게 입력해주세요.");
            }
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                flexDirection: "column",
            }}
        >
            <form>
                <div style={{ fontWeight: "bold", marginBottom: "20px", marginRight: "45px", color: '#57CDF2' }}>회원 정보 입력하기</div>
                <div style={{ marginBottom: "10px" }}>
                    <InputBox
                        style={{width: "250px"}}
                        type="text"
                        placeholder="이메일을 입력해주세요."
                        onChange={(e) => setRegisterEmail(e.target.value)} // typingEmail 상태 변수 업데이트
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <InputBox
                        style={{width: "250px"}}
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        onChange={(e) => setRegisterPassword(e.target.value)} // typingEmail 상태 변수 업데이트
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <InputBox
                        style={{width: "250px"}}
                        type="password"
                        placeholder="비밀번호를 다시 입력해주세요."
                        onChange={(e) => setConfirmPassword(e.target.value)} // confirmPassword 상태 변수 업데이트
                    />
                </div>
                <ButtonBox onClick={handleRegister}>회원가입</ButtonBox>
                {errorMsg && <div>{errorMsg}</div>}
            </form>
        </div>
    );
};

export default Register;
