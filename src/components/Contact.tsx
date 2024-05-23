"use client";
import { FC, useState } from "react";
import emailjs from "@emailjs/browser";
import { emailjsInfo } from "@/constants";
import { buttonStyle, contentPadding } from "@/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const toastStyle = {
    background: "#333",
    color: "#fff",
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (loading) return;
      if (!name || !email || !message) {
        toast.error("Please fill all the fields", { style: toastStyle });
        return setLoading(false);
      }
      await emailjs.send(
        emailjsInfo.serviceID,
        emailjsInfo.templateID,
        {
          name,
          email,
          message,
        },
        emailjsInfo.publicID
      );

      toast.success("Message sent successfully", { style: toastStyle });
    } catch (err) {
      console.log(err);
      toast.error("An error occured while sending the message", {
        style: toastStyle,
      });
    }
    setLoading(false);
  };
  return (
    <section className="bg-dark-2 py-12" id="contact">
      <div className={`${contentPadding}`}>
        <div
          className={`max-w-[1400px] mx-auto py-12 px-6 flex items-start lg:flex-row flex-col justify-center gap-9 bg-dark-3 shadow-lg rounded-md`}
        >
          <div className="lg:px-0 lg:w-max w-full px-2">
            <h2 className="text-4xl font-black lg:mx-0 mx-auto w-max">
              Contact
            </h2>
            <p className="max-w-[500px] mt-[16px] lg:text-start text-center mx-auto">Reach out using this form to discuss anything, from project ideas to detailed service inquiries. Let's connect and bring your vision to reality
            </p>
          </div>
          <div className="lg:w-[75%] lg:max-w-[700px] w-full flex flex-col gap-4">
            <div className="flex items-center justify-center sm:flex-row flex-col gap-3">
              <input
                className="bg-dark-2 w-full px-4 py-3 rounded-[5px]"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
              />
              <input
                className="bg-dark-2 w-full px-4 py-3 rounded-[5px]"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
              />
            </div>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Message.."
              className="min-h-[350px] max-h-[600px]  w-full px-4 py-3 rounded-[5px] resize-y bg-dark-2"
            ></textarea>
            <button
              className={`${buttonStyle} ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handleSubmit}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse" />
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
