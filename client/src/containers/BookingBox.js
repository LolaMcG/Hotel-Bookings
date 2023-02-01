import { useEffect, useState } from "react";
import BookingList from "../components/BookingList";
import { getBookings, deleteBookingFromDatabase } from "../components/BookingFetches";
import BookingForm from "../components/BookingForm";

const BookingBox = () => {

    const [listOfBookings, setListOfBookings] = useState([])

    useEffect(() => {
        getBookings()
            .then(allBookings =>{
                setListOfBookings(allBookings)
            }) 
    }, [])


    const addBooking = (booking) => {
        setListOfBookings([...listOfBookings, booking])
    } 


    const removeBookingFromFrontend = (id) => {
        deleteBookingFromDatabase(id)
        .then(() => {
            setListOfBookings(listOfBookings.filter(booking => booking._id !== id))
        })
    }


    return(
        <>
            <BookingForm addBooking={addBooking}/>
            <BookingList
            listOfBookings={listOfBookings} removeBookingFromFrontend={removeBookingFromFrontend}/>
        </>
    )
}

export default BookingBox