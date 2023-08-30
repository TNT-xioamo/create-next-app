import styled from 'styled-components'
type Custom = {
  $img1?: string
  $img2?: string
  $showhot?: any
}
//  @extend .logo-wrapper;
const Headwrapper = styled.div<Custom>`
  height: 65px;
  /* background: linear-gradient(90deg, #edc0bf 0,#c4caef 58%); */
  font-family: Avenir,Helvetica,Arial,sans-serif !important;
  /* background: rgba(255, 255, 255, .7); */
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
  border-bottom: 1px solid #eaeaea;
  min-width: inherit;
  position: sticky;
  top: ${ props => props?.$showhot ? '50px' : '0px' };
  z-index: 2;
  .wrappe-content {
    width: 1200px;
    margin: 0 auto;
    /* background: rgba(255, 255, 255, .7);
	  -webkit-backdrop-filter: blur(10px);
	  backdrop-filter: blur(10px); */
    .logo-wrapper {
      margin-right: 40px;
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
    .ant-form-item{
      margin-bottom: 0;
    }
  }
`

const Menuwrapper = styled.div`
  display: flex;
  flex: 1;
  .hover-color:hover {
    color: #287ef1;
  }
`

const Activitywrapper = styled.div<Custom>`
    position: sticky;
    top: 0;
  > :hover {
    -webkit-animation: shadow-drop-2-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: shadow-drop-2-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    -webkit-animation: scale-up-center 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
  .activity-wrapper {
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    background-image: url(${ props => props?.$img1 || '' });
    height: 50px;
    cursor: pointer;
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
const Inquirewrapper = styled.div`
  position: relative;
  .pos-card {
    position: absolute;
    top: 40px;
    right: 0;
    width: inherit;
    .ant-card-head {
      font-size: 12px;
      padding-top: 10px;
      border-bottom: none;
      color: #999;
      min-width: 285px;
      min-height: 8px;
    }
    .ant-card-body {
      padding: 10px;
    }
    &.scale-up-center {
	    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    .card-wrap {
      .ant-btn-default {
        margin: 5px;
        font-size: 12px;
      }
    }
  }
`

export { Headwrapper, Menuwrapper, Activitywrapper, Inquirewrapper }
