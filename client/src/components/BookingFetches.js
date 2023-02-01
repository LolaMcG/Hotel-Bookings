const baseUrl = 'http://localhost:9000/api/bookings/'

export const getBookings = () => {
    return (
        fetch (baseUrl)
            .then(response => response.json())
    )
}


export const postBooking = (payload) => {
    return (
        fetch (baseUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
    )
    }


export const deleteBookingFromDatabase = (id) => {
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}