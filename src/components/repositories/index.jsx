import React from 'react'
import * as S from './styled'

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <S.WrapperList>Panel Repositories</S.WrapperList>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <S.WrapperList>Panel Starred</S.WrapperList>
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories