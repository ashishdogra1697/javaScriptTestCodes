var nums=[0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1];  //random test array

    let count = 0;
    let realCount = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] == 0) {
            realCount = 0;
        } 
        else {
            realCount++;
        }
        if (realCount > count) {
            count = realCount;
        }
    };
    console.log(count);
