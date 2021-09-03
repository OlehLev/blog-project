import React, { Component } from 'react'
import PostListItem from './PostListItem';
import posts from './posts'


                
                         
const PostList = () => {

    let test1 =   posts.slice(-1)
    let test2 =   posts.slice(posts.length - 4,posts.length - 1)
    let test3 =   posts.slice(posts.length - 8,posts.length - 4)
   

        return(
            <div className="main-left">
                    <div className="publication-box-0">
                        
                            {
                              test1.map((post) => 
                                    <PostListItem 
                                        key={post.id}
                                        images={post.images}
                                        category={post.category}
                                        postName={post.postName}
                                        postTexste={post.postTexste}
                                        authorName={post.authorName}
                                        publicationDate={post.publicationDate}                          
                                    />
                                )
                            }
                        
                    </div>
                    <div className="publication-box-1">
                        
                            {
                                test2.map((post) => 
                                    <PostListItem 
                                        key={post.id}
                                        images={post.images}
                                        category={post.category}
                                        postName={post.postName}
                                        postTexste={post.postTexste}
                                        authorName={post.authorName}
                                        publicationDate={post.publicationDate}                          
                                    />
                                )
                            }
                        
                    </div>
                    {/* <div className="publication-box-2">
                        
                            {
                                test3.map((post) => 
                                    <PostListItem 
                                        key={post.id}
                                        images={post.images}
                                        category={post.category}
                                        postName={post.postName}
                                        postTexste={post.postTexste}
                                        authorName={post.authorName}
                                        publicationDate={post.publicationDate}                          
                                    />
                                )
                            }
                        
                    </div> */}
                    <div className="publication-box-3">
                        
                            {
                                test3.map((post) => 
                                    <PostListItem 
                                        key={post.id}
                                        images={post.images}
                                        category={post.category}
                                        postName={post.postName}
                                        postTexste={post.postTexste}
                                        authorName={post.authorName}
                                        publicationDate={post.publicationDate}                          
                                    />
                                )
                            }
                        
                    </div>
                    
                    <button className="main-publication-more-btn">MORE</button>
                </div>
        )
    }



export default PostList