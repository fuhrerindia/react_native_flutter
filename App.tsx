import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Column, Container, MainAxisAlignment, Row, Scaffold, TextBox } from './comp/main';

export default function App() {
  return (
    <Scaffold scrollable={true} statusBarColor='green'>
      <View style={styles.container}>
        <Row mainAxisAlignment={MainAxisAlignment.end} height={500}>
          <Text>Hello</Text>
          <Text>WORLD</Text>
        </Row>
        <Column mainAxisAlignment={MainAxisAlignment.center}>
          <Button title='CLICK ME' />
          <Button title='CLICK ME' />
        </Column>
        <Container decoration={{
          color: "red",
          marginFromLTRB: [50, 100, 5, 6],
          paddingFromLTRB: [10, 15, 5, 20],
        }}>
          <Text>Hi</Text>
        </Container>
        <TextBox
          hint='Enter Name'
          leading={<Text>S</Text>}
          trailing={<Text>S</Text>}
          decoration={
            {
              color: "#ededed",
              paddingFromLTRB: [10, 5, 10, 5],
              width: 150
            }
          }

        />
      </View>
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});