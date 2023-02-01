import BookingItem from "./BookingItem"

const BookingList = ({listOfBookings, removeBookingFromFrontend}) => {

    const listOfBookingItems = listOfBookings.map((booking) => {
        return (
            <BookingItem
            booking = {booking}
            key = {booking._id}
            removeBookingFromFrontend = {removeBookingFromFrontend}
            />
        )
    })


    return(
        <ul>
            {listOfBookingItems}
        </ul>
    )
}

export default BookingList