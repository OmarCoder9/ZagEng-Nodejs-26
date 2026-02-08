const getUser = (callback) =>{
    setTimeout(()=>{
        callback("Users loaded")
    }, 1000)
    return {name: "Omar", age: 19}
} 
const getOrders = (userId, callback) =>{
    setTimeout(()=>{
        callback("Orders loaded")
    }, 1000)

    return {userId, numberOfOrders: 5}
} 
const getOrderDetails = (orderID, callback) =>{
    setTimeout(()=>{
        callback("Details loaded")
    }, 1000)

    return {orderID, shippingTime: "8:00PM"}
} 

const callback = (massage) =>{
    console.log(massage);
}

getUser(callback)
getOrders(18, callback)
getOrderDetails(10, callback)



