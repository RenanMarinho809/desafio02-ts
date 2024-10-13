import { Box } from "@chakra-ui/react";
import Header from "./components/Header/Header";



const HomePage: React.FC = () => {
  return (
    <Box textAlign="center" p={4}>
         <Header />
    </Box>
  );
};

export default HomePage;