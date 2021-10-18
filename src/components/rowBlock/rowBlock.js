import React from 'react';
import {Col, Row} from 'reactstrap'; 5.5K (gzipped: 2.4K)

const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col ml='6'>
                {left}
            </Col> 
            <Col md='6'>
            {right}
            </Col>   
         </Row>   
    )
}

export default RowBlock;