import React from 'react';
import "../../node_modules/rohit-custom-video-react/dist/video-react.css"
import { Player, BigPlayButton } from 'rohit-custom-video-react';

const VideoCard = ({
	alt,
	poster,
	videoLink,
	posterTitle
})=> {
	return (
		<div className="card" style={{width: "500px", height: "300px", margin: "0 auto"}}>
			<div className="card-body">
				<Player
					playsInline
					poster={require(`../assest/video-cover-image/${poster}`)}
					src={require(`../assest/${videoLink}`)}
					alt={alt}
					posterTitle={posterTitle}
				>
					<BigPlayButton position="center" />
				</Player>
			</div>
		</div>
	)
}

export default VideoCard;