const path = require ('path')

module.exports = {
    // The entry point file described above
    mode:"development",
    entry: './src/main.js',
    // The location of the build folder described above
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules'] ,// Assuming that your files are inside the src dir
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
   
    watch:true
  };