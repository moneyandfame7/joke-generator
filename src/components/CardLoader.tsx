import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const CardLoader=() =>{
    return (
            <Box sx={{ width: 300 }}>
                <Skeleton width={150} />
                <Skeleton animation="wave" />
                <Skeleton animation={false} width={150} />
            </Box>
            );
}
export default CardLoader