import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";

function Login(){

  const [sellerData, setSellerData] = useState({ name : '', password : '' });       

  const sellerCredentials = { name : "Seller", password : "Sellerseller123" };     

  const navigate = useNavigate();

  function handleClickSellerLogin(e){                                              

    e.preventDefault();
    
    if(sellerCredentials.name === sellerData.name && sellerCredentials.password === sellerData.password) 
        navigate('/seller');
    
    else 
        alert("Incorrect Seller Details");
    // toast.error("Incorrect Admin Details");
    
  }

  

  const [buyerData, setBuyerData] = useState({ name : '', password : '' });         

  const buyerCredentials = { name : "Buyer", password : "Buyerbuyer123" };         

  function handleClickBuyerLogin(e){                                               

    e.preventDefault();

    if(buyerCredentials.name === buyerData.name && buyerCredentials.password === buyerData.password) 
        navigate('/buyer');
    
    else 
        alert("Incorrect Buyer Details");
        // toast.error("Incorrect User Details");
    
  }

  return (
      <>
        <div className="parent">  

          <form className="sellerForm" onSubmit={handleClickSellerLogin}>
            
            <h1 className="loginheading">Seller Log-In</h1>
            
            <br />

            <label className="logininputLabel" htmlFor="sellerName">Seller Name</label>
            <br />
            <input className="logininputField" type="text" id="sellerName" value={sellerData.name} onChange={(e) => setSellerData({ ...sellerData, name : e.target.value })} />

            <br />
            <br />
            
            <label className="logininputLabel" htmlFor="sellerPassword">Seller Password</label>
            <br />
            <input className="logininputField" type="password" id="sellerPassword" value={sellerData.password }onChange={(e) => setSellerData({ ...sellerData, password : e.target.value })}/>
            
            <br />
            <br />

            <button className="loginButtons" type="submit"><span className="reactIcons">Log In <IoLogIn /></span></button>
          
          </form>

          <form className="buyerForm" onSubmit={handleClickBuyerLogin}>

            <h1 className="loginheading">Buyer Log-In</h1>

            <br />

            <label className="logininputLabel" htmlFor="buyerName">Buyer Name</label>
            <br />
            <input className="logininputField" type="text" id="buyerName" value={buyerData.name} onChange={(e) => setBuyerData({ ...buyerData, name: e.target.value })}/>

            <br />
            <br />

            <label className="logininputLabel" htmlFor="buyerPassword">Buyer Password</label>
            <br />
            <input className="logininputField" type="password" id="buyerPassword" value={buyerData.password} onChange={(e) => setBuyerData({ ...buyerData, password: e.target.value })}/>

            <br />
            <br />

            <button className="loginButtons" type="submit"><p className="reactIcons">Log In <IoLogIn /></p></button>

          </form>

        </div>

      </>
  );
}


export default Login;