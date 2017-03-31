const ADD_VALUE = 'ADD_VALUE';

const summingReducer = (state=0, action={}) => {
    const {type, payload} = action;

    switch(type) {
        case ADD_VALUE:
            return state + payload.value;
        default: return state;
    }
};

const actions = [
  { type: 'ADD_VALUE', payload: { value: 1 } },
  { type: 'ADD_VALUE', payload: { value: 1 } },
  { type: 'ADD_VALUE', payload: { value: 1 } },
];

console.log(actions.reduce(summingReducer, 0));
