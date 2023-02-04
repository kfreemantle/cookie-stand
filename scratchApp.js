`use strict`;

// In this .js we're going to mob code lab 06. 

// Global Variable
let hours = ['0600', '0700', '0800']


// What do we need?
// We need to set hour hours.  We'll use an array type.
// 14 hours from 0600-2000, created as an array

// Create separate JS object literals that can generate sales data and output to sales.HTML
// So we need to make an object, and throw our known values in there. 
// So we need min, max, average, and an empty array to store our values in.

let storeSeattle = {
  custMin: 23,
  custMax: 65,
  avgCustSales: 6.3,
  salesByHourArray: [],
  dailyTotal = 0,

  calcCustomerNumbers: function() {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin); // The maximum is inclusive and the minimum is inclusive. This code was copypasta'd from MDN.
    },
    calcCookiesPerHour: function() {
      for (i=0; i< hours.length; i++) {
        let customers = this.calcCustomerNumbers();
        let cookiesSoldThisHour = Math.ceil(customers * this.avgCustSales);
        this.salesByHourArray.push(cookiesSoldThisHour);
        this.dailyTotal += cookiesSoldThisHour;
      }
      console.log(this.salesByHourArray);
    }
    renderList: function () {
      this.calcCookiesPerHour();
      // this is where we need a method to render cookie sales as a <ul>
      let salesContainer = document.getElementById('seattleSales');  // this is the window into the DOM

      
      // We need to make a new element
      let ulElement = document.createElement('ul');

      // Give it content
      
      // Append to the Document Object Model (DOM)
      salesContainer.appendChild(ulElement);
      
      for (i=0; i< hours.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;
        
        
        
      // Make a new element
      // Give it content
      // Append it to the DOM
      ulElement.appendChild(liElement);

        let totalLiElement = document.createElement(`li`);
        totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;

    }
  }
}


// Store the min/max hourly customers, and the average cookies per customer, in object properties.
// Use a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// Display the values of each array as unordered lists in the browser.
// So we need a way to render our cookie-sales as a <ul>
// Calculating the sum of these hourly totals; your output for each location should look like this:
// So that could be a sum total displayed at the end of the location.

