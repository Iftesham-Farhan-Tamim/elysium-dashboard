import React from 'react';

function DropDownProfile() {
    return (
        <div className="absolute top-[4.5rem] right-[0rem] w-[120px] p-4 pt-3 rounded-lg bg-white border border-gray-300">
            {/* arrow */}
            <div className="absolute top-[-0.7rem] right-[1.1rem] w-[20px] h-[20px] rotate-45 bg-white border-l border-t border-gray-300"></div>

            <ul className="flex flex-col gap-4">
                <li className='hover:text-slate-400 cursor-pointer'>Settings</li>
                <li className='hover:text-slate-400 cursor-pointer'>Profile</li>
                <li className='hover:text-slate-400 cursor-pointer'>Logout</li>
            </ul>
        </div>
    );
}

export default DropDownProfile;








// .dropDownProfile{
//     position: absolute;
//     top: 4.5rem;
//     right: 1.5rem;
//     width: 120px;
//     padding: 15px;
//     border-radius: 8px;
//     background-color: white;
//     border: 1px solid gray;
// }

// .dropDownProfile{
//     content: '';
//     position: absolute;
//     top: -0.7rem;
//     right: 1.1rem;
//     width: 20px;
//     height: 20px;
//     transform: rotate(45deg);
//     background-color: white;
//     border-left: 1px solid gray;
//     border-top: 1px solid gray;
// }