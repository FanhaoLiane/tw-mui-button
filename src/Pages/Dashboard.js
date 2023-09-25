import React from 'react';
import Typography from '@mui/material/Typography';

import Button from '../Components/Button';
import Slider from '../Components/Slider';

export default function Dashboard(props) {
    // const { } = props;
    return (
        <div className='p-4 pt-[80px] bg-dark w-full h-full flex gap-5 flex-col'>
            <Typography paragraph className='text-white'>
                Button style example
            </Typography>
            <div className='flex gap-2'>
                <Button size="small" type="error" status="text">Error</Button>
                <Button size="small" type="info">Info</Button>
                <Button size="small" type="success">Warning</Button>
            </div>
            <Slider />
        </div>
    );
}

