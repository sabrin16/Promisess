const js = {
    firsName: 'Joakim',
    email: 'joakim@domain.com'
    active: true,
    age: 37
} 

const json = JSON.stringify(js)
console.log(js)
console.log(json)



const getData = (data) => {
    return new Promise((resolve, reject) => {
//        hämta en datan från en databas
        if(data) {
          resolve(data)
        } else {
          reject({ status: 500, massage: 'Error' })
        }
    })
}
function json(json) {
  return new Promise((resolve, reject) => {
    try {
      const parsed = JSON.parse(json)
      resolve(parsed)
    } catch (error) {
      rejact(error)
    }
    })
}
getData(jsonUser)
  .then(data => {
    return json(data)
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

fetch('ur1')
  .then(res => res.json())
  .then(data => {
    
  })






















// const dosomething = (value) => {
//  return new Promise((resolve, reject) => {
//
//    if(value === true) {
//      setTimeout(() => {
//        resolve('success data')
//      }, 1000)
//    }
//    else {
//        setTimeout(() => {
//          reject('Error massage')  
//        }, 1000)
//    }

// })
// }

// console.log(1)
// console.log(2)

// dosomething(false)
//  .then((data) => {
//    console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   .finally(() => {
//    console.log('färdig')
//   })

//   console.log(3)
//   console.log(4)