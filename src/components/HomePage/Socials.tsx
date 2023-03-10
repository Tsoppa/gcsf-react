import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Socials = () => {
  return (
    <StyledDiv>
      <StyledTitleDiv>
        <h2>Twitch Live</h2>
        <iframe title="twitchIframe" loading="lazy" src="https://player.twitch.tv/?channel=cybertv_gg&parent=www.gcsf.ge&muted=true" allowFullScreen width="500" height="300"></iframe>
      </StyledTitleDiv>
      <StyledTitleDiv>
        <h2>Facebook Page</h2>
        <iframe title="facebookIframe" loading="lazy" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgcsf.ge&tabs=timeline&width=500&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="900" style={{border:"none",overflow:"hidden"}} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </StyledTitleDiv>
    </StyledDiv>
  )
}

export default Socials;
