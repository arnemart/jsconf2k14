it:
	@node_modules/.bin/slid slides.md

happen:
	@clear

kill:
	-@pkill -f watchify

reset: kill
	-@rm **/built.js
	-@git checkout 1/demo.js
	-@git checkout 2/demo.js
	-@rm ~/Library/Application\ Support/Google/Chrome/Default/Local\ Storage/*localhost*
	-@killall "Google Chrome"
	-@sleep 2
	-@open -a Google\ Chrome "http://localhost/webreb2k14/2/"
	-@open -a Google\ Chrome "http://localhost/webreb2k14/1/"

demo1: kill
	@node_modules/.bin/watchify -dvo 1/built.js 1/demo.js

demo1_done: kill
	@node_modules/.bin/watchify -dvo 1/built.js 1/done.js

demo2: kill
	@node_modules/.bin/watchify -dvo 2/built.js 2/demo.js

demo2_done: kill
	@node_modules/.bin/watchify -dvo 2/built.js 2/done.js



.PHONY: it happen kill reset demo1 demo1_done demo2 demo2_done
