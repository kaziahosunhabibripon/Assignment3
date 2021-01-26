  //https://github.com/kaziahosunhabibripon/Assignment3

  //First problem

  function kilometerToMeter(km) {
      var meter = km * 1000;
      if (km < 0) {
          return false;
      }
      return meter;
  }

  var result = kilometerToMeter();


  //2nd function budgetCalculator()

  function budgetCalculator(watch, phone, laptop) {
      let priceList = [(watch * 50), (phone * 100), (laptop * 500)];
      let total = priceList[0] + priceList[1] + priceList[2];
      if ((watch < 0) || (phone < 0) || (laptop < 0)) {
          return false;
      }
      return total;
  }
  let totalPrice = budgetCalculator();


  // 3rd hotelCost

  function hotelCost(stay) {
      let price = 0;
      if (stay <= 10) {
          price = (stay * 100);
      } else if (stay <= 20) {
          let first10Days = (10 * 100);
          let remainDays = (stay - 10);
          let second10Days = (remainDays * 80);
          price = (first10Days + second10Days);
      } else {
          let first10Days = (10 * 100);
          let second10Days = (10 * 80);
          let remainDays = (stay - 20);
          let third10Days = (remainDays * 50);
          price = (first10Days + second10Days + third10Days);
      }
      if (stay <= 0) {
          return false;
      }
      return price;
  }

  let totalCost = hotelCost();


  // megaFriend

  function megaFriend(friendName) {
      let largerString = " ";
      for (let i = 0; i < friendName.length; i++) {

          if (friendName[i].length > largerString.length) {
              largerString = friendName[i];
          }
      }
      if (friendName == 0) {
          return false;
      }

      return largerString;

  }

  let friendName = ["Jamal Abedin", "Kamal Buira Khan", "Salman Cutia Rahman", "Balam Faoul Simger", "Hasina Prostitube Baby", "Khaleda Buddhi Khatun"];
  let largestNameString = megaFriend(friendName);