import React from "react";

interface Button {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick }: Button) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray-600 text-white text-sm
            px-4 py-2 rounded-xl font-medium uppercase shadow-xl transition duration-500 hover:scale-105 hover:brightness-110 "
        >
            {children}
        </button>
    );
};

export default Button;
