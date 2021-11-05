import React from 'react';
import {observer} from 'mobx-react';
import StarRatingComponent from 'react-star-rating-component';

function ExampleSub({data}) {
    console.log("data",data);    
  return (
    <li className="list-group-item">      
      <div className="float-center">תוכן הסיפור {data.storyContent}</div>
      <div className="float-right">שם הסיפור {data.storyName}</div>
      <div className="float-left">נכתב ע"י {data.authorName}</div>
    </li>
  )
}

function Example({StoriesList}) {
    console.log("StoriesList1",StoriesList);
  return (
    <div className="storiesWrapper">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-comments"/> Stories
            </div>
            <ul className="list-group list-group-flush">
              {StoriesList.map((e, i) =>
                <ExampleSub
                  key={i}
                  data={e}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Example