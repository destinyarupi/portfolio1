import { useState } from 'react';
import { Container, Row, Tab, Tabs, Cards, Button } from '../assets/data/Exports';
import { collections } from '../assets/data/Data';

export const Collections = () => {
    const [showAll, setShowAll] = useState(false);

    const handleClick = () => {
        setShowAll(prevState => !prevState)
    }

    const CardView = ({ data }) => {
        let count = showAll ? data.length : 3;
        return (
          <Row className='justify-content-center gap-3' data-aos="fade-up" data-aos-duration="1500">
            {data.slice(0, count).map((allData) => (
              <Cards
                key={allData.id}
                img={allData.src}
                title={allData.title}
                bid={allData.bid}
                desp={allData.desp}
              />
            ))}
          </Row>
        );
      };

    const tab = collections.map((category) => (
                    <Tab
                        key={category.key}
                        eventKey={category.key}
                        title={category.title}
                    >
                        <CardView data={category.data} />
                    </Tab>
                ))
    return (
        <section id='collections'>
            <Container className='mt-5 pt-md-5 pt-3'>
                <div className='text-center my-4'>
                    <h1 className='mb-3 fw-bold'>Collections</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                </div>
                <Tabs defaultActiveKey='art' id='collections-tabs' className='mb-4' justify >
                    {tab}
                </Tabs>
                <div className='text-center mt-4' onClick={handleClick}>
                    <Button value={showAll ? 'Hide' : 'View More'}/>
                </div>
            </Container>
        </section>
)};
