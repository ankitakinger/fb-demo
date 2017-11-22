Comment = React.createClass({

	render: function(){
		return (
			<div>
				<div>{this.props.children}</div>
				<button ref="likebtn" onClick={this.addLike} className="likebtn">Like</button>
				<button className="replybtn" onClick={this.writeComment}>Reply</button>
				<input type="text"/>
				<button className="postitbtn">PostIt</button>
			</div
		);
	}
	
});

module.exports = Comment;