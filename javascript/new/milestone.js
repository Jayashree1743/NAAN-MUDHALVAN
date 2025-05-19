document.getElementById('saveBtn').addEventListener('click',() =>{
    const payData = {
        name: document.getElementById('name').value,
        eid: document.getElementById('eid').value,
        phone: document.getElementById('phone').value,
    };
    localStorage.setItem('payData',JSON.stringify(payData));
    alert('PAY DATA saved successfully')
})
document.getElementById('printBtn').addEventListener('click',() => {
    const payData = JSON.parse(localStorage.getItem('payData'));
    if(payData)
    {
        const print = window.open('','_blank');
        print.document.write('name $(payData.name)');
        print.document.write('eid $(payData.eid)');
        print.document.write('phone $(payData.phone)');
    }
    
    
    
    
})