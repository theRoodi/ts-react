import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import {useState} from 'react';
import OnOff from './components/OnOff/OnOff';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [switched, setSwitched] = useState<boolean>(false)


    const menu = [{title: 'soup', value: 1}, {title: 'beef', value: 2}, {title: 'bread', value: 3}, {
        title: 'pasta',
        value: 4
    }]
    const onClick = (value: any) => {
        return value
    }
    return (
        <div>
            <AppTitle title={'some title'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'Menu'} onClick={onClick} menu={menu} collapsed={setCollapsed} value={collapsed}/>
            <OnOff on={switched} onClick={setSwitched}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const AppTitle = (props: PageTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}

export default App
