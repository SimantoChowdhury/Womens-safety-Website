const ctx=document.getElementById('barChart').getContext('2d');
const barchart=new Chart(ctx,{
    type:'bar',
    data:{
        // labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        labels:['Chattogram(city)','khagrachari','Comilla','Feni','Noakhali','Chandpur','Lakshmipur','Brahmanbaria','Coxs Bazar','Rangamati','Bandarban'],
        datasets:[{
            label:'# Raping Rate',
            data:[27,3,9,6,5.5,4,3.5,3.5,13,2,5],
            backgroundColor:[
                'rgb(255, 0, 55)',
                'rgba(5, 151, 249, 1)',
                'rgb(255, 183, 0)',
                'rgb(0, 255, 255)',
                'rgb(85, 0, 255)',
                'rgb(255, 128, 0)'
            ],
            borderColor:[
                'rgb(247, 106, 136)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
 });

 const ctx1=document.getElementById('barChart1').getContext('2d');
const barchart1=new Chart(ctx1,{
    type:'bar',
    data:{
        // labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        labels:['Rajshahi District','Pabna','Naogaon','Bogura','Natore','Chapainawabganj','Kushtia','Joypurhat','Sirajganj'],
        datasets:[{
            label:'# Raping Rate',
            data:[25,10,12,15,4,6,2,5,4],
            backgroundColor:[
                'rgb(255, 0, 55)',
                'rgb(5, 151, 249)',
                'rgb(255, 183, 0)',
                'rgb(0, 255, 255)',
                'rgb(85, 0, 255)',
                'rgb(255, 128, 0)'
            ],
            borderColor:[
                'rgb(247, 106, 136)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
 });


 const ctx2=document.getElementById('barChart2').getContext('2d');
const barchart2=new Chart(ctx2,{
    type:'bar',
    data:{

        labels:['Khulna District','Chuadanga','Satkhira','Bagerhat','Jashore','Meherpur','Narail','Jhenidah','Magura'],
        datasets:[{
            label:'# Raping Rate',
            data:[25,5,12,8,20,5,2,7,3],
            backgroundColor:[
                'rgb(255, 0, 55)',
                'rgb(5, 151, 249)',
                'rgb(255, 183, 0)',
                'rgb(0, 255, 255)',
                'rgb(85, 0, 255)',
                'rgb(255, 128, 0)'
            ],
            borderColor:[
                'rgb(247, 106, 136)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
 });




 const ctx3=document.getElementById('barChart3').getContext('2d');
const barchart3=new Chart(ctx3,{
    type:'bar',
    data:{
   
        labels:['Barisal District','Barisal','Patuakhali','Jhalokathi','Bhola',],
        datasets:[{
            label:'# Raping Rate',
            data:[20,5,12,7,10,4],
            backgroundColor:[
                'rgb(255, 0, 55)',
                'rgb(5, 151, 249)',
                'rgb(255, 183, 0)',
                'rgb(0, 255, 255)',
                'rgb(85, 0, 255)',
                'rgb(255, 128, 0)'
            ],
            borderColor:[
                'rgb(247, 106, 136)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
 });



 const ctx4=document.getElementById('barChart4').getContext('2d');
const barchart4=new Chart(ctx4,{
    type:'bar',
    data:{
        labels:['Sylhet District','Kishoreganj','Moulvibazar','Netrokona','Sunamganj','Habiganj'],
        datasets:[{
            label:'# Raping Rate',
            data:[30,6,18,10,7,15],
            backgroundColor:[
                'rgb(255, 0, 55)',
                'rgb(5, 151, 249)',
                'rgb(255, 183, 0)',
                'rgb(0, 255, 255)',
                'rgb(85, 0, 255)',
                'rgb(255, 128, 0)'
            ],
            borderColor:[
                'rgb(247, 106, 136)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
 });

 const ctx5=document.getElementById('barChart5').getContext('2d');
const barchart5=new Chart(ctx5,{
    type:'bar',
    data:{
       
        labels:['Dhaka District','Kishoreganj','Gazipur','Narsingdi','Narayanganj','Madaripur','Munshiganj','Manikganj','Rajbari','Tangail'],
        datasets:[{
            label:'# Raping Rate',
            data:[40,3,10,7,12,4,5,4,3,5],
            backgroundColor:[
                'rgb(255, 0, 55)',
                'rgb(5, 151, 249)',
                'rgb(255, 183, 0)',
                'rgb(0, 255, 255)',
                'rgb(85, 0, 255)',
                'rgb(255, 128, 0)'
            ],
            borderColor:[
                'rgb(247, 106, 136)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
 });

 const ctx6=document.getElementById('barChart6').getContext('2d');
const barchart6=new Chart(ctx6,{
    type:'bar',
    data:{
      
        labels:['Rangpur District','Gaibandha','Kurigram','Thakurgaon','Dinajpur','Nilphamari'],
        datasets:[{
            label:'# Raping Rate',
            data:[27,6,18,10,12,5],
            backgroundColor:[
                'rgb(255, 0, 55)',
                'rgb(5, 151, 249)',
                'rgb(255, 183, 0)',
                'rgb(0, 255, 255)',
                'rgb(85, 0, 255)',
                'argba(255, 128, 0, 0.2)'
            ],
            borderColor:[
                'rgb(247, 106, 136)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
 });

 const ctx7=document.getElementById('barChart7').getContext('2d');
const barchart7=new Chart(ctx7,{
    type:'bar',
    data:{
        
        labels:['Mymensingh District','Sherpur','Jamalpur','Netrokona'],
        datasets:[{
            label:'# Raping Rate',
            data:[26,8,15,12],
            backgroundColor:[
                'rgb(255, 0, 55)',
                'rgb(13, 0, 255)',
                'rgb(255, 183, 0)',
                'rgba(0, 255, 255, 0.98)',
                'rgb(85, 0, 255)',
                'rgb(255, 128, 0)'
            ],
            borderColor:[
                'rgb(247, 106, 136)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
 });

 const ctx8=document.getElementById('barChart8').getContext('2d');
const barchart8=new Chart(ctx8,{
    type:'bar',
    data:{
        
        labels:['Dhaka','Gopalgonj','Kishoregonj','Gajipur','Mirpur','.....'],
        datasets:[{
            label:'# Raping Rate',
            data:[19,12,3,4,10,3],
            backgroundColor:[
                'rgb(255, 0, 55)',
                'rgb(5, 151, 249)',
                'rgba(255, 183, 0, 0.99)',
                'rgb(0, 255, 255)',
                'rgb(85, 0, 255)',
                'rgb(255, 128, 0)'
            ],
            borderColor:[
                'rgb(247, 106, 136)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]
    },
    options:{
        scales:{
            y:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
 });



