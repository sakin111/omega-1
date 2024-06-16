import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Profile = () => {

const {user} = useContext(AuthContext)

if (!user) {
  return <div>Loading...</div>;
}
const { photoURL, displayName, role } = user;









  
  return (
   <div>
 
        <div  className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}>
          <div className="flex justify-end">
    
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
          {photoURL ? (
                  <img src={photoURL} alt="profile"  className="w-24 h-24 rounded-full"/>
                ) : (
                  <img src="https://via.placeholder.com/150" alt="profile" />
                )}
            <div className="ml-4">
              <h2 className="text-xl text-black font-semibold uppercase">{displayName || "No Name"}</h2>
              <p className="text-sm text-gray-600">{role || "No Role"}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm">
               No bio available.
            </p>
          </div>
        </div>
        <div className="p-4 bg-gray-100">
          <div className="flex items-center justify-between">
            <button className="text-blue-500 hover:underline">Follow</button>
            <button className="text-blue-500 hover:underline">Message</button>
          </div>
        </div>
      </div>
 
  
   </div>
  );
};

export default Profile;
