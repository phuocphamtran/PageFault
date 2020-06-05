function inputArray(input) {
    queue = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] != ' ' && queue[i] != ',') {
            queue.push(parseInt(input[i]));
        }
    }
    return queue;
}

function checkExsit(queueInput, frameSlot, frame) {
    //check exsit
    for (let j = 0; j < frameSlot; j++) {
        if (frame[j] === queueInput) {
            flag1 = flag2 = 1;
            return j; //duplicate
        }
    }
    return false; //no duplicate
}

function optimal(frameSlot, queue) {
    let frame = [];
    for (let i = 0; i < queue.length; i++) {
        flag1 = flag2 = 0;
        Exsit = checkExsit(queue[i], frameSlot, frame);
        if (flag1 == 0) {
            for (j = 0; j < frameSlot; j++) {
                if (frame[j] = -1) {
                    frame[j] = queueInput[i];
                    flag2 = 1;
                    return j;
                }

            }

            if (flag2 == 0) {
                flag3 = 0;
                for (j = 0; j < frameSlot; j++) {
						temp[j]==-1;
						for(k=i+1;k<queue.length;k++){
							if(frameSlot[j]==queueInput[k]){
								temp[j]=k;
								reuturn false;
							}
						}
                }
				
				if(flag3==0){
					max=temp[0];
					for(j=1;j<queue.length;j++){
						if(temp[j] > max){
                        max = temp[j];
						}
					}
				}
				

            }
        }


    }
}
vfc
}

function main() {
    let input = '7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1';
    let frameSlot = 3;
    let queue = inputArray(input);
    optimal(frameSlot, queue);
}
main();