// function getIconColor(icon) {
//     switch (icon) {
//         case "key":
//             return "text-yellow-500"; // for Check-ins
//         case "shooping":
//             return "text-green-700"; // for Check-outs
//         case "wallet":
//             return "text-green-700"; // for Earnings
//         case "analytics":
//             return "text-yellow-500"; // for Reviews
//         default:
//             return "text-gray-500"; // default color if icon is not found
//     }
// }


// <div className='flex justify-between items-center m-12'>
//     {firstBox.map((option, index) => (
//         <div key={index} className='border-2 p-4 space-y-4 rounded-xl'>
//             <div className='flex space-x-24 text-gray-500'>
//                 {/* title of the box */}
//                 <p>{option.title}</p>
//                 {/* icon for the box */}
//                 <p className={`text-3xl ${getIconColor(option.icon)}`}>
//                     <i className={`ri-${option.icon}-fill`}></i>
//                 </p>
//             </div>
//             <div>
//                 {/* render number or value */}
//                 {typeof option.number === "string" ? (
//                     <p>{option.number}</p> // for string values (earnings, reviews)
//                 ) : (
//                     <p className='text-2xl'>{option.number}</p> // For number values (check-ins, check-outs)
//                 )}
//             </div>
//         </div>
//     ))}
// </div>

// ............................................................................................
