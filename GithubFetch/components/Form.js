import React, { Component } from "react";
import { Image } from "react-native";
import {
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right,
  Title
} from "native-base";
import axios from "axios";

export default class AnatomyExample extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      repos: [],
      username: ""
    };
  }

  onChangeDo(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onPress = () => {
    axios.get(`https://api.github.com/users/dipanshuchaubey`).then(res => {
      this.setState({ data: res.data });
    });

    axios
      .get("https://api.github.com/users/dipanshuchaubey/repos?per_page=5")
      .then(res => {
        this.setState({ repos: res.data });
      });

    this.setState({ username: "" });
  };

  render() {
    const { data, repos } = this.state;
    const image = this.state.data.avatar_url;
    return (
      <Form>
        <Item floatingLabel>
          <Label>Github Username</Label>
          <Input onChange={this.onChangeDo.bind(this)} />
        </Item>
        <Button onPress={this.onPress} full>
          <Text>Search</Text>
        </Button>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: image }} />
              <Body>
                <Text>{this.state.data.name}</Text>
                <Text note>{this.state.data.bio}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Button transparent>
                <Icon type="Entypo" name="location" />
                <Text>{data.location}</Text>
              </Button>
              <Button transparent>
                <Icon type="FontAwesome5" name="suitcase" />
                <Text>{data.company}</Text>
              </Button>
            </Body>
          </CardItem>

          {repos.map(repo => (
            <CardItem key={repo.id}>
              <Card style={{ flex: 0 }}>
                <Body>
                  <Text>{repo.name}</Text>
                  <CardItem>
                    <Text>{repo.description}</Text>
                  </CardItem>
                </Body>
              </Card>
            </CardItem>
          ))}

          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon name="logo-github" />
                <Text>{data.public_repos} Public Repos</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon name="paper" />
                <Text>{data.public_gists} Public Gists</Text>
              </Button>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon type="SimpleLineIcons" name="user-following" />
                <Text>{data.followers} Followers</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon type="SimpleLineIcons" name="user-following" />
                <Text>{data.following} Following</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Form>
    );
  }
}
