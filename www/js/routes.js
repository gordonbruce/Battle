angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('principal', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/principal.html'
    })
      
    
      
        
    .state('signup', {
      url: '/page5',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('login', {
      url: '/page6',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('principal.personagem', {
      url: '/page7',
      views: {
        'tab2': {
          templateUrl: 'templates/personagem.html',
          controller: 'personagemCtrl'
        }
      }
    })
        
      
    
      
        
    .state('principal.missoes', {
      url: '/page8',
      views: {
        'tab3': {
          templateUrl: 'templates/missoes.html',
          controller: 'missoesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('principal.mapa', {
      url: '/page9',
      views: {
        'tab4': {
          templateUrl: 'templates/mapa.html',
          controller: 'mapaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('principal.jogo', {
      url: '/page10',
      views: {
        'tab1': {
          templateUrl: 'templates/jogo.html',
          controller: 'jogoCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page10');

});