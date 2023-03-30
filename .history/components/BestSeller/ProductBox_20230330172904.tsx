import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const ProductBox = () => {
  return (
    <Box>
      <Box
        component="img"
        width="100%"
        src="https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-(1)-800x800.jpeg"
      ></Box>
      <Box>
        <Typography variant="h4">Váy nơ cổ tùng xòe 4VA1386NA</Typography>
        <Box component="p">750.000 đ</Box>
      </Box>
    </Box>
  );
};

export default ProductBox;
