
import { useLoaderData } from 'react-router-dom'
// import Header from '../../components/RoomDetails/Header'
import RoomsDetails from './RoomsDetails'
import RoomReserved from './RoomReserved'


const RoomDetailsAll = () => {
  const room = useLoaderData()

  return (
 
     <div>
       {room && (
        <div >
          <div>
          <RoomsDetails room={room}></RoomsDetails>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>

            {/* <RoomInfo room={room} /> */}
            
            <div className='md:col-span-3 order-first md:order-last mb-10'>
              {/* RoomReservation */}
              <RoomReserved room={room}></RoomReserved>
              {/* <RoomReservation room={room} /> */}
            </div>
          </div>
        </div>
      )}
     </div>
   
  )
}

export default RoomDetailsAll


