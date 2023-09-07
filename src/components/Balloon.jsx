import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translateX(-50%) rotate(${(props) => props.deg}deg);
  transform-origin: bottom;
`;
const BalloonWrapper = styled(motion.div)`
  width: 80px;
  height: auto;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.deg * -1}deg);
  z-index: 1;
`;
const Line = styled(motion.div)`
  width: 2px;
  height: ${(props) => props.height}px;
  background: black;
`;
const PopBalloon = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 0%;
`;

function Balloon({ balloon, removeBalloon }) {
  const [isBalloonRemoved, setIsBalloonRemoved] = useState(false);
  return (
    <Container deg={balloon.deg}>
      <BalloonWrapper
        deg={balloon.deg}
        animate={{
          opacity: isBalloonRemoved ? 0 : 1,
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <button
          onClick={() => {
            removeBalloon();
            setIsBalloonRemoved(true);
          }}
        >
          <img
            alt={balloon.name}
            src={`img/icon/balloon/${balloon.name}.png`}
          />
        </button>
        <PopBalloon
          animate={{
            display: isBalloonRemoved ? "block" : "none",
            opacity: isBalloonRemoved ? 1 : 0,
            zIndex: isBalloonRemoved ? 1 : -1,
            translateX: isBalloonRemoved ? -20 : -40,
            translateY: isBalloonRemoved ? 20 : 40,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <img alt={balloon.name} src={`img/icon/balloon/punch.png`} />
        </PopBalloon>
      </BalloonWrapper>
      <motion.div
        animate={{ scaleY: isBalloonRemoved ? 0 : 1 }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}
        style={{ transformOrigin: "bottom" }}
      >
        <Line
          height={balloon.height}
          animate={{
            height: [0, balloon.height, balloon.height - 20, balloon.height],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.7, 0.85, 1],
          }}
        />
      </motion.div>
    </Container>
  );
}

export default Balloon;
