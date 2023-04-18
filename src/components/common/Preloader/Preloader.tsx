import React from 'react';
import preloader from "../../../assets/images/loader.gif";

type PreloaderType = {
    isFetching: boolean
}
let Preloader = (props: PreloaderType) => {
    return (
        <div>
            {props.isFetching ? <img src={preloader} style={{width: '200px'}}/> : null}
        </div>
    );
};

export default Preloader;