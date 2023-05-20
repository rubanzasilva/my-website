import React from 'react';
import { Card } from 'antd';
import {GridWrapper} from './projectElements'

const { Meta } = Card;

const Projects: React.FC = () => (
  <GridWrapper>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </GridWrapper>
);

export default Projects;