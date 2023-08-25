import styled from 'styled-components'
type Custom = {
  $img1?: string
  $img2?: string
}
//  @extend .logo-wrapper;
const Headwrapper = styled.div`
  height: 65px;
  background: #edc0bf;
  /* background: linear-gradient(90deg, #edc0bf 0,#c4caef 58%);
  font-family: Avenir,Helvetica,Arial,sans-serif !important; */
  background: rgba(255, 255, 255, .7);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
  border-bottom: 1px solid #eaeaea;
  min-width: inherit;
  position: sticky;
  top: 0;
  .wrappe-content {
    width: 1200px;
    margin: 0 auto;
    /* background: rgba(255, 255, 255, .7);
	  -webkit-backdrop-filter: blur(10px);
	  backdrop-filter: blur(10px); */
    .logo-wrapper {
      .go-home {
        cursor: pointer;
        height: 65px;
        display: flex;
        align-items: center;
        .logo-title {
          font-size: 0;
        }
        .head-logo {
          width: 120px;
          height: 65px;
          -ms-flex-negative: 0;
          flex-shrink: 0;
        }
      }
    }
  }
`

const Menuwrapper = styled.div``

const Activitywrapper = styled.div<Custom>`
  .activity-wrapper {
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    background-image: url(${ props => props?.$img1 || '' });
    height: 50px;
    cursor: pointer;
    position: sticky;
    top: 0;
    .wrapper-content {
      background-image: url(${ props => props?.$img2 || '' });
      height: 100%;
      background-size: cover;
      width: 1200px;
      margin: 0 auto;
      .content-cancel {
        float: right;
        margin: 16px 15px;
        font-size: 18px;
      }
    }
  }
`

export { Headwrapper, Menuwrapper, Activitywrapper }
