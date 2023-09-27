import React from 'react';

import DropDownList from '../Components/FromGenerator/DropDownList';
import Button from '../Components/Button';
import Slider from '../Components/Slider';

import { useTranslation } from 'react-i18next';

export default function Dashboard(props) {
    // const { } = props;
    const langList = [
    { id: 1, label: 'English', value: 'en' },
    { id: 2, label: 'Chinese', value: 'zh' },
    ];

    const [lang, setLang] = React.useState(langList[0]);
    const { t, i18n } = useTranslation();

    const handleChange = (e, option) => {
        i18n.changeLanguage(option.value);
        setLang(option)
    };

    return (
        <div className='p-4 pt-[80px] bg-dark w-full h-full flex gap-5 flex-col'>
            <p className='text-white'>
                Button style example {t('hello')}
            </p>
            <DropDownList id="demo-i18n-lang-select"
                label="Language"
                value={lang}
                onChange={handleChange}
                isRequired
                type="singleSelect"
                selectList={langList}
            />
            <div className='flex gap-2'>
                <Button size="small" type="error" status="text">Error</Button>
                <Button size="small" type="info">Info</Button>
                <Button size="small" type="success">Warning</Button>
            </div>
            <Slider />
        </div>
    );
}

