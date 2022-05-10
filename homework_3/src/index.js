const term = require( 'terminal-kit' ).terminal;

const items = [ 'Помочь' , 'Не помогать' ];

const options = {
	y: 1 ,
	style: term.inverse ,
	selectedStyle: term.dim.blue.bgGreen
} ;

term.slowTyping(
	'Что происходит?\nГде я оказался?\nЯ внутри этой железной коробки!!!\nААААААААААА!!!!!\n' ,
	{ flashStyle: term.brightWhite } ,
	function() {
        term.clear() ;

        term.singleLineMenu( items , options , function( error , response ) {
            term( '\n' ).eraseLineAfter.red(
                "Ваш выбор: %s\n" ,
                response.selectedText ,
            ) ;
            process.exit() ;
        } ) ;
    }
) ;







