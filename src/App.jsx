import styled from "@emotion/styled";
import House from "./components/House";
import { useState } from "react";
import BalloonRoot from "./components/BalloonRoot";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: skyblue;
  height: 100vh;
  position: relative;
`;

function App() {
  const icons = ["sun", "leaf", "cloud", "water", "world"];
  const [balloons, setBalloons] = useState([
    {
      id: 1,
      name: "sun",
      deg: 6,
      height: 200,
      rootIdx: 0,
    },
    {
      id: 2,
      name: "leaf",
      deg: 0,
      height: 150,
      rootIdx: 1,
    },
    {
      id: 3,
      name: "cloud",
      deg: -18,
      height: 250,
      rootIdx: 2,
    },
  ]);

  const addBalloon = () => {
    const randomIcon = Math.floor(Math.random() * icons.length);
    const randomRoot = Math.floor(Math.random() * 3);
    setBalloons([
      ...balloons,
      {
        id: balloons.length + 1,
        name: icons[randomIcon],
        deg: getRange(-20, 20, 3),
        height: getRange(30, 90, 5),
        rootIdx: randomRoot,
      },
    ]);
  };
  const removeBalloon = (id) => {
    setBalloons(balloons.filter((balloon) => balloon.id !== id));
  };
  return (
    <Container>
      <BalloonRoot
        balloons={balloons.filter((b) => b.rootIdx === 0)}
        removeBalloon={removeBalloon}
      />
      <BalloonRoot
        balloons={balloons.filter((b) => b.rootIdx === 1)}
        removeBalloon={removeBalloon}
        positionX={5}
      />
      <BalloonRoot
        balloons={balloons.filter((b) => b.rootIdx === 2)}
        removeBalloon={removeBalloon}
        positionX={-5}
      />
      <House addBalloon={addBalloon} />
    </Container>
  );
}

export default App;

function getRange(min, max, interval) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * interval;
}
