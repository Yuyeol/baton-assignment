import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled(motion.div)`
  background: white;
  border: 3px solid black;
  border-radius: 15px;
  width: 50%;
  margin: auto;
  padding: 1.5rem 2rem;
  z-index: 3;
`;
const Text = styled.div`
  white-space: pre-line;
  font-weight: 900;
  font-size: 20px;
  text-align: center;
`;
const Button = styled.button`
  display: block;
  width: 150px;
  background: #ffd966;
  font-weight: 900;
  font-size: 24px;
  padding: 0.5rem 1rem;
  border: 3px solid black;
  border-radius: 999px;
  margin: 0 auto;
  margin-top: 1rem;
`;
function Alert({ text, isModalOpen, setIsModalOpen }) {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <Container
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text>{text}</Text>
          <Button onClick={() => setIsModalOpen(false)}>오키</Button>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default Alert;
