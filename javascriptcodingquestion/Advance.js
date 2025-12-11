import { resolve } from "path";


// Promises
function myPromiseall(promises){
    return new Promise((resolve,reject)=>{
        let result=[];
       let completed=0;
        promises.forEach((promise,index) => {

         Promise.resolve(promise).then((value)=>{
            result[index]=value
            completed++;
            if(completed===promises.length){
                resolve(result)
            }
         }).catch((error)=>{
            reject(error);
         })
    });
    })
    
    
}
const p1= Promise.resolve("A");
const p2=new Promise(res=>setTimeout(()=>{
    res(2)
},1000))
const p3=3;
const p4= Promise.reject("something went wronf")
myPromiseall([p1, p2, p3,p4]).then(console.log).catch(console.error);