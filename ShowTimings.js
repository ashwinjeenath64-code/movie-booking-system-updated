import React, { useState } from "react";

const ShowTimings = ({ movie, shows, onBack }) => {
  const [showData, setShowData] = useState(shows);
  const [selectedSeats, setSelectedSeats] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSeatChange = (id, value) => {
    const count = Number(value);
    setSelectedSeats((prev) => ({ ...prev, [id]: count }));

    setShowData((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const originalSeats =
            shows.find((show) => show.id === id)?.available_seats ||
            s.available_seats;
          const remaining = Math.max(originalSeats - count, 0);
          return { ...s, available_seats: remaining };
        }
        return s;
      })
    );
  };

  const handleBook = (id) => {
    if (!selectedDate) {
      alert("⚠️ Please select a date before booking!");
      return;
    }
    if (!selectedTime) {
      alert("⚠️ Please select a show time!");
      return;
    }

    setShowData((prev) =>
      prev.map((s) => {
        if (s.id === id) {
          const seatsToBook = selectedSeats[id] || 0;

          if (seatsToBook <= 0) {
            alert("⚠️ Please select at least 1 seat to book.");
            return s;
          }

          if (seatsToBook > s.available_seats) {
            alert(`Only ${s.available_seats} seat(s) left for ${s.show_time}.`);
            return s;
          }

          alert(
            `✅ Successfully booked ${seatsToBook} seat(s) for ${movie.title} at ${selectedTime} on ${selectedDate}`
          );

          return { ...s, available_seats: s.available_seats - seatsToBook };
        }
        return s;
      })
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={onBack} style={{ marginBottom: 20 }}>
        ⬅ Back
      </button>

      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} width="200" />

      {/* Select Date */}
      <h3 style={{ marginTop: 20 }}>Select Date</h3>
      <input
        type="date"
        onChange={(e) => setSelectedDate(e.target.value)}
        value={selectedDate}
        style={{ padding: "5px", marginBottom: "15px" }}
      />

      {/* Select Show Time */}
      <h3>Select Show Time</h3>
      <select
        onChange={(e) => setSelectedTime(e.target.value)}
        value={selectedTime}
        style={{ padding: "5px", marginBottom: "20px" }}
      >
        <option value="">--Select Time--</option>
        {showData.map((s) => (
          <option key={s.id} value={s.show_time}>
            {s.show_time}
          </option>
        ))}
      </select>

      {selectedTime && (
        <>
          <h3>Show Details</h3>
          {showData
            .filter((s) => s.show_time === selectedTime)
            .map((s) => (
              <div key={s.id} style={{ marginBottom: 15 }}>
                <p>
                  ⏰ {s.show_time} — Seats Left:{" "}
                  <strong
                    style={{ color: s.available_seats === 0 ? "red" : "green" }}
                  >
                    {s.available_seats}
                  </strong>
                </p>

                <input
                  type="number"
                  min="0"
                  max={s.available_seats}
                  value={selectedSeats[s.id] || 0}
                  onChange={(e) => handleSeatChange(s.id, e.target.value)}
                  style={{ width: 60, marginRight: 10 }}
                  disabled={s.available_seats === 0}
                />

                <button
                  onClick={() => handleBook(s.id)}
                  disabled={s.available_seats === 0}
                  style={{
                    padding: "5px 10px",
                    cursor: s.available_seats === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  {s.available_seats === 0 ? "Sold Out" : "Book"}
                </button>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default ShowTimings;