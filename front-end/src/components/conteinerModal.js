import { useState } from 'react'
import Modal from 'react-modal'
import { Button } from 'react-bootstrap'
import { IoClose } from "react-icons/io5";
import axios from "axios"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        displey: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
};


const SendEmailModal = ({ show, handleClose }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handlerClick = async () => {
        try {
            await axios.post('http://localhost:8080/send', {
                name,
                email
            })
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Modal
            isOpen={show}
            onRequestClose={handleClose}
            style={customStyles}
            ariaHideApp={false}
        >
            <Button
                style={{ float: 'right' }}
                onClick={handleClose}
            ><IoClose />
            </Button>

            <div style={{ marginTop: '50px', displey: 'flex', alignSelf: 'center' }}>
                <h3>Entraremos em contato o mais rápido possível</h3>
            </div>
            <form
                className="form-main"
            >
                <input
                    placeholder="Nome"
                    style={{
                        height: '40px'
                    }}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    placeholder="E-mail"
                    style={{
                        height: '40px'
                    }}
                    onChange={e => setEmail(e.target.value)}
                />
                <Button
                    type="submit"
                    onClick={() => handlerClick()}
                >
                    <h1 className="button-text">Entre em contato</h1>
                </Button>
            </form>
        </Modal>

    )
}

export default SendEmailModal