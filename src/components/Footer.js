import { Container, Row, Col } from '../assets/data/Exports'
import { footer } from '../assets/data/Data'

export const Footer = () => {

  const FooterLinks = ({ data }) => (
    data.map(allData => (
      <div key={allData.link1} className='mb-5 mb-md-0'>
        <p className='fs-6 mb-2 mb-md-3'>{allData.link1}</p>
        <p className='fs-6 mb-2 mb-md-3'>{allData.link2}</p>
        <p className='fs-6 mb-2 mb-md-3'>{allData.link3}</p>
        <p className='fs-6 mb-2 mb-md-3'>{allData.link4}</p>
      </div>
    ))
  )
  const col = footer.map((section) => (
                <Col key={section.key}>
                    <h4 className='mb-4'>{section.title}</h4>
                  <FooterLinks data={section.data} />
                </Col>
              ))
  return (
    <footer>
      <Container>
        <hr className='py-3'/>
        <Row className='justify-content-between align-items-start mb-0 mb-md-5 pb-4'>
            <Col md={4} className='pb-3'>
              <div className='pb-3'>
                <a href="#hero" className='fs-3 text-white fw-bolder text-decoration-none'>
                    Arupi
                    <span className='gradient-text fs-2'>
                      NFT
                    </span>
                </a>
              </div>
              <p className='fs-6 lh-lg'>
                The best NFT marketplace website in <br /> the world and feel your
                experience in <br /> selling or buy our work
              </p>
            </Col>
            {col}
        </Row>
        <div className='text-center pb-5'>
          <p className='fs-6'>Coded by Destiny Arupi | All Right Reserved!</p>
        </div>
      </Container>
    </footer>
  )
}

