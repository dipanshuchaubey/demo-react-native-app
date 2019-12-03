import React, { Component } from "react";
import { Container, Footer, FooterTab, Button, Text } from "native-base";
export default class NewFooter extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
