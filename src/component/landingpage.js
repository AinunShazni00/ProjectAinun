import React from 'react';
import {useNavigate} from 'react-router-dom'

export const Landing = () => {

    const navigate = useNavigate();
    return(
        <div>
            <div className='font-bold text-4xl'>Landing Page baru</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> navigate('/myprofile')}>Go to myprofile</button>
        </div>
    )
}