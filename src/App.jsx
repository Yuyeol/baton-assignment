import styled from "@emotion/styled";
import House from "./components/House";
import Balloon from "./components/balloon";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: skyblue;
  height: 100vh;
  position: relative;
`;
const BalloonWrapper = styled.div`
  position: relative;
  transform: rotate(5deg);
  transform-origin: bottom;
`;

function App() {
  const icons = ["sun", "moon", "cloud", "water", "world"];
  const [balloons, setBalloons] = useState([
    { id: 1, name: "sun", deg: 0, height: 450 },
    { id: 2, name: "moon", deg: 6, height: 180 },
    { id: 3, name: "cloud", deg: -6, height: 200 },
  ]);

  const addBalloon = () => {
    const random = Math.floor(Math.random() * icons.length);
    setBalloons([
      ...balloons,
      {
        id: balloons.length + 1,
        name: icons[random],
        deg: getRange(-20, 20, 3),
        height: getRange(150, 450, 5),
      },
    ]);
  };
  const removeBalloon = (id) => {
    setBalloons(balloons.filter((balloon) => balloon.id !== id));
  };
  return (
    <Container>
      <BalloonWrapper>
        {balloons.map((balloon) => (
          <Balloon
            removeBalloon={() => removeBalloon(balloon.id)}
            key={balloon.id}
            balloon={balloon}
          />
        ))}
      </BalloonWrapper>
      <House addBalloon={addBalloon} />
    </Container>
  );
}

export default App;

function getRange(min, max, interval) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * interval;
}
