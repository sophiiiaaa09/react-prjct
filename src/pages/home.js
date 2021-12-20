import { useState } from 'react';
import { Card, Input, Button } from '../components';

const Home = (props) => {
  const [token, setToken] = useState('');
  const [validation, setValidation] = useState('');

  const changeInput = (e) => {
    setToken(e.target.value);
    setValidation('');
  };

  const handleSubmitToken = () => {
    if (token === '') {
      setValidation('token harus diisi');
    } else {
      console.log('token', token);
      props.history.push('/biodata');
    }
  };

  return (
    <Card>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3>MASUKKAN TOKEN ANDA</h3>
      </div>
      <div style={{ width: '400px' }}>
        <Input type="text" value={token} onChange={changeInput} />
        {validation && (
          <p style={{ color: '#ff4500', marginTop: '10px' }}>{validation}</p>
        )}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button onClick={handleSubmitToken}>OK</Button>
      </div>
    </Card>
  );
};

export default Home;
