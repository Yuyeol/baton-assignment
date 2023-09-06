import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translateX(-50%) rotate(${(props) => props.deg}deg);
  transform-origin: bottom;
`;
const ImageWrapper = styled.div`
  width: 80px;
  height: auto;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.deg * -1}deg);
`;
const Line = styled.div`
  width: 3px;
  height: ${(props) => props.height}px;
  background: black;
`;
function Balloon({ balloon, removeBalloon }) {
  return (
    <Container deg={balloon.deg}>
      <ImageWrapper deg={balloon.deg}>
        <button onClick={removeBalloon}>
          <img
            alt={balloon.name}
            src={`img/icon/balloon/${balloon.name}.png`}
          />
        </button>
      </ImageWrapper>
      <Line height={balloon.height} />
    </Container>
  );
}

export default Balloon;
