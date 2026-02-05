'use client';

export default function MessengerButton() {
  const handleClick = () => {
    // Replace with actual Facebook page ID or messenger link
    window.open('https://www.facebook.com/profile.php?id=61584932546132', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
      aria-label="Chat on Messenger"
      title="Chat with us on Messenger"
    >
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.897 1.448 5.49 3.72 7.186V22l3.427-1.88c.915.253 1.887.387 2.853.387 5.523 0 10-4.145 10-9.264C22 6.145 17.523 2 12 2zm.993 12.478l-2.548-2.718-4.973 2.718 5.467-5.803 2.61 2.718 4.912-2.718-5.468 5.803z"/>
      </svg>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
    </button>
  );
}
