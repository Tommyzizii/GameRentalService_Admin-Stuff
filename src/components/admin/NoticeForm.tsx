import React, { useState } from "react";
import { Mail } from "lucide-react";
interface GameFormProps {
    onSubmit: (data: any) => void;
    onCancel: () => void;
}
export const NoticeForm = ({
    onSubmit,
    onCancel
}: GameFormProps) => {
    const [formData, setFormData] = useState({
        admin_id: "1",
        reason: "",
        date: new Date().toISOString().split('T')[0]
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl my-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">New Notice</h2>
                <button onClick={onCancel} className="text-gray-400 hover:text-gray-300">
                    ✕
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div className="bg-gray-700 p-4 rounded-lg space-y-4 w-full">
                    <h3 className="text-lg font-medium text-white flex items-center gap-2">
                        <Mail size={20} />
                        Notice
                    </h3>
                    <div className="w-full flex  flex-col">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Text
                        </label>
                        <textarea className="w-full h-[200px] bg-gray-600 text-white px-4 py-2 rounded-lg text-start" value={formData.reason} onChange={e => setFormData({
                            ...formData,
                        reason: e.target.value
                        })} required />
                    </div>
                </div>
                <div className="flex space-x-3 pt-4">
                    <button type="submit" className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                        Send
                    </button>
                    <button type="button" onClick={onCancel} className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-500">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>;
};