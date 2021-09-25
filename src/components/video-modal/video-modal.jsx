import React, { Component } from 'react'
import styled from 'styled-components'

class VideoModal extends Component {
   render() {
      return (
         <ModalWrapper>
            <VideoModalStyle>
               <Video />
               <VideoControls />
            </VideoModalStyle>
         </ModalWrapper>
      )
   }
}
const ModalWrapper = styled.video`
      
`;

const VideoModalStyle = styled.video`
   
`;

const Video = styled.video`
   
`;

const VideoControls = styled.video`
   
`;

export default VideoModal
