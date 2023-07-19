import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './loader.scss'

function Loader() {
    return (
        <div className='loader-container'>
            <TailSpin
                height="80"
                width="80"
                color="rgb(236, 111, 0)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader