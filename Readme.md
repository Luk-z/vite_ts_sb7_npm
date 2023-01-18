# Vite + Typescript + Storybook beta v7 + npm

Environment variables are not working with storybook v7 beta.

## Install

```shell
git clone https://github.com/Luk-z/vite_ts_sb7_npm.git

cd vite_ts_sb7_npm

nvm use
# or nvm i

npm install

npm run storybook
```

Open browser at http://localhost:6006/, in the dev tools console search for `process.env.STORYBOOK_TEST =` info log, `STORYBOOK_TEST` is undefined but should be `abcde`.
