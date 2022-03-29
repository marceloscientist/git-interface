import React from 'react'
import * as S from './styled'

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage
                src="https://avatars.githubusercontent.com/u/13208366?v=4"
                alt="User Avatar" srcset="" />
            <S.WrapperInfoUser>
                <div>
                    <h1>Marcelo de Carvalho Santana</h1>
                    <S.WrapperUserName>
                        <h3>Username:</h3>
                        <a
                            href='https://github.com/marceloscientist'
                            target="_blank"
                            rel="noopener noreferrer"
                        >marceloscientist</a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>15</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>37</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile