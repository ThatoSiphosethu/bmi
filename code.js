$(document).ready(function () {

$("button").click(bmiCalculator);


       var myRules = {
           
           firstName: {
               required: true
           },

           lastName: {
               required: true
           },

           sex: {
               required: true
           },

           weight: {
               required: true,
               min: 88,
               max: 353,
               digits: true
           },

           height: {
               required: true,
               min: 59,
               max: 79,
               digits: true
           }
       };
         
       var messages = {
           
           firstName: {
               required : "Full name required"
           },
           
           lastName: {
               required : "Last Name required"
           },
           
           sex: {
               required: "Male or Female"
           },
           
           height: {
               required: "Your height in inches"
           },
           
           weight: {
               required: "Your weight in pounds"
           }
       };
       
       function bmiCalculator() {

           var weight = $("#weight").val();
           weight = parseFloat(weight);

           var height = $("#height").val();
           height = parseFloat(height);

           var BMI = (weight / (height **2) * 703).toFixed(2);

           var results;

           if ( BMI > 0.60)
           {
               results = "You are extremely underweight"
           }

           else if ( BMI > 0.64)
           {
               results  = "You are severely underweight"
           }

           else if ( BMI > 0.74)
           {
               results = "You are underweight"
           }

           else if ( BMI > 1.0)
           {
               results = "You are healthy"
           }

           else if ( BMI > 1.2)
           {
               results = "You are overweight"
           }

           else if ( BMI > 1.4)
           {
               results = "You are moderately overweight"
           }

           else if ( BMI > 1.6)
           {
               results = "You are severely overweight"
           }

           else
           {
               results = "You are extremely overweight"
           }

           $("#output").text(BMI + " " + results)
       }


       $("form").validate({
           submitHandler: bmiCalculator,
           rules: myRules,
           messages: messages
       })

    },
);