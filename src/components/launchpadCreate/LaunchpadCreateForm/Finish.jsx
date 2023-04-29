import React from 'react';

const Finish = () => {
    return (
        <div className='my-4 content radius-0 border-0'>
            {/* <TitleInput title={''}/> */}
            <div className="d-md-flex align-items-start">
                <div className="w-40">
                    <h4 className='text-uppercase font-16'>Token info</h4>
                </div>
                <div>
                <div className="d-sm-flex d-block align-items-center gap-2">
                    {/* <div> */}
                        <p className='w-35 font-13'>Total Token</p>
                        <p className='font-13'>321,600 Token Name</p>
                    {/* </div> */}
                </div>
                <div className="d-sm-flex d-block align-items-center gap-2">
                    {/* <div> */}
                        <p className='w-35'>Total Token</p>
                        <p>0xDfaAe46eE412395dB23e844B21f7C8A1f55B7012</p>
                    {/* </div> */}
                </div>
                </div>
            </div>
        </div>
    );
}

export default Finish;
