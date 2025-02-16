import { useSelector } from "react-redux";

function BuyerTransactions(){
    
    const transactions = useSelector(store => store.cart.items);
    console.log(transactions);

    const totalPrice = useSelector(store => store.cart.totalPrice);
    console.log(totalPrice);
    
    return (
        <>
            <h2>Transaction</h2>
            {
                transactions.map(order => <div key={order.id}>
                    <h3>Paid - {order.price}</h3>
                </div>)
            }
        </>
    )
}


export default BuyerTransactions;