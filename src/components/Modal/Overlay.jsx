import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;

function Overlay({ isModalOpen }) {
  return (
    // AnimatePresence를 사용하여 마운트/언마운트 시 애니메이션 적용을 쉽게 할 수 있음
    <AnimatePresence>
      {isModalOpen && (
        <Container
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
        />
      )}
    </AnimatePresence>
  );
}

export default Overlay;
