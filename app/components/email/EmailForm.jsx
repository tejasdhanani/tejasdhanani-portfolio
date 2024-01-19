"use client";
import { useState } from "react";

export default function EmailForm() {
    // const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch("/api/sendemail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
            }),
        });

        const resJson = await response.json();
        setLoading(false);
        setMessage(resJson.message);

        if (!response.ok) {
            console.error("Error: ", resJson.error);
        }
        e.target.reset()
    };


    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                >
                    Your email
                </label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="jacob@google.com"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    Subject
                </label>
                <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Just saying hi"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                >
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                />
            </div>
            <button
                disabled={loading}
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:bg-gray-500"
            >
                {!loading ? "Send Message" : "Sending..."}
            </button>
            {message && (
                <div className="mt-3 text-center">
                    {message}
                </div>
            )}
        </form>
    )
}