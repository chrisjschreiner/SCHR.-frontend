import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(68, 68, 68);
  min-height: 100vh;
`;

const ErrorCode = styled.h2`
  font-size: 55px;
`;

const NoPage = styled.p`
  font-size: 20px;
`;

const NotFound = () => {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <NoPage>Page not found</NoPage>
    </Container>
  );
};

export default NotFound;
