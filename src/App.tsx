import React from 'react';
import styles from './App.module.css';
import { ContainerPage } from './containers/ContainerPage';
import ContainerWrapper from './containers/ContainerWrapper';
import PageHeader from './components/PageHeader';
import UserListing from './components/UserListing';

function App() {
  return (
   
     <div className={styles.body} >
      <ContainerPage>
        <ContainerWrapper >
          <PageHeader   />ْ
          <UserListing />
             
        </ContainerWrapper>
      </ContainerPage>
    </div>
    
  );
}
//<UserListContainer  />
export default App;
