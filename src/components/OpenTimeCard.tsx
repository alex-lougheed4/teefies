const OpenTimeCard: React.FC = () => {
  const openingHours = [
    { day: 'Monday', hours: '9:00 AM - 5:30 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 5:30 PM' },
    { day: 'Wednesday', hours: '2:00 PM - 5:30 PM' },
    { day: 'Thursday', hours: '2:00 PM - 5:30 PM' },
    { day: 'Friday', hours: '2:00  - 5:30 PM' },
    { day: 'Saturday', hours: '9:00 AM - 12:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  return (
    <div className="mt-4 w-96 rounded-xl p-2 text-center">
      <h2 className="text-4xl">Opening Hours</h2>
      <ul className="text-xl">
        {openingHours.map((time, index) => (
          <li key={index}>
            <strong>{time.day}:</strong> {time.hours}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OpenTimeCard
