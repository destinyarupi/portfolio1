import { Container, Row, Col, Button } from '../assets/data/Exports'

export const About = () => {
  return (
    <section id='about'>
        <Container >
            <div className='text-center my-md-5 my-3'>
                <h2 className='mb-3 fw-bold fs-2 fs-md-1'>About Us</h2>
                <p>Welcome to our NFT marketplace!</p>
            </div>
            <Row className='align-items-center justify-content-md-between justify-content-center'>
                <Col xs={11} md={5} data-aos="fade-up" data-aos-duration="1500">
                    <img
                        src={require('../assets/images/aboutUsImg.png')}
                        alt=""
                        className="img-fluid rounded mb-3 mb-md-0 d-none d-md-block"
                    />
                    <img
                        src={require('../assets/images/aboutUsImg - Copy.png')}
                        alt=""
                        className="img-fluid rounded mb-3 mb-md-0 d-block d-md-none"
                    />
                </Col>
                <Col xs={11} md={6} data-aos="fade-up" data-aos-duration="1500">
                    <h2 className='mb-3'>Get Popular NFT</h2>
                    <p className='mb-4 lh-md-lg text-justify'>
                        Our mission is to provide a platform for artists, collectors,
                        and enthusiasts to buy, sell, and trade unique and valuable
                        digital assets. We believe that NFTs are more than just a
                        fad - they represent a new era of ownership and creativity
                        that is democratizing the art world and empowering artists
                        in new ways. <br />
                        At our marketplace, you can discover a diverse range of NFTs,
                        from digital art and photography to virtual real estate and
                        collectibles. We strive to make the buying and selling
                        process as seamless and transparent as possible, and we
                        are committed to fostering a vibrant and supportive
                        community of NFT enthusiasts.
                    </p>
                    <div className='text-center text-md-start'>
                        <Button value='Learn more' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
