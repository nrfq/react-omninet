# Omninet

This project was created as a way to host my world-building notes in one consolidated place. I found myself
copy and pasting from the markdown-based Obsidian into Google Docs so I could share the notes with the players at the
campaign table. A local project parses and indexes my markdown files, and this project is a user interface to read and search
through them.

## Development

If you plan on borrowing or extending this project, you'll need to set up your own markdown files. The location of these
files will differ based on which `npm`command you're running.\
The project expects there to be no subdirectories in the markdown folder, since presumably the
 file structure should only be for use in your personal note-taking environment.

This project was bootstrapped with `create-react-app`, so you can find more information about what these scripts are doing
in the [Create React App docs](https://create-react-app.dev/docs/getting-started#scripts).

### `npm start`

Runs the app in the development mode, can be viewed at [http://localhost:3000](http://localhost:3000) in a browser.

Markdown files must be placed in `public/markdown`.

### `npm run build`

Builds the app for production to the `build` folder.\

Markdown files must be placed in a `markdown/` folder.
