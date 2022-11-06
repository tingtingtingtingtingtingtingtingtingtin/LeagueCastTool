class placeholder {
    constructor(name){
        this.name=name;
    }
}
var myVector = [];
a1 = new placeholder("first");
a2 = new placeholder("second");
a3 = new placeholder("third");
a4 = new placeholder("fourth");
a5 = new placeholder("fifth");
myVector.push(a1);
myVector.push(a2);
myVector.push(a3);
myVector.push(a4);
myVector.push(a5);

a6 = new placeholder("sixth");
print(myVector);
delIndex(myVector,1);
addPos(myVector,a6,1);
print(myVector);

function delIndex(vector, index){
    for(let i=index;i<vector.length-1;i++){
        vector[i]=vector[i+1];
    }
    vector.pop;
}

function del(vector,deleteName){
    let delIndex=-1;
    for(let i=0;i<vector.length;i++){
        if(vector[i].name=deleteName){
            delIndex=i;
        }
    }
    if(delIndex!=-1){
        for(let i=delIndex;i<vector.length-1;i++){
            vector[i]=vector[i+1];      
        }
        vector.pop;
    }
    else{
        alert("Error\nNo such champion found.");
    }
}

function addPos(vector,addThing,index){ //adds something to the vector at the specified index
    //probably kinda fucked ngl
    vector.push(addThing);
    let temp=vector[index];
    vector[index]=addThing;
    for(let i=index+1;i<vector.size;i++){
        swap(addThing,vector[i]);
    }
    
}

function replace(vector,replaceThing,index){
    vector[index]=replaceThing;
}

function swap(thing1,thing2){
    let temp;
    temp=thing1;
    thing1=thing2;
    thing2=temp;
}

function print(vector){
    for(let i=0;i<vector.length;i++){
        console.log(vector[i].name);
    }
}