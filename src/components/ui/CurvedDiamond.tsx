export default function CurvedDiamond() {
    return (
        <div className="flex items-center justify-center">
            <svg viewBox="0 0 10 10" className="w-10 h-10 md:w-20 md:h-20 transition-all duration-300">
                <path
                    fill="currentColor"
                    className="text-gray-400"
                    transform="rotate(25 5 5)"
                    d="M5 1 Q5.8 4.2 9 5 Q5.8 5.8 5 9 Q4.2 5.8 1 5 Q4.2 4.2 5 1z"
                />
            </svg>
        </div>
    );
}
