import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import dbExam from '../../indexedDB/exam';
import Header, { AreaText } from './headerStyle';
import { Timer } from '../../components';

const Index = ({ location, history }) => {
  const [namaSiswa, setNamaSiswa] = useState('');

  useEffect(() => {
    if (location.pathname === '/soal') {
      dbExam.biodata.get(1).then((response) => {
        if (response) {
          setNamaSiswa(response.nama);
        } else {
          history.push('/');
        }
      });
    }
  }, [location.pathname, history]);

  return (
    <Header>
      {(location.pathname === '/' ||
        location.pathname === '/biodata' ||
        location.pathname === '/rules') && (
        <AreaText>
          <div>
            <h3>EXAM MANAGEMENT SISTEM</h3>
            <h3>LOG IN</h3>
          </div>
        </AreaText>
      )}

      {location.pathname === '/soal' && (
        <AreaText>
          <div>
            <h3>TRYOUT</h3>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '10px' }}>Nama Siswa</p>
            <p>{namaSiswa}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '10px' }}>Sisa Waktu</p>
            <Timer />
          </div>
        </AreaText>
      )}
    </Header>
  );
};

export default withRouter(Index);
