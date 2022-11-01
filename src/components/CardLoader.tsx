import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const CardLoader = () => {
    return (
        <Box sx={{width: 300}}>
            <Skeleton  width={150} sx={{bgcolor: '#DDC3A5', opacity: 0.3}}/>
            <Skeleton  sx={{bgcolor: '#DDC3A5', opacity: 0.3}}/>
            <Skeleton  width={150} sx={{bgcolor: '#DDC3A5', opacity: 0.3}}/>
        </Box>
    );
}
export default CardLoader