import styled from "@emotion/styled";

const Container = styled.div``;

const ImageWrapper = styled.div`
  width: 200px;
  z-index: 1;
  transform: translate(0);
`;
function House() {
  return (
    <Container>
      <ImageWrapper>
        <img alt="house" src="img/icon/house.png" />
      </ImageWrapper>
    </Container>
  );
}

export default House;
