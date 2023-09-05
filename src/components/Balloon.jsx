import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 70px) rotate(0deg);
  transform-origin: bottom;
`;
const ImageWrapper = styled.div`
  width: 80px;
  height: auto;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-0deg);
`;
const Line = styled.div`
  width: 3px;
  height: 250px;
  background: black;
`;
function Balloon({ icon }) {
  return (
    <Container>
      <ImageWrapper>
        <img alt={icon} src={`img/icon/balloon/${icon}.png`} />
      </ImageWrapper>
      <Line />
    </Container>
  );
}

export default Balloon;
