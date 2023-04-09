import { Container, Row, Col, Stack, Button } from '../assets/data/Exports';
import { stats } from '../assets/data/Data';

export const Hero = () => {
  const statistics = stats.map(stat => (
    <div key={stat.id}>
      <h3 className="fw-bolder">{stat.figures}</h3>
      <p style={{color: 'rgba(255, 255, 255, 0.5)'}}>{stat.content}</p>
    </div>
  ))

  return (
    <section id="hero">
      <Container className="py-md-5 py-0">
        <Row
          data-aos="fade-up"
          data-aos-duration="1500"
          className="justify-content-center align-items-center py-2"
        >
          <Col xs={11} md={6}>
            <h1
              className="fw-bolder mb-md-4 mb-3 lh-base"
              style={{maxWidth: '403px'}}
            >
              Create, Sell & Collect Your Own Creative NFT
            </h1>
            <p className='mb-4' style={{maxWidth: '400px'}}>
              Join a community shaping the future of art and culture with decentralized technologies.
            </p>
            <Stack direction="horizontal" gap={3} className='mb-md-5 mb-3'>
              <Button value='Explore Now' />
              <button className="Btn nftBtn">Sell NFT</button>
            </Stack>
            <Stack direction="horizontal" className='pt-2 justify-content-between text-center mb-2 mb-md-0' style={{maxWidth: '440px'}}>
              {statistics}
            </Stack>
          </Col>
          <Col xs={11} md={6}>
            <img
              src={require('../assets/images/heroimage.png')}
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
