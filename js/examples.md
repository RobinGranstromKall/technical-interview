1. What does the code do?

    ```js
    const list = [
        "1",
        "4",
        "8",
        "12",
    ];
    
    for (i = 0; i < 8; i++) {
        console.log(list[i * 2])
    }
    ```

2. Desribe this code and what would change if `flag` is one of these:  
   true,  
   false,  
   undefined or  
   0

   `list` is an array of objects
    ````js
    const found = flag ? list.find(item=> item.company === "Axakon") :
    list.filter(item=> item.company ==="Axakon");
    ````

3. Try to improve this code as much as you can

    ```js
    
    const state = {
        users: [
            {
                firstName: "Peter",
                age: 32,
            },
            {
                firstName: "Emma",
                age: 35,
            },
            {
                firstName: "Klas",
                age: 20,
            }
        ]
    }
    
    get_average_age(Object.assign([], state.users))
    
    const get_average_age = (arr) => {
        if (!arr || !arr.length) return;
   
        const ages = [];
        for (var i = 0; i < arr.length; i++) {
            ages.push(arr[i].age)
        }
        let totalAge;
        for (var i = 0; i < ages.length; i++) {
            totalAge += ages[i];
        }
        return totalAge / ages.length;
    }
    ```


5. Fibbonaccis sequense  
    You are supposed to make a function in whatever language you please (real or pseudo) that presents the 10 first numbers in the fibbonacci sequense.  
    Whats important here is not the syntax but rather your process and how you tackle the issue

   [1,1,3,5,8,13,21,..]


6. Bikeshop

   You have been assigned the task to design a web application where users can order bicycles.

   The user should be able to do the following things:
    - Pick design of the bicycle (gears, color, size etc.)
    - Order the bicycle (choose delivery, payment methods, etc.)
    - Get information regarding delivery (status, pickup confirmation etc.)
    - A forum for users to discuss everything related to bicycles
    - CMS tool to administrate the web application
    - Other things

   Of course, we only want a rough draft of how you would approach this task. For example, consider the following:
    - What tech stack will be used for Frontend and Backend respectively?
    - Roughly, what will the application look like?
    - Security is important when handling payment information. How will you ensure security for the users?
    - What would your ideal team look like? How would you work and what role would you have?