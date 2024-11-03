import React from 'react';

const Images = (prop) => {
    return (
        <div>
            {grapElements(prop?.images)}
        </div>
    )
}

function grapElements(array) {
    let elem = []
    if (array != undefined) {
        for (let k = 0; k < array.length; k++) {
            elem.push(<img src={array[k]} key={k} width="140" height="140" />)
        }
    }
    return (<div>
        {elem}
    </div>)
}

export default Images