const welcomeMsg = `


_______                                                                __        __     __         __ __       __            __                       
/       \                                                              /  |      /  |   /  |       /  /  |     /  |          /  |                      
$$$$$$$  |______   _______ _______ __   __   __  ______   ______   ____$$ |      $$ |   $$ |______ $$ $$/  ____$$ | ______  _$$ |_    ______   ______  
$$ |__$$ /      \ /       /       /  | /  | /  |/      \ /      \ /    $$ |      $$ |   $$ /      \$$ /  |/    $$ |/      \/ $$   |  /      \ /      \ 
$$    $$/$$$$$$  /$$$$$$$/$$$$$$$/$$ | $$ | $$ /$$$$$$  /$$$$$$  /$$$$$$$ |      $$  \ /$$/$$$$$$  $$ $$ /$$$$$$$ |$$$$$$  $$$$$$/  /$$$$$$  /$$$$$$  |
$$$$$$$/ /    $$ $$      $$      \$$ | $$ | $$ $$ |  $$ $$ |  $$/$$ |  $$ |       $$  /$$/ /    $$ $$ $$ $$ |  $$ |/    $$ | $$ | __$$ |  $$ $$ |  $$/ 
$$ |    /$$$$$$$ |$$$$$$  $$$$$$  $$ \_$$ \_$$ $$ \__$$ $$ |     $$ \__$$ |        $$ $$/ /$$$$$$$ $$ $$ $$ \__$$ /$$$$$$$ | $$ |/  $$ \__$$ $$ |      
$$ |    $$    $$ /     $$/     $$/$$   $$   $$/$$    $$/$$ |     $$    $$ |         $$$/  $$    $$ $$ $$ $$    $$ $$    $$ | $$  $$/$$    $$/$$ |      
$$/      $$$$$$$/$$$$$$$/$$$$$$$/  $$$$$/$$$$/  $$$$$$/ $$/       $$$$$$$/           $/    $$$$$$$/$$/$$/ $$$$$$$/ $$$$$$$/   $$$$/  $$$$$$/ $$/       
                                                                                                                                                       
                                                                                                                                                       
                                                                                                                                                       
                                                                                                                                                 
`

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(welcomeMsg)
console.log("NOTE: Requires '!', '?', or '#'as FIRST character of password")

reader.question("Please enter in a password to validate:", function(input){
    for(let i = 0; i < input.length; i++){
        if(input.length >= 10){
            if(input[0] === "!" || input[0] === "?" || input[0] === "#")
            console.log("Success - Password is at least 10 characters")
            break;
        }else{
            console.log("Fail - make it longer! (TWSS)")
            break;
        }
    }
   reader.close
});