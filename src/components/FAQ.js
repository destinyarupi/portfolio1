import React from 'react'
import { Container, Accordion, Row, Col } from '../assets/data/Exports'
import { faq } from '../assets/data/Data'

export const FAQ = () => {
    const FAQ = faq.map(data => (
        <Col key={data.key} md={6}>
            <Accordion>
                <Accordion.Item eventKey={data.eventkey} className='mb-4'>
                    <Accordion.Header>{data.question}</Accordion.Header>
                    <Accordion.Body style={{color: '#ffffffe6'}}>
                        {data.answer}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    ))

    return (
        <section id='faq'>
            <Container className='mb-0 mb-md-5 pb-4 pb-md-5'>
                <div className='text-center my-5 pt-5'>
                    <h1 className='mb-3 lh-base fw-bold'>Frequently Asked <br /> Question</h1>
                    <p>Wanna Ask Something?</p>
                </div>
                <Row>
                    {FAQ}
                </Row>
            </Container>
        </section>
    )
    }
