'use client';
import React, { useState, FormEvent } from 'react';
export default function LoginForm() {
    const [phone, setPhone] = useState('');
    const [yourName, setYourName] = useState('');
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPhone('');
        setYourName('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white mb-2.5 block"
                        htmlFor="phone"
                    >
                        Mobile Number
                    </label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-sm">
                            +91
                        </span>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(555) 123-4567"
                            autoComplete="off"
                            className="flex h-12 w-full text-white rounded-md border border-bordercolor bg-color1 pl-12 pr-3 py-2 text-sm file:border-0 file:bg-color1 file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pcolor focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-smooth"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white mb-2.5 block"
                        htmlFor="yourName"
                    >
                        Your Name
                    </label>
                    <div className="relative">
                        <input
                            type="tel"
                            id="yourName"
                            value={yourName}
                            onChange={(e) => setYourName(e.target.value)}
                            placeholder="Your Name"
                            autoComplete="off"
                            className="flex h-12 w-full text-white rounded-md border border-bordercolor bg-color1 pl-3 pr-3 py-2 text-sm file:border-0 file:bg-color1 file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pcolor focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-smooth"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-hcolor px-4 py-2 w-full bg-pcolor hover:opacity-90 transition-smooth text-primary-foreground font-medium h-12 cursor-pointer"
                >
                    Continue
                </button>
            </form>
        </div>
    );
}
