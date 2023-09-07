import styled from "@emotion/styled";
import House from "./components/House";
import { useEffect, useRef, useState } from "react";
import BalloonRoot from "./components/BalloonRoot";
import { nanoid } from "nanoid";
import Modal from "./components/Modal";
import Alert from "./components/Modal/Alert";
import Pop from "./components/Modal/Pop";
import skyImage from "../public/img/background/sky.jpeg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: url(${skyImage});
  background-size: cover;
  background-position-x: center;
  background-position-y: ${(props) => props.backgroundY}%;
  background-repeat: no-repeat;
  transition: all 0.5s ease-in-out;
  height: 100vh;
  position: relative;
`;

function App() {
  const icons = ["sun", "leaf", "cloud", "water", "world"];
  const [balloons, setBalloons] = useState([]);
  const [modalType, setModalType] = useState(false);
  const [backgroundY, setBackgroundY] = useState(80);

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
        // 30% 확률로 행운의 풍선 생성
        isLucky: Math.random() < 0.3,
      },
    ]);
  };
  const removeBalloon = (id, isLucky) => {
    setTimeout(() => {
      setBalloons((prev) => prev.filter((balloon) => balloon.id !== id));
      isLucky && setModalType("lucky");
    }, 1000);
  };

  const prevBalloonsLengthRef = useRef(0);
  useEffect(() => {
    switch (balloons.length) {
      case 5:
        setBackgroundY(60);
        break;
      case 10:
        setBackgroundY(40);
        break;
      case 15:
        setBackgroundY(20);
        break;
      case 20:
        setBackgroundY(0);
        prevBalloonsLengthRef.current < 20 && setModalType("caution");
        break;
      default:
        break;
    }
    prevBalloonsLengthRef.current = balloons.length;
  }, [balloons]);

  return (
    <Container backgroundY={backgroundY}>
      {/* modalType이 lucky일때 나타나는 유니콘 */}
      <Pop isModalOpen={modalType === "lucky"} />
      <Modal
        isModalOpen={!!modalType}
        setModalType={setModalType}
        // 다양한 모달 content가 들어올 가능성을 고려하여 컴포넌트를 props로 전달(component composition)
        content={
          <Alert
            text={
              modalType === "caution"
                ? `이제 풍선을 터뜨려보는건 어떨까요?\n터뜨리면 다른 효과가 나타날지도...🤔`
                : modalType === "lucky"
                ? `구해줘서 고마워요😵‍💫`
                : ``
            }
            isModalOpen={!!modalType}
            setModalType={setModalType}
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
    </Container>
  );
}

export default App;

// 높이, 각도를 범위 내에서 랜덤생성
function getRange(min, max, interval) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * interval;
}
