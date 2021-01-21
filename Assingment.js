  //
  
  //First problem

  function kilometerToMeter(km) {
      let meter = km * 1000;
      if (km < 0) {

          return false;
      }
      return meter;
  }

  let result = kilometerToMeter(11);
  console.log(result);

  //2nd function budgetCalculator()

  function budgetCalculator(watch, phone, laptop) {
      let priceList = [(watch * 50), (phone * 100), (laptop * 500)];
      let total = priceList[0] + priceList[1] + priceList[2];
      if (total <= 0) {
          return false;
      }
      return total;
  }
  let totalPrice = budgetCalculator(0, 0, 1);
  console.log(totalPrice);

  // 3rd hotelCost

  function hotelCost(stay) {
      let price = 0;
      if (stay <= 10) {
          price = (stay * 100);
      } else if (stay <= 20) {
          let first10Days = (10 * 100);
          let remainDays = (stay - 10);
          let second10Days = (stay * 80);
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

  let totalCost = hotelCost(71);
  console.log(totalCost);

  // megaFriend

  function megaFriend(friendName) {
      let largerString = " ";
      for (let i = 0; i < friendName.length; i++) {

          if (friendName[i].length > largerString.length) {
              largerString = friendName[i];
          }
      }
      if (largerString <= "") {
          return false;
      }

      return largerString;

  }

  let friendName = ["Jamal Abedin", "Kamal Buira Khan", "Salman Cutia Rahman", "Balam Faoul Simger", "Hasina Prostitube Baby", "Khaleda Buddhi Khatun"]
  let largestNameString = megaFriend(friendName);
  console.log(largestNameString);