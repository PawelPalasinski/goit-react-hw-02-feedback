import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
// import { Counter } from "./FeedbackOptions/FeedbackOptions";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FeedbackOptions />
    </div>
  );
};
