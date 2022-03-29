import React from 'react'
import RepositoryItem from '../repository-item'
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
                <S.WrapperList>
                    <RepositoryItem
                        name="1-Challenge-Codenation"
                        linkToRepo="https://github.com/marceloscientist/1-Challenge-Codenation"
                        fullName="marceloscientist/1-Challenge-Codenation"
                    ></RepositoryItem>
                </S.WrapperList>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="AirBNB-br"
                    linkToRepo="https://github.com/marceloscientist/AirBNB-br"
                    fullName="marceloscientist/AirBNB-br"
                ></RepositoryItem>
                            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories