module.exports = function(grunt) {
    
  grunt.initConfig({

    //AÇÕES
    uglify: {
      'build/js/scripts.js' : ['src/js/gibeeLib.js','src/js/gibeeApp.js']
    },

    sass : {
      'build/css/estilo.css' : 'src/css/main.scss'
    },

    cssmin : {
      'build/css/estilo.css' : 'build/css/estilo.css'
    },

    htmlmin: { 
      dist: {          
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/index.php' : 'src/index.php',
          'build/topo.php' : 'src/topo.php',
          'build/rodape.php' : 'src/rodape.php'
        }
      }
    },

    watch : {
      dist : {
        files : [
          'src/*',
          'src/**/*',
          'src/js/**/*',
          'src/css/**/*'
        ],
        tasks : [ 'uglify' , 'sass' , 'htmlmin' , 'cssmin' ]
      }
    }
    //fim - ACOES

  });
 
  // Plugins
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-htmlmin' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Tarefas
  grunt.registerTask( 'default', [ 'uglify' , 'sass' , 'htmlmin' , 'cssmin' ] );
  grunt.registerTask( 'w', [ 'watch' ] );

};  