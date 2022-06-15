import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';

function App() {
  const menu = {
    first: 'soup',
    second: 'not soup',
    drink: 'juice',
    dessert: 'cake'
  }
  return (
    <div>
      <AppTitle title={'some title'} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accordion title={'Menu'} menu={menu} collapsed = {true}/>
      <Accordion title={'Menu'} menu={menu} collapsed = {false}/>
        <hr/>
      <UncontrolledAccordion title={'Menu'} menu={menu} />
      <UncontrolledAccordion title={'Menu'} menu={menu} />
        <hr/>
        <UncontrolledRating />
        <UncontrolledRating />
        <UncontrolledRating />
        <UncontrolledRating />
        <UncontrolledRating />
        <hr/>
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
