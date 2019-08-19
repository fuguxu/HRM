export default "hello3777";

let input = document.createElement('input');
document.body.appendChild(input);
module.hot.dispose = function(){
    input.removeFrom(document.body);
}