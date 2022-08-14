import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';


export default {
    title: 'Accordionn',
    component: Accordion,
};

const onClickCallback = action('item was clicked')

export const CollapsedMode = () => <Accordion collapsed={action('clicked')} title={'Menu'} value={true}
                                              onChange={onClickCallback}
                                              menu={[]} onClick={() => {
}}/>
export const UncollapsedMode = () => <Accordion collapsed={action('clicked')} title={'Menu'} value={false}
                                                onChange={onClickCallback}
                                                menu={[{title: 'soup', value: 1}, {
                                                    title: 'beef',
                                                    value: 2
                                                }, {title: 'bread', value: 3}, {
                                                    title: 'pasta',
                                                    value: 4
                                                }]} onClick={onClickCallback}/>
export const AccordionModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion collapsed={setValue} title={'Menu'} value={value} onChange={() => setValue(!value)}
                      menu={[{title: 'soup', value: 1}, {title: 'beef', value: 2}, {title: 'bread', value: 3}, {
                          title: 'pasta',
                          value: 4
                      }]} onClick={onClickCallback}/>
}

