weightInKg=72
heightInCm=165

heightInMeter=heightInCm/100
BMI=weightInKg/(heightInMeter)**2


if (BMI<19){
    console.log("underweight");
}

else if(BMI<25){
    console.log("healthy weight");
}

else if(BMI<29){
    console.log("over weight");
}