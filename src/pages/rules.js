import { Card, Button } from '../components';

const Rules = (props) => {
  const handleSubmit = () => {
    props.history.push('/soal');
  };
  return (
    <Card>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3>RULES/PERATURAN</h3>
      </div>
      <div
        style={{
          background: '#fff',
          borderRadius: '10px',
          padding: '15px 15px',
        }}
      >
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button onClick={handleSubmit}>MULAI</Button>
      </div>
    </Card>
  );
};

export default Rules;
