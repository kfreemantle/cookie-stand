'use strict';

// Global variables

let hours = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];


let salesContainer = document.getElementById('salesList');


// Average sales calculation function goes here.  It's accessible by all store objects, so that store objects only have to muck about with store-related variables.  It feels cleaner.


function calculateSalesAverages(avg, min, max){   // we set parameters for average, min and max, since we'll need all those to calculate a average per hour.  The loop runs for the length of the index, starting from 0, counting up by one.
  let avgSalesEst = [];
    for (let i = 0; i < hours.length ; i++) {
      avgSalesEst[i] = Math.floor(avg * (Math.random() * (max - min + 1) + min));   // math.floor rounds down to the nearest whole integer, which is useful for clean estimates of cookie consumption.  This code was copypasta'd from the MDN page, and tbh I'm still not fully grokking it.  For each iteration of this loop, it sets the value of avgSalesEstimate at each index to be the result of the avgSalesEst with min max and avg values plugged in.  Since we're going to use the calculateSalesAverages function inside each object, we're going to make sure to plug in this.minCustomer, this.maxCustomer and this.avgSales as the arguments.
    }
    
    return avgSalesEst;
}


// STOREFRONT OBJECTS


// Seattle

let storeSeattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgSales: 6.3,
  hourlySalesArray: [],
  renderList: function () {
    this.avgSalesEst();
    let ul = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      
      li.textContent = `${hours[i]}: ${this.hourlySalesArray[i]}`;
      ul.appendChild(li);
    }
    salesContainer.appendChild(ul);
  },
  
  avgSalesEst: function(){
    this.hourlySalesArray = calculateSalesAverages(this.avgSales, this.minCustomer, this.maxCustomer);
  }
  
}

console.log(storeSeattle);
storeSeattle.renderList();

// Tokyo

let storeTokyo = {
  name: 'Tokyo',
  minCustomer: 2,
  maxCustomer: 24,
  avgSales: 1.2,
  hourlySalesArray: [],
  
  renderList: function () {
    this.avgSalesEst();
    let ul = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      
      li.textContent = `${hours[i]}: ${this.hourlySalesArray[i]}`;
      ul.appendChild(li);
    }
    salesContainer.appendChild(ul);
  },
  
  avgSalesEst: function(){
    this.hourlySalesArray = calculateSalesAverages(this.avgSales, this.minCustomer, this.maxCustomer);
  }
  
}

console.log(storeTokyo);
storeTokyo.renderList();


// Dubai

let storeDubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgSales: 3.7,
  hourlySalesArray: [],
  
  renderList: function () {
    this.avgSalesEst();
    let ul = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      
      li.textContent = `${hours[i]}: ${this.hourlySalesArray[i]}`;
      ul.appendChild(li);
    }
    salesContainer.appendChild(ul);
  },
  
  avgSalesEst: function(){
    this.hourlySalesArray = calculateSalesAverages(this.avgSales, this.minCustomer, this.maxCustomer);
  }
  
}

console.log(storeDubai);
storeDubai.renderList();


// Paris

let storeParis = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgSales: 2.3,
  hourlySalesArray: [],
  
  renderList: function () {
    this.avgSalesEst();
    let ul = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      
      li.textContent = `${hours[i]}: ${this.hourlySalesArray[i]}`;
      ul.appendChild(li);
    }
    salesContainer.appendChild(ul);
  },
  
  avgSalesEst: function(){
    this.hourlySalesArray = calculateSalesAverages(this.avgSales, this.minCustomer, this.maxCustomer);
  }
  
}

console.log(storeParis);
storeParis.renderList();


// Lima

let storeLima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgSales: 4.6,
  hourlySalesArray: [],
  
  renderList: function () {
    this.avgSalesEst();
    let ul = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      
      li.textContent = `${hours[i]}: ${this.hourlySalesArray[i]}`;
      ul.appendChild(li);
    }
    salesContainer.appendChild(ul);
  },
  
  avgSalesEst: function(){
    this.hourlySalesArray = calculateSalesAverages(this.avgSales, this.minCustomer, this.maxCustomer);
  }
  
}

console.log(storeLima);
storeLima.renderList();