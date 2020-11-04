import React from 'react'

import { 
    Container, 
    Main, 
    LeftSide, 
    RightSide, 
    Repos, 
    CalendarHeading, 
    RepoIcon,
    Tab 
} from './styles'

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'

const Profile: React.FC = () => {

    const TabContent = () => (
        <div className="content">
            <RepoIcon />

            <span className="label">Repositories</span>
            <span className="number">26</span>
        </div>
    )

    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData 
                        username={'joaopedromata'}
                        name={'João Pedro Mata'}
                        avatarUrl={'https://avatars3.githubusercontent.com/u/62820737?v=4'}
                        followers={100}
                        following={100}
                        company={'Telemont'}
                        location={'Belo Horizonte, Brazil'}
                        email={'joaopmata182@gmail.com'}
                        blog={'instagram.com/poxajoao__'}
                    />
                </LeftSide>
                <RightSide>
                    <Tab className="mobile">
                        <TabContent />
                        <span className="line" />
                    </Tab>


                    <Repos>
                        <h2>Random Repos</h2>

                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <RepoCard 
                                    key={n}
                                    username={'Joaopedromata'}
                                    reponame={'youtube-content'}
                                    description={'Contains all of my Youtube lessons code'}
                                    language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                                    stars={9}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>


                    <CalendarHeading>
                        Random calendar (do not represent actual data)
                    </CalendarHeading>

                    <RandomCalendar />
                </RightSide>
            </Main>
        </Container>
    )
}

export default Profile