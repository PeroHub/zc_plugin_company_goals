import styled from 'styled-components';

import SimpleModal from '../createGoal/CreateGoal';

import BasicModal from '../EditGoal/EditGoal';
import Report from '../updates/Report'

const Mainside = () => {
  return (
    <div>
      <Report />
      <MainContainer>
      <Goal>
        {' '}
        <SimpleModal /> <BasicModal />
      </Goal>
      
      <Goal >
        
      </Goal>
      
    </MainContainer>
    </div>
    
  );
};

export default Mainside;

const MainContainer = styled.div`
  display: flex;
  margin-right: 2rem;
  height: 50%;
`;
const Goal = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 200px;
  background: red;
  height: 40vh;
  background: ${(props) => (props.primary ? 'white' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'red')};
  margin: 10px;
  box-shadow: -2px 2px 3px rgba(0, 0, 0, 0.5);
`;
