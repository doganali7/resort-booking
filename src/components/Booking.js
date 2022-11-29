import React from "react";
import Billing from "./Billing";
import DateSelector from "./DateSelector";
import RoomDetails from "./RoomDetails";

const _MS_PER_DAY = 24 * 60 * 60 * 1000;
function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
}

export default function Booking() {
  return <div>Booking</div>;
}
