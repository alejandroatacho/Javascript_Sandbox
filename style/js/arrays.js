var ourArray = ["Alex", 5, "Jon", 6, "Michael", 7];
i = 0;


while (i < ourArray.length) {
    if (i < ourArray.length)
    {
    console.log(ourArray[i]);
        i++;
            if (i >= ourArray.length)
                    {
                    console.log("The last item in the array is " + ourArray[i-1]);
        }
        
    }

else { 
    console.log("You have reached the end of the array");
    }

    }