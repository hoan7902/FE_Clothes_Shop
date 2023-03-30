import Pagination from '@mui/material/Pagination';
import { Box } from "@mui/material"
import { useEffect, useState } from 'react';
interface PagiProps {
    total: number,
}
import { useRouter } from 'next/router';

const Pagi = ({ total }: PagiProps) => {
    const [page, setPage] = useState(1);
    const router = useRouter();
    const currentPath = router.pathname;
    console.log(currentPath);

    const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);

        router.push(currentPath + `?page=${page}`);
    };
    return <Box display="flex" justifyContent={"center"} alignItems="center">
        <Pagination count={total} size="large"
            onChange={handlePageChange} />
    </Box>;
}

export default Pagi;