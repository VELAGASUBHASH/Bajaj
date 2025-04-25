import React from "react";

const DoctorCard = ({ doctor }) => {
  if (!doctor) return null;

  const {
    name = "N/A",
    degrees = "N/A", // You can replace or extend this if the API provides real degrees
    experience = "N/A",
    clinic = {},
    fee = "N/A",
    photo,
    specialities = [],
  } = doctor;

  // Fallback safely for nested objects
  const clinicName = clinic?.name || "N/A";
  const clinicAddress = clinic?.address?.address_line1 || "N/A";
  const clinicCity = clinic?.address?.city || "";

  // Convert specialities array to string
  const specialityNames = specialities.map(s => s.name).join(", ") || "N/A";

  return (
    <div className="border p-4 rounded shadow-md mb-4 bg-white">
      <div className="flex">
        <img
          src={photo || "https://via.placeholder.com/64"}
          alt={name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p>{specialityNames}</p>
          <p>{degrees}</p>
          <p>{experience}</p>
          <p>
            {clinicName}, {clinicAddress} {clinicCity && `(${clinicCity})`}
          </p>
          <p>₹ {fee}</p>
          <button className="mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
