import React from 'react';
import { Card } from 'antd';
import {GridItem, GridWrapper} from './projectElements'

const { Meta } = Card;

const Projects: React.FC = () => (
  <GridWrapper>

    <GridItem>
    <Card
    hoverable
    style={{ width: 240, padding :0, margin:0 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="ZICOFE is a member of International Women in Coffee Alliance. (IWCA Uganda Chapter), an orgarnization with the sole purpose of advocating for gender equality and women’s rights." />
    <p>date</p>
  </Card>
    </GridItem>

    <GridItem>
    <Card
    hoverable
    style={{ width: 240, padding :0, margin:0  }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </GridItem>
    
  </GridWrapper>
);

export default Projects;