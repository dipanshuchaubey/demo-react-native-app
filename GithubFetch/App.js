import React, { Fragment } from "react";
import Form from "./components/Form";

import {
  Container,
  Header,
  Content,
  Accordion,
  Footer,
  Button,
  ActionSheet,
  Text,
  Title,
  Icon,
  Right,
  Body,
  Left,
  Item,
  Input,
  Label
} from "native-base";

const App = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="backspace" />
          </Button>
        </Left>
        <Body>
          <Title>Github Fetcher</Title>
        </Body>
        <Right />
      </Header>

      <Content padder>
        <Form />
      </Content>
    </Container>
  );
};

export default App;
