module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ],
      options: {
          safelist: [/col-start-\d/]
      }
    },
    important: true,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }
