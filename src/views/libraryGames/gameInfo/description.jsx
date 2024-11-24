import React from 'react';

const Description = ({ agreementGameID }) => {
    return (
        <div>
            {agreementGameID?.descriptions}
        </div>
    )
}

// function grapElements(array) {
//     let elem = []
//     if (array != undefined) {
//         // for (let k = 0; k < array.length; k++) {
//         elem.push(
//             <div key={k}>
//                 {array[k]}
//             </div>
//         )
//     }
// }
// return (<div>
//     {elem}
// </div>)
// }

export default Description