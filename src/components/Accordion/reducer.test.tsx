import {reducer, StateType} from './UncontrolledAccordion';

test('value is true', () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(true)
})
test('value is false', () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(false)
})

test('value is error', () => {
    const state: StateType = {
        collapsed: true
    }


    expect(()=> {reducer(state, {type: 'FAKE-TYPE'})}).toThrowError()
})