import React, { useState } from 'react'
import { apiRequest } from '../api';

const EmailInput = () => {
    const [email, setEmail] = useState("");

    const handleMail = async (e) => {
        e.preventDefault();
        const res = await apiRequest("/api/testing", "POST", email).then(r => r.text());
        console.log("Received this: " + res);
    }

    return (
        <div className="flex flex-col items-center justify-center mx-4 mb-4">
            <input id="email-input" type="email" className="text-xl w-md my-2 py-4 px-6 rounded-2xl ring-1 ring-emerald-950 border border-emerald-100
    dark:bg-slate-800 dark:text-white dark:border-emerald-700
                                    placeholder:text-xl" placeholder="your-id@mail.com" onChange={ (e) => setEmail(e.target.value) }/>
            <button onClick={handleMail}
                className="cursor-pointer m-4 py-4 px-8 rounded-2xl text-xl bg-linear-to-r text-white from-emerald-700 to-green-600
    dark:from-emerald-900 dark:to-green-800 dark:text-white dark:border-emerald-700
                        hover:from-emerald-800 hover:to-green-700 hover:text-emerald-100">
                Start receiving reminders <i className="px-2 fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default EmailInput
