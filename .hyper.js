// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // Choose either "stable" for receiving highly polished,
    // or "canary" for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: '"SF Mono", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(255,255,255,0)', // 'rgba(248,28,229,0.8)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // set to true for blinking cursor
    cursorBlink: false, // I tried to set it to `true`, but when I did, I couldn't see the cursor. After waiting a bit, it seems caused by the blinking cycle starting at blinked-out and restarting at each cursor position change.

    // color of the text
    foregroundColor: 'rgb(255,255,255)', // '#fff',

    // terminal background color
    backgroundColor: 'rgb(0,0,0)', // '#000',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: `
	.cursor-node {
		background: rgba(0,255,255,1);
		//background: -moz-linear-gradient(45deg, rgba(0,255,255,1) 0%, rgba(0,0,255,1) 100%);
		//background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(0,255,255,1)), color-stop(100%, rgba(0,0,255,1)));
		//background: -webkit-linear-gradient(45deg, rgba(0,255,255,1) 0%, rgba(0,0,255,1) 100%);
		//background: -o-linear-gradient(45deg, rgba(0,255,255,1) 0%, rgba(0,0,255,1) 100%);
		//background: -ms-linear-gradient(45deg, rgba(0,255,255,1) 0%, rgba(0,0,255,1) 100%);
		background: linear-gradient(45deg, rgba(0,255,255,1) 0%, rgba(0,0,255,1) 100%);
		//filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffff', endColorstr='#0000ff', GradientType=1 );
	
		//-webkit-background-clip: text;
		background-clip: text;
	
		//-webkit-text-fill-color: transparent;
		color: rgba(0,0,0,0);
	
		//-moz-text-stroke: 1px white;
		//-webkit-text-stroke: 1px white;
		//-o-text-stroke: 1px white;
		//-ms-text-stroke: 1px white;
		text-stroke: 1px rgba(255,255,255,1);
		text-shadow: -1px -1px 0 rgba(255,255,255,1), 1px -1px 0 rgba(255,255,255,1), -1px 1px 0 rgba(255,255,255,1), 1px 1px 0 rgba(255,255,255,1);
	}

	`,

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '0 0 0 4px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // Powershell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
    //hyperBorder: {
    //  borderColors: ['#fc1da7', '#fba506'],
    //  borderWidth: '2.69%', // (i) Icon dimensions: 512px^2; Icon pict width stroke incl: 446px; Icon pict stroke width or height: 12px; 12 / 446 * 100 = 2.6905829596412556
    //  borderAngle: '45deg'
    //}
 },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    //"hyperpower",
    //'hyperyellow',
    'hyperborder',
    'hyper-alt-click',
    //'hyperterm-crosshair',
    'hyperterm-cursor',
    //'hyperterm-final-say',
	//'hypercwd',
	//'hyper-search',
	//'hyper-pane',
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  }
};
