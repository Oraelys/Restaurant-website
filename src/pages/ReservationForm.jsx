import React, { useState } from 'react';
import { Calendar, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const timeSlots = [
    { time: '17:00', available: true },
    { time: '17:30', available: true },
    { time: '18:00', available: false },
    { time: '18:30', available: true },
    { time: '19:00', available: true },
    { time: '19:30', available: false },
    { time: '20:00', available: true },
    { time: '20:30', available: true },
    { time: '21:00', available: true },
];

const tables = ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5'];

export default function ReservationForm() {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedTable, setSelectedTable] = useState('');
    const [partySize, setPartySize] = useState(2);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        specialRequests: '',
    });
    const [reservationDetails, setReservationDetails] = useState(null);

    const nextStep = () => step < 3 && setStep(step + 1);
    const prevStep = () => step > 1 && setStep(step - 1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReservationDetails({ ...formData, selectedDate, selectedTime, selectedTable, partySize });
        setStep(4);
    };

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center">Make a Reservation</h2>

            <div className="flex justify-between my-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>{i}</div>
                        {i !== 4 && <div className={`w-12 h-1 mx-2 ${step > i ? 'bg-blue-600' : 'bg-gray-200'}`} />}
                    </div>
                ))}
            </div>

            {step === 1 && (
                <div>
                    <label className="block text-sm font-medium">Select Date</label>
                    <input type="date" className="w-full p-2 border rounded-md" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />

                    <label className="block text-sm font-medium mt-4">Select Time</label>
                    <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(({ time, available }) => (
                            <button key={time} className={`p-2 rounded-md border ${selectedTime === time ? 'bg-blue-600 text-white' : available ? 'hover:border-blue-600' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`} disabled={!available} onClick={() => setSelectedTime(time)}>{time}</button>
                        ))}
                    </div>

                    <label className="block text-sm font-medium mt-4">Select Table</label>
                    <div className="grid grid-cols-3 gap-2">
                        {tables.map((table) => (
                            <button key={table} className={`p-2 rounded-md border ${selectedTable === table ? 'bg-blue-600 text-white' : 'hover:border-blue-600'}`} onClick={() => setSelectedTable(table)}>{table}</button>
                        ))}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="text-center">
                    <label className="block text-sm font-medium">Party Size</label>
                    <div className="flex items-center justify-center mt-2">
                        <button onClick={() => setPartySize(Math.max(1, partySize - 1))} className="p-2 rounded-full bg-gray-100"><ChevronLeft /></button>
                        <span className="mx-4 text-lg font-semibold">{partySize}</span>
                        <button onClick={() => setPartySize(Math.min(10, partySize + 1))} className="p-2 rounded-full bg-gray-100"><ChevronRight /></button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {['name', 'email', 'phone'].map((field) => (
                        <input key={field} type={field === 'email' ? 'email' : 'text'} name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} required className="w-full p-2 border rounded-md" value={formData[field]} onChange={handleChange} />
                    ))}
                    <textarea name="specialRequests" placeholder="Special Requests" className="w-full p-2 border rounded-md" rows={3} value={formData.specialRequests} onChange={handleChange} />
                </form>
            )}

            {step === 4 && reservationDetails && (
                <div className="text-center">
                    <h3 className="text-lg font-semibold">Reservation Confirmed!</h3>
                    <p><strong>Date:</strong> {reservationDetails.selectedDate}</p>
                    <p><strong>Time:</strong> {reservationDetails.selectedTime}</p>
                    <p><strong>Table:</strong> {reservationDetails.selectedTable}</p>
                    <p><strong>Party Size:</strong> {reservationDetails.partySize}</p>
                    <p><strong>Name:</strong> {reservationDetails.name}</p>
                    <p><strong>Email:</strong> {reservationDetails.email}</p>
                    <p><strong>Phone:</strong> {reservationDetails.phone}</p>
                    <p><strong>Special Requests:</strong> {reservationDetails.specialRequests || 'None'}</p>
                    <button onClick={() => setStep(1)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Return to Home</button>
                </div>
            )}

            <div className="mt-6 flex justify-between">
                {step > 1 && step < 4 && <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-md">Back</button>}
                {step < 3 ? (
                    <button onClick={nextStep} disabled={(step === 1 && (!selectedDate || !selectedTime || !selectedTable)) || (step === 2 && !partySize)} className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-300">Next</button>
                ) : step === 3 ? (
                    <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md">Complete Reservation</button>
                ) : null}
            </div>
        </div>
    );
}
