import React from 'react';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import './Resume.css'

function Resume() {

    return (
        <div className='resumeDownloadContainer'>
            <a href='/files/resume.pdf' download className='resumeDownloadAnchor'>
                <button className='resumeDownloadButton'>
                    <span>
                        Download Resume
                    </span>
                    <FileDownloadOutlinedIcon />
                </button>
            </a>
        </div>
    )
}

export default Resume
