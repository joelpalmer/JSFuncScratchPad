//lenses are functional getter/setter
const R = require('ramda');

const user = {
    id: 1,
  name: 'foo',
  company: {
    id: 12,
    name: 'bar',
    address: {
      street: 'randomstreet',
    }
  },
  comments: [
    {id: 2, text: 'yes, this could work.', to: {id: 4}},
    {id: 3, text: 'not sure.', to: {id: 12}},
    {id: 4, text: 'well, maybe', to: {id: 4}},
  ],
}

const idLens = R.lensProp('id')
R.view(idLens, user)
const updatedUser = R.set(idLens, 2, user)

// console.log(updatedUser)
// console.log(user)

const userCoStrLens = R.lensPath(['company', 'address', 'street'])
console.log(R.view(userCoStrLens, user))
const updateUserAddress = R.set(userCoStrLens, 'Foobarstreet', user)
console.log(updateUserAddress)































//const user = {id: 1, name: 'foo'}

// console.log(R.prop('id', user))
// const updatedUser = R.assoc('id', 2, user)
// console.log(updatedUser)
// console.log(user)

// const lens = (getter, setter) => {
//     return ({
//         get: obj => getter(obj),
//         set: (val, obj) => setter(val, obj)
//     })
// }

// const view = (lens, obj) => {
//     return lens.get(obj)
// }

// const set = (lens, val, obj) => {
//     return lens.set(val, obj)
// }

// const idLens = lens(R.prop('id'), R.assoc('id'))
// view(idLens, user)
// set(idLens, 2, user)
// console.log(view(idLens, user))
// console.log(set(idLens, 2, user))
