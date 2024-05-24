import React from 'react'
import { useState } from 'react';
// import { Button } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import List from './List';
import Request from './Request';

function None() {
    const [show, setShow] = useState(false);
    const [showcircle, setShowCircle] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }
    return (

        <>
            <div className='d-flex' style={{ height: '100px' }}>
                <div className='p-2' onClick={handleShow}>
                    <img src="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_640.jpg" alt="" srcSet="" height={"80px"} width={'80px'} className={showcircle ? 'rounded-circle' : 'rounded-circle border border-5 border-dark'} onClick={() => { setShowCircle(true) }} />
                </div>
                <div style={{ height: '80px' }} className='p-2' onClick={handleShow}>
                    <img src="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_640.jpg" alt="" srcSet="" height={"80px"} width={'80px'} className='rounded-circle' />
                </div>
                <div style={{ height: '80px' }} className='p-2' onClick={handleShow}>
                    <img src="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_640.jpg" alt="" srcSet="" height={"80px"} width={'80px'} className={showcircle ? 'rounded-circle' : 'rounded-circle border border-5 border-dark'} onClick={() => { setShowCircle(true) }} />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-9'>
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                    <List />
                </div>
                <div className='col-lg-3'>
                    <Request />
                    <Request />
                </div>
            </div>


            <Modal show={show} onHide={handleClose} fullscreen>

                <Modal.Body className='p-0'>
                    <img src="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_640.jpg" alt="" srcSet="" height={"100%"} width={'100%'} />

                </Modal.Body>


            </Modal>
        </>
    )
}

export default None