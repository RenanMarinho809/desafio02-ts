import { Box, Button } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import { showWelcomeMessage } from "./components/messange";



const HomePage: React.FC = () => {
  return (
    <Box textAlign="center" p={4}>
         <Header />
         <Button  onClick={showWelcomeMessage} />
    </Box>
  );
};

export default HomePage;