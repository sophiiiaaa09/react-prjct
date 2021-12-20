import './App.css';
import { useEffect } from 'react';
import dbExam from './indexedDB/exam';
import { Switch, Route } from 'react-router-dom';
import Layout from './layout';
import Routes from './routes';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/quizzes').then((responseData) => {
      dbExam.soal.toArray().then((responseDBIndex) => {
        if (!responseDBIndex.length > 0) {
          for (let i = 0; i < responseData.data.length; i++) {
            const parseRightAnswer = JSON.parse(
              responseData.data[i].right_answer
            );
            const dataChoice = [];
            if (responseData.data[i].choice) {
              const parseDataChoice = JSON.parse(responseData.data[i].choice);
              for (let j = 0; j < parseDataChoice.length; j++) {
                dataChoice.push({
                  select: parseDataChoice[j].substring(0, 2),
                  text: parseDataChoice[j].slice(3),
                });
              }
            }
            dbExam.soal.add({
              // idDB: responseData.data[i].id,
              superQuizId: responseData.data[i].super_quiz_id,
              question: responseData.data[i].question,
              choice: dataChoice,
              rightAnswer: Number(parseRightAnswer.join('')),
            });
          }
        }
      });
    });

    // dbExam.soal.toArray().then((response) => {
    //   if (!response.length > 0) {
    //     axios.get('http://localhost:3000/api/v1/quizzes').then((response) => {
    //       for (let i = 0; i < response.data.length; i++) {
    //         const parseRightAnswer = JSON.parse(response.data[i].right_answer);
    //         const dataChoice = [];
    //         if (response.data[i].choice) {
    //           const parseDataChoice = JSON.parse(response.data[i].choice);
    //           for (let j = 0; j < parseDataChoice.length; j++) {
    //             dataChoice.push({
    //               select: parseDataChoice[j].substring(0, 2),
    //               text: parseDataChoice[j].slice(3),
    //             });
    //           }
    //         }
    //         dbExam.soal.add({
    //           idDB: response.data[i].id,
    //           superQuizId: response.data[i].super_quiz_id,
    //           question: response.data[i].question,
    //           choice: dataChoice,
    //           rightAnswer: Number(parseRightAnswer.join('')),
    //         });
    //       }
    //     });
    //   }
    // });
  }, []);
  return (
    <Layout>
      <Switch>
        {Routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Layout>
  );
}

export default App;
