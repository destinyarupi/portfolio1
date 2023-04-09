import { useState } from 'react'
import { creators } from '../assets/data/Data'
import { Container, Row, Card } from '../assets/data/Exports'
import Button from 'react-bootstrap/esm/Button'

export const Creators = () => {
    const [followedCreators, setFollowedCreators] = useState([])

    const handleFollowClick = (data) => {
        setFollowedCreators(prevState => {
            const creatorIndex = prevState.findIndex(creator => creator.name === data.name)
            if (creatorIndex === -1) {
                return [...prevState, data]
            } else {
                const updatedCreators = [...prevState]
                updatedCreators.splice(creatorIndex, 1)
                return updatedCreators
            }
        })
    }

    const isCreatorFollowed = (creatorName) => {
        return followedCreators.some(creator => creator.name === creatorName)
    }

    const creatorCard = (
        <Row className='justify-content-center gap-md-3 gap-4'>
            {creators.map(data => (
                <Card className='text-black p-0' key={data.name} data-aos="fade-up" data-aos-duration="1500">
                    <Card.Img variant="top" src={data.src}/>
                    <img
                        src={data.profile}
                        alt="profile"
                        className='position-relative rounded-circle'
                        style={{width: '99px', height: '99px', bottom: '9%', left: '37%', marginBottom: '-44px'}}
                    />
                    <Card.Body className='px-3 text-center'>
                        <Card.Title className='mb-3'>{data.name}</Card.Title>
                        <Card.Text className='mb-4 fs-6 text-center'>{data.desp}</Card.Text>
                        <Button
                            className={`${isCreatorFollowed(data.name) ? 'cardBtnUnfollowed' : 'cardBtnFollowed'} mb-3`}
                            onClick={() => handleFollowClick(data)}>
                            {isCreatorFollowed(data.name) ? 'Unfollow' : 'Follow'}
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    )

    return (
        <section id='creators'>
            <Container>
                <div className='text-center my-4 pt-5'>
                    <h1 className='mb-3 fw-bold'>Top Creators</h1>
                    <p>Meet our Top Creators from Rebel Coders.</p>
                </div>
                {creatorCard}
            </Container>
        </section>
    )
}
