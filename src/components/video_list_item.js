import React from 'react';

const VideoLIst = (props) => {
    return(
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default  VideoLIst;
