import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOff from './OnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'On Off',
    component: OnOff,
};

export const OnMode = () => <OnOff on={true} onClick={action('on or off clicked')} />
export const OffMode = () => <OnOff on={false} onClick={action('on or off clicked')} />
export const ModeChanging = () => {
    const [value , setValue] = useState<boolean>(true)
    return <OnOff on={value} onClick={setValue} />
}

