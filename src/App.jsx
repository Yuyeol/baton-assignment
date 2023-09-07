import styled from "@emotion/styled";
import House from "./components/House";
import { useEffect, useState } from "react";
import BalloonRoot from "./components/BalloonRoot";
import { nanoid } from "nanoid";
import Modal from "./components/Modal";
import Alert from "./components/Modal/Alert";
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
  const [balloons, setBalloons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    balloons.length > 20 && setIsModalOpen(true);
  }, [balloons]);

  return (
    <Container>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        // 다양한 모달 content가 들어올 가능성을 고려하여 컴포넌트를 props로 전달(component composition)
        content={
          <Alert
            text={`이제 풍선을 터뜨려보는건 어떨까요?\n터뜨리면 다른 효과가 나타날지도...🤔`}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        }
      />
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
      <div onClick={() => setIsModalOpen(true)}>모달오픈</div>
    </Container>
  );
}

export default App;

// 높이, 각도를 범위 내에서 랜덤생성
function getRange(min, max, interval) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * interval;
}
