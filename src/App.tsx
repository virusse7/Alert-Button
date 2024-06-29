import { useState } from "react";
import AlertComponent from "./components/AlertComponent";
import Button from "./components/Button";

function App() {
    const [showAlert, setShowAlert] = useState(false);
    const handleShowAlert = () => {
        setShowAlert(true);
    };

    const handleHideAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="flex flex-col justify-center items-center h-lvh bg-gray-300">
            {showAlert ? (
                <AlertComponent
                    title="Attention Alert"
                    children="React and TypeScipt used here"
                />
            ) : null}
            {showAlert ? (
                <Button onClick={handleHideAlert} children="Hide Alert" />
            ) : (
                <Button onClick={handleShowAlert} children="Show Alert" />
            )}
        </div>
    );
}

export default App;
