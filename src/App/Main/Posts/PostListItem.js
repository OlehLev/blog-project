import React from 'react'

const PostListItem = (props) => {



    let postTexsteShort
        for(let i=110; i <= 130; i++){
            if(props.postTexste[i] === " "){ 
                postTexsteShort=(props.postTexste.slice(0,i) + "...")
                break 
            }
        }

    return(
        <>  
        <div className="publication-box">
            <div className="publication-images-box">
                <img src={props.images} alt="" className="publication-images"/>
                
                <span className="publication-category">{props.category}</span>
                <div className="publication-like">
                    <div className="publication-like-box">
                        <span className="publication-like-commet"></span>
                        <span className="publication-like-commet-number">15</span>
                    </div>
                    <div className="publication-like-box">
                        <span className="publication-like-like"></span>
                        <span className="publication-like-like-number">3</span>
                    </div>
                </div>
            </div>
            <div className="publication-info-box">
                <div className="publication-description-box">
                    <h2 className="publication-description-name">{props.postName}</h2>
                    <h3 className="publication-description-text">{postTexsteShort}</h3>
                </div>
                <div className="publication-author-box">
                    <img src="images/myPhoto.png" alt="" className="publication-author-image"/>
                    <div className="publication-author-info">
                        <h3 className="publication-author-name">{props.authorName}</h3>
                        <h4 className="publication-author-date"> {props.publicationDate}</h4>
                    </div>
                    <div className="publication-more">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}


export default PostListItem