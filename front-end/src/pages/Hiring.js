import { React, useState }  from 'react';
import '../App.css'
import { Button } from 'react-bootstrap'
import SendEmailModal  from '../components/conteinerModal'

const ButtonStyle = {
  width:'400px',
  height:'50px',
  marginTop: '5%',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#fff',
  backgroundColor: '#151515'
}

const TextStyle = {
  color:'wite',
  fontFamily: 'Roboto',
  fontSize: 20,
  display: 'flex',
}

function Hiring() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main">
      <div className="title">
        <h1>MADLAB</h1>
      </div>

      <div className="main-content">
        <h1> WE ARE HIRING </h1>

        <div style={{height: '80px'}}>
          <p style={TextStyle}>
            UX/UI Designer<br />
            Frontend<br />
            Backend<br />
            IOS Developer<br />
            Pole Dancer
          </p>
        </div>
      </div>

      <div style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"
      }}>
        
        <Button variant="primary" onClick={handleShow} style={ButtonStyle}>
          <h1 style={{ fontSize: '18px' }}>Entre em contato</h1>
        </Button>
      </div>

      <SendEmailModal  show={show} handleClose={handleClose}/>

    </div>
  );
}

export default Hiring