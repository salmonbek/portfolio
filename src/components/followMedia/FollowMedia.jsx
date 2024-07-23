// import { useState } from "react";
// import "./FollowMedia.scss";

// const FollowMedia = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const telegram_bot_id = "7037364029:AAF2jkX7iNRtpMazU7O0yrr2219R2ADwMcI";
//   const chat_id = 5680496059;

//   const sendMessage = async () => {
//     const message = `Name: ${name}\nPhone: ${phone}`;
//     const url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
//       message
//     )}`;

//     try {
//       await fetch(url);
//       alert("Information sent successfully!");
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Failed to send information.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendMessage();
//   };

//   const handleLinkClick = () => {
//     setPasswordVisible(true);
//   };

//   return (
//     <div className="follow-media">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <div className="links">
//         <a
//           href="https://www.instagram.com/life-education"
//           target="_blank"
//           rel="noopener noreferrer"
//           onClick={handleLinkClick}
//         >
//           Follow Instagram
//         </a>
//       </div>
//       <div>
//         <a className="nav-link"  href="">Links</a>
//         <a className="nav-link"

//           href="">Links</a>
//         <a className="nav-link"  href="">Links</a>
//         <a className="nav-link"  href="">Links</a>
//         <a className="nav-link"  href="">Links</a>
//       </div>
//         <a
//           href="https://t.me/nature_in_english1"
//           target="_blank"
//           rel="noopener noreferrer"
//           onClick={handleLinkClick}
//         >
//           Join Telegram
//         </a>
//       </div>
//       {passwordVisible && <div className="password">123456</div>}
//     </div>
//   );
// };

// export default FollowMedia;
