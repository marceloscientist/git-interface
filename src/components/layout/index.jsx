import React from 'react'
import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <header>{children}</header>
    </S.WrapperLayout>
  )
}

export default Layout