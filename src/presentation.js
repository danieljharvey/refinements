// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const TitleSlide = () => (
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What have types ever done for us?
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Daniel J. Harvey
          </Text>
        </Slide>

)

const CompareWithBeing10x = () => (
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>In most cases, if you can gain a significant benefit from TypeScript in your refactoring, that’s often a code smell indicating that your code is too tightly coupled.</Quote>
            <Cite>Eric Elliott</Cite>
          </BlockQuote>
        </Slide>


)
const CompareWithTesting = () => (
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>...there is little evidence that type safety makes a big difference... pair TDD with design review, spec review, and code review, and you’re looking at 90%+ reductions in bug density.</Quote>
            <Cite>Eric Elliott</Cite>
          </BlockQuote>
        </Slide>
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <TitleSlide/>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <CompareWithTesting/>
        <CompareWithBeing10x/>
        <ErrorChecking code={errorCheckingCode} langauge="js"/>
        <ErrorChecking code={eliteHaskell} langauge="haskell"/>

      </Deck>
    );
  }
}

const eliteHaskell = `userName :: Refined (SizeGreaterThan 0) String`

const errorCheckingCode = `function renderUser(user) {
  const userName = user && user.name && user.name.length > 0
                 ?  user.name 
                 :  "No name"
 
  const horses = "yeah"
  return userName + horses
}`

const ErrorChecking = ({code, language}) => (
  <Slide transition={['fade']} bgColor="tertiary">
    <SyntaxHighlighter language={language} style={dark}>{code}</SyntaxHighlighter>    
  </Slide>
)


const ClassicList = () => (
<Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
)
