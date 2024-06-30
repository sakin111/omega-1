import { useContext, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { FaRegFileImage } from "react-icons/fa6";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  
  if (!user) {
    return <div>Loading...</div>;
  }

  const { photoURL, displayName, role } = user;



  const handleProfile = async (e) => {
    e.preventDefault();
    const image = fileInputRef.current.files[0];

    if (!image) {
      console.error('No image selected');
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No image selected',
        showConfirmButton: true
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET);
    formData.append('cloud_name', import.meta.env.VITE_CLOUD_IMAGE_NAME);

    try {
      const uploadResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_IMAGE_NAME}/image/upload`,
        formData
      );

      console.log('Image uploaded successfully:', uploadResponse.data);

      const imageUrl = uploadResponse.data.secure_url;
      const updateResponse = await axios.post('/updateProfile', { imageUrl });

      if (updateResponse.data.success) {
        console.log('Profile updated successfully');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Profile updated successfully',
          showConfirmButton: false,
          timer: 1500
        });
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'An error occurred',
        text: error.message,
        showConfirmButton: true
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="py-6">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-56 p-4"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        >
          <div className="justify-end translate-y-44 flex">
            <form ref={formRef} onSubmit={handleProfile}>
              <div className="flex items-center">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
                <button
                  type="button"
                  className="p-2 rounded-full border-2 bg-slate-300 text-gray-700"
                  onClick={triggerFileInput}
                >
                  <FaRegFileImage className="w-9 h-9" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            {photoURL ? (
              <img src={photoURL} alt="profile" className="w-24 h-24 rounded-full" />
            ) : (
              <img src="https://via.placeholder.com/150" alt="profile" />
            )}
            <div className="ml-4">
              <h2 className="text-xl text-black font-semibold uppercase">
                {displayName || "No Name"}
              </h2>
              <p className="text-sm text-gray-600">{role || "No Role"}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-sm">No bio available.</p>
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
