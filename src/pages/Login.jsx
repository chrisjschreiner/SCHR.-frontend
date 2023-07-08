import { useState } from "react";
import styled from "styled-components/macro";
import { login } from "../redux/apiCalls";
import { iPadsAndTablets, mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/q0Cy1Fz/pexels-mikhail-nilov-8412638.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  ${iPadsAndTablets({ width: "50%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 5px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  margin: 15px 0px;
  padding: 15px 0px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &::disabled {
    color: green;
    cursor: not-allowed;
  }

  // const Link = styled.a
`;
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // user in state.user is from userSlice file and is the name
  // property in the userSlice. useSelector allows you to extract
  // data from the Redux store state
  // const { isFetching, error } = useSelector((state) => state.user);
  const { isFetching } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonContainer>
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            <Link to="/">
              <Button>BACK</Button>
            </Link>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
