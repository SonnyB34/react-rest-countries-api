# Reflections

## Development

I started by referencing my prior Countries API project that I built with Vanilla Javascript, HTML and CSS and rebuilt it with React and Vite. I broke it into components (Header, Filters, CountryCard and CountryDetails) and kept the main data and state in App. The biggest change was no longer updating the DOM by hand. Instead of calling innerHTML and toggling display, I stored the search text, region, and selected country in state and let React re-render the screen.

## Challenges

One challenge I faced was the API key. I moved it into a .env file then hit a 403 and 401 error and later a CORS error, because the API would not accept requests from my localhost. I also made some React mistakes like mismatched prop names and a variable used outside .map().

## Solutions

I added a Vite proxy that sends requests through the dev server and adds the key there. Which I spent some time googling the solution. I added a serverless function on Vercel that does the same, so the key stays on the server and never reaches the browser. I fixed my mismatched prop names and kept variables inside the .map() that creates them.

## Imporovements

I would add React Router to improve so each country has its own link. I would also add loading spinners and clickable border countries.
