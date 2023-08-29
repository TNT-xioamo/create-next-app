import React, { memo, type PropsWithChildren} from 'react'
import { PageCenterwrapper, PageContWrapper } from './page-style'

export default memo(function AppPageMain(props: PropsWithChildren<{center: Boolean}>): JSX.Element {
  return (
    <>
    {
      props.center ? <PageCenterwrapper> {props.children} </PageCenterwrapper> : <PageContWrapper> {props.children} </PageContWrapper>
    }
    </>
)})
