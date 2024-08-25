let isSeedRunnable = false;

const updateSeedRunnable = value => {

    if(typeof value !== 'boolean'){
        console.log("to enabel seed boolean is required");
    }

    if(typeof value === "boolean") isSeedRunnable = true;

    if(isSeedRunnable){
        console.log("hello");
        
    }
}

module.exports = updateSeedRunnable;