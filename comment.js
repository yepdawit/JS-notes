// this is a single line comment

/*
this is a multi line comment
you can have as many lines as you wanr
make sure to close it 

*/


/* you can also use it in a single line  */


function add(x,y) {
    console.log(x); //  comment can be added on this side of an expressions

    // but it cant be on this side >>>>>>>>>>>>>> console.log(y)

    return x + /* this comment can be an exoression */ y;
}

add(42,5);