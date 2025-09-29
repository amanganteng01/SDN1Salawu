export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    {/* <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        ❌
                    </button> */}
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
