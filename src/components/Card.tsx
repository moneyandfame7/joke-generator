import {Box, Typography} from '@mui/material';
import * as React from 'react';
import {IJoke} from '../App';

interface CardProps {
    joke?: IJoke
}

const Card: React.FC<CardProps> = ({joke}) => {
    return (
        <Box sx={{border: '1px solid #e0a96d', py: 3, px: 2, borderRadius: '5px'}}>
            <Typography variant='subtitle2' component='p'><b>Type: </b> {joke?.type}</Typography>
            <Typography variant='body2' component='p'><b>Setup: </b> {joke?.setup}</Typography>
            <Typography variant='body2' component='p'><b>Puncline: </b> {joke?.punchline}</Typography>
        </Box>
    )
}
export default Card