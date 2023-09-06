import styled from "@emotion/styled";
import Balloon from "./balloon";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: relative;
  transform-origin: bottom;
  margin-right: 5px;
`;

function BalloonRoot({ balloons, removeBalloon, delay = 0, isBalloonLoading }) {
  return (
    <Container
      animate={{
        rotate: [2, -2, 2],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        delay,
      }}
    >
      {balloons.map((balloon) => (
        <Balloon
          removeBalloon={() => removeBalloon(balloon.id)}
          key={balloon.id}
          balloon={balloon}
          isBalloonLoading={isBalloonLoading}
        />
      ))}
    </Container>
  );
}

export default BalloonRoot;
