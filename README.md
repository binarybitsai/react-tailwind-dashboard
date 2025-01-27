# Car Scrapper

A React-based web application for managing and analyzing car data. Built with modern frontend technologies, Car Scrapper provides comprehensive features including user authentication, interactive dashboards, and advanced data visualization capabilities.

## Features
User Authentication
The application includes a login page where users can sign in to access the dashboard.

Dashboard
The dashboard provides an overview of various car-related statistics, including:

- Welcome Card: A personalized welcome message.
- Contact Card: Displays company contacts.
- Total Cars: Shows the total number of cars, car models, and cars scraped.
- Scrape Car: Displays current scrape car statistics.
- New Car: Shows new cars available with a bar chart.
- Car Invoice: Lists car invoices.
- Related Car: Displays related cars.
- Total Countries: Shows top production countries.
- Car Founder: Lists top car founders.
- Circular Progress New Car: Displays a circular progress bar for new cars.
- Data Visualization : The application uses Chart.js and Recharts for data visualization, including bar charts, pie charts, and circular progress bars.


### User Authentication
- Secure login system
- Protected routes and authenticated sessions

### Interactive Dashboard
- Personalized welcome interface
- Company contact information
- Comprehensive car statistics overview
- Real-time scraping status
- Invoice management system

### Data Visualization
- Dynamic charts and graphs using Chart.js and Recharts
- Statistical analysis of car data
- Interactive data exploration tools
- Circular progress indicators
- Geographic distribution analysis

### Analytics
- Total car inventory tracking
- Model-wise categorization
- Production country statistics
- Founder information
- New car availability metrics

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Nidhishah67/carscrapper.git
cd carscrapper
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## Available Scripts

- `npm start` - Runs the app in development mode (http://localhost:3000)
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Creates a production build in the `build` folder
- `npm run eject` - Ejects from Create React App configuration (one-way operation)

## Project Structure

```
carscrapper/
├── package-lock.json
├── package.json
├── public/
│    ├── favicon.ico
│    ├── index.html
│    ├── logo192.png
│    ├── logo512.png
│    ├── manifest.json
│    └── robots.txt
├── README.md
├── src/
│    ├── App.css
│    ├── App.js
│    ├── App.test.js
│    ├── assets/
│    │    ├── dashboard.png
│    │    ├── france.png
│    │    ├── germany.png
│    │    ├── login.png
│    │    ├── logo.png
│    │    ├── profile.png
│    │    ├── south-korea.png
│    │    ├── united-kingdom.png
│    │    └── united-states.png
│    ├── components/
│    │    ├── dashboard/
│    │    │    ├── carfounder.js
│    │    │    ├── carinvoice.js
│    │    │    ├── circularprogressnewcar.js
│    │    │    ├── contactcard.js
│    │    │    ├── newcar.js
│    │    │    ├── relatedcar.js
│    │    │    ├── scrapecar.js
│    │    │    ├── totalcars.js
│    │    │    ├── totalcountries.js
│    │    │    └── welcomecard.js
│    │    ├── footer.js
│    │    ├── navbar.js
│    │    ├── profile/
│    │    │    ├── companies.js
│    │    │    └── profiledetail.js
│    │    ├── profile.js
│    │    ├── scrapingjobs/
│    │    │    ├── scraping.json
│    │    │    └── scrapingtable.js
│    │    ├── sidebar.js
│    │    └── usernavbar.js
│    ├── index.css
│    ├── index.js
│    ├── logo.svg
│    └── pages/
│         ├── dashboard.js
│         ├── login.js
│         ├── main.js
│         └── scrapingjobs.js
└── tailwind.config.js
```

### Directory Structure Overview

- `/public` - Static files and HTML template
- `/src` - Application source code
  - `/assets` - Images and static resources
  - `/components` - Reusable React components
    - `/dashboard` - Dashboard-specific components
    - `/profile` - User profile components
    - `/scrapingjobs` - Scraping job management components
  - `/pages` - Main application pages/routes
  - `App.js` - Root application component

## Dependencies

Core:
- React
- React Router DOM
- Tailwind CSS

Data Visualization:
- Chart.js
- Recharts

Utilities:
- React Icons
- PapaParse
- Date-fns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
