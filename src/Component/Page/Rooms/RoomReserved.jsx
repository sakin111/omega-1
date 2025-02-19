/* eslint-disable react/prop-types */
import Button from '../../Shared/Button/Button'
import Calender from '../../RoomDetails/Calender'
import BookingModal from '../../Modal/BookingModal'
import useAuth from '../../../Hook/useAuth'
import { useState } from 'react'
import { formatDistance } from 'date-fns'


const RoomReserved = ({ room }) => {


  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: room?.host?.email,
    location: room?.location,
    // price: totalPrice,
    to: value.endDate,
    from: value.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.image,
  })  

  let [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()

  const closeModal = () => {
    setIsOpen(false)
  }
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: 'selection',
  })

  const to = room?.to ? new Date(room.to) : null;
  const from= room?.from ? new Date(room.from) : null;
  
  if (!to || isNaN(to.getTime()) || !from || isNaN(from.getTime())) {
    console.error('Invalid date values in room object');
    console.log('Room object:', room); 
    return null; 
  }
  
  const totalDays = parseInt(formatDistance(to, from).split(' ')[0]);
  

  const totalPrice = totalDays * room?.price
  const handleDateChange = ranges => {
    console.log(ranges)
    setValue({
      startDate: new Date(room?.from),
      endDate: new Date(room?.to),
      key: 'selection',
    })
  }


  console.log(value)

  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {room?.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center'>
        <Calender handleDateChange={handleDateChange} value={value} />
      </div>
      <hr />
      <div className='p-4'>
        <Button
          disabled={room.host.email === user.email || room.booked}
          onClick={() => setIsOpen(true)}
          label={'Reserve'}
        />
      </div>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>

      <BookingModal
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
      />
    </div>
  )
}

export default RoomReserved




