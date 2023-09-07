import styled from "@emotion/styled";
import House from "./components/House";
import { useState } from "react";
import BalloonRoot from "./components/BalloonRoot";
import { nanoid } from "nanoid";
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
    // 동기적으로 상태를 업데이트하지 않으니 누락이 발생하여 함수형 업데이트를 사용
    setBalloons((prev) => [
      ...prev,
      {
        id: nanoid(),
        name: icons[randomIcon],
        deg: getRange(-20, 20, 3),
        height: getRange(30, 90, 5),
        rootIdx: randomRoot,
      },
    ]);
  };
  const removeBalloon = (id) => {
    setTimeout(() => {
      setBalloons((prev) => prev.filter((balloon) => balloon.id !== id));
    }, 1000);
  };
  return (
    <Container>
      {/* 3개의 root에 delay를 다르게 주어 풍선의 움직임을 불규칙적으로 연출 */}
      <BalloonRoot
        balloons={balloons.filter((b) => b.rootIdx === 0)}
        removeBalloon={removeBalloon}
      />
      <BalloonRoot
        balloons={balloons.filter((b) => b.rootIdx === 1)}
        removeBalloon={removeBalloon}
        delay={-1}
      />
      <BalloonRoot
        balloons={balloons.filter((b) => b.rootIdx === 2)}
        removeBalloon={removeBalloon}
        delay={-2}
      />
      <House addBalloon={addBalloon} />
    </Container>
  );
}

export default App;

// 높이, 각도를 범위 내에서 랜덤생성
function getRange(min, max, interval) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * interval;
}
