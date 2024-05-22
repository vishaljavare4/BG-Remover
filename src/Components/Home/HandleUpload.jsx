import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner'; 

const HandleUpload = () => {
    const fileInputRef = useRef(null);
    const [loading, setLoading] = useState(false); 

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        setLoading(true); 
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('size', 'auto');
            formData.append('image_file', file);

            try {
                const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
                    headers: {
                        'X-Api-Key': 'zvw1qhQEEkTaFG2J3piPa6AR',
                        'Content-Type': 'multipart/form-data'
                    },
                    responseType: 'arraybuffer'
                });

                if (response.status === 200) {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'no-bg.png');
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                } else {
                    console.error('Error:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Request failed:', error);
            } finally {
                setLoading(false); 
            }
        }
    };

    return (
        <>
            <div className="w-[20%] rounded-3xl shadow-xl p-4 flex flex-col items-center gap-4 h-[200px] justify-center">
                <button
                    className="p-4 text-xl bg-slate-500 rounded-full text-white hover:bg-slate-700 transition-all"
                    onClick={handleButtonClick}
                >
                    Upload Image
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                {loading && (
                    <div className="flex justify-center items-center">
                        <Audio
                            color="#d97706"
                            height={30}
                            width={30}
                        />
                    </div>
                )}
                <p className="text-xs text-slate-600">See the magic we provide</p>
            </div>
        </>
    );
};

export default HandleUpload;