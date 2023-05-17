![Logo](./src/assets/logo.png)

# Pinglobe

Pinglobe is a public chat app that lets you connect with people from all around the world. With Pinglobe, you can join the global conversation in real-time and chat with people from all corners of the globe.

## To Use

- Go to [Pinglobe web](https://pinglobe.wajid.me/)
- Click **_Sign in with Google_** button
- And chat 🎉

## To Create Your Own

- Open terminal and type these commands

```
$ git clone https://github.com/wajid-nv/pinglobe.git

$ cd taskikko

$ npm install
```

- Open [Firebase console](https://console.firebase.google.com/)
- Create new project
- Enable [Google sign in](https://firebase.google.com/docs/auth/web/google-signin)
- Create new [firestore database](https://firebase.google.com/docs/firestore)
- Get your `firebaseConfig` from firebase project settings
- Replace it with `firebaseConfig` object in [`/src/config/firebase.ts`](https://github.com/wajid-nv/pinglobe/blob/main/src/config/firebase.ts)
- Run locally with `$ npm run dev`
- Make your own tweaks
- Commit to Git
- Build and deploy 🎉

_Note: if you're deploying on other providers than firebase, or if you are using custom domain, add the domain into trusted domains in authentication settings in firebase console_

## Tools Used

- [Typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [Tailwind](https://tailwindcss.com/)

## Acknowledgment

- <a target="_blank" href="https://icons8.com/icon/hCvhdugyicF1/chat">Chat</a> & <a target="_blank" href="https://icons8.com/icon/c2egtkdAFOMH/user">User</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
- Fonts and icons from [Google fonts](https://fonts.google.com/)

## License

Distributed under the [MIT License](https://opensource.org/license/mit/). See [`LICENSE`](https://github.com/wajid-nv/pinglobe/blob/main/LICENSE) for more information.
