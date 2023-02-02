import { deleteBookingFromDatabase } from "./BookingFetches"
import styled from 'styled-components'

const ListItem = styled.li`
    list-style-type: none;
    background-color: #FFA07A;
    opacity: .8;
    border: solid 2px #F08080;
    border-radius: 5px;
    width:500px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    `

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;`

const DeleteButton = styled.button`
    align-self: flex-end;
    margin: 10px;`


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
        <ListItem>
            <ItemContent>
                <p>Name: {booking.name}</p>
                <p>Email: {booking.email}</p>
                <p>Booking Status: {bookingStatus()}</p>
            </ItemContent>
            <DeleteButton onClick={handleDelete}>❌</DeleteButton>
            
        </ListItem>
    )
}

export default BookingItem