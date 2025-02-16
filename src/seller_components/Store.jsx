import { useState, useEffect } from "react";
import Spinner from "../Spinner";

import { useDispatch, useSelector } from "react-redux";
import { buyItem } from "../store/cartSlice";

import { toast } from "react-toastify";

function Store(){

    const [products, setProducts] = useState([]);

    const [showSpinner, setShowSpinner] = useState(false); 

    const url = "https://dummyjson.com/products";

    async function fetchData(){
        setShowSpinner(true);
        try{
            let response = await fetch(url);
            let output = await response.json()
            setProducts(output.products);
        }
        catch(error){
            console.error("Failed to fetch products:", error);
        }
        finally {
            setShowSpinner(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(products);

    const dispatch = useDispatch();

    function handleClickBuy(item){
        dispatch(buyItem(item));
        toast.success("Item Purchased"); 
    }

    const seller = useSelector(store => store.cart.seller);
    console.log(seller);

    return (
        <>
            <h2>Store</h2>
                
            <div className="storeItems">
                {
                    showSpinner ? <Spinner /> :
                    
                    products.map(item => <div key={item.id} className="items">
                        <h3 className="itemHeading">{item.title}</h3>
                        <img src={item.images[0]} alt={`Image of ${item.title}`} width="250px" height="250px" />
                        <h4>Price - {item.price}</h4>
                        <h4>{item.brand}</h4>
                        <button onClick={() => handleClickBuy(item)} className="buyButton">Buy</button>
                    </div>)
                }
            </div>
        </>
    )
}


export default Store;