import React from 'react';
import ReactDOM from 'react-dom/client';
import MissedGoal from './Components/MissedGoal';
import MadeGoal from './Components/MadeGoal';

// create component that chooses components to render if Goal is made or Goal is not made
function Goal(props) {
  const isGoal = props.isGoal;

  // if (isGoal) {
  //   return <MadeGoal/>;
  // }
  // return <MissedGoal/>;

  // use tenary
  return (
    <>
    {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Goal isGoal={true} />);