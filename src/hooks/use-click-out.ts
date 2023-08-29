import * as React from 'react'

import ReactDOM from 'react-dom'

type UseClickOutProps = {
  // domTargetRef: React.MutableRefObject<HTMLElement>[]
  domTargetRef: React.RefObject<HTMLElement>[]
  onClickOut: (event: Event) => void
  eventName?: string
}

const isClickDomOutside = (domTargetRefArr: React.RefObject<HTMLElement>[], targetDom: HTMLElement) => {
  for (const domRef of domTargetRefArr) {
    // eslint-disable-next-line react/no-find-dom-node
    const realDom = ReactDOM.findDOMNode(domRef?.current)
    if (realDom?.contains(targetDom)) return false
  }
  return true
}

export default function useClickOut({ domTargetRef = [], eventName = 'click', onClickOut }: any) {
  const domTargetRefArr = [].concat(domTargetRef)
  React.useEffect(() => {
    const handler = (e: Event) => {
      if (isClickDomOutside(domTargetRefArr, (e?.target as HTMLElement))) {
        onClickOut(e)
      }
    }
    document.addEventListener(eventName, handler)
    return () => document.removeEventListener(eventName, handler)
  }, [])
}