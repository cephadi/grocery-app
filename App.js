import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StackNav from './navigation/StackNav';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <StackNav />
        </NavigationContainer>
    );
}