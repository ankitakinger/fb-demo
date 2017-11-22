var {Comment} = require('./fbcomment');

		var Status = React.createClass({

			getInitialState: function(){
				return ({liked: false});
			},

			addPost: function(newText){
				this.props.addPostText(this.refs.newText.value);
			},

			addLike: function(){
				this.setState({liked: true});
			},

			removeLike: function(){
				this.setState({liked: false});
			},

			writeComment: function(){
				this.props.addCommentText(this.refs.commentText.value);
			},
			
			renderNormal: function(){
				return(
				<div className="block">
					<div className="checkStatus">{this.props.children}</div>
					<button ref="likebtn" onClick={this.addLike} className="likebtn">Like</button>
					<button className="commentbtn" onClick={this.writeComment}>Comment</button>
					<button className="sharebtn">Share</button>
				</div>)
			},

			renderLiked: function(){
				return(
				<div className="block">
					<div className="checkStatus">{this.props.children}</div>
					<button ref="likebtn" onClick={this.removeLike} className="likebtn">UnLike</button>
					<button className="commentbtn" onClick={this.writeComment}>Comment</button>
					<button className="sharebtn">Share</button>
				</div>)	
			},

			render: function(){
				if(this.state.liked){
					return this.renderLiked();
				}else{
					return this.renderNormal();
				}
			}

		});

		var Post = React.createClass({

			getInitialState: function(){
				return ({
					posts: [],
					comments: [],
				});
			},

			addStatus: function(newText){
				var arr = this.state.posts;
				arr.unshift(newText);
				this.setState({posts: arr});
			},

			eachStatus: function(newText,i){
				return (
					<Status key={i} addPostText={this.addStatus}>
						{newText}
						<Comment addCommentText={this.addComment}>
							{commentText}
						</Comment>
					</Status>
				);
			},

			handleClick: function(){
				if(this.refs.myStatus !== null){
					this.addStatus(this.refs.myStatus.value);
					this.refs.myStatus.value = "";
				}
			},

			addComment: function(commentText){
				var arr2 = this.state.comments;
				arr2.push(commentText);
				this.setState({comments: arr2});
			},

			render: function(){
			return (
			<div>
				<textarea rows="3" cols="50" ref="myStatus" placeholder="What's on your mind?" addPostText={this.addStatus}></textarea><br/>
				<button onClick={this.handleClick} className="postbtn">Post</button>
				<div>
					{
						this.state.posts.map(this.eachStatus)
					}
				</div>
			</div>
			);
			}
		});

		ReactDOM.render(<Post />,document.getElementById("timeline"));

