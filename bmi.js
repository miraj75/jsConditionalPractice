//BMI Calculator and Health Category

let weight =55;
let height = 1.6;

const BMI = weight / (height* height)
if(BMI< 18.5){
    console.log('you are underweight');
}else if(BMI >= 18.5 & BMI <=24.9){
    console.log('you are normal.');

}else if(BMI >=25 & BMI <= 29.9){
    console.log('you are overweight');
}else{
    console.log(' you are obese');
}