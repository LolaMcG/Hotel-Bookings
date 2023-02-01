import { deleteBookingFromDatabase } from "./BookingFetches"

const BookingItem = ({booking, removeBookingFromFrontend}) => {

    const bookingStatus = () => {
        if (booking.checkedin){
            return (
                "Checked-in"
            )}
        else {
            return (
                "Not checked-in"
            )}
    }

    const handleDelete = () => {
        deleteBookingFromDatabase(booking._id)
            .then(() => {
                removeBookingFromFrontend(booking._id)
            })
    }

    return(
        <li>
            <p>Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Booking Status: {bookingStatus()}</p>
            <button onClick={handleDelete}>❌</button>
        </li>
    )
}

export default BookingItem