import React from 'react';
import { Player, BigPlayButton } from 'video-react';

const VideoCard = ({
	alt,
	poster,
	videoLink
})=> {
	return (
		<div className="card" style={{width: "500px", height: "300px", margin: "0 auto"}}>
			<div className="card-body">
				<Player
					playsInline
					poster={require(`../assest/video-cover-image/${poster}`)}
					src={require(`../assest/${videoLink}`)}
					alt={alt}
				>
					<BigPlayButton position="center" />
				</Player>
			</div>
		</div>
	)
}

export default VideoCard;