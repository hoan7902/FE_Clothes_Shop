import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProductBox from "./ProductBox";
import SearchGroup from "./SearchGroup";
import SearchLimit from "./SearchLimit";
import Title from "./Title";

interface ResultProps {
    title: string;
}
const Result = ({ title }: ResultProps) => {
    return (
        <Box width={"74%"} maxWidth={"74%"}>
            <Title title="sản phẩm bán chạy" />
            <Stack direction={{ sx: "column", md: "row" }} justifyContent="space-between" alignItems="center">
                <SearchGroup />
                <SearchLimit />
            </Stack>
            <Box
                mt={"25px"}
                display="grid"
                gridTemplateRows={"1fr"}
                gridTemplateColumns={{
                    sm: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(4, 1fr)",
                }}
                rowGap="35px"
                columnGap={{ xs: "5px", sm: "10px", md: "25px" }}
                justifyContent={"center"}
            >
                <ProductBox
                    images={[
                        "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
                        "https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-\\(1\\)-800x800.jpeg",
                    ]}
                    name={"Váy nơ cổ tùng xòe 4VA1386NA"}
                    price={"750.000 đ"}
                />
                <ProductBox
                    images={[
                        "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
                        "https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-\\(1\\)-800x800.jpeg",
                    ]}
                    name={"Váy nơ cổ tùng xòe 4VA1386NA"}
                    price={"750.000 đ"}
                />
                <ProductBox
                    images={[
                        "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
                        "https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-\\(1\\)-800x800.jpeg",
                    ]}
                    name={"Váy nơ cổ tùng xòe 4VA1386NA"}
                    price={"750.000 đ"}
                />
                <ProductBox
                    images={[
                        "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
                        "https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-\\(1\\)-800x800.jpeg",
                    ]}
                    name={"Váy nơ cổ tùng xòe 4VA1386NA"}
                    price={"750.000 đ"}
                />
                <ProductBox
                    images={[
                        "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
                        "https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-\\(1\\)-800x800.jpeg",
                    ]}
                    name={"Váy nơ cổ tùng xòe 4VA1386NA"}
                    price={"750.000 đ"}
                />
                <ProductBox
                    images={[
                        "https://cdn.lep.vn//2022/07/images/products/1660908378355-4VA1386NAS-compressed-800x800.jpeg",
                        "https://cdn.lep.vn//2022/07/images/products/1660119057109-_DSC3749-compressed-\\(1\\)-800x800.jpeg",
                    ]}
                    name={"Váy nơ cổ tùng xòe 4VA1386NA"}
                    price={"750.000 đ"}
                />
            </Box>
        </Box>
    );
};

export default Result;
