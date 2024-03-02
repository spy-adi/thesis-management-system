import React,{useContext, useEffect} from "react";
import ForumContext from "../../../context/forum/forumContext";

function Replies({thread_title_id}){
    const forumContext = useContext(ForumContext);
    const{replies,getReplies} = forumContext;
    useEffect(()=>{
        getReplies(thread_title_id);
    },[])
    if(replies!==null) return replies.map(reply=>{
        return(
          <div key={reply.id} className="rounded border" style={{marginTop:'10px', padding:'10px'}}>
            <p><b>{reply.posted_by_name}{" "}({(reply.posted_by)})</b></p>
            <p>{reply.content}</p>
          </div>
        )
      });
    else 
    return (
        <div className="rounded border" style={{marginTop:'10px', padding:'10px'}}>
        <p>No Comments Yet</p>
      </div>
    )     

}

export default Replies;