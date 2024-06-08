import { useState } from "react";
import "./Request.scss";

const Request = () => {
  const telegram_bot_id = "7037364029:AAF2jkX7iNRtpMazU7O0yrr2219R2ADwMcI";
  const chat_id = 5680496059;

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phoneNumber, message } = formData;
    const text = `Name: ${name}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id,
            text,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Message sent successfully!");
      setFormData({ name: "", phoneNumber: "", message: "" });
    } catch (error) {
      alert("There was a problem with your request: " + error.message);
    }
  };

  return (
    <div className="request-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Request;
