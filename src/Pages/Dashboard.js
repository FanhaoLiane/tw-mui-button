import React from 'react';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Button from '../Components/Button';
import Slider from '../Components/Slider';

import { useTranslation } from 'react-i18next';

export default function Dashboard(props) {
    // const { } = props;
    const [lang, setLang] = React.useState('');
    const { t, i18n } = useTranslation();

    const handleChange = (event) => {
        setLang(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className='p-4 pt-[80px] bg-dark w-full h-full flex gap-5 flex-col'>
            <Typography paragraph className='text-white'>
                Button style example {t('hello')}
            </Typography>
            <FormControl fullWidth>
                <InputLabel id="select-lang">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lang}
                    label="Language"
                    onChange={handleChange}
                >
                    <MenuItem value={"zh"}>zh</MenuItem>
                    <MenuItem value={"en"}>en</MenuItem>
                </Select>
            </FormControl>
            <div className='flex gap-2'>
                <Button size="small" type="error" status="text">Error</Button>
                <Button size="small" type="info">Info</Button>
                <Button size="small" type="success">Warning</Button>
            </div>
            <Slider />
        </div>
    );
}

