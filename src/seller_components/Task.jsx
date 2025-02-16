import { useSelector } from "react-redux";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { TbPackages } from "react-icons/tb";

function Task() {
    const items = useSelector(store => store.cart.items);
    const deliveredItems = useSelector(store => store.cart.deliveredItems);

    return (
        <>
            <h2>Task</h2>
            <div className="task">
                <div className="taskChild">
                    <div className="map">
                        <div>
                            <h4>Live Shipment Tracking</h4>
                            <p><PiDotsThreeOutlineFill /></p>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw058mAgdmPr8Ah2agl8pZaMCaKyZWtVzcEQ&s" alt="Image of Map" width="500px" height="250px" />
                    </div>
                    <div className="orderParent">
                        <div className="mapDiv">
                            <div className="mapchild">
                                <h5><TbPackages /> In Transit Order</h5>
                                <p><PiDotsThreeOutlineFill /></p>
                            </div>
                            <p>{items.length + deliveredItems.length} shipping packages</p>
                        </div>
                        <div className="mapDiv">
                            <div className="mapchild">
                                <h5><TbPackages /> Shipped Order</h5>
                                <p><PiDotsThreeOutlineFill /></p>
                            </div>
                            <p>{deliveredItems.length} shipping packages</p>
                        </div>
                        <div className="mapDiv">
                            <div className="mapchild">
                                <h5><TbPackages /> Pending Order</h5>
                                <p><PiDotsThreeOutlineFill /></p>
                            </div>
                            <p>{items.length} shipping packages</p>
                        </div>
                    </div>
                </div>

                <br /><br /><br />
                
                <div>
                    <img src="https://images.squarespace-cdn.com/content/v1/55b6a6dce4b089e11621d3ed/1585087896250-R3GZ6OFWYQRZUJRCJU3D/produce_monthly.png" alt="Image of Graph" width="100%" height="350px" />
                </div>
            </div>
        </>
    );
}

export default Task;
