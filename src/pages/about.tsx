import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="About Yeykov" description="Information about Yeykov" />}>
    <Content>
      <p>
        Blog personal mostrado al público a fin de aportar con mi pequeño grano de arena 
        en este basto mar de información, esperando pueda ser de utilidad para alguien en algún momento.
      </p>
      <p>
        Blog personal mostrado al público a fin de aportar con mi pequeño grano de arena 
        en este basto mar de información, esperando pueda ser de utilidad para alguien en algún momento.
      </p>
    </Content>
  </Main>
);

export default About;
