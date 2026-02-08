const getUser = async () =>{
    await new Promise((res) => setTimeout(res, 1000))
    return {userId: 1,name: "Omar", age: 19}
}
const getOrders = async (userId) => {
    await new Promise((res) => setTimeout(res, 1000))
    return {userId, orders:[12, 13, 14, 15]}
}
const getOrderDetails = async (orderID) =>{
    await new Promise((res) => setTimeout(res, 1000))
    return {orderID, shippingTime: "8:00PM"}
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