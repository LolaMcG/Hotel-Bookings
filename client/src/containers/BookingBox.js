import { useEffect, useState } from "react";
import BookingList from "../components/BookingList";
import { getBookings, deleteBookingFromDatabase } from "../components/BookingFetches";
import BookingForm from "../components/BookingForm";
import Header from "../components/Header"
import styled from "styled-components";


const BackgroundImg = styled.div`
    background-image: url("${process.env.PUBLIC_URL}/high_res_backg.jpg");
    background-size: cover;
    height: 100vh;`


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
        <BackgroundImg>
            <Header/>
            <BookingForm addBooking={addBooking}/>
            <BookingList
            listOfBookings={listOfBookings} removeBookingFromFrontend={removeBookingFromFrontend}/>
        </BackgroundImg>
    )
}

export default BookingBox