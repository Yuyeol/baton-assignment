import styled from "@emotion/styled";
import Balloon from "./balloon";

const Container = styled.div`
  position: relative;
  transform: rotate(5deg) translateX(${(props) => props.x}px);
  transform-origin: bottom;
`;
function BalloonRoot({ balloons, removeBalloon, positionX }) {
  return (
    <Container x={positionX}>
      {balloons.map((balloon) => (
        <Balloon
          removeBalloon={() => removeBalloon(balloon.id)}
          key={balloon.id}
          balloon={balloon}
        />
      ))}
    </Container>
  );
}

export default BalloonRoot;
