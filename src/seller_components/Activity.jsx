import { useDispatch, useSelector } from "react-redux";
import { deliverItem } from "../store/cartSlice";

function Activity() {
    
    const activity = useSelector(store => store.cart.items);
    const deliveredItems = useSelector(store => store.cart.deliveredItems); 
    const dispatch = useDispatch();

    function handleClickDeliver(item) {
        dispatch(deliverItem(item));
    }

    return (
        <>
            <h2>Activity</h2>
            <table className="activityTableParent">
                <thead>
                    <tr align="center" className="activityTable">
                        <th><h3 className="activityTable">Item</h3></th>
                        <th><h3 className="activityTable">Status</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        activity.map(item => <tr align="center" key={item.id}>
                            <td><h4>{item.title}</h4></td>
                            <td>
                                <button onClick={() => handleClickDeliver(item)} disabled={deliveredItems.some(delItem => delItem.id === item.id)}>
                                    {deliveredItems.some(delItem => delItem.id === item.id) ? "Delivered" : "Deliver"}
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
}

export default Activity;
