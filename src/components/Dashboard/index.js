import { Typography, Box } from "@mui/material";
import Banner from "./Banner";
// import Products from "./Products";
import Promotions from "./Promotions";
import SearchBox from "./Search";

function Dashboard() {
  return (
    <>
        <Banner />
        <Promotions />
            <SearchBox />
          <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            {/* <Products />  */}
     </>
  );
}

export default Dashboard;