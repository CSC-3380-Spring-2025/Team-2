# Bubble: Team 2
# Members
Project Manager: Kayla Theriot (kaylatheriot04)\
Communications Lead: Jack O'Conner ([GitHub Name])\
Git Master: Melanie J. Steiner (an-npc)\
Design Lead: Nicole Parra (nicki911)\
Quality Assurance Tester: Emerson Ricketts(EmersonRick)

# About Our Software
Bubble is an order/pick up app. Where the user can app drinks to their cart
then checkout by specifying the pickup location. Users can favorite items and 
earn reward points. At the same time, the managers of Bubble can edit menu items,
add or delete items, keep track of orders currently being made and which are 
completed. The app can check who is an admin or not, to control who sees and 
alters what in the app. 

## Platforms Tested on
- Android via Androird Emulator
- iOS via Expo App

# Important Links
Kanban Board: https://www.notion.so/3380-Project-17d239c70f2980eda9b5c16da45ae948?pvs=4
Designs: https://www.figma.com/design/0hr2l1GO9JlkkFzj4LoAUK/Bubble?node-id=10-2202&t=Ypk9JjU8EsMfEPth-1
Styles Guide(s): [link]

# Prerequisites
The following should be installed. The version shouldn't be a huge deal but just in case they are listed
Install Android Studio: https://developer.android.com/studio 
Our Android Bridge Version is 1.0.41
```sh
adb --version
```
Install NodeJS: https://nodejs.org/en/download 
Our Version is v18.20.7
```sh
node -v
```
Install Chocolately (should install with NodeJS)
Our Version is v2.4.1
```sh
choco info
```

# How to Run Dev and Test Environment
Install Expo for Project: 
if successful, node_modules should appear in project directory
```sh
npm i expo
```
Now installed run:
Entering this adds .expo file to directory
```sh
npx expo start
```
Now enter 'a' to open Android emulator
```sh
a
```
To access the home page either make an account
or use our tester account
Please keep in mind that our tester has admin privileges
Newly made accounts will not
(Has admin privileges thus more access to features)
email: beaux@gmail.com
password: temppassword

(Regular privileges)
email: melanie@gmail.com
password: temppassword

If there are any other issues this should resolve everything
Only use as a last resort please
```sh
npm install
```

## Dependencies
@expo/vector-icons: ^14.0.2
@mui/material: ^6.4.8
@react-native-async-storage/async-storage: ^1.24.0
@react-navigation/bottom-tabs: ^7.2.0
@react-navigation/native: ^7.0.14
expo: ~52.0.31
expo-blur: ~14.0.3
expo-constants: ~17.0.5
expo-font: ~13.0.3
expo-haptics: ~14.0.1
expo-linking: ~7.0.5
expo-router: ~4.0.17
expo-splash-screen: ~0.29.21
expo-status-bar: ~2.0.1
expo-symbols: ~0.2.2
expo-system-ui: ~4.0.8
expo-web-browser: ~14.0.2
firebase: ^11.5.0
react: 18.3.1
react-dom: 18.3.1
react-native: 0.76.7
react-native-gesture-handler: ~2.20.2
react-native-reanimated: ~3.16.1
react-native-safe-area-context: 4.12.0
react-native-screens: ~4.4.0
react-native-web: ~0.19.13
react-native-webview: 13.12.5

## Dev Dependencies
@babel/core: ^7.25.2
@types/jest: ^29.5.12
@types/react: ~18.3.12
@types/react-test-renderer: ^18.3.0
jest: ^29.2.1
jest-expo: ~52.0.3
react-test-renderer: 18.3.1
typescript: ^5.3.3

### Downloading Dependencies
Describe where to download the dependencies here. Some will likely require a web download. Provide links here. For IDE extensions, make sure your project works with the free version of them, and detail which IDE(s) these are available in.
The integral dependencies are downloaded with the following:
npm install 
```sh
npx expo install firebase 
npm install @expo/vector-icons@^14.0.2 \
@mui/material@^6.4.8 \
@react-native-async-storage/async-storage@^1.24.0 \
@react-navigation/bottom-tabs@^7.2.0 \
@react-navigation/native@^7.0.14 \
expo@~52.0.31 \
expo-blur@~14.0.3 \
expo-constants@~17.0.5 \
expo-font@~13.0.3 \
expo-haptics@~14.0.1 \
expo-linking@~7.0.5 \
expo-router@~4.0.17 \
expo-splash-screen@~0.29.21 \
expo-status-bar@~2.0.1 \
expo-symbols@~0.2.2 \
expo-system-ui@~4.0.8 \
expo-web-browser@~14.0.2 \
react@18.3.1 \
react-dom@18.3.1 \
react-native@0.76.7 \
react-native-gesture-handler@~2.20.2 \
react-native-reanimated@~3.16.1 \
react-native-safe-area-context@4.12.0 \
react-native-screens@~4.4.0 \
react-native-web@~0.19.13 \
react-native-webview@13.12.5
```

## Commands
Describe how the commands and process to launch the project on the main branch in such a way that anyone working on the project knows how to check the affects of any code they add.

```sh
Example terminal command syntax
```

It is very common in these sections to see code in peculiar boxes to help them stand out. Check the markdown section of the Project Specifications to see how to add more / customize these.

```python
def code_highlight_example(m: int, m: float, s: str) -> str:
	return s + str(n*m)
```

```java
public static void main(String[] args){
	System.out.println("Hello, World!");
}
```

```c#
static void Main(){
	Console.WriteLine("Hello, World!");
}
```
