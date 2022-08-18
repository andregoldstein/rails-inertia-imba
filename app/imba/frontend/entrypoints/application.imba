import { createInertiaApp } from 'imba-inertia-adapter'

console.log "Hello from Imba"

createInertiaApp
	resolve: do(name) name
	setup: do({ el, App, props })
		imba.mount <{App} props=props>