import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  width: 100%;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Pop({ isModalOpen }) {
  return (
    // AnimatePresence를 사용하여 마운트/언마운트 시 애니메이션 적용을 쉽게 할 수 있음
    <AnimatePresence>
      {isModalOpen && (
        <Container
          initial={{
            scale: 0,
            top: 300,
          }}
          animate={{
            scale: 2,
            top: -1000,
            rotate: 720,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <img alt="unicorn" src={`img/icon/unicorn.png`} />
        </Container>
      )}
    </AnimatePresence>
  );
}

export default Pop;
