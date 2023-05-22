import React from 'react';
import { Card } from 'antd';
import {GridItem, GridWrapper} from './projectElements'

const { Meta } = Card;

const Projects: React.FC = () => (
  <GridWrapper>

    <GridItem>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </GridItem>

    <GridItem>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </GridItem>
    
  </GridWrapper>
);

export default Projects;