
export default function ({children}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="border-b text-center p-1">
                Login now to get 20% off
            </div>
            {children}
        </div>
    );
}