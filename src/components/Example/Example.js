import React , { useEffect, useState }from 'react'
// import db from '../../firebase.config';
import firebase from "../../Firebase"




function Example() {
    const [blogs,setBlogs]=useState([]);
    let st=[];
    const fetchBlogs=async()=>{
      const response=firebase.firestore().collection('Stories');
      const data=await response.get();
      data.docs.forEach(item=>{
        console.log("story",item.data());
        let storyTemp=item.data();
        storyTemp.id=item.id;
        st.push(storyTemp);
      })
      setBlogs(st);
    //   console.log("myblobs",blogs);
        blogs.forEach(element => {
        console.log(element.storyContent);
        })
    }

    useEffect(() => {
      fetchBlogs();
    }, []);


    // const stableDispatch = useCallback(dispatch, []) //assuming that it doesn't need to change

    // useEffect(() =>{
    //      stableDispatch(foo)
    // },[stableDispatch])

    return (
        <>
            <div>תוכן</div>
            <ul>                    
                    {blogs.forEach(element => {
                        <li>{element.storyContent}</li>
                        })
                    }  
            </ul>
        </>
    )
}

export default Example

