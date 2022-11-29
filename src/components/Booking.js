import React, { useState, useEffect } from "react";
import Billing from "./Billing";
import DateSelector from "./DateSelector";
import RoomDetails from "./RoomDetails";

const _MS_PER_DAY = 24 * 60 * 60 * 1000;
const dateDiffInDays = (a, b) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
};

const getDerivedStateFromProps = (props, state) => {
  const totalDays = dateDiffInDays(state.checkinDate, state.checkoutDate);
  const invalidRange = totalDays <= 0 || totalDays >= 20;
  return {
    totalDays,
    invalidRange,
  };
};

const Booking = (props) => {
  const today = new Date();
  const checkout = new Date();
  checkout.setDate(today.getDate() + 1);

  const [checkinDate, setCheckinDate] = useState(today);
  const [checkoutDate, setCheckoutDate] = useState(checkout);
  const [occupants, setOccupants] = useState(1);
  const [roomType, setRoomType] = useState("Standard");

  return (
    <div>
      <h2>Booking</h2>
      <DateSelector />
      <RoomDetails />
      <Billing />
    </div>
  );
};

export default Booking;

// class component

// class Booking extends Component {
//   constructor(props) {
//     super(props);
//     const today = new Date();
//     const checkout = new Date();
//     checkout.setDate(today.getDate() + 1);

//     this.state = {
//       checkinDate: today,
//       checkoutDate: checkout,
//       occupants: 1,
//       roomType: "Standard",
//     };
//   }
// }

// const today = new Date();
// const checkout = new Date();
// checkout.setDate(today.getDate() + 1);

// static getDerivedStateFromProps (props, state){
//     const totalDays = dateDiffInDays(state.checkinDate, state.checkoutDate);
//     const invalidRange = totalDays <= 0 ||totalDays >=20;
//     return{
//         totalDays, invalidRange,
// }}
// ;

//     //checking
//     onCheckinChange = (checkinDate) => {

//     }
//     //checkout
//     //occupants
//     //ropstype
