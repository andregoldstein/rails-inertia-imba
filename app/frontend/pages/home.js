const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol();
import {styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, defineTag as imba_defineTag} from 'imba'/*$path$*/;

/*body*/
class HomePageComponent extends imba_Component {
	
	render(){
		var $1, $2, $3, $5 = this._ns_ || '', $6;
		
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		$2 || ($6=imba_createElement('h1',$1,`${$5}`,"Homepage"));
		;
		$1[$afterReconcile$]($3);
		return $1;
		
	}
}; imba_defineTag('home-page',HomePageComponent,{});

imba_styles.register('nmnvaq',`
home-page { display:block; }
`);