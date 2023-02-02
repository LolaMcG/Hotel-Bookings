import { useState } from "react"
import { postBooking } from "./BookingFetches"
import styled from "styled-components"
// const ObjectId = require('mongodb').ObjectId


const StyledDiv = styled.div`
    background-color:#FFEFD5;
    opacity: .9;
    padding: 7px;
    width: 550px;
    border-radius: 5px;`

const SubmitButton = styled.input`
    margin-left: 10px;`

const LabelText = styled.label`
    font-family: "Dancing Script";
    font-size: 20px;`

const InputBox = styled.input`
    margin: 5px;`


const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedin: false
    })


    const inputText = (event) => {
        const newFormData = {...formData}
        newFormData[event.target.name] = event.target.value
        setFormData(newFormData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postBooking(formData)
            .then((data) => {
                const formWithId = {...formData}
                formWithId._id = data
                // formWithId._id = ObjectId(data)
                addBooking(formWithId)})
        setFormData({
            name: "",
            email: "",
            checkedin: false
        })
    }


    return(
        <StyledDiv>
            <form onSubmit={handleSubmit}>
                <LabelText htmlFor="name">Name: </LabelText>
                <InputBox name="name" type="text" onChange={inputText} value={formData.name}/>
                <LabelText htmlFor="email">Email: </LabelText>
                <InputBox name="email" type="text" onChange={inputText} value={formData.email}/>
                <SubmitButton type="submit" value="Add Booking"/>
            </form>
        </StyledDiv>
    )
}

export default BookingForm