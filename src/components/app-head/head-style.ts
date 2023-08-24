import styled from 'styled-components'
type Custom = {
  img1?: string
  img2?: string
}

const Headwrapper = styled.div``

const Activitywrapper = styled.div<Custom>`
  .activity-wrapper {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    .wrapper-content {
      background-image: url(${ props => props?.img1 });
    }
  }
`


export { Activitywrapper }
