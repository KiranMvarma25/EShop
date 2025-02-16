import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { FaStore } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

function Buyer() {
    const seller = useSelector(store => store.cart.buyer);
    const navigate = useNavigate();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
            if (window.innerWidth >= 900) setIsSidebarOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleClickLogout() {
        navigate("/");
    }

    return (
        <div className="sidebarParent">
            {isMobile && (
                <button className="sidebarToggleButton" onClick={() => setIsSidebarOpen(true)}>☰</button>
            )}

            {(isSidebarOpen || !isMobile) && (
                <div className={`sidebar2 ${isMobile ? "sidebarModal" : ""}`}>
                    <div className="sidebarItems">
                        {isMobile && <button className="closeButton" onClick={() => setIsSidebarOpen(false)}>✖</button>}
                        <h1>ESHOP</h1>
                        <Link to={"store"} className="sidebarItem"><FaStore /> Store</Link>
                        <Link to={"buyerTransactions"} className="sidebarItem"><GrTransaction /> Transaction</Link>
                        <Link to={"buyerProfile"} className="sidebarItem"><FaUserAlt /> Profile</Link>
                    </div>
                    <div className="sidebarItems">
                        <button onClick={handleClickLogout} className="logoutButton"><MdLogout /> Log Out</button>
                    </div>
                </div>
            )}

            <div className="mainContent">
                <div className="header">
                    <div className="searchParent">
                        <input type="text" className="searchInput" placeholder="search" />
                        <button className="searchButton">🔍</button>
                    </div>
                    <div className="miniProfile">
                        <img src={seller.image} alt={`Image of ${seller.name}`} width="75px" height="75px" style={{ borderRadius: "50px", border: "2px solid #ccc" }} />
                        <h4 className="profileName">{seller.name}</h4>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default Buyer;
