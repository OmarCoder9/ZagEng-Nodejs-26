const getUser = () =>{
    return new Promise((res) =>{
        setTimeout(()=>{
            res({userId: 1,name: "Omar", age: 19})
        }, 1000)
    })
}
const getOrders = (userId) => {
    return new Promise((res) => {
        setTimeout(()=>{
            res({userId, orders:[12, 13, 14, 15]})
        }, 1000)
    })
}
const getOrderDetails = (orderID) =>{
    return new Promise((res) =>{
        setTimeout(()=>{
            res({orderID, shippingTime: "8:00PM"})
        }, 1000)
    })
}
const loadData = async () =>{
    try{
        const user =  await getUser();
        console.log("User laoded");
        const orders = await getOrders(user.userId)
        console.log("Orders Loaded");
        const details = await getOrderDetails(orders.orders[0])
        console.log("Details loaded");
    }catch(error){
        console.log("Error", error);
    }
}
loadData()