import { useSelector } from "react-redux";

function Profile(){

    const profile = useSelector(store => store.cart.seller);
    console.log(profile);

    return (
        <>
            <h2>Profile</h2>
            <div className="profile">
                
                    <img src={profile.image} alt={`Image of ${profile.name}`} width="300px" />
                    <h4>Name - {profile.name}</h4>
                    <h4>Email - {profile.email}</h4>
                    <h4>Age - {profile.age}</h4>  
                    <h4>Location - {profile.location}</h4>
                
            </div>
        </>
    )
}


export default Profile;