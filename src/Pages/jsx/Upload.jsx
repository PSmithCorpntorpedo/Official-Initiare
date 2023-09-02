import React from 'react';
import uploadcss from './../css/upload.module.css';

function Upload() {
    return (
        <div className={uploadcss['upload-main']}>
            <div className={uploadcss['content-and-table-of-contents-wrap']}>
                <div className={uploadcss['table-of-contents']}>

                </div>
                <div className={uploadcss['content']}>
                    <h1>The official review process will be updated later</h1>
                    <h2>Standard structure of a scientific paper</h2>
                </div>
            </div>
        </div>
    )
}

export default Upload;