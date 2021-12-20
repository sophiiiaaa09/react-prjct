import { useEffect, useState } from 'react';
import { Button } from '../components';
import dbExam from '../indexedDB/exam';

const Finish = ({ history }) => {
  const [amountRight, setAmountRight] = useState('');
  const [amountWrong, setAmountWrong] = useState('');
  const [notAnswered, setNotAnswered] = useState('');
  const [score, setScore] = useState('');

  useEffect(() => {
    dbExam.answer.toArray().then((responseSoal) => {
      dbExam.answer.toArray().then((response) => {
        const amountRightValue = response.filter(
          (d) => d.statusAnswer === true
        );
        const amountWrongValue = response.filter(
          (d) => d.statusAnswer === false
        );
        const notAnsweredValue = response.filter((d) => d.value === '');
        setAmountRight(amountRightValue.length);
        setAmountWrong(amountWrongValue.length);
        setNotAnswered(notAnsweredValue.length);
        setScore(
          Math.round((amountRightValue.length / responseSoal.length) * 100)
        );
      });
    });
  }, []);

  return (
    <div>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2>SELAMAT ANDA TELAH MENYELESAIKAN UJIAN</h2>
      </div>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h4>NILAI ANDA</h4>
      </div>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2>{score}</h2>
      </div>

      <div
        style={{
          marginBottom: '20px',
          background: '#3dbca4',
          padding: '20px 20px',
        }}
      >
        <p>Jumlah Benar : {amountRight}</p>
        <p>Jumlah Salah : {amountWrong}</p>
        <p>Tak Terjawab : {notAnswered}</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Button onClick={() => history.push('/')}>MASUKKAN TOKEN LAGI ?</Button>
      </div>
    </div>
  );
};

export default Finish;
