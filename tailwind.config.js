module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ],
      options: {
          whitelist: [
              "col-start-1", "col-start-2", "col-start-3"
          ]
      }
    },
    important: true,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }
