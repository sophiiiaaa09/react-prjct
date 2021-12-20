import { useEffect, useState } from 'react';
import dbExam from '../indexedDB/exam';
import { Card, Input, Button } from '../components';

const Biodata = (props) => {
  const [nama, setName] = useState('');
  const [validationName, setValidationName] = useState('');
  const [nis, setNis] = useState('');
  const [validationNis, setValidationNis] = useState('');
  const [sekolah, setSekolah] = useState('');
  const [validationSekolah, setValidationSekolah] = useState('');

  useEffect(() => {
    dbExam.biodata.toArray().then((response) => {
      if (response.length > 0) {
        props.history.push('/soal');
      }
    });
  }, [props]);

  const changeInput = (e) => {
    const { value, name } = e.target;
    if (name === 'nama') {
      setName(value);
      setValidationName('');
    }

    if (name === 'nis') {
      setNis(value);
      setValidationNis('');
    }

    if (name === 'sekolah') {
      setSekolah(value);
      setValidationSekolah('');
    }
  };

  const handleSubmit = () => {
    if (nama === '') {
      setValidationName('nama harus diisi');
    } else if (nis === '') {
      setValidationNis('nis harus diisi');
    } else if (sekolah === '') {
      setValidationSekolah('sekolah harus diisi');
    } else {
      dbExam.biodata
        .add({
          nama: nama,
          nis: nis,
          sekolah: sekolah,
        })
        .then((response) => {
          props.history.push('/rules');
        });
    }
  };

  return (
    <Card>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3>MASUKKAN BIODATA ANDA</h3>
      </div>
      <div style={{ width: '400px', marginBottom: '20px' }}>
        <Input
          type="text"
          value={nama}
          onChange={changeInput}
          name="nama"
          placeholder="NAMA"
        />
        {validationName && (
          <p style={{ color: '#ff4500', marginTop: '10px' }}>
            {validationName}
          </p>
        )}
      </div>
      <div style={{ width: '400px', marginBottom: '20px' }}>
        <Input
          type="text"
          value={nis}
          onChange={changeInput}
          name="nis"
          placeholder="NIS"
        />
        {validationNis && (
          <p style={{ color: '#ff4500', marginTop: '10px' }}>{validationNis}</p>
        )}
      </div>
      <div style={{ width: '400px', marginBottom: '20px' }}>
        <Input
          type="text"
          value={sekolah}
          onChange={changeInput}
          name="sekolah"
          placeholder="SEKOLAH"
        />
        {validationSekolah && (
          <p style={{ color: '#ff4500', marginTop: '10px' }}>
            {validationSekolah}
          </p>
        )}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button onClick={handleSubmit}>NEXT</Button>
      </div>
    </Card>
  );
};

export default Biodata;
