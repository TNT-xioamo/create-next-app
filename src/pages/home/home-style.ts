import styled from 'styled-components'

const NavWrapper = styled.nav`
  .nav-card {
    padding: 10px;
    width: fit-content;
    .ant-card-body {
      padding: 0;
    }
    .menu-list {
      margin: 0;
      padding: 0;
      .n-li {
        padding: 10px;
        border-radius: 7px;
        &:hover{
          background-color: #fbf5ee;
          color: #fa8919;
          .n-title, .nav-category {
            color: inherit;
          }
        }
        .n-title{
          font-size: 15px;
          font-weight: 600;
          color: #404040;
          /* &:hover{
            color: inherit;
          } */
        }
        .nav-category {
          padding-left: 16px;
          font-size: 13px;
          flex: 1;
          color: #333;
        }
      }
    }
  }
`

export { NavWrapper }