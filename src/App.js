import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useMemo, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import PostModal from "./components/PostModal";
import MyButton from "./UI/button/MyButton";
import {usePosts} from "./hooks/useSortedPosts";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:"Java", postText:"java"},
        {id:2, title:"JS", postText:"java script"},
        {id:3, title:"Python", postText:"python"}
    ]);

    const [filter, setFilter] = useState({sort:'', query:''});
    const [modal, setModal] = useState(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const createPost = (newPost) =>{
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    /*const bodyInput = useRef();*/
  return (
      <div className={"container"}>
          <MyButton onClick={()=> setModal(true)}>
              create post
          </MyButton>
          <PostModal visible={modal} srtVisible={setModal}>
              <PostForm create={createPost}/>
          </PostModal>
          <hr style={{margin:"15px 0"}}/>
          <PostFilter filter={filter} setFilter={setFilter}/>
          <PostList remove={deletePost} posts={sortedAndSearchedPosts} title={"Posts list"}/>
      </div>

  );
}

export default App;
