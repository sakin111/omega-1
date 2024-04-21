
import { TextField, Button, Typography, Container, FormControl } from '@mui/material';
import axios from 'axios';
import { useMemo, useRef } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import Swal from 'sweetalert2';



const AddItem = () => {
  const options = useMemo(() => countryList().getData(), []);
  const axiosPublic = useAxiosPublic()
  const formRef = useRef(null)

  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const roomNumber = form.roomNumber.value;
    const hotelName = form.hotelName.value;
    const location = form.location.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const category = form.category.value;

    if (!image) {
      console.error('No image selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', import.meta.env.VITE_UPLOAD_preset);
    formData.append('cloud_name', import.meta.env.VITE_CLOUD_image_name);

    try {
      const uploadResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_image_name}/image/upload`,
        formData
      );

      console.log('Image uploaded successfully:', uploadResponse.data);

      const imageUrl = uploadResponse.data.secure_url;
      const formInfo = { roomNumber, hotelName, imageUrl, category, location, description, rating };

      const mongoResponse = await axiosPublic.post('/rooms', formInfo);
      if (mongoResponse.data.insertedId) {
        console.log('Room created successfully');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Room created successfully',
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



  return (
    <Container maxWidth="lg" >
      <Typography variant="h4" align="center" gutterBottom>
        Hotel Information
      </Typography>
      <form ref={formRef} onSubmit={handleForm}>
        <TextField
          label="Room Number"
          fullWidth
          name='roomNumber'
          margin="normal"
        />
        <TextField
          label="Hotel Name"
          fullWidth
          name='hotelName'
          margin="normal"

        />
        <TextField
          label="Location"
          fullWidth
          name='location'
          margin="normal"

        />



        <input type="file" className="file-input file-input-bordered w-full max-w-xs" name='image' />
        <FormControl fullWidth margin="normal" sx={{ zIndex: '10' }}>

          <Select options={options} placeholder={'select country'} name='country' />
        </FormControl>
        <TextField
          label="Service Description"
          fullWidth
          margin="normal"
          multiline
          name='description'
          rows={4}
        />

        <select name="category" id="category-select" className='appearance-none border border-gray-300 rounded-md py-2 px-4 text-sm leading-tight focus:outline-none focus:ring focus:border-blue-500 w-full'>
          <option value="">None</option>
          <option value="five star">Five Star</option>
          <option value="three star">Three Star</option>
          <option value="normal">Normal</option>
        </select>


        <TextField
          label="Ratings"
          type="text"
          fullWidth
          name='rating'
          margin="normal"
        />



        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddItem;
