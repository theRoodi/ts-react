import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';


export default {
    title: 'Accordionn',
    component: Accordion,
};

export const CollapsedMode = () => <Accordion collapsed={action('clicked')} title={'Menu'} value={true} menu={{
    first: 'soup',
    second: 'not soup',
    drink: 'juice',
    dessert: 'cake'
}}/>
export const UncollapsedMode = () => <Accordion collapsed={action('clicked')} title={'Menu'} value={false} menu={{
    first: 'soup',
    second: 'not soup',
    drink: 'juice',
    dessert: 'cake'
}}/>
export const AccordionModeChanging = () => {
    const [value , setValue] = useState<boolean>(true)
    return <Accordion collapsed={setValue} title={'Menu'} value={value} menu={{
        first: 'soup',
        second: 'not soup',
        drink: 'juice',
        dessert: 'cake'
    }}/>
}

