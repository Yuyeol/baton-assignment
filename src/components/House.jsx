import styled from "@emotion/styled";

const Container = styled.div``;

const ImageWrapper = styled.div`
  width: 200px;
  z-index: 1;
  transform: translateY(-70px);
`;
function House({ addBalloon }) {
  return (
    <Container>
      <ImageWrapper>
        <button onClick={addBalloon}>
          <img alt="house" src="img/icon/house.png" />
        </button>
      </ImageWrapper>
    </Container>
  );
}

export default House;
