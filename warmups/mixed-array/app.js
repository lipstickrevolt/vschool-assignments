var array = ["cat", [1, 2, 3], "dog", 1, 4, {
    name: "john"
}, ["pie", "cake"]];

function isString(array) {
    var output = {
        strings: [],
        arrays: [],
        objects: [],
        numbers: [],
        boolean: []
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            output.strings.push(array[i])
        } else if (typeof array[i] === "numbers") {
            output.numbers.push(array[i])
        } else if (typeof array[i] === "object"){
            output.objects.push(array[i])
        }
            else if(typeof array[i] === "boolean"){
                output.boolean.push(array[i])
            }
        }
    console.log(output);
    }



isString(array);