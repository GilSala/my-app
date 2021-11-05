import React, {useState, useEffect} from "react";
import firebase from "../Firebase";
import {observable, action,toJS} from 'mobx';



    const fetchBlogs=async(storiesObs)=>{
      const response=firebase.firestore().collection('Stories');
      const data=await response.get();
      data.docs.forEach(item=>{
        // console.log("story",item.data());
        let storyTemp=item.data();        
        storyTemp.id=item.id;
        console.log("storyTemp",storyTemp);
        storiesObs.addStory(storyTemp);
      })

    }

    // useEffect(() => {
    //   fetchBlogs();
    // }, []);

class Store {

  reviewListsd= observable({
    reviewList : [
      {review: "This is a nice article", stars: 2},
      {review: "A lovely review", stars: 4},
    ],
    addReview: action(function(e){
      this.reviewList.push(e);
    }),
    get reviewCount() {
      return this.reviewList.length;
    },
  
    get averageScore() {
      let avr = 0;
      this.reviewList.map(e => avr += e.stars);
      return Math.round(avr / this.reviewList.length * 100) / 100;
    },

    get ReviewList() {
        return this.reviewList;
      }
  });


  storiesObs= observable({
    stories : [],
    addStory: action(function(e){
      this.stories.push(e);
    }),
    get storiesCount() {
      return this.stories.length;
    }, 

    get StoriesList() {
      return this.stories;
    },

    initStories: action(function(e){
      fetchBlogs(this);
    }),

    getAllStories: action(function(){
      return this.stories;
    }),
  });



}

  
  export default Store;