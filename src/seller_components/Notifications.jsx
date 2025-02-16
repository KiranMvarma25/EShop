import { useSelector } from "react-redux";

function Notifications(){
    const notifications = useSelector(store => store.cart.items);
    console.log(notifications);
    
    return (
        <>
            <h2>Notifications</h2>
            {
                notifications.map(order => <div key={order.id}>
                    <h3>! Deliver Parcel - {order.title}</h3>
                </div>)
            }
        </>
    )
}


export default Notifications;