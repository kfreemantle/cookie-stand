'use strict';

// Global variables



// Average sales calculation function goes here.  I'm sure there's a better way to get the Math methods with ceiling and floor but I can't figure out how to do it rignt now.


function calculateSalesAverages(store){
  let avgSalesEst = [];
    for (i=0; i<16; i++) {
      avgSalesEst[i] = store.avgSales * (Math.random(store.minCustomer, store.maxCustomer))
    }
    
    return avgSalesEst;
}

let storeSeattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgSales: 6.3,
  
  avgSalesEst: function(){
    return calculateSalesAverages(this);
  }
}

console.log(storeSeattle.avgSalesEst())

let storeTokyo = {
  name: 'Tokyo',
  minCustomer: 2,
  maxCustomer: 24,
  avgSales: 1.2,
  
  avgSalesEst: function(){
    return calculateSalesAverages(this);
  }
}

console.log(storeTokyo.avgSalesEst())

let storeDubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgSales: 3.7,
  
  avgSalesEst: function(){
    return calculateSalesAverages(this);
  }
}

console.log(storeDubai.avgSalesEst())

let storeParis = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgSales: 2.3,
  
  avgSalesEst: function(){
    return calculateSalesAverages(this);
  }
}

console.log(storeParis.avgSalesEst())

let storeLima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgSales: 4.6,
  
  avgSalesEst: function(){
    return calculateSalesAverages(this);
  }
}

console.log(storeLima.avgSalesEst())