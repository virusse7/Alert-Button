interface AlertProps {
    title: string;
    children: React.ReactNode;
}

const AlertComponent = ({ title, children }: AlertProps) => {
    return (
        <div className="bg-white rounded-xl p-8 mb-10 shadow-xl flex flex-col gap-4">
            <h2 className="font-medium text-xl">{title}</h2>
            <div className="flex">{children}</div>
        </div>
    );
};

export default AlertComponent;
