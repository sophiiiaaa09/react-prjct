import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AnswerWrapper = styled.div`
  position: relative;
  width: 49%;
  height: 100%;
`;

export const CardWrapper = styled.div`
  padding: 20px 20px;
  height: auto;
`;

export const CardBackground = styled.div`
  background: #94d6d8;
  padding: 20px 20px;
  height: 400px;
`;

export const Card = styled.div`
  background: #fff;
  padding: 15px 15px;
  height: 365px;
`;

export const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const AnswerArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 3.5rem);
  grid-gap: 1rem;
`;

export const QuestionArea = styled.div`
  position: relative;
  height: 80%;
  /* background: yellow; */
`;

export const ChooseAnswer = styled.div`
  position: relative;
  height: 35px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  .bullet {
    position: absolute;
    top: -10px;
    right: -12px;
    padding: 3px 7px;
    background: #94d6d8;
    border-radius: 50%;
    font-size: 13px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;

  button {
    width: 200px;
    height: 40px;
    margin-right: 50px;
    border: none;
    border-radius: 8px;
    outline: 0 !important;
    background: #dbd7d2;
    color: #1b1b1b;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const ChoiceArea = styled.div`
  margin-top: 10px;

  input {
    margin: 0;
  }
`;
