import Home from '@/app/screens/Home';
import Login from '@/app/screens/Login';
import AuthUserProvider from '@/context/auth';
import { PostsProvider } from '@/context/Posts/PostsContext';
import { UsersProvider } from '@/context/Users/UsersContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <AuthUserProvider>
      <PostsProvider>
        <UsersProvider>
          <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="screens/Login/index" component={Login} />
            <Screen name="screens/Home/index" component={Home} />
          </Navigator>
        </UsersProvider>
      </PostsProvider>
    </AuthUserProvider>
  );
}