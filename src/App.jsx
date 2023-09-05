import styled from "@emotion/styled";
import House from "./components/House";
import Balloon from "./components/balloon";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: skyblue;
  height: 100vh;
  position: relative;
`;
const BalloonWrapper = styled.div`
  position: relative;
`;

function App() {
  const icons = ["sun", "moon", "cloud", "water", "world"];
  const [balloons, setBalloons] = useState([
    { id: 1, name: "sun" },
    { id: 2, name: "moon" },
    { id: 3, name: "cloud" },
  ]);
  return (
    <Container>
      <BalloonWrapper>
        {balloons.map((balloon) => (
          <Balloon key={balloon.id} icon={balloon.name} />
        ))}
      </BalloonWrapper>
      <House />
    </Container>
  );
}

export default App;
