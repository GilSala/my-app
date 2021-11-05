import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import Store from './stores/Store';
import React from 'react';
import { toJS } from 'mobx'
import Example from './components/Example/Example';

// ... leave decorate(Store, {...}) untouched ...

  const reviewStore = new Store();

  reviewStore.storiesObs.initStories(); 
 ;
class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <Form store={reviewStore.reviewListsd}/>
        <Dashboard store={reviewStore.reviewListsd}/>
        <Reviews store={reviewStore.reviewListsd}/>
        <Example StoriesList={reviewStore.storiesObs.StoriesList}/>
      </div>
    );
  }
}

export default App;