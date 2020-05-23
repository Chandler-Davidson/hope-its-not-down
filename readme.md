# Hope its not down

I have apps deployed on various systems. Some I host on my own hardware, some are hosted by 3rd parties. I wanted a way to simply check if they're still up.

## How it works

1. You enter a website's url into the text box, 
2. The site makes a request for the entered url's favicon
   1. Repeat every few seconds
3. Did we find the favicon ? Its up : Its down.

It also uses session storage to remember what sites you're interested in.