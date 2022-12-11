import styled from "styled-components";

export const ImageBox = styled.div`
  display: flex;
  margin-right: 1rem;
  flex-direction: column;
  justify-content: flex-end;
  width: 200px;
  height: 200px;
  @media (min-width: 500px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 700px) {
    width: 350px;
    height: 350px;
  }
  @media (min-width: 1000px) {
    width: 400px;
    height: 400px;
  }
`;
