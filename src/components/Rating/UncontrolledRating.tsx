import React, {useState} from 'react'

const UncontrolledRating = () => {
    let [value, setValue] = useState(0)

    const onChangeRate = (rate: number) => {
        setValue(rate)
    }

    return (
        <div>
            <Star selected={value > 0}/><button onClick={() => onChangeRate(1)}>1</button>
            <Star selected={value > 1}/><button onClick={() => onChangeRate(2)}>2</button>
            <Star selected={value > 2}/><button onClick={() => onChangeRate(3)}>3</button>
            <Star selected={value > 3}/><button onClick={() => onChangeRate(4)}>4</button>
            <Star selected={value > 4}/><button onClick={() => onChangeRate(5)}>5</button>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
}


const Star = (props: StarPropsType) => {
    if (props.selected === true) {
        return (
            <span>
                <b>star</b>
            </span>
        )
    } else {
        return (
            <span>star</span>
        )
    }
}

export default UncontrolledRating