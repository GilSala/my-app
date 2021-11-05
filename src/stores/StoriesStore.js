
// // import Example from './components/Example/Example';
// import React, {useState, useEffect} from "react";
// import { useLocalStore, useObserver } from "mobx-react";
// import firebase from "../Firebase";

// const StoreContext = React.createContext();

// const StoreProvider = ({ children }) => {
//   const [blogs,setBlogs]=useState([]);
//     let st=[];
//     const fetchBlogs=async()=>{
//       const response=firebase.firestore().collection('Stories');
//       const data=await response.get();
//       data.docs.forEach(item=>{
//         console.log("story",item.data());
//         let storyTemp=item.data();
//         storyTemp.id=item.id;
//         st.push(storyTemp);
//         store.addBug(storyTemp);
//       })
//       setBlogs(st);
//     //   console.log("myblobs",blogs);
//         blogs.forEach(element => {
//         console.log(element.storyContent);
//         })
//     }

//     useEffect(() => {
//       fetchBlogs();
//     }, []);

//   const store = useLocalStore(() => ({
//     bugs: [],
//     addBug: bug => {
//       store.bugs.push(bug);
//     },
//     get bugsCount() {
//       return store.bugs.length;
//     },
//     get bugsContent() {
//       return store.bugs;
//     }
//   }));

//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   );
// };

// const BugsHeader = () => {
//   const store = React.useContext(StoreContext);
//   return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>);
// };

// // const GetBugs = () => {
// //   const store = React.useContext(StoreContext);
// //   return useObserver(() =><> {store.bugsContent}</> );
// // };
// const BugsList = () => {
//   const store = React.useContext(StoreContext);

//   return useObserver(() => (
//     <ul>
//       {store.bugs.map(bug => (
//         <li key={bug.id}>{bug.authorName}</li>
//       ))}
//     </ul>
//   ));
// };

// const BugsForm = () => {
//   const store = React.useContext(StoreContext);
//   const [bug, setBug] = React.useState("");

//   return (
//     <form
//       onSubmit={e => {
//         store.addBug(bug);
//         setBug("");
//         e.preventDefault();
//       }}
//     >
//       <input
//         type="text"
//         value={bug}
//         onChange={e => {
//           setBug(e.target.value);
//         }}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// function StoriesStore() {
//   const store = React.useContext(StoreContext);

//   return (
//     store
    
//   );
// }

// export default StoriesStore;
// // export {store}